<html>
	<head>
		<link type="text/css" href="css/smoothness/jquery-ui-1.8.22.custom.css" rel="stylesheet" />

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui-1.8.22.custom.min.js"></script>

		<script type="text/javascript">
			getStats = function(name) {
				$('#stats').html('<h2>Stats</h2>');
				var query = 'query.php?name=' + name;
				var jqxhr = $.getJSON(query, function(data) {
					$.each(data, function(key, val) {
						$('#stats').append('<div>'+key+': '+val+'</div>');
					});
					calcPerkLevels(data);
				});
				return false;
			}

			calcPerkLevels = function(data) {
				medic(data.damagehealed);
			}

			medic = function(heal) {
				var val;

				if (heal < 200) {
					val = heal / 2;
				} else if (heal < 750) {
					val = heal / 7.5;
				} else if (heal < 4000) {
                                        val = heal / 40;
				} else if (heal < 12000) {
                                        val = heal / 120;
				} else if (heal < 25000) {
                                        val = heal / 250;
				} else {
                                        val = Math.min(heal / 1000, 100);
				}

				$('#medic-bar').progressbar({
					value: val
				});
			}

			$(document).ready(function() {
				$('#searchform').submit(function() {
					// This should go and query the php
					getStats($('#searchname').val());
					return false;
				});
			});
		</script>

	</head>
	<body>
		<div id="container">
			<div id="header">
				<div id="search">
					<form id="searchform">
						<input id="searchname" type="text" />
						<input type="submit" value="Search" />
					</form>
				</div>
				<div id="person">
				</div>
			</div>
			<div id="page">
				<div id="perks">
					<h2>Perks</h2>
					<div id="medic">
						<h3>Medic</h3>
						<div id="medic-bar"></div>
					</div>
                                        <div id="support">
						<h3>Support Specialist</h3>
					</div>
                                        <div id="sharp">
						<h3>Sharpshooter</h3>
					</div>
                                        <div id="commando">
						<h3>Commando</h3>
					</div>
                                        <div id="berzerker">
						<h3>Berzerker</h3>
					</div>
                                        <div id="firebug">
						<h3>Firebug</h3>
					</div>
                                        <div id="demo">
						<h3>Demolitions</h3>
					</div>
				</div>
				<div id="stats">
					<h2>Stats</h2>
				</div>
			</div>
			<div id="footer"></div>
		</div>

	</body>
</html>
