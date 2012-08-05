<?php

	if(isset($_GET['name'])) {
		$name = $_GET['name'];

		$id = processName($name);

		$stats = getKFStatsfeed($id);

		generateJSON($stats);
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

	function generateJSON($stats) {
		header('content-type: application/json');

		$json = json_encode($stats);

		echo($json);
	}

