import {Meteor} from 'meteor/meteor';
import {SubsManager} from 'meteor/meteorhacks:subs-manager';

subsManager = new SubsManager();

// pagination helper
elementIsVisible = (el) => {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
};

Meteor.startup(()=>{
    Session.set('requestedIds', []);
    Session.set('requestedUsernames', []);

    /*
    if(screen.width < 790 ){
        $(window).scroll(function(){
            $('body').bind('touchmove', false);
            console.log("Disabled");
            setTimeout(function(){
                $('body').unbind('touchmove');
                console.log("Enabled");
            }, 1000);
        });
    }

    */
});
