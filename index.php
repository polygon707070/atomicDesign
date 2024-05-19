<html>
	<head>

	<meta charset="utf-8">
	<title>romanesco</title>
			<style type="text/css">
	p{	font-family: "Lucida Console", Monaco, monospace;
		font-size: 10pt;
		font-color: #000;
		font-style: normal;
		margin: 0px 20px 10px;	
	}
	h1 {	
		font-family: "Lucida Console", Monaco, monospace;
		font-size: 10pt;
		font-color: #000;
		font-style: normal;
	}
	a:link {
	text-decoration: none;
	font-size: 10pt;
	color: #000;
	}
	a:visited {
	text-decoration: none;
	color: #000;
	}

	a:hover, a:active {
	text-decoration: none;
	}

}
	</style>

	<script type="text/javascript" src="assets/js/jquery.js"></script>
	<script type="text/javascript" src="assets/js/romanesco.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/css/screen.css">
</head>

<body>
		<h1>
		<span style="font-weight:normal">
		<A HREF="http://ben-riollet.com">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
	</h1>
		<p>Romanesco</p>
	<p>
	<div "container-fluid">
		<div class="col-sm-9">
			<canvas id="mainCanvas" width="800" height="600" margin-right="50%"></canvas>
			<img id="previewCursor" >
		</div>
		<div class="col-sm-3">

			<div id="saveButton" onclick="saveImage()"> Enregistrer image </div>

			<h3>Changer la taille</h3>
			<form>
				<input type="number" data-type="range" name="infoSize" id="infoSize" min="1" max="2000" onchange="updateBrush()" value="64">
			</form>

			<h3>Sélectionne une brosse</h3>
			<div id="brushs">
				<?php
					foreach (glob("content/brush/*.*") as $id => $brush) {
						echo '<img width="32" id="selectImg'.$id.'" src="'.$brush.'">';
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>
