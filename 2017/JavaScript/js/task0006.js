
    var inMsg = document.getElementById("in-msg");
    var inShow = document.getElementById("in-show"); 
    var leftIn = document.getElementById("left-in");
    var rightIn = document.getElementById("right-in");
    var leftOut = document.getElementById("left-out");
    var rightOut = document.getElementById("right-out");

    // 添加元素
    function addCon(direction){
        //判断输入的值是否为空，为空则提示
        if(inMsg.value == ""){
            alert("输入不能为空，请输入数字！！");
            inMsg.focus();
        }else if(isNaN(inMsg.value)){
            // 判断输入值是否为数字，不是数字则提醒
            alert("请输入数字！");
            inMsg.value="";
            inMsg.focus();
        }else{
            var div = document.createElement("div");
            div.innerHTML = inMsg.value;
            if(direction == "left"){
                //在第一个子元素前插入
                inShow.insertBefore(div,inShow.firstChild);
            }else if(direction == "right"){
                //在最后一个子元素后插入
                inShow.appendChild(div);
            }
        }
    }
    //删除元素
    function delCon(direction){
        if(inShow.childNodes.length<=0){
            alert("没有可以删除的元素！");
            return false;
        }else{
            if(direction == "left"){
                alert("您将要删除"+ inShow.firstChild.innerHTML);
                inShow.removeChild(inShow.firstChild);
            }else if(direction == "right"){
                alert("您讲要删除"+ inShow.lastChild.innerHTML);
                inShow.removeChild(inShow.lastChild);
            }
        }
    }

    //点击元素删除
    function delEl(node){
        var num = inShow.removeChild(node);
        alert("删除数字："+num.innerHTML);
    }

    //给按钮添加事件
    leftIn.onclick = function(){addCon("left")};
    rightIn.onclick =function(){addCon("right")};
    leftOut.onclick = function(){delCon("left")};
    rightOut.onclick = function(){delCon("right")};
    inShow.onclick = function(){delEl(event.target || event.srcElement)};