var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;



for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(scrollVertically, 20, targetSection);
        // interval = setInterval(function () {
        //     scrollVertically(targetSection);
        // }, 20);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

var eachSkillDiv = document.querySelectorAll('.skills-progress > div');
var skillSection = document.getElementById('skills');
window.addEventListener('scroll',checkScroll);
var animationDone =false;

function initializeBars(){
	for(let bar of eachSkillDiv){
		bar.style.width=0+'%';
	}
}

initializeBars();


function fillBars(){
	var skillSelected = document.getElementsByClassName('skills');
			for(let i=0;i<skillSelected.length;i++){
				let width = skillSelected[i].getAttribute('data-width');
				let color = skillSelected[i].getAttribute('data-color');
				let targetSectionID = skillSelected[i];
				increaseWidth(targetSectionID,width);
			}
			function increaseWidth(targetSectionID, width){
				 
					var currentWidth = 0;
				 	let interval=setInterval(function(){
					if (currentWidth >= width) {
			            clearInterval(interval);
			            return;
			        }
			        currentWidth++;
			        targetSectionID.style.width = currentWidth + '%';
				 },10);
				}
			
}

function checkScroll(){
	var coordinates = skillSection.getBoundingClientRect();
	if( !animationDone && coordinates.top <= window.innerHeight){
					animationDone=true;
					fillBars();
				}
				else if(coordinates.top > window.innerHeight){
					animationDone=false;
					initializeBars();
				}
			
}

