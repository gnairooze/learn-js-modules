//events - a super-basic Javascript (publish subscribe) pattern

var pubsub = (function(){
    var events = {};

    function subscribe (eventName, fn) {
      events[eventName] = events[eventName] || [];
      events[eventName].push(fn);
    }
    
    function unsubscribe(eventName, fn) {
      if (events[eventName]) {
        for (var i = 0; i < events[eventName].length; i++) {
          if (events[eventName][i] === fn) {
            events[eventName].splice(i, 1);
            break;
          }
        };
      }
    }

    function trigger (eventName, data) {
      if (events[eventName]) {
        events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }

    return{
      on: subscribe,
      off: unsubscribe,
      emit: trigger
    }
  })();