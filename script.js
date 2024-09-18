

let body = document.querySelector('body');
let toggle= document.querySelector('.toggle')
let menuList = document.querySelector('.menu-list')

toggle.addEventListener('click', ()=>{
     body.classList.toggle('active')
})

document.addEventListener('scroll', ()=>{
    body.classList.remove('active')
})
document.addEventListener('click', (e)=>{

    if(!toggle.contains(e.target) && !menuList.contains(e.target)){
body.classList.remove('active')  
    }
    
})



