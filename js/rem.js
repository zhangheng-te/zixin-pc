// 将rem设置的代码封装为函数
function setRem() {
  // 1 获取页面的宽度
  var html = document.documentElement; // 获取html标签 querySelector('html')
  var width = html.clientWidth;

  // 2 进行尺寸边界值检测
  if (width < 1024) {
    width = 1024; // 如果超过最小值，设置为最小值
  }
  if (width > 1920) {
    width = 1920; // 如果超过最大值，设置为最大值
  }

  // 3 计算一个rem的大小
  var fSize = width / 80;
  // 4 设置给html标签的font-size
  html.style.fontSize = fSize + "px";
}

// 1 页面加载中调用一次，进行rem的初始设置
setRem();
