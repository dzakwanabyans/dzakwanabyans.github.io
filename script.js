// window.onscroll=()=>{
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
// }
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");


function show(pr) {
    pr.style.display = '';
}

function noShow(pr) {
    pr.style.display = 'none';
}

noShow(about);
noShow(contact);

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
        aboutClick.classList.remove("active");
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
        [portofolioClick.innerHTML = "Soon"]
    })
})


if (window.innerWidth < 576) {
    noShow(menu);
}


let icon = document.querySelector("#menu-icon");
    icon.addEventListener("click", function () {
        if(menu.style.display === 'none'){
            show(menu);
        }
        else{
            noShow(menu);
        }
        icon.classList.toggle("bx-menu");
        icon.classList.toggle("bx-x-circle");
    })
