// car browser javascript

var recordNum = 0;

//-----------------------------------------------
function prev() {
	if (recordNum > 1)
		fetch(--recordNum);
}

//-----------------------------------------------
function next() {
	if (recordNum < 15)
		fetch(++recordNum);
}

//-----------------------------------------------
function fetch(rec) {
  var xhr = new XMLHttpRequest;

	xhr.onreadystatechange = function() {
			try {
					if (xhr.readyState === 4 && xhr.status === 200) {
							var car = document.getElementById('car');
							car.innerHTML = xhr.responseText;
					}
			} catch(e) {
				console.error('Server signalled a problem: ' + e.description);
			}
	}
	xhr.open('GET','lookup.php?record='+rec);
	xhr.send();
