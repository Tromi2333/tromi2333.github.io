var swplinkbutton = document.getElementById("swplinkbutton");
var test = document.getElementById("test");
swplinkbutton.onclick = function()
{
    window.open("somewebsitespage/");
}
test.onclick = function()
{
    fetch(pic/icon.ico)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = icon.ico;
        link.target = "_blank"; // 可选，如果希望在新窗口中下载文件，请取消注释此行
        link.click();
      });
}
