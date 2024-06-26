const icon_user = document.querySelector(".header_user");
const icon_close = document.querySelector(".close");

icon_user.addEventListener("click",function(){
        document.querySelector(".container_popup").style.display = "flex";
});

icon_close.addEventListener("click",function(){
    document.querySelector(".container_popup").style.display = "none";
});

