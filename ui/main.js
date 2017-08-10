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
    var interval=setInterval(moveRight,10);
    imgchv.style.marginLeft='100px'
}
//Submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    var names=['Name1','Name2','Name3'];
    var list='';
    for(var i=0;i<names.lengh; i++)
    {
        list+='<li>'+names[i]+'</li>'
    }
    var ul=document.getElementById('namelist');
    u.innertHTML=list;
};