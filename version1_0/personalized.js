//get file location

	var inputObj=document.createElement('input')
    inputObj.setAttribute('id','file');
    inputObj.setAttribute('type','file');
    inputObj.setAttribute('name','file');
	inputObj.setAttribute('onchange','BG()');
    document.body.appendChild(inputObj);
	inputObj.click();

function BG() { 
	var oFReader = new FileReader();
    var file = document.getElementById('file').files[0];
    oFReader.readAsDataURL(file);
    oFReader.onloadend = function(oFRevent){
        var src = oFRevent.target.result;
        document.getElementById("wrapbg").setAttribute("src", src);
		storage.setItem("user-background", src);
		console.log(src);
		$("#file").remove();
    }
	
}


    































