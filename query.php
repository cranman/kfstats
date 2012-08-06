<?php

	if(isset($_GET['name']) && isset($_GET['type'])) {
		$name = $_GET['name'];
		$type = $_GET['type'];

		$id = processName($name);

		switch ($type) {
			case 'statsfeed' :
				$stats = getKFStatsfeed($id);
				generateJSON($stats);
				break;
			case 'achievements' :
				$achievements = getKFAchievements($id);
				generateJSON($achievements);
				break;
		}
	}

	function processName($name) {
		if (preg_match('/[0-9]{17}/', $name)) {
			return 'profiles/'.$name;
		} else {
			return 'id/'.$name;
		}
	}

	function getKFStatsfeed($id) {
		$HEAD_URL = 'http://steamcommunity.com/';
		$TAIL_URL = '/statsfeed/1250';

		$url = $HEAD_URL.$id.$TAIL_URL;

		$xml = simplexml_load_file($url) or die ('Error loading XML data');

		if ($xml->xpath('error')) {
			die('Does not own game');
		} else {
			foreach($xml->stats->item as $item) {
				$stats[(string) $item->APIName] = (string) $item->value;
			}

		}

		return $stats;
	}

	function getKFAchievements($id) {
		$HEAD_URL = 'http://steamcommunity.com/';
		$TAIL_URL = '/stats/KillingFloor?tab=achievements&xml=1';

		$url = $HEAD_URL.$id.$TAIL_URL;

                $xml = simplexml_load_file($url) or die ('Error loading XML data');

                if ($xml->xpath('error')) {
                        die('Does not own game');
                } else {
                        foreach($xml->achievements->achievement as $item) {
                                $stats[(string) $item->apiname] = array((string) $item->name, (string) $item->iconClosed, (string) $item->description, (string) $item->unlockTimestamp);
                        }

                }

                return $stats;
	}

	function generateJSON($stats) {
		header('content-type: application/json');

		$json = json_encode($stats);

		echo($json);
	}

