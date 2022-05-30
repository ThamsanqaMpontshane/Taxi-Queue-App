function TaxiQueue(passenger,taxi) {
	var passengerQueue = [];
	var taxiQueue = [];
	var passengerCount = passenger || 0;
	var taxiCount = taxi || 0;

	function joinQueue() {
		passengerCount++;
		passengerQueue.push(passengerCount);
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

	function localStorage() {
		localStorage.setItem('passengerCount', passengerCount);
		localStorage.setItem('taxiCount', taxiCount);
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		localStorage
	}
}