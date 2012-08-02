<html>
	<head>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

		<script type="text/javascript">
			getStats = function(name) {
				$('#stats').html('');
				var query = 'query.php?name=' + name;
				var jqxhr = $.getJSON(query, function(data) {
					$.each(data, function(key, val) {
						$('#stats').append('<div><div>'+key+'</div><div>'+val+'</div></div>');
					});
				});
				return false;
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
				<div id="stats"></div>
			</div>
			<div id="footer"></div>
		</div>

	</body>
</html>
