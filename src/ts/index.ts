// console.log("hello world");
const drawArea = document.querySelector<HTMLCanvasElement>("#draw-area");
// console.log(drawArea.getContext);
const drawContext = drawArea.getContext("2d");
const deleteBtn = document.querySelector<HTMLSpanElement>("#delete-btn");
const widthRange = document.querySelector<HTMLInputElement>("#width-range");
const widthValue = document.querySelector<HTMLElement>("#width-value");
const colorPicker = document.querySelector<HTMLInputElement>("#color-picker");
const saveBtn = document.querySelector<HTMLSpanElement>("#save-btn");
const saveBtnLink = document.querySelector<HTMLAnchorElement>("#save-btn-link");
const eraserBtn = document.querySelector<HTMLSpanElement>("#eraser");
const backBtn = document.querySelector<HTMLInputElement>("#back-btn");

const drawHistory = [];

let setColor: string = "";
let setLineWidth: number = 1;
let drawFlg: boolean = true;

// console.log(drawArea.getBoundingClientRect());
let rect: DOMRect = drawArea.getBoundingClientRect();
// console.log(Math.floor(rect.top));
let rectTop: number = Math.floor(rect.top);
let rectLeft: number = rect.left;

drawContext.fillStyle = "#fff";
drawContext.fillRect(0, 0, 500, 500);

setLineWidth = parseInt(widthRange.value);
widthValue.innerText = `線の太さ:${widthRange.value}`;

widthRange.onmouseup = () => {
	setLineWidth = parseInt(widthRange.value);
	widthValue.innerText = `線の太さ:${widthRange.value}`;
};

drawArea.onmousedown = () => {
	drawFlg = false;
	// console.log(drawFlg);
};
drawArea.onmouseup = () => {
	drawFlg = true;
	setDrawHistory();
	// console.log(drawFlg);
};
drawArea.onmouseleave = () => {
	drawFlg = true;
};

drawArea.onmousemove = (e) => {
	draw(e.clientX - rectLeft, e.clientY - rectTop);
};
// console.log(drawFlg);
function draw(x: number, y: number) {
	// console.log(drawFlg);
	if (drawFlg) {
		drawContext.beginPath();
		drawContext.lineCap = "round";
		drawContext.lineJoin = "round";
		drawContext.lineWidth = setLineWidth;
		drawContext.strokeStyle = setColor;
		drawContext.moveTo(x, y);
	} else {
		drawContext.lineTo(x, y);
		// console.log(setColor);
	}
	drawContext.stroke();
}

deleteBtn.addEventListener("click", () => {
	drawContext.clearRect(0, 0, 500, 500);
});

colorPicker.addEventListener("change", () => {
	setColor = colorPicker.value;
	// console.log(setColor);
});

saveBtn.addEventListener("click", () => {
	// console.log(saveBtnLink);
	saveBtnLink.href = drawArea.toDataURL("image/jpeg");
	saveBtnLink.download = "saveImg.jpg";
	saveBtnLink.click();
});

eraserBtn.addEventListener("click", () => {
	setColor = "white";
});

function setDrawHistory() {
	drawHistory.push(drawContext.getImageData(0, 0, 500, 500));
	console.log(drawHistory);
}

backBtn.addEventListener("click", () => {
	drawHistory.pop();
	const last = drawHistory.slice(-1)[0];
	if (drawHistory.length > 0) {
		drawContext.putImageData(last, 0, 0);
	} else {
		drawContext.clearRect(0, 0, 500, 500);
	}
});
