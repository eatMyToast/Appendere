function bringCanvasToFront(){
	chrome.tabs.executeScript({
		code: 'document.getElementById("appendereCanvas").style.display = "block"'
	});
};
function blackPen(){
	chrome.tabs.executeScript({
		code: 'curColor = colorBlack; tool = draw; strokeSize = 4'
	});
};
function whitePen(){
	chrome.tabs.executeScript({
		code: 'curColor = colorWhite; tool = draw; strokeSize = 4'
	});
};
function redPen(){
	chrome.tabs.executeScript({
		code: 'curColor = colorRed; tool = draw; strokeSize = 4'
	});
};
function yellowHighlighter(){
	chrome.tabs.executeScript({
		code: 'curColor = colorYellow; tool = draw; strokeSize = 12'
	});
};
function pinkHighlighter(){
	chrome.tabs.executeScript({
		code: 'curColor = colorPink; tool = draw; strokeSize = 12'
	});
};
function greenHighlighter(){
	chrome.tabs.executeScript({
		code: 'curColor = colorGreen; tool = draw; strokeSize = 12'
	});
};
function eraser1(){
	chrome.tabs.executeScript({
		code: 'curColor = colorErase; tool = erase; strokeSize = 12'
	});
};
function eraser2(){
	chrome.tabs.executeScript({
		code: 'curColor = colorErase; tool = erase; strokeSize = 16'
	});
};
function eraser3(){
	chrome.tabs.executeScript({
		code: 'curColor = colorErase; tool = erase; strokeSize = 25'
	});
};
function comment(){
	chrome.tabs.executeScript({
		code: 'document.getElementById("appendereSidebar").style.left = "-275px"; appendereSidebarOpen = false'
	});
};
function save(){
	chrome.tabs.executeScript({
		code: 'document.getElementById("appendereCanvas").style.display = "none"; alert("Saving doesnt work");'
	});
};
function load(){
	chrome.tabs.executeScript({
		code: 'document.getElementById("appendereCanvas").style.display = "block"; alert("Loading doesnt work");'
	});
};
document.querySelector('.pointer').addEventListener('click', bringCanvasToFront);
document.querySelector('.black').addEventListener('click', blackPen);
document.querySelector('.white').addEventListener('click', whitePen);
document.querySelector('.red').addEventListener('click', redPen);
document.querySelector('.yellow').addEventListener('click', yellowHighlighter);
document.querySelector('.pink').addEventListener('click', pinkHighlighter);
document.querySelector('.green').addEventListener('click', greenHighlighter);
document.querySelector('.eraser1').addEventListener('click', eraser1);
document.querySelector('.eraser2').addEventListener('click', eraser2);
document.querySelector('.eraser3').addEventListener('click', eraser3);
document.querySelector('.comment').addEventListener('click', comment);
document.querySelector('.save').addEventListener('click', save);
document.querySelector('.load').addEventListener('click', load);