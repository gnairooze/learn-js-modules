var stats = (function(){
    //cache DOM
    var $el = $('#statsModule');
    var $stats = $el.find('#stats');
    var template = $el.find('#stats-template').html();

    //subscribe to peopleChanged
    pubsub.on("peopleChanged", _render);
    
    function _render(peopleCount) {
       $stats.html(Mustache.render(template, {count: peopleCount}));
    }

    function destroy(){
        $el.remove();
        pubsub.off("peopleChanged", _render);
    }
    
    return {
        destroy: destroy
    };

})();
