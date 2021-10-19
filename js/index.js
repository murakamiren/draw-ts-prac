// console.log("hello world");
var drawArea = document.querySelector("#draw-area");
// console.log(drawArea.getContext);
var drawContext = drawArea.getContext("2d");
var deleteBtn = document.querySelector("#delete-btn");
var widthRange = document.querySelector("#width-range");
var widthValue = document.querySelector("#width-value");
var colorPicker = document.querySelector("#color-picker");
var saveBtn = document.querySelector("#save-btn");
var saveBtnLink = document.querySelector("#save-btn-link");
var eraserBtn = document.querySelector("#eraser");
var backBtn = document.querySelector("#back-btn");
var drawHistory = [];
var setColor = "";
var setLineWidth = 1;
var drawFlg = true;
// console.log(drawArea.getBoundingClientRect());
var rect = drawArea.getBoundingClientRect();
// console.log(Math.floor(rect.top));
var rectTop = Math.floor(rect.top);
var rectLeft = rect.left;
drawContext.fillStyle = "#fff";
drawContext.fillRect(0, 0, 500, 500);
widthRange.onmouseup = function () {
    setLineWidth = parseInt(widthRange.value);
    widthValue.innerText = "\u7DDA\u306E\u592A\u3055:" + widthRange.value;
};
drawArea.onmousedown = function () {
    drawFlg = false;
    // console.log(drawFlg);
};
drawArea.onmouseup = function () {
    drawFlg = true;
    setDrawHistory();
    // console.log(drawFlg);
};
drawArea.onmouseleave = function () {
    drawFlg = true;
};
drawArea.onmousemove = function (e) {
    draw(e.clientX - rectLeft, e.clientY - rectTop);
};
// console.log(drawFlg);
function draw(x, y) {
    // console.log(drawFlg);
    if (drawFlg) {
        drawContext.beginPath();
        drawContext.lineCap = "round";
        drawContext.lineJoin = "round";
        drawContext.lineWidth = setLineWidth;
        drawContext.strokeStyle = setColor;
        drawContext.moveTo(x, y);
    }
    else {
        drawContext.lineTo(x, y);
        // console.log(setColor);
    }
    drawContext.stroke();
}
deleteBtn.addEventListener("click", function () {
    drawContext.clearRect(0, 0, 500, 500);
});
colorPicker.addEventListener("change", function () {
    setColor = colorPicker.value;
    // console.log(setColor);
});
saveBtn.addEventListener("click", function () {
    // console.log(saveBtnLink);
    saveBtnLink.href = drawArea.toDataURL("image/jpeg");
    saveBtnLink.download = "saveImg.jpg";
    saveBtnLink.click();
});
eraserBtn.addEventListener("click", function () {
    setColor = "white";
});
function setDrawHistory() {
    drawHistory.push(drawContext.getImageData(0, 0, 500, 500));
    console.log(drawHistory);
}
backBtn.addEventListener("click", function () {
    drawHistory.pop();
    var last = drawHistory.slice(-1)[0];
    drawContext.putImageData(last, 0, 0);
});
