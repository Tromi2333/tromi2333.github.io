var swplinkbutton = document.getElementById("swplinkbutton");
var test = document.getElementById("test");
swplinkbutton.onclick = function()
{
    window.open("somewebsitespage/");
}
test.onclick = function download()
{
    var path = "../pic/icon.ico";
    var name = "icon.ico";
    const xhr = new XMLHttpRequest();
    xhr,open('get', path);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function()
    {
        if(this.status === 200 || this.status === 304)
        {
            const filereader = new FileReader();
            filereader.readAsDataURL(this.response);
            filereader.onload = function()
            {
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = this.result;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
        }
    };
}
