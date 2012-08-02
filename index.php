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
				var level;
				var progress;

				if (heal < 200) {
					val = heal / 2;
					level = 0;
					progress = 200;
				} else if (heal < 750) {
					val = (heal - 200) / 5.5;
					level = 1;
                                        progress = 750;
				} else if (heal < 4000) {
                                        val = (heal - 750) / 32.5;
					level = 2;
                                        progress = 4000;
				} else if (heal < 12000) {
                                        val = (heal - 4000) / 80;
					level = 3;
                                        progress = 12000;
				} else if (heal < 25000) {
                                        val = (heal - 12000) / 130;
					level = 4;
                                        progress = 25000;
				} else if (heal < 100000) {
					val = (heal - 25000) / 750;
					level = 5;
                                        progress = 100000;
				} else {
                                        val = Math.min((heal - 100000)/ 1000, 100);
					level = 6;
                                        progress = 200000;
				}

				$('#medic-bar').progressbar({
					value: val
				});

				$('#medic-level').html('<h4>Level: ' + level + '</h4>');
				$('#medic-progress').html('<h4>Progress: ' + heal + ' / ' + progress +' Health Healed</h4>');
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
						<span id="medic-level"></span>
						<span id="medic-progress"></span>
						<div style="width:400px">
							<div id="medic-bar"></div>
						</div>
					</div>
                                        <div id="support">
						<h3>Support Specialist</h3>
                                                <div style="width:400px">
                                                        <div id="support-bar"></div>
                                                </div>

					</div>
                                        <div id="sharp">
						<h3>Sharpshooter</h3>
                                                <div style="width:400px">
                                                        <div id="sharp-bar"></div>
                                                </div>

					</div>
                                        <div id="commando">
						<h3>Commando</h3>
                                                <div style="width:400px">
                                                        <div id="commando-bar"></div>
                                                </div>

					</div>
                                        <div id="berzerker">
						<h3>Berzerker</h3>
                                                <div style="width:400px">
                                                        <div id="berzerker-bar"></div>
                                                </div>

					</div>
                                        <div id="firebug">
						<h3>Firebug</h3>
                                                <div style="width:400px">
                                                        <div id="firebug-bar"></div>
                                                </div>

					</div>
                                        <div id="demo">
						<h3>Demolitions</h3>
                                                <div style="width:400px">
                                                        <div id="demo-bar"></div>
                                                </div>

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
