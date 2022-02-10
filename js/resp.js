const list= document.querySelector('.list');
const openmenu= document.querySelector('.openmenu');
const closemenu= document.querySelector('.closemenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);


function show(){
    list.style.display='flex';
    list.style.top='0';
}
function close(){
    list.style.top='-100%';
}