/*insert jquery*/
(function () {
    let jquery = document.createElement("script");
    jquery.setAttribute("src", "http://libs.baidu.com/jquery/2.1.4/jquery.min.js");
    document.getElementsByTagName("head")[0].appendChild(jquery);
})()
/*determine device*/
function screen() {
    let h = document.body.clientHeight;
    let w = document.body.clientWidth;
    //if(0){
	if (w > h) {
        let computer = document.createElement("script");
        computer.setAttribute("src", "baidu_computer.js");
        document.getElementsByTagName("head")[0].appendChild(computer);
    }
}
/*alter background*/
var storage = window.localStorage;
function BG() {
    var oFReader = new FileReader();
    var file = document.getElementById('file').files[0];
    oFReader.readAsDataURL(file);
    oFReader.onloadend = function (oFRevent) {
        var src = oFRevent.target.result;
        document.getElementById("wrapbg").setAttribute("src", src);
        storage.setItem("user-background", src);
    }
}
function chFile() {
    $("#file").click();
}
function alterBackground() {
    try {
        if (storage.getItem("user-background") == null) {
           document.getElementById("wrapbg").setAttribute("src", "https://up.enterdesk.com/edpic/06/3a/42/063a4212b02f6d24b2f51c87519fea1a.jpg");
        } else {
            document.getElementById("wrapbg").setAttribute("src", storage.getItem("user-background"));
        }
    } catch (err) {
        document.getElementById("wrapbg").setAttribute("src", "https://up.enterdesk.com/edpic/06/3a/42/063a4212b02f6d24b2f51c87519fea1a.jpg");
    }
}

/*when touch down change button color*/
function ButtonColor() {
    let bu = document.getElementById("submitButton");
    bu.ontouchstart = function () {
        bu.style.backgroundColor = "blue";
    }
    bu.ontouchend = function () {
        bu.style.backgroundColor = "#3388FF";
    }
}
//key change
	var shadow = -1;
	var content = "";
	var clearShadow = 0;
function keyChange() {
    var input = document.getElementById("input");
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
        
    }
}

/*display UL*/

function removeUL() {
    ul.style.display = "none";
}

function displayUL() {
    event.stopPropagation();
    ul.style.display = "block";
}
/*word prediction*/
function appendScript(blank) {
    //ajax update data
    var url1 = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=';
    var url2 = '&cb=';
    var script = document.createElement("script");
    if (blank) {
        content = input.value;
		//console.log(input.value);
		script.src = url1 + input.value + url2 + callBack.name;
        try {
            $('#script').remove();
        } catch (err) {}
        script.setAttribute("id", "script");
        document.body.appendChild(script);
    } else {
        script.src = url1 + url2 + callBack.name;
        $('#script').remove();
        script.setAttribute("id", "script");
        document.body.appendChild(script);
    }

}
function callBack(obj) {
    var array = obj.s;
    ul.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        li.innerText = array[i];
        li.setAttribute("id", "li" + i);
		
		/*apply mouse shadow*/
		var mouseenter=(function(li){
			li.addEventListener('mouseenter',function(){
				li.setAttribute("style","background:#c5c5cf");
			});
		})(li)
		var mouseleave=(function(li){
			li.addEventListener('mouseleave',function(){
				li.setAttribute("style","background:#FFF");
			});
		})(li)

        ul.appendChild(li);
        document.getElementById("li" + i).onclick = function (e) {
            input.value = e.srcElement.innerHTML;
            relocate();
        };
    }
    ul.style.display = "block";
}

function relocate() {
    if (input.value) {
        location.href = 'https://www.baidu.com/s?wd=' + input.value;
    }
}
function focus() {
    appendScript(1);
}
function blur() {
    appendScript(0);
}

/*execution*/
window.onload = function () {
    ButtonColor();
    keyChange();
	screen();
    alterBackground();
   
    document.getElementById("icon").setAttribute("src", "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-c4d7df0a00.png");
	var ul = document.getElementById("ul");
}