// console.log("hello world");
var drawArea = document.querySelector("#draw-area");
// console.log(drawArea.getContext);
var drawContext = drawArea.getContext("2d");
var deleteBtn = document.querySelector("#delete-btn");
var drawFlg = true;
// console.log(drawArea.getBoundingClientRect());
var rect = drawArea.getBoundingClientRect();
// console.log(Math.floor(rect.top));
var rectTop = Math.floor(rect.top);
var rectLeft = rect.left;
console.log(drawFlg);
drawArea.onmousedown = function () {
    drawFlg = false;
    console.log(drawFlg);
};
drawArea.onmouseup = function () {
    drawFlg = true;
    console.log(drawFlg);
};
drawArea.onmousemove = function (e) {
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
    }
    else {
        drawContext.lineTo(x, y);
    }
    drawContext.stroke();
}
deleteBtn.addEventListener("click", function () {
    drawContext.clearRect(0, 0, 500, 500);
});
