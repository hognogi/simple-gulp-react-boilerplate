var AppDispatcher  = require('../dispatcher/AppDispatcher');
var Events = require('events');


var connectTheStoreToTheDispatcher = function(_storeEventBus) {
	//Here we update the store depending on the performed action
	AppDispatcher.register(function(action){
		switch(action.actionType) {
			case 'updateCounter' : 

				//maybe do some server-side ops
				setTimeout(function(){
					_storeEventBus.emit('counterUpdatedOnTheServer');
				}, 100)

			break;
			default:
			//no op
		}
	});
};





//Here we hold/update all the data
var Store = function(){
	var counter = 0,
		_eventBus = new Events.EventEmitter();

	var _init = function(){
		connectTheStoreToTheDispatcher(_eventBus);
	};

	//get the data 
	this.getCounter = function() {
		return counter;
	}; 



	//"connections" from the server to the store
	_eventBus.on('counterUpdatedOnTheServer', function(){
		counter ++;
		_eventBus.emit('storeUpdated'); //signal all the listeners that the store was updated
	});




	//connections from the root components to the store
	this.addUpdateListener = function(callback) {
		_eventBus.on('storeUpdated', callback);
	}

	this.removeUpdateListener = function(callback) {
		_eventBus.removeListener('storeUpdated', callback);
	}

	_init();
};


module.exports = Store;
