// navbar Scroll
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if(!navbar){
        return;
    }

    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});


//Scroll up
const toTopButton = document.querySelector('#to-top');

if(toTopButton){
    toTopButton.addEventListener('click',()=>{

        let TopInterval = setInterval(()=>{
        
            let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

            if(ArrowTop.scrollTop > 0){
                ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
            }
            if(ArrowTop.scrollTop < 1){
                clearInterval(TopInterval)
            }
        },10)
    }, false);
}


function showscroll(){
    let TopButton = document.getElementById('to-top');
    if(!TopButton){
        return;
    }

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        TopButton.classList.add('show')
    }else{
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}

// navbar toggle

const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i');

if(menuBtn && navLinks && menuIcon){
    menuBtn.addEventListener('click',(e)=>{
        navLinks.classList.toggle('open')

        const isOpen = navLinks.classList.contains('open')
        menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
    })
}

document.querySelectorAll('.auth_form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Función en desarrollo 🚀");
    });
});
