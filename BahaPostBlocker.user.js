// ==UserScript==
// @name         BahaPostBlocker
// @version      1.32
// @description  把含有關鍵字的文章和黑名單從文中列表中濾掉
// @author       wuken0325
// @include      *forum.gamer.com.tw/*
// ==/UserScript==


    
var Block_str=["康妮","寶拉","蔡英文","馬英九","聖結","聖粉","結石","放火","賴界","小幻","康乙己"]; //關鍵字，依所需自行修改
var Block_auther=["MansTalk","stu92614","bennysit2003"]; //黑名單，依所需自行修改
var Delete_cell0=[];
var Delete_cell1=[];
var Delete_cell2=[];
var Delete_cell3=[];
var Delete_cell4=[];
var Delete_cell5=[];
var Delete_post=[Delete_cell0,Delete_cell1,Delete_cell2,Delete_cell3,Delete_cell4,Delete_cell5];
var title_tmp='';
var auther_tmp='';
var block = false;
var deleted=false;
var mtable=document.getElementsByClassName("FM-blist fmb");




for (i=1;i<mtable[0].rows.length;i++){
    block = false;
    title_tmp=mtable[0].rows[i].cells[2].getElementsByTagName("a")[0].innerHTML;  //獲得標題
    auther_tmp=mtable[0].rows[i].cells[4].getElementsByTagName("a")[0].innerHTML; //獲得作者的帳號
    for(j=0;j<Block_str.length;j++){	    
        if(title_tmp.search(Block_str[j])!=-1){  //搜尋關鍵字
            block = true; //阻擋
        }
    }

    for(j=0;j<Block_auther.length;j++){        
        if(auther_tmp.search(Block_auther[j])!=-1){  //搜尋黑名單
            block = true; //阻擋
        }
    }

    if(block===true){
        Delete_cell0[Delete_cell0.length]=mtable[0].rows[i].cells[0].innerHTML; //獲取標題的各種值
        Delete_cell1[Delete_cell1.length]=mtable[0].rows[i].cells[1].innerHTML;
        Delete_cell2[Delete_cell2.length]=mtable[0].rows[i].cells[2].innerHTML;
        Delete_cell3[Delete_cell3.length]=mtable[0].rows[i].cells[3].innerHTML;
        Delete_cell4[Delete_cell4.length]=mtable[0].rows[i].cells[4].innerHTML;
        Delete_cell5[Delete_cell5.length]=mtable[0].rows[i].cells[5].innerHTML;
        mtable[0].deleteRow(i);
        i=i-1;
        deleted=true;
    }
}

if(deleted===true){ //如果有文章被刪掉
    document.getElementsByClassName("BH-pagebtnA")[0].innerHTML += "<a id=\"rebutton\">復原文章</a>"; //加入按鈕
    var myButton = document.getElementById("rebutton"); //獲取剛加入的按鈕
    myButton.addEventListener("click", function() {  //給按鈕上個監聽
        Post_insert(mtable,Delete_post);
         document.getElementsByClassName("BH-pagebtnA")[0].innerHTML= (document.getElementsByClassName("BH-pagebtnA")[0].innerHTML).slice(0,-25); //把按鈕刪掉
    });
}



function Post_insert(mtable,Delete_post){   //復原文章
    var classname=["","FM-blist2","FM-blist3","FM-blist4","FM-blist5","FM-blist6"]; //給td的classname
    for(i=0;i<Delete_post[0].length;i++){
        var New_post = mtable[0].insertRow(1);  //新增一行
        for(j=0;j<6;j++){
            var Post_inside_tmp = New_post.insertCell(-1);  //加入各種cell
            Post_inside_tmp.className = classname[j];
            Post_inside_tmp.innerHTML = Delete_post[j][i];
        }
    }
}
    
