//according to different screen adjust display method
var screen = document.getElementsByClassName("content")[0];
var inframe = document.getElementsByClassName("inputFrame")[0];
var submitButton = document.getElementById("submitButton");
var icon = document.getElementById("icon");
var font = document.getElementsByClassName("font");
icon.style.width = "250px";
screen.style.width = "60%";
inframe.style.height = "45px";
submitButton.style.height = "45px";
$("#submitButton").css("fontSize", "18px");
$(".inputFrame").css("font-size", "18px");
/*document.getElementById("ul").style.width = document.getElementsByClassName("inputFrame")[0].offsetWidth-8+"px";*/
document.getElementsByClassName("wrapper")[0].style.marginTop="5%";
/*
input.onkeyup = function (event) {
        //press enter relocate
        let e = event || window.event;
        if (e && e.keyCode == 13) {
            relocate();
        } else if(e && e.keyCode == 40){
			shadow++;
			if(shadow>9){
				shadow=-1;
				input.value = content;
			}else{
			input.value = 
			document.getElementsByTagName("li")[shadow].innerHTML;
			document.getElementsByTagName("li")[clearShadow].setAttribute("style","background:#FFF");
			clearShadow = shadow;
			document.getElementsByTagName("li")[shadow].setAttribute("style","background:#c5c5cf");
			}
		} else if(e && e.keyCode == 38){
			shadow--;
			if(shadow<0){
				shadow=10;
			}else{
			input.value = 
			document.getElementsByTagName("li")[shadow].innerHTML;
			document.getElementsByTagName("li")[clearShadow].setAttribute("style","background:#FFF");
			clearShadow = shadow;
			document.getElementsByTagName("li")[shadow].setAttribute("style","background:#c5c5cf");
			}
		} else{
			shadow=-1;		
			appendScript(1);
		}
        
    }*/










