//Passengers
var passengerCount = document.getElementsByClassName('passenger_queue_count')[0];
var joinqueue = document.getElementsByClassName('join_queue')[0];
var leavequeue = document.getElementsByClassName('leave_queue')[0];

//Taxi
var taxiCount = document.getElementsByClassName('taxi_queue_count')[0];
var taxiJoin = document.getElementsByClassName('join_taxi_queue')[0];

//Taxi Depart
var taxiDepart = document.getElementsByClassName('depart')[0];
const taxiQueue = TaxiQueue();

// DOM events
joinqueue.addEventListener('click', function() {
    taxiQueue.joinQueue();
    passengerCount.innerHTML = taxiQueue.queueLength();
    //local storage
    localStorage.setItem('passengerCount', passengerCount.innerHTML);
}
);


leavequeue.addEventListener('click', function() {
    taxiQueue.leaveQueue();
    passengerCount.innerHTML = taxiQueue.queueLength();
    //local storage
    localStorage.setItem('passengerCount', passengerCount.innerHTML);
}
);


taxiJoin.addEventListener('click', function() {
    taxiQueue.joinTaxiQueue();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
    //local storage
    localStorage.setItem('taxiCount', taxiCount.innerHTML);
}
);


taxiDepart.addEventListener('click', function() {
    taxiQueue.taxiDepart();
    taxiCount.innerHTML = taxiQueue.taxiQueueLength();
    passengerCount.innerHTML = taxiQueue.queueLength();
    //local storage depart
    localStorage.setItem('taxiCount', taxiCount.innerHTML);
    localStorage.setItem('passengerCount', passengerCount.innerHTML);
}
);
    passengerCount.innerHTML = localStorage.getItem('passengerCount');
    taxiCount.innerHTML = localStorage.getItem('taxiCount');


