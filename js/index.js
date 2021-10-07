// console.log("hello world");
var drawArea = document.querySelector("#draw-area");
// console.log(drawArea.getContext);
var drawContext = drawArea.getContext("2d");
var drawFlg = false;
drawArea.addEventListener("mousemove", function (e) {
    // console.log(drawArea.getBoundingClientRect());
    var rect = drawArea.getBoundingClientRect();
    // console.log(rect.left);
    // console.log(e.clientX - rect.left, e.clientY - rect.top);
    drawArea.onmousedown = function () {
        drawFlg = true;
    };
    drawArea.onmouseup = function () {
        drawFlg = false;
    };
});
