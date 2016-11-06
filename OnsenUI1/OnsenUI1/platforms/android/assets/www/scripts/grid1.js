
//var myNavigator = document.querySelector("#myNavigator");
myNavigator.addEventListener('postpush', function (event) {
    console.log(event.enterPage.pushedOptions.page);
    if (event.enterPage.pushedOptions.page=="grid1.html") {
        console.log("grid1 entered");
        var screenWidth = screen.width;
        console.log(screenWidth);
        document.getElementById("icon1").setAttribute("size", (screen.width / 3) + "px");
    }
});