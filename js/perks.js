calcPerkLevels = function(data) {
	medic(data.damagehealed);
//	support(data.weldingpoints, data.shotgundamage);
	sharp(data.headshotkills);
//	commando(data.stalkerkills, data.bullpupdamage);
	damageperk("berzerker", data.meleedamage);
	damageperk("firebug", data.flamethrowerdamage);
	damageperk("demo", data.explosivesdamage);
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

sharp = function(headshots) {
	var val;
	var level;
	var progress;

	if (headshots < 30) {
		val = headshots / 0.3;
		level = 0;
		progress = 30;
	} else if (headshots < 100) {
                val = (headshots - 30) / 0.7;
                level = 1;
                progress = 100;
	} else if (headshots < 700) {
                val = (headshots - 100) / 6;
                level = 2;
                progress = 700;
	} else if (headshots < 2500) {
                val = (headshots - 700) / 18;
                level = 3;
                progress = 2500;
	} else if (headshots < 5500) {
                val = (headshots - 2500) / 30;
                level = 4;
                progress = 5500;
	} else if (headshots < 8500) {
                val = (headshots - 5500) / 30;
                level = 5;
                progress = 8500;
	} else {
                val = Math.min(((headshots - 8500) / 85), 100);
                level = 6;
                progress = 17000;
	}

        $('#sharp-bar').progressbar({
                value: val
        });

        $('#sharp-level').html('<h4>Level: ' + level + '</h4>');
        $('#sharp-progress').html('<h4>Progress: ' + headshots + ' / ' + progress +' Headshots</h4>');
}

damageperk = function(perk, damage) {
	var val;
	var level;
	var progress;

	if (damage < 25000) {
                val = damage / 250;
                level = 0;
                progress = 25000;
	} else if (damage < 100000) {
                val = (damage - 25000) / 750;
                level = 1;
                progress = 100000;
	} else if (damage < 500000) {
                val = (damage - 100000) / 4000;
                level = 2;
                progress = 500000;
	} else if (damage < 1500000) {
                val = (damage - 500000) / 10000;
                level = 3;
                progress = 1500000;
	} else if (damage < 3500000) {
                val = (damage - 1500000) / 20000;
                level = 4;
                progress = 3500000;
	} else if (damage < 5500000) {
                val = (damage - 3500000) / 20000;
                level = 5;
                progress = 5500000;
	} else {
                val = Math.min((damage - 5500000) / 55000, 100);
                level = 6;
                progress = 11000000;
	}

        $('#'+perk+'-bar').progressbar({
                value: val
        });

        $('#'+perk+'-level').html('<h4>Level: ' + level + '</h4>');
        $('#'+perk+'-progress').html('<h4>Progress: ' + damage + ' / ' + progress +' Damage Points Required</h4>');
}
