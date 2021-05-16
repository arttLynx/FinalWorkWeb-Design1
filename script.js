//AOS.init();
if (document.documentElement.clientWidth <= 767) {
    var href = document.location.href;
    var href2 = href.split('.', 2);
    alert("It is " + href2[0] + href2[1]);
    window.location.replace((href2[0] + 'Mobile.html'));
}