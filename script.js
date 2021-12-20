const skillsSection = document.getElementById('skills-section');

const skillsBars = document.querySelectorAll('.skills-bar');

function showProgress(){
    skillsBars.forEach(skillsBar =>{
        const value = skillsBar.dataset.progress;
        skillsBar.style.opacity = 1;
        skillsBar.style.width =`${value}%`;
    });
}

function hideProgress(){
    skillsBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}
window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});


// menu btn 

 function display() {
    var content =document.getElementById("content");
     var toggle =document.getElementById("toggle");
     if (toggle.classList.contains("show")) {
          toggle.classList.remove("show");
          
         }
     else 
         {
            toggle.classList.add("show");
          
          }
     }
     function relink() {
    var content =document.getElementById("content");
     var toggle =document.getElementById("toggle");
     if (toggle.classList.contains("show")) {
          toggle.classList.remove("show");
          
         }
    
     }