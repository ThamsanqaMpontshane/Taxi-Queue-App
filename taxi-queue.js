function TaxiQueue() {
	var passengerQueue = [];
	var taxiQueue = [];
	var passengerCount = 0;
	var taxiCount = 0;
	// var taxiLeave = 0;
	// var taxiJoin = 0;

	function joinQueue() {
		passengerCount++;
		passengerQueue.push(passengerCount);
		// passengerCount.innerHTML = passengerQueue.length;
	}

	function leaveQueue() {
		passengerCount--;
		passengerQueue.shift();
	}

    function queueLength() {
		return passengerQueue.length;
	}

	function joinTaxiQueue() {
		taxiCount++;
		taxiQueue.push(taxiCount);
	}

	function taxiQueueLength() {
		return taxiQueue.length;
	}

	function taxiDepart() {
		if (passengerQueue.length >= 12 && taxiQueue.length >= 1) {
			taxiQueue.shift();
			passengerQueue.splice(0, 12);
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}