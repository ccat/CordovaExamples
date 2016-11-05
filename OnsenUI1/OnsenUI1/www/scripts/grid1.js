document.addEventListener('init', function(event) {
    if (event.target.matches('#grid1')) {
        var screenWidth = screen.width;
        ons.notification.alert(screenWidth);
        console.log(screenWidth);
        //document.getElementById("icon1").style.height =  (screen.height - 45) + "px";
        document.getElementById("icon1").size = (screen.width / 3) + "px";
    }
});

var myNavigator = document.querySelector("#myNavigator");
myNavigator.addEventListener('postpush', function (event) {
    console.log('This function is called after a new page is pushed.');
    //if (event.target.matches('#grid1')) {
    console.log(event.enterPage.pushedOptions.page);
    if (event.enterPage.pushedOptions.page=="grid1.html") {
        console.log("grid1 entered");
        var screenWidth = screen.width;
        //ons.notification.alert(screenWidth);
        console.log(screenWidth);
        //document.getElementById("icon1").style.height =  (screen.height - 45) + "px";
        console.log(document.getElementById("icon1"));
        var temp = document.getElementById("icon1");
        //document.getElementById("icon1").size = (screen.width / 3) + "px";
        document.getElementById("icon1").setAttribute("size", (screen.width / 3) + "px");
    }
});