// window.onscroll=()=>{
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
// }
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const findme = document.querySelector(".findme");
const logo = document.querySelector(".logo");


function show(pr) {
    pr.style.display = '';
}

function noShow(pr) {
    pr.style.display = 'none';
}

noShow(about);
noShow(contact);
noShow(findme);

const menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
    const homeClick = menu.querySelector("#home");
    const aboutClick = menu.querySelector("#about");
    const contactClick = menu.querySelector("#contact");
    const portofolioClick = menu.querySelector("#portofolio");


    homeClick.addEventListener("click", function () {
        noShow(about);
        noShow(contact);
        show(home);
        homeClick.classList.add("active");
        contactClick.classList.remove("active");
        aboutClick.classList.remove("active");
    })

    aboutClick.addEventListener("click", function () {
        show(about);
        noShow(contact);
        noShow(home);
        aboutClick.classList.add("active");
        homeClick.classList.remove("active");
        contactClick.classList.remove("active");
    })

    contactClick.addEventListener("click", function () {
        noShow(about);
        show(contact);
        noShow(home);
        contactClick.classList.add("active");
        homeClick.classList.remove("active");
        aboutClick.classList.remove("active");
    })


    portofolioClick.addEventListener("click", function () {
        portofolioClick.innerHTML = "Soon";
    })
})



let icon = document.querySelector("#menu-icon");
const me = document.querySelector(".me"); //findme button
const bx_x = document.querySelector(".findme .bx-x");


if (window.innerWidth < 576) {
    noShow(menu);


    icon.addEventListener("click", function () {
        if (menu.style.display === 'none') {
            icon.style.margin = "0 0 0 auto";
            show(menu);
            noShow(logo);
        }
        else {
            icon.style.margin = "";
            noShow(menu);
            show(logo);
        }
        icon.classList.toggle("bx-menu");
        icon.classList.toggle("bx-x-circle");
    })
    
    home.addEventListener("click", function () {
        if (menu.style.display === '') {
            icon.style.margin = "";
            noShow(menu);
            show(logo);
            icon.classList.toggle("bx-menu");
            icon.classList.toggle("bx-x-circle");
        }
    })
    
    
    me.addEventListener("click", function () {
        if (menu.style.display === '') {
            icon.style.margin = "";
            noShow(menu);
            show(logo);
            icon.classList.toggle("bx-menu");
            icon.classList.toggle("bx-x-circle");
        }
        else {
            show(findme);
            noShow(home);
        }
    })
    
    bx_x.addEventListener("click", function () {
        noShow(findme);
        show(home);
    })
    

}


const closeFindMe = document.querySelector(".findme .bx-x");
closeFindMe.addEventListener("click", function(){
    show(home);
    noShow(findme);
})



if(window.innerWidth > 575){
    noShow(findme);
    const btnFindMe = home.querySelector(".btn-box");
    me.addEventListener("click", function(){
        show(findme);
        noShow(home);
    })
}