(function () {
    var jquery = document.createElement("script");
    jquery.setAttribute("src", "http://libs.baidu.com/jquery/2.1.4/jquery.min.js");
    document.getElementsByTagName("head")[0].appendChild(jquery);
})()
var storage = window.localStorage;
window.onload = function () {
	$('#wrapbg').css({'height':$(window).height()});
    adjust();
    var bu = document.getElementById("submitButton");
    bu.ontouchstart = function () {
        bu.style.backgroundColor = "blue";
    }
    bu.ontouchend = function () {
        bu.style.backgroundColor = "#3388FF";
    }
    var input = document.getElementById("input");
    //候补关键字
    input.onkeyup = function (event) {
        //press enter relocate
        var e = event || window.event;

        if (e && e.keyCode == 13) {
            relocate();
        }
        appendScript(1);

    }
    var ul = document.getElementById("ul");

	document.getElementById("icon").setAttribute("src", "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-c4d7df0a00.png");
	try {
		if(storage.getItem("user-background")==null){
			document.getElementById("wrapbg").setAttribute("src", "https://up.enterdesk.com/edpic/06/3a/42/063a4212b02f6d24b2f51c87519fea1a.jpg");
		}else{
			document.getElementById("wrapbg").setAttribute("src", storage.getItem("user-background"));
		}
	} catch (err) {
		document.getElementById("wrapbg").setAttribute("src", "https://up.enterdesk.com/edpic/06/3a/42/063a4212b02f6d24b2f51c87519fea1a.jpg");
	}

}

function removeUL() {
    ul.style.display = "none";
}

function releaseUL() {
    event.stopPropagation();
    ul.style.display = "block";
}

function appendScript(blank) {
    //ajax update data
    var url1 = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=';
    var url2 = '&cb=';
    var script = document.createElement("script");
    if (blank) {
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

function focus() {
    appendScript(1);
}
function blur() {
    appendScript(0);
}

var obj;

function callBack(obj) {
    this.obj = obj;
    var array = obj.s;
    ul.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        li.innerText = array[i];
        li.setAttribute("id", "li" + i);
        ul.appendChild(li);
        document.getElementById("li" + i).onclick = function (e) {
            input.value = e.srcElement.innerHTML;
            relocate();
        };
    }
    ul.style.display = "block";
}
//according to different screen adjust display method
var adjust = function () {
    var h = document.body.clientHeight;
    var w = document.body.clientWidth;
    if (w > h) {
        var screen = document.getElementsByClassName("content")[0];
        var inframe = document.getElementsByClassName("inputFrame")[0];
        var submitButton = document.getElementById("submitButton");
        var icon = document.getElementById("icon");
        var font = document.getElementsByClassName("font");
        icon.style.width = "200px";
        screen.style.width = "60%";
        inframe.style.height = "38px";
        submitButton.style.height = "40px";
        $("#submitButton").css("fontSize", "15px");
        $(".inputFrame").css("font-size", "15px");
    }
}
function relocate() {
    var value = document.getElementById("input").value;
    if (value) {
        location.href = 'https://www.baidu.com/s?wd=' + value;
    }
}

function chFile(){
	$("#file").click();
}

function BG() { 
	var oFReader = new FileReader();
    var file = document.getElementById('file').files[0];
    oFReader.readAsDataURL(file);
    oFReader.onloadend = function(oFRevent){
        var src = oFRevent.target.result;
        document.getElementById("wrapbg").setAttribute("src", src);
		storage.setItem("user-background", src);
    }
	
}
