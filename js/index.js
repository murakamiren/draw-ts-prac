// console.log("hello world");
var drawArea = document.querySelector("#draw-area");
// console.log(drawArea.getContext);
var drawContext = drawArea.getContext("2d");
var deleteBtn = document.querySelector("#delete-btn");
var widthRange = document.querySelector("#width-range");
var widthValue = document.querySelector("#width-value");
var colorPicker = document.querySelector("#color-picker");
var setColorBtn = document.querySelector("#set-color-btn");
var setColor = "";
var setLineWidth = 1;
var drawFlg = true;
// console.log(drawArea.getBoundingClientRect());
var rect = drawArea.getBoundingClientRect();
// console.log(Math.floor(rect.top));
var rectTop = Math.floor(rect.top);
var rectLeft = rect.left;
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
    }
    drawContext.stroke();
}
deleteBtn.addEventListener("click", function () {
    drawContext.clearRect(0, 0, 500, 500);
});
setColorBtn.addEventListener("click", function () {
    setColor = colorPicker.value;
    console.log(setColor);
});
// console.log(setLineWidth);
