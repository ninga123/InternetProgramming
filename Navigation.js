
 
window.addEventListener("load", StartNavigation,false)
 
 function StartNavigation() {
    	//hide all sections
    ShowSection("Game")
    
 }
 function ShowSection(name){
    var Welcome = document.getElementById('Welcome');
    Welcome.style.visibility="hidden";
    var Register = document.getElementById('Register');
    Register.style.visibility="hidden";
    var Login = document.getElementById('Login');
    Login.style.visibility="hidden";
    var Configuration = document.getElementById('Configuration');
    Configuration.style.visibility="hidden";
    var About = document.getElementById('About');
    About.style.visibility="hidden";	
    var Game = document.getElementById('Game');
    Game.style.visibility="hidden";
    var selected = document.getElementById(name);
     selected.style.visibility = "visible";
     if (name === "Game") {
         initScore();
         Start();
     }
     else{
        stopgame();
     }
     
 }


 








 

