function Box(color) {
    let that = this;
    this.ele = document.createElement("div");
    this.num = 0;
    this.eleNum = document.createElement("span");
    this.eleNum.innerHTML = this.num;
    this.ele.addEventListener("click", function() {
        that.numberUp();
    });

    this.ele.style.cssText =
        "display:flex;justify-content:center;align-items:center;" +
        "width:200px;height:100px;border-radius:10px;" +
        "font-size:18px;color:white;" +
        "background-color:" + color + ";";

    this.ele.appendChild(this.eleNum);
    document.body.appendChild(this.ele);
}

Box.prototype.numberUp = function () {
    this.num++;
    this.eleNum.innerHTML = this.num;
}

let colors = ["red", "green", "blue"];
let boxes = [];
for (let i = 0; i < colors.length; i++) {
    boxes[i] = new Box(colors[i]);
}