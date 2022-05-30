// write your DOM code here.


// DOM element references
//Passengers
var passengerCount = document.getElementsByClassName('passenger_queue_count')[0];
var joinqueue = document.getElementsByClassName('join_queue')[0];
var leavequeue = document.getElementsByClassName('leave_queue')[0];
//Taxi
var taxiCount = document.getElementsByClassName('taxi_queue_count')[0];
var taxiJoin = document.getElementsByClassName('join_taxi_queue')[0];
//Taxi Depart
var taxiDepart = document.getElementsByClassName('depart')[0];
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
joinqueue.addEventListener('click', function() {
    taxiQueue.joinQueue();
    passengerCount.innerHTML = taxiQueue.queueLength();
}
);


leavequeue.addEventListener('click', function() {
    taxiQueue.leaveQueue();
    passengerCount.innerHTML = taxiQueue.queueLength();
}
);


taxiJoin.addEventListener('click', function() {
    taxiQueue.joinTaxiQueue();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
}
);


taxiDepart.addEventListener('click', function() {
    taxiQueue.taxiDepart();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
}
);


