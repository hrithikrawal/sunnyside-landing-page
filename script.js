const btn = document.getElementById('btn')
const overlay = document.getElementById('overlay')
const menu = document.querySelectorAll('.mobile-link')

btn.addEventListener('click', () => {
    if (overlay.classList.contains('hide')){
        overlay.classList.remove('hide') 
    }
    else{
        overlay.classList.add('hide')
    }

})

menu.forEach(function(element){
    element.addEventListener('click', ()=> {
        overlay.classList.add('hide')
    })
})

