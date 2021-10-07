// console.log("hello world");
var drawArea = document.querySelector("#draw-area");
// console.log(drawArea.getContext);
var drawContext = drawArea.getContext("2d");
var drawFlg = false;
drawArea.addEventListener("mousemove", function (e) {
    // console.log(drawArea.getBoundingClientRect());
    var rect = drawArea.getBoundingClientRect();
    // console.log(Math.floor(rect.top));
    var rectTop = Math.floor(rect.top);
    var rectLeft = rect.left;
    // console.log(e.clientX - rectLeft, e.clientY - rectTop);
    drawArea.onmousedown = function () {
        drawFlg = true;
    };
    drawArea.onmouseup = function () {
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
