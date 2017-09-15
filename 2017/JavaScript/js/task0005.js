var inMsg = document.getElementById("in-msg");
var inShow = document.getElementById("in-show");
var leftIn = document.getElementById("left-in");
var rightIn = document.getElementById("right-in");
var leftOut = document.getElementById("left-out");
var rightOut = document.getElementById("right-out");
var sortAll = document.getElementById("sort-all");

// 添加元素
function addCon(direction) {
    //判断队列元素数量是否超过限制
    if (inShow.childNodes.length < 60) {
        //判断输入的值是否为空，为空则提示
         if (inMsg.value == "") {
            alert("输入不能为空，请输入数字！！");
            inMsg.focus();
        } else if (isNaN(inMsg.value)) {
            // 判断输入值是否为数字，不是数字则提醒
            alert("请输入数字！");
            inMsg.value = "";
            inMsg.focus();
        }else if(inMsg.value < 10 || inMsg.value > 100){
            alert("请输入10-100之间的数字");
            inMsg.value = "";
            inMsg.focus();
        }else {
            var div = document.createElement("div");
            // div.innerHTML = inMsg.value;
            div.style.height = inMsg.value + "px";
            if (direction == "left") {
                //在第一个子元素前插入
                inShow.insertBefore(div, inShow.firstChild);
            } else if (direction == "right") {
                //在最后一个子元素后插入
                inShow.appendChild(div);
            }
        }
    } else {
        alert("输入超过限制！最多输入60个");
        return false;
    }
}
//删除元素
function delCon(direction) {
    if (inShow.childNodes.length <= 0) {
        alert("没有可以删除的元素！");
        return false;
    } else {
        if (direction == "left") {
            // alert("您将要删除" + inShow.firstChild.innerHTML);
            inShow.removeChild(inShow.firstChild);
        } else if (direction == "right") {
            // alert("您讲要删除" + inShow.lastChild.innerHTML);
            inShow.removeChild(inShow.lastChild);
        }
    }
}

//点击元素删除
function delEl(node) {
    var num = inShow.removeChild(node);
    // alert("删除数字：" + num.innerHTML);
}
//排序
function sortCon(){
    //获取所有元素
    var arr =new Array();
    var len = inShow.childNodes.length ;
    // 判断当前元素个数
    if(len < 2) {
        return false;
    }else{
        for(var i = 0; i < len; i++ ){
            //获取当前所有元素高度
            arr[i] = parseInt(inShow.childNodes[i].style.height);
        }
        arr = mySort(arr);
    }
    console.log(arr);
    inShow.innerHTML="";
    
    //排序完成后重新添加元素
    for(var j = 0; j < arr.length; j++){
        var newDiv = document.createElement("div");
        newDiv.style.height=arr[j]+"px";
        inShow.appendChild(newDiv);
    }
}


//排序算法
function mySort(arr){
    var item;
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                item = arr[j];
                arr[j] = arr[i];
                arr[i] = item;
            }
        }
    }
    return arr;
}

//给按钮添加事件
leftIn.onclick = function () {
    addCon("left")
};
rightIn.onclick = function () {
    addCon("right")
};
leftOut.onclick = function () {
    delCon("left")
};
rightOut.onclick = function () {
    delCon("right")
};
inShow.onclick = function () {
    delEl(event.target || event.srcElement)
};
sortAll.onclick = function(){
    sortCon();
}