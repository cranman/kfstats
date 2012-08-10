<html>
	<head>
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
					<div id="medic" class="perk">
						<h3>Medic</h3>
						<span id="medic-level"></span>
						<span id="medic-progress"></span>
						<div style="width:400px">
							<div id="medic-bar" class="perkprogress"></div>
						</div>
					</div>
                                        <div id="support" class="perk">
						<h3>Support Specialist</h3>
                                                <span id="support-level"></span>
                                                <span id="support-progress"></span>
                                                <div style="width:400px">
                                                        <div id="support-bar" class="perkprogress"></div>
                                                </div>

					</div>
                                        <div id="sharp" class="perk">
						<h3>Sharpshooter</h3>
                                                <span id="sharp-level"></span>
                                                <span id="sharp-progress"></span>
                                                <div style="width:400px">
                                                        <div id="sharp-bar" class="perkprogress"></div>
                                                </div>

					</div>
                                        <div id="commando" class="perk">
						<h3>Commando</h3>
                                                <span id="commando-level"></span>
                                                <span id="commando-progress"></span>

                                                <div style="width:400px">
                                                        <div id="commando-bar" class="perkprogress"></div>
                                                </div>

					</div>
                                        <div id="berzerker" class="perk">
						<h3>Berzerker</h3>
                                                <span id="berzerker-level"></span>
                                                <span id="berzerker-progress"></span>

                                                <div style="width:400px">
                                                        <div id="berzerker-bar" class="perkprogress"></div>
                                                </div>

					</div>
                                        <div id="firebug" class="perk">
						<h3>Firebug</h3>
                                                <span id="firebug-level"></span>
                                                <span id="firebug-progress"></span>

                                                <div style="width:400px">
                                                        <div id="firebug-bar" class="perkprogress"></div>
                                                </div>

					</div>
                                        <div id="demo" class="perk">
						<h3>Demolitions</h3>
                                                <span id="demo-level"></span>
                                                <span id="demo-progress"></span>

                                                <div style="width:400px">
                                                        <div id="demo-bar" class="perkprogress"></div>
                                                </div>

					</div>
				</div>
				<div id="stats">
					<h2>Stats</h2>
				</div>
				<div id="achievements">
					<h2>Achievements</h2>
				</div>
			</div>
				<div id="clearfooter"></div>
		</div>
			<div id="footer">
				<span>kfstats by cranman</span>
			</div>
	</body>
</html>
