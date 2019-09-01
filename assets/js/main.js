function Route(el, collback){
    if(el){
        collback(el);
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFJvdXRlKGVsLCBjb2xsYmFjayl7XHJcbiAgICBpZihlbCl7XHJcbiAgICAgICAgY29sbGJhY2soZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmdW5jdGlvbiBtb2RhbFdpbmRvdyhpdGVtcyl7XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBDbG9zZU1vZGFsKGV2ZW50KXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxcIik7XHJcbiAgICAgICAgICAgIGxldCByZW1vdmVDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaXRlbS5tb2RhbC1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGlmKHJlbW92ZUNsYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBPcGVuTW9kYWwoY2xhc3NOYW1lKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBlbCA9IG51bGw7XHJcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIGl0ZW1zKXtcclxuICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW0uZXZlbnQpWzBdO1xyXG4gICAgICAgICAgICBpZihlbCl7XHJcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIE9wZW5Nb2RhbChpdGVtLm1vZGFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNsb3NlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDbG9zZU1vZGFsKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1lZGlhTmF2KCl7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIuaGVhZGVyXCIpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWFjdGl2ZVwiKSl7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBjbGlja2VkTmF2ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmVzaXplKG51bGwpO1xyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vYi1tZW51XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkTmF2KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTY3JvbGxXaW5kb3coZXZlbnQpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcImYtbmF2XCI7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIuaGVhZGVyXCIpO1xyXG4gICAgY29uc29sZS5sb2coNDUpO1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAoIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICA+IGhlYWRlci5jbGllbnRIZWlnaHQgKSB8fFxyXG4gICAgICAgICAgICAoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBoZWFkZXIuY2xpZW50SGVpZ2h0IClcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIndyYXBwZXJcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1lZGlhTmF2KCl7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIuaGVhZGVyXCIpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWFjdGl2ZVwiKSl7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBjbGlja2VkTmF2ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmVzaXplKG51bGwpO1xyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vYi1tZW51XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkTmF2KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW9kYWxzV2luZG93ID0gW107XHJcblxyXG4gICAgUm91dGUoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jb25zdWx0YXRpb25cIilbMF0sXHJcbiAgICAgICAgZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgICBtb2RhbHNXaW5kb3cucHVzaCh7XCJldmVudFwiIDogXCJidG4tY29uc3VsdGF0aW9uXCIsIFwibW9kYWxcIiA6IFwibW9kYWwtY29uc3VsdGF0aW9uXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICBcclxuICAgIFJvdXRlKFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWRlby1ibG9jay1pbWdcIilbMF0sXHJcbiAgICAgICAgZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgICBtb2RhbHNXaW5kb3cucHVzaCh7XCJldmVudFwiIDogXCJ2aWRlby1ibG9jay1pbWdcIiwgXCJtb2RhbFwiIDogXCJtb2RhbC12aWRlb1wifSk7XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIG1vZGFsV2luZG93KG1vZGFsc1dpbmRvdyk7XHJcblxyXG4gICAgTWVkaWFOYXYoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBTY3JvbGxXaW5kb3cpO1xyXG59KCkpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
