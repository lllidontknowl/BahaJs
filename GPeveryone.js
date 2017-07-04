// ==UserScript==
// @name         GPeveryone
// @version      1.0
// @description  在文章中，新增一個能給該頁整串GP按鈕，目前不適用於單篇文章，請按"看整串內容"
// @author       wuken0325
// @include      *forum.gamer.com.tw/C.php*
// ==/UserScript==

document.getElementsByClassName("BH-pagebtnA")[0].innerHTML += "<a id=\"gpBtn\">全部給推</a>"; //加入按鈕

var myButton = document.getElementById("gpBtn"); //獲取剛加入的按鈕
    myButton.addEventListener("click", function() {  //給按鈕上個監聽
         gp();
         document.getElementsByClassName("BH-pagebtnA")[0].innerHTML= (document.getElementsByClassName("BH-pagebtnA")[0].innerHTML).slice(0,-26); //把按鈕刪掉
    });


function gp(){   //復原文章
    var gp_Buttons = document.getElementsByClassName("gp");
    for(i=0;i<gp_Buttons.length;i++){
        gp_Buttons[i].click();
    }
}
