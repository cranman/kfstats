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
