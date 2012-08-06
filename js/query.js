 getStatsFeed = function(name) {
	$('#stats').html('<h2>Stats</h2>');
	$('#errors').text('');
	var query = 'query.php?name=' + name + '&type=statsfeed';
	var jqxhr = $.getJSON(query, function(data) {
		$.each(data, function(key, val) {
			$('#stats').append('<div>'+key+': '+val+'</div>');
		});
		calcPerkLevels(data);
	}).error(function(jqXHR, textStatus, errorThrown) {
		console.log("hi");
		$('#errors').text(jqXHR.responseText);
//		console.log("error " + textStatus);
//		console.log("incoming Text " + jqXHR.responseText);
	});

	return false;
}

