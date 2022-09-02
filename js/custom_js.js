document.addEventListener('DOMContentLoaded',function(){
    var AT = document.querySelectorAll('.nav_link .nav_link::after')
        AT.addEventListener('mouseenter',function(){
            AT.classList.add('on')
    })
})