let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay:1000,
    typeSpeed: 100,
    delay:5000,
    backSpeed:80,
    loop:true,
    backDelay:5000,
    
  });

  

function openMenu(){
    document.getElementById("rightMenu").style.width = "100%";
}
function closeMenu(){
    document.getElementById("rightMenu").style.width = "0";
}
function home(){
    document.getElementById("rightMenu").style.width = "0";

}
function about(){
    document.getElementById("rightMenu").style.width = "0";

}
function skill(){
    document.getElementById("rightMenu").style.width = "0";

}
function project(){
    document.getElementById("rightMenu").style.width = "0";

}
function contact(){
    document.getElementById("rightMenu").style.width = "0";

}



const backToTop = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {

        backToTop.classList.remove('hidden');
        backToTop.classList.add('block');
    } else {

        backToTop.classList.remove('block');
        backToTop.classList.add('hidden');
    }
})
