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