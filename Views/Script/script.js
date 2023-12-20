//------NAVEGAÇAO SIDEBAR------//
var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var content = document.getElementById('content');
var show_sidebar = false;

function toggle_sidebar(){ 
    show_sidebar = !show_sidebar; //esta função faz o show_sidebar inverter de true para false (e virse versa) toda vez que clicar.
    if(show_sidebar)
    {
        navigation.style.marginLeft = '-10vw';
        navigation.style.animationName = 'show-sidebar';
        content.style.filter = 'blur(2px)'
    }
    else {
        navigation.style.marginLeft = '-100vw';
        navigation.style.animationName = '';
        content.style.filter = ''
    }
}

function closed_sidebar(){
    if(show_sidebar){
        toggle_sidebar();
    }
}

window.addEventListener('resize', function(event){//esta funçao verifica a proporçao da tela.
    if(window.innerWidth > 768 && show_sidebar)
    {
        toggle_sidebar();
    }
})
