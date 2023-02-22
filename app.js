const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransistions(){
    //Button click active class
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function() {
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
    //section active class jisspr click kroge vo active class bnega
    allSections.addEventListener('click',(e) => {
        const id= e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element=document.getElementById(id);
            element.classList.add('active');
        }
    }) 
    //toogle theme dark and light mode
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode');
    })
}

pageTransistions();