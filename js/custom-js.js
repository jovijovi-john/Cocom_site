function exibeMenuMobile(){
    var menu = document.getElementById("menu-mobile");
    if(menu.style.display == 'none'){
        menu.style.display = "flex";
        menu.className = 'anim-menu-mobile-open';
        document.getElementById("nav-menu-mobile").className = 'nav-menu anim-menu-mobile-open';
    }else{
        menu.className = 'anim-menu-mobile-close';
        document.getElementById("nav-menu-mobile").className = 'nav-menu anim-menu-mobile-close';
        setTimeout(function (){
            menu.style.display = "none";
        }, 0075);
    }
};