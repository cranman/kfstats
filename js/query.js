getStatsFeed = function(name) {
	$('#stats').html('<h2>Stats</h2>');
	$('#errors').text('');
	var query = 'query.php?name=' + name + '&type=statsfeed';
	var jqxhr = $.getJSON(query, function(data) {
		$('.perk').show();

		$.each(data, function(key, val) {
			$('#stats').append('<div>'+key+': '+val+'</div>');
		});
		calcPerkLevels(data);
	}).error(function(jqXHR, textStatus, errorThrown) {
		$('#errors').text(jqXHR.responseText);
	});

	return false;
}

getAchievements = function(name) {
        $('#achievements').html('<h2>Achievements</h2>');
        $('#errors').text('');

	var maps = ['bioticslab', 'westlondon', 'departed', 'icecave', 'manor', 'farm', 'offices', 'foundry', 'asylum', 'wyre', 'biohazard', 'crash', 'filthscross', 'hospitalhorrors', 'icebreaker', 'mountainpass', 'suburbia', 'waterworks', 'santasevillair', 'sideshow', 'hellride'];
	var difficulties = ['normal', 'hard', 'suicidal', 'hell'];

	// Generates the map and difficulty name for each map achievement
	var achievements = [];
	maps.forEach(function(map) { difficulties.forEach(function(diff) { achievements.push('win' + map + diff); }); });

	// The aperture achievements are in a different form
	var aperture = ['achievement133', 'achievement134', 'achievement135', 'achievement136'];
	achievements = achievements.concat(aperture);

        var query = 'query.php?name=' + name + '&type=achievements';
        var jqxhr = $.getJSON(query, function(data) {
                $.each(data, function(key, val) {
			if (isMapAchievement(achievements, key) == -1) {
	                        $('#achievements').append('<div id='+key+' class="achievement"></div>');
			} else {
				$('#maps').append('<div id='+key+' class="achievement"></div>');
			}

                        $('#'+key).append('<img src="'+val[1]+'">');
                        $('#'+key).append('<div class="achievementname">'+val[0]);
                        $('#'+key).append('<div class="achievementtext">'+val[2]+'<br>Unlocked at: '+ (new Date(val[3] * 1000)).toDateString()+'</div>');
                });
        }).error(function(jqXHR, textStatus, errorThrown) {
                $('#errors').text(jqXHR.responseText);
        });

        return false;
}

isMapAchievement = function(achievements, name) {
	return achievements.indexOf(name);
}
