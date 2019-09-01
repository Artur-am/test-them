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