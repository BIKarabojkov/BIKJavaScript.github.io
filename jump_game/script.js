var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;



function jump()
{
	if (character.classList=='')
	{
		character.classList.add("animate");
	}
	
	setTimeout(function(){
        character.classList.remove("animate");
    },300);
	
}

var checkDead = setInterval(function() 
{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =   parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	//check if collision acures 

	

}, 10);

