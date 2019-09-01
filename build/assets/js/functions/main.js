function Route(el, collback){
    if(el){
        collback(el);
    }
}

(function(){

    //= ./modal-window.js

    //= ./media.js

    //= ./scroll-window.js

    //= ./media.js

    let modalsWindow = [];

    Route(
        document.getElementsByClassName("btn-consultation")[0],
        function(el){
            modalsWindow.push({"event" : "btn-consultation", "modal" : "modal-consultation"});
        }
    )
    
    Route(
        document.getElementsByClassName("video-block-img")[0],
        function(el){
            modalsWindow.push({"event" : "video-block-img", "modal" : "modal-video"});
        }
    )

    modalWindow(modalsWindow);

    MediaNav();

    window.addEventListener("scroll", ScrollWindow);
}());