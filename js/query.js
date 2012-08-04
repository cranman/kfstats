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
