<!DOCTYPE html>
<html lang="en">
	<head>
		<title>kfstats</title>

		<meta charset="UTF-8" />

		<link type="text/css" href="css/smoothness/jquery-ui-1.8.22.custom.css" rel="stylesheet" />
		<link type="text/css" href="css/kfstats.css" rel="stylesheet" />

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui-1.8.22.custom.min.js"></script>

		<script type="text/javascript" src="js/query.js"></script>
		<script type="text/javascript" src="js/perks.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$('.perk').hide();

				$('#searchform').submit(function() {
					// This should go and query the php
					getStatsFeed($('#searchname').val());
					getAchievements($('#searchname').val());
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
				<div id="errors">
				</div>
			</div>
			<div id="page">
				<div id="perks" class="content">
					<h2>Perks</h2>

					<?php
						$perks = array('medic' => 'Medic', 'support' => 'Support Specialist', 'sharp' => 'Sharpshooter', 'commando' => 'Commando', 'berzerker' => 'Berzerker', 'firebug' => 'Firebug', 'demo' => 'Demolitions');

						foreach ($perks as $p => $n) {
					?>

					<div id="<?php echo $p; ?>" class="perk">
						<h3><?php echo $n; ?></h3>
						<span id="<?php echo $p; ?>-level"></span>
						<span id="<?php echo $p; ?>-progress"></span>
						<div style="width:400px">
							<div id="<?php echo $p; ?>-bar" class="perkprogress"></div>
						</div>
					</div>

					<?php
						}
					?>

				</div>
				<div id="stats">
					<h2>Stats</h2>
				</div>
				<div id="achievements">
					<h2>Achievements</h2>
				</div>
			</div>
		</div>
		<footer>kfstats by cranman</footer>
	</body>
</html>
