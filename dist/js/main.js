
// const MainImg =  document.getElementById("MainImg");
// const Smallimg = document.getElementsByClassName("small_img");
const pro_img = document.getElementsByClassName("pro_img");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bar = $('#bar');
const nav_menu = $('.header_nav_menu');
const close_menu = $('#close-menu');
document.addEventListener('DOMContentLoaded', function() {
    const MainImg = document.getElementById("MainImg");
    const Smallimg = document.getElementsByClassName("small_img");

    for (let i = 0; i < Smallimg.length; i++) {
        Smallimg[i].onclick = function() {
            MainImg.src = Smallimg[i].src;
        };
    }
});

bar.onclick = function(){
    nav_menu.classList.add('active');   
}

close_menu.onclick = function(){
    nav_menu.classList.remove('active');
}
const tabs = $$('.tab_btn');
const product_box = $$('.produces_box');








     




//const $ = document.querySelector.bind(document);
//const $$ = document.querySelectorAll.bind(document);

const tab_mota = $$('.mo_ta');
const details_content = $$('.details_content');
const tab_star = $$('.star_star');

tab_mota.forEach((tab,index) => {
    const details = details_content[index];
    tab.onclick = function(){
        $('.mo_ta.active_details').classList.remove('active_details');
        $('.details_content.active_details').classList.remove('active_details');
        this.classList.add('active_details');
    details.classList.add('active_details');
        
    }
});
 
tab_star.forEach((tab,index) => {
     tab.onclick = function(){
       
       $('.star_star.active_star').classList.remove('active_star');
        this.classList.add('active_star');
        console.log(this);
     }

} );
// reponsive

