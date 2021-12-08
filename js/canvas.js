const canvas = document.querySelector(".canvas-box");
const canvasBtn = document.querySelector(".color");


function onCanvas (){
	if(canvas.style.display == 'none'){
		canvas.style.display = 'flex';
	}else{
		canvas.style.display = 'none';
	}
}
canvasBtn.addEventListener("click", onCanvas);

