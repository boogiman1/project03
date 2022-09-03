$(function(){
    var slideShow=$('.box')
    var j=0
    slideShow.eq(0).addClass('current')
    setInterval(function(){
        slideShow.eq(j % slideShow.length).removeClass('current')
        slideShow.eq((j+1) % slideShow.length).addClass('current')
        j++
    },8000)
})