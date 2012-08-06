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

getAchievements = function(name) {
        $('#achievements').html('<h2>Achievements</h2>');
        $('#errors').text('');
        var query = 'query.php?name=' + name + '&type=achievements';
        var jqxhr = $.getJSON(query, function(data) {
                $.each(data, function(key, val) {
                        $('#achievements').append('<div id='+key+'></div>');

			$('#'+key).append('<img src="'+val[1]+'">');
			$('#'+key).append(val[0]+': '+val[2]+'Unlocked at: '+ (new Date(val[3] * 1000)).toDateString());
                });
        }).error(function(jqXHR, textStatus, errorThrown) {
                console.log("hi");
                $('#errors').text(jqXHR.responseText);
//              console.log("error " + textStatus);
//              console.log("incoming Text " + jqXHR.responseText);
        });

        return false;
}
