document.addEventListener('DOMContentLoaded',function(){
    // var AT = document.querySelectorAll('.nav_link .nav_link::after')
    //     AT.addEventListener('mouseenter',function(){
    //         AT.classList.add('on')
    // })


    // nav sticky
    var $header=document.querySelector('.nav')
    $headerOST=$header.offsetTop;
    var win=window;
    win.addEventListener('scroll',function(){
        var $currentSCT=this.document.documentElement.scrollTop
        if($headerOST<$currentSCT){
            $header.classList.add('sticky')
        }else{$header.classList.remove('sticky')}
    })
})