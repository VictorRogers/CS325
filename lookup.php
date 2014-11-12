<?php

	$carID = filter_input(INPUT_GET,'record',FILTER_VALIDATE_INT);

	$db = mysqli_connect("localhost","webuser","Ies3iequ","ev");
	if (mysqli_connect_errno())
			die("Unable to connect to database " . mysqli_connect_error());

	$car = mysqli_query($db,"SELECT name,productionYears,miles
		 											 FROM cars WHERE ID=$carID");
	if (!$car)
			die("Query Failed: " . mysqli_error($db));

	$row = mysqli_fetch_row($car);
	$name = $row[0];
	$prodYears = $row[1];
	$range = $row[2];

	echo "$name, $prodYears, $range";
?>
