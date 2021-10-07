// console.log("hello world");
const drawArea = document.querySelector<HTMLCanvasElement>("#draw-area");
// console.log(drawArea.getContext);
const drawContext = drawArea.getContext("2d");
let drawFlg: boolean = false;

drawArea.addEventListener("mousemove", (e) => {
	// console.log(drawArea.getBoundingClientRect());
	let rect: DOMRect = drawArea.getBoundingClientRect();
	// console.log(rect.left);
	// console.log(e.clientX - rect.left, e.clientY - rect.top);

	drawArea.onmousedown = () => {
		drawFlg = true;
	};
	drawArea.onmouseup = () => {
		drawFlg = false;
	};
});
