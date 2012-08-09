calcPerkLevels = function(data) {
	medic(data.damagehealed);
	support(data.weldingpoints, data.shotgundamage);
	sharp(data.headshotkills);
	commando(data.stalkerkills, data.bullpupdamage);
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

        perkInfo('medic', val, level);

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

        perkInfo('sharp', val, level);

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

        perkInfo(perk, val, level);

        $('#'+perk+'-progress').html('<h4>Progress: ' + damage + ' / ' + progress +' Damage Points Required</h4>');
}

support = function(weldpoints, damage) {
	var val;
	var level;
	var weldprogress;
	var damageprogress;

	if (weldpoints < 2000 || damage < 25000) {
		val = Math.min((weldpoints/40),50) + Math.min((damage/500),50);
		level = 0;
		weldprogress = 2000;
		damageprogress = 25000;
	} else if (weldpoints < 7000 || damage < 100000) {
                val = Math.min(((weldpoints - 2000)/100),50) + Math.min(((damage - 25000)/1500),50);
                level = 1;
                weldprogress = 7000;
                damageprogress = 100000;
	} else if (weldpoints < 35000 || damage < 500000) {
                val = Math.min(((weldpoints - 7000)/560),50) + Math.min(((damage - 100000)/8000),50);
                level = 2;
                weldprogress = 35000;
                damageprogress = 500000;
	} else if (weldpoints < 120000 || damage < 1500000) {
                val = Math.min(((weldpoints - 35000)/1700),50) + Math.min(((damage - 500000)/20000),50);
                level = 3;
                weldprogress = 120000;
                damageprogress = 1500000;
	} else if (weldpoints < 250000 || damage < 3500000) {
                val = Math.min(((weldpoints - 120000)/2600),50) + Math.min(((damage - 1500000)/40000),50);
                level = 4;
                weldprogress = 250000;
                damageprogress = 3500000;
	} else if (weldpoints < 370000 || damage < 5500000) {
                val = Math.min(((weldpoints - 250000)/2400),50) + Math.min(((damage - 3500000)/40000),50);
                level = 5;
                weldprogress = 370000;
                damageprogress = 5500000;
	} else {
                val = Math.min(((weldpoints - 370000)/7400),50) + Math.min(((damage - 5500000)/110000),50);
                level = 6;
                weldprogress = 740000;
                damageprogress = 11000000;
	}

        perkInfo('support', val, level);

        $('#support-progress').html('<h4>Progress: ' + weldpoints + ' / ' + weldprogress +' Weld Points Required</h4><h4>Progress: ' + damage + ' / ' + damageprogress +' Damage Points Required</h4>');
}

commando = function(stalkers, damage) {
        var val;
        var level;
        var stalkerprogress;
        var damageprogress;

        if (stalkers < 30 || damage < 25000) {
                val = Math.min((stalkers/0.6),50) + Math.min((damage/500),50);
                level = 0;
                stalkerprogress = 30;
                damageprogress = 25000;
        } else if (stalkers < 100 || damage < 100000) {
                val = Math.min(((stalkers - 30)/1.4),50) + Math.min(((damage - 25000)/1500),50);
                level = 1;
                stalkerprogress = 100;
                damageprogress = 100000;
        } else if (stalkers < 350 || damage < 500000) {
                val = Math.min(((stalkers - 100)/5),50) + Math.min(((damage - 100000)/8000),50);
                level = 2;
                stalkerprogress = 350;
                damageprogress = 500000;
        } else if (stalkers < 1200 || damage < 1500000) {
                val = Math.min(((stalkers - 350)/17),50) + Math.min(((damage - 500000)/20000),50);
                level = 3;
                stalkerprogress = 1200;
                damageprogress = 1500000;
        } else if (stalkers < 2400 || damage < 3500000) {
                val = Math.min(((stalkers - 1200)/24),50) + Math.min(((damage - 1500000)/40000),50);
                level = 4;
                stalkerprogress = 2400;
                damageprogress = 3500000;
        } else if (stalkers < 3600 || damage < 5500000) {
                val = Math.min(((stalkers - 2400)/24),50) + Math.min(((damage - 3500000)/40000),50);
                level = 5;
                stalkerprogress = 3600;
                damageprogress = 5500000;
        } else {
                val = Math.min(((stalkers - 3600)/72),50) + Math.min(((damage - 5500000)/110000),50);
                level = 6;
                stalkerprogress = 7200;
                damageprogress = 11000000;
        }

	perkInfo('commando', val, level);

        $('#commando-progress').html('<h4>Progress: ' + stalkers + ' / ' + stalkerprogress +' Stalker Kills Required</h4><h4>Progress: ' + damage + ' / ' + damageprogress +' Damage Points Required</h4>');
}

perkInfo = function(perk, val, level) {
        $('#'+perk+'-bar').progressbar({
                value: val
        });

        $('#'+perk+'-level').html('<h4>Level: ' + level + '</h4>');

}
