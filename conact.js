let mouse=document.querySelector('.mouse');
let mouseMove=document.querySelector('.mm');
mouseMove.addEventListener('mousemove',function(e){
 let y=e.y;
 let x=e.x;
   mouse.style.top=y+'px'
   mouse.style.left=x+'px'
 
 
})