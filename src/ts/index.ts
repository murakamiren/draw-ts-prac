// console.log("hello world");
const drawArea = document.querySelector<HTMLCanvasElement>("#draw-area");
// console.log(drawArea.getContext);
const drawContext = drawArea.getContext("2d");
const deleteBtn = document.querySelector<HTMLButtonElement>("#delete-btn");
let drawFlg: boolean = true;

// console.log(drawArea.getBoundingClientRect());
let rect: DOMRect = drawArea.getBoundingClientRect();
// console.log(Math.floor(rect.top));
let rectTop: number = Math.floor(rect.top);
let rectLeft: number = rect.left;
console.log(drawFlg);
drawArea.onmousedown = () => {
	drawFlg = false;
	console.log(drawFlg);
};
drawArea.onmouseup = () => {
	drawFlg = true;
	console.log(drawFlg);
};
drawArea.onmousemove = (e) => {
	draw(e.clientX - rectLeft, e.clientY - rectTop);
};
// console.log(drawFlg);
function draw(x, y) {
	console.log(drawFlg);
	// console.log(drawFlg);
	if (drawFlg) {
		drawContext.beginPath();
		drawContext.lineCap = "round";
		drawContext.lineJoin = "round";
		drawContext.lineWidth = 5;
		drawContext.strokeStyle = "tomato";
		drawContext.moveTo(x, y);
	} else {
		drawContext.lineTo(x, y);
	}
	drawContext.stroke();
}

deleteBtn.addEventListener("click", () => {
	drawContext.clearRect(0, 0, 500, 500);
});
