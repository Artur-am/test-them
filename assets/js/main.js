(function(){

    function modalWindow(items){
    
        function CloseModal(event){
            document.body.classList.remove("modal");
            let removeClass = document.querySelector(".modal-item.modal-active");
            if(removeClass){
                removeClass.classList.remove("modal-active");
            }
        }
    
        function OpenModal(className){
            document.body.classList.add("modal");
            document.getElementsByClassName(className)[0].classList.add("modal-active");
        }
    
        let el = null;
        for(let item of items){
            el = document.getElementsByClassName(item.event)[0];
            if(el){
                el.addEventListener("click", function(event){
                    OpenModal(item.modal);
                });
            }
        }
    
        document.getElementsByClassName("modal-close")[0].addEventListener("click", CloseModal);
    
    }

    function MediaNav(){
        let header = document.querySelector("header.header");
    
        let resize = function(event){
    
            if(header.classList.contains("nav-active")){
                header.classList.remove("nav-active");
            }
    
        }
    
        let clickedNav = function(event){
            header.classList.toggle("nav-active");
        }
    
        resize(null);
    
        document.getElementsByClassName("mob-menu")[0].addEventListener("click", clickedNav);
        window.addEventListener("resize", resize, false);
    }

    function ScrollWindow(event){
        let className = "f-nav";
        let header = document.querySelector("header.header");
    
        if(
            ( document.body.scrollTop  > header.clientHeight ) ||
            ( document.documentElement.scrollTop > header.clientHeight )
        ){
            header.classList.add(className);
            header.classList.remove("wrapper");
        }else{
            if(header.classList.contains(className)){
                header.classList.remove(className);
                header.classList.add("wrapper");
            }
        }
    }

    function MediaNav(){
        let header = document.querySelector("header.header");
    
        let resize = function(event){
    
            if(header.classList.contains("nav-active")){
                header.classList.remove("nav-active");
            }
    
        }
    
        let clickedNav = function(event){
            header.classList.toggle("nav-active");
        }
    
        resize(null);
    
        document.getElementsByClassName("mob-menu")[0].addEventListener("click", clickedNav);
        window.addEventListener("resize", resize, false);
    }

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