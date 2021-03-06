/**
         * getData方法
         * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
         * 返回一个数组，格式见函数中示例
         */
function getData() {
    /*
            coding here
            */
    //获取资源的DOM元素
    var source = document.getElementById("source"),
        data = new Array();
    for (var i = 0; i < source.children.length; i++) {
        //提取城市
        var cityName = source
            .children[i]
            .innerHTML
            .slice(0, 2);
        // 提取指数
        var cityNum = source.children[i].children[0].innerHTML;
        // 放入新的二维数组
        data.push([cityName, cityNum]);
    }
    /*
            data = [
              ["北京", 90],
              ["北京", 90]
              ……
            ]
            */
    return data;

}

/**
         * sortAqiData
         * 按空气质量对data进行从小到大的排序
         * 返回一个排序后的数组
         */
function sortAqiData(data) {
    var newData = data.sort(function (a, b) {
        return b[1] - a[1];
    });
    return newData;
}

/**
         * render
         * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
         * 格式见ul中的注释的部分
         */
function render(data) {
    // 获取DOM元素
    var resort = document.getElementById('resort'),
        //创建排名数组
        sortNum = [
            '一',
            '二',
            '三',
            '四',
            '五',
            '六',
            '七'
        ];
    //创建元素

    for (var j = 0; j < data.length; j++) {
        var li = document.createElement("li");
        //第一名：北京空气质量：<b>90</b>
        li.innerHTML = '第' + sortNum[j] + '名： ' + data[j][0] + '空气质量： <b>' + data[j][1] + '</b>';
        resort.appendChild(li);
    }

}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {

    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var btn = document.getElementById("sort-btn");
    btn.onclick = btnHandle;
}

init();