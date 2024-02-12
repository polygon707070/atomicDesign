var c, ctx;
var mouse = {x:0, y:0};
var currImg;
var canDraw = false;
var size = 40;
var b = {src:"", diam: 0} // brush


$(document).ready(function(){
		init();
});

function saveImage(){


	// get data url from canvas
	var dataURL = c.toDataURL();


	// send it to php script
	$.ajax({ type: "POST", url: "save.php", data: { imgBase64: dataURL }})
		.done(function(imageName) {

			// generate id (count images)
			var htmlId = 'selectImg'+ $("#brushs img").length;

			// add image in brush list
		  $("#brushs").append('<img width="32" id="'+htmlId+'" src="content/brush/'+imageName+'">')

		  // add listenner
		  $('#'+htmlId).click(function(){
				b.src = $(this).attr("src");
				updateBrush();
			});

	});
}


function init(){

	// canvas setting
	c = document.getElementById("mainCanvas");
	ctx = c.getContext("2d");

	// get random brush
	b.src = $("#brushs img").eq(Math.floor(Math.random()*$("#brushs img").length)).attr("src");

	updateBrush();

	// add listenner
	$("#brushs img").click(function(){
		b.src = $(this).attr("src");
		updateBrush();
	});

	$( "#mainCanvas" )
		.mousemove(function( event ) {
			var x =  event.clientX-(b.diam*.50);
			var y =  event.clientY-(b.diam*.100);

			$("#previewCursor").css({ top: y+50+"px", left: x+"px"});
			if(canDraw) ctx.drawImage(stamp, x ,y, b.diam, b.diam);
		})
		$("body")
			.mousedown(function(){canDraw = true;})
			.mouseup(function(){canDraw = false;});
		;
}

function updateBrush(){

	b.diam  = parseInt( $("#infoSize").val() );

	stamp = new Image();
	stamp.src = b.src;

	stamp.onload=function(){ canDraw = false; }

  updatePointer();
}

function updatePointer(){
	$("#previewCursor").attr("src", b.src).css({ width: b.diam +"px", height: b.diam+"px"});
}

function clearBG(){
	ctx.beginPath();
  ctx.rect(0, 0, c.width, c.height);
}
