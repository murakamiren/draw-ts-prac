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
	console.log(e.clientX - rectLeft, e.clientY - rectTop);

	drawArea.onmousedown = () => {
		drawFlg = true;
	};
	drawArea.onmouseup = () => {
		drawFlg = false;
	};
});
