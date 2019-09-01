function ScrollWindow(event){
    let className = "f-nav";
    let header = document.querySelector("header.header");
console.log(45);
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