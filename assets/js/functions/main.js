(function(){

    //= ./modal-window.js

    //= ./media.js

    //= ./scroll-window.js

    //= ./media.js

    let modalsWindow = [];

    (function( el ){
        if( !(el instanceof HTMLElement) ){ /* ... */ return null;}

        modalsWindow.push({"event" : "btn-consultation", "modal" : "modal-consultation"});

    }( document.getElementsByClassName("btn-consultation")[0] ));

    
    (function( el ){
        if( !(el instanceof HTMLElement) ){ /* ... */ return null;}

        modalsWindow.push({"event" : "video-block-img", "modal" : "modal-video"});

    }( document.getElementsByClassName("video-block-img")[0] ));

    modalWindow(modalsWindow);

    MediaNav();

    window.addEventListener("scroll", ScrollWindow);
}());