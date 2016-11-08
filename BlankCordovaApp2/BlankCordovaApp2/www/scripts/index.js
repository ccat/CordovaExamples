// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// http://go.microsoft.com/fwlink/?LinkID=397704
// ページ上のコードをデバッグするには、Ripple で読み込むか、Android デバイス/エミュレーターで読み込みます。アプリを起動し、ブレークポイントを設定します。
// 次に、JavaScript コンソールで "window.location.reload()" を実行します。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Cordova の一時停止を処理し、イベントを再開します
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova が読み込まれました。ここで、Cordova を必要とする初期化を実行します。
        /*var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/

        //angular.bootstrap(document, ['myApp']);
    };

    function onPause() {
        // TODO: このアプリケーションは中断されました。ここで、アプリケーションの状態を保存します。
    };

    function onResume() {
        // TODO: このアプリケーションが再アクティブ化されました。ここで、アプリケーションの状態を復元します。
    };
})();

var myApp = angular.module('myApp', ['onsen', 'pascalprecht.translate']);

myApp.controller('AppController', function ($scope) { });
myApp.controller('PageController', function ($scope) {
    ons.ready(function () {
    });
});

myApp.config(['$translateProvider', function ($translateProvider) {
    console.log(findLanguage());
    $translateProvider.useStaticFilesLoader({
        prefix: 'scripts/translate/lang_',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage(findLanguage());
    $translateProvider.fallbackLanguage("en");
    /*$translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useSanitizeValueStrategy('escaped');*/
    console.log("preferredLanguage was set");
}]);

myApp.controller('Ctrl', ['$scope', function ($scope) {
    console.log("Ctrl called");
}]);

function findLanguage() {
    try {
        return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2)
    } catch (e) {
        return "en";
    }
}
