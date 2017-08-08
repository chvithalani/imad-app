console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="E.C. Department, GEC Rajkot";
var img=document.getElementById('imgchv');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    imgchv.style.marginLeft=marginLeft+'px';
}
imgchv.onclick=function()
{
    var interval=setInterval(moveRight,100);
    imgchv.style.marginLeft='100px'
}