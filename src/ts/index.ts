// console.log("hello world");
const drawArea = document.querySelector<HTMLCanvasElement>("#draw-area");
// console.log(drawArea.getContext);
const drawContext = drawArea.getContext("2d");
let drawFlg: boolean = false;

drawArea.addEventListener("mousemove", (e) => {
	// console.log(drawArea.getBoundingClientRect());
	let rect: DOMRect = drawArea.getBoundingClientRect();
	// console.log(Math.floor(rect.top));
	let rectTop: number = Math.floor(rect.top);
	let rectLeft: number = rect.left;
	// console.log(e.clientX - rectLeft, e.clientY - rectTop);

	drawArea.onmousedown = () => {
		drawFlg = true;
	};
	drawArea.onmouseup = () => {
		drawFlg = false;
	};
	// console.log(drawFlg);
	if (drawFlg) {
		drawContext.lineCap = "round";
		drawContext.lineJoin = "round";
		drawContext.lineWidth = 5;
		drawContext.strokeStyle = "tomato";
		drawContext.beginPath();
		drawContext.moveTo(e.clientX - rectLeft, e.clientY - rectTop);
		drawContext.lineTo(e.clientX - rectLeft, e.clientY - rectTop);
	}
});
