var menu = document.getElementById('menu')
var close = document.getElementById('close')
document.getElementById('nav_links').style.right = '-1000px' 

menu.addEventListener('click', function(){
    document.getElementById('nav_links').style.right='0%' 
})
close.addEventListener('click', function(){
    document.getElementById('nav_links').style.right='-1000px'   
})