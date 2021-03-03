const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const checkButton = document.getElementById('switch');
navToggle.addEventListener('click' , ()=>{
    document.body.classList.toggle('nav-open');
    document.body.style.overflowY == 'hidden'
    if(document.body.style.overflowY == 'hidden'){
        document.body.style.overflowY = 'visible'
    }else{
        document.body.style.overflowY = 'hidden';
    }
})
navLinks.forEach(link => {
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
        document.body.style.overflowY = 'visible'
    })
})
function chequearBoton(){
    let textosEn = document.getElementsByClassName('en')
    let textosEs = document.getElementsByClassName('es')
    if(checkButton.checked == true){
        for(let i = 0; i < textosEn.length; i++){
            textosEs[i].style.display = "none";
            textosEn[i].style.display = "inherit";
        }
        document.getElementById("ingles").style.color = "#00a1ff";
        document.getElementById("espaniol").style.color = "#333";
        document.getElementsByClassName('btn esp')[0].style.display = 'none'
        document.getElementsByClassName('btn eng')[0].style.display = 'inline-block'
        }
    else{
        for(let i = 0; i < textosEn.length; i++){
            textosEn[i].style.display = "none"
            textosEs[i].style.display = "inherit"
        }
        document.getElementById("ingles").style.color = "#333";
        document.getElementById("espaniol").style.color = "#00a1ff";
        document.getElementsByClassName('btn esp')[0].style.display = 'inline-block'
        document.getElementsByClassName('btn eng')[0].style.display = 'none'
    }
}