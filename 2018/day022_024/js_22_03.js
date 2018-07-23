/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
  var result = '';

  // 清除前面的空格
  var clearBefore = function (s) {
    let string = '';
    let fullIndex = s.indexOf(String.fromCharCode(12288));
    let halfIndex = s.indexOf(String.fromCharCode(32));
    // 当开头有全角空格的时候
    if (fullIndex !== -1 && fullIndex === 0) {
      string = s.slice(fullIndex + 1);
    } else if (halfIndex !== -1 && halfIndex === 0) {
      string = s.slice(halfIndex + 1);
    }
    return string;
  }

  // 清除后方空格
  var clearAfter = function (s) {
    let string = '';
    let fullIndex = s.lastIndexOf(String.fromCharCode(12288));
    let halfIndex = s.lastIndexOf(String.fromCharCode(32));
    let length = s.length - 1;
    if (fullIndex !== -1 && fullIndex === length) {
      string = s.slice(0, fullIndex);
    } else if (halfIndex !== -1 && halfIndex === length) {
      string = s.slice(0, halfIndex);
    }
    return string;
  }

  if (!str) {
    result = ''
  } else {
    // 清除str前方空格
    while (str.indexOf(String.fromCharCode(12288)) === 0 || str.indexOf(String.fromCharCode(32)) === 0) {
      if (!str) {
        str = '';
        return ;
      } else {
        str = clearBefore(str);
      }
    }
    if (!str) {
      str = ''
    } else {
      while (str.lastIndexOf(String.fromCharCode(12288)) === str.length -1 || str.lastIndexOf(String.fromCharCode(32)) === str.length -1) {
        if (!str) {
          str = '';
          return ;
        } else {
          str = clearAfter(str);
        }
      }
    }
    result = str;
  }
  return result
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
  var result = "";

  // ES6数组去重

  var strArr = str.split('');
  result = [... new Set(strArr)].join('');

  return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc