//AOS.init();
window.onload = function () {
    var style = document.getElementById("switchStyle");
    var switchBtn = document.getElementById("switchBtn");

    switchBtn.onclick = function () {
        if (style.getAttribute('href') == 'style.css') {
            style.href = "darkTheme.css";
            switchBtn.innerHTML = "LightMode";
            return 0;
        }
        else {
            style.href = "style.css";
            switchBtn.innerHTML = "DarkMode";
            return 0;
        }
    }

    if (document.documentElement.clientWidth <= 767) {
        var href = document.location.href;
        var href2 = href.split('.', 2);
        alert("It is " + href2[0] + href2[1]);
        window.location.replace((href2[0] + 'Mobile.html'));
    }
}