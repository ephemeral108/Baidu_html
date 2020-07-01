chrome.contextMenus.create({
	title:"百度一下",
	contexts: ['selection'],
	id:'1',
	visible:true,
	onclick:function(params){
		chrome.tabs.create({url:'https://www.baidu.com/s?ie=utf-8&wd='+params.selectionText});
	}
});

