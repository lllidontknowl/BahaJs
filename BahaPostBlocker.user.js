// ==UserScript==
// @name         BahaPostBlocker
// @version      1.2
// @description  把含有關鍵字的文章和黑名單從文中列表中濾掉
// @author       wuken0325
// @include      *forum.gamer.com.tw/*
// ==/UserScript==


    
var Block_str=["康妮","寶拉","蔡英文","馬英九","聖結","聖粉","結石","放火","賴界","小幻","康乙己"]; //關鍵字
var Block_auther=["ss54564152","ru3715","chocolatebox","bennysit2003","daved070708"]; //黑名單
var Delete_post=[];
var title_tmp='';
var auther_tmp='';
var block = false;
var mtable=document.getElementsByClassName("FM-blist fmb");

document.getElementsByClassName("BH-pagebtnA")[0].innerHTML += "<a onclick=\"Post_insert(mtable,Delete_post)\">復原文章</a>"

for (i=1;i<mtable[0].rows.length;i++){
    block = false;
    title_tmp=mtable[0].rows[i].cells[2].getElementsByTagName("a")[0].innerHTML;
    auther_tmp=mtable[0].rows[i].cells[4].getElementsByTagName("a")[0].innerHTML;
    for(j=0;j<Block_str.length;j++){	    
        if(title_tmp.search(Block_str[j])!=-1){
            block = true;
        }
    }

    for(j=0;j<Block_auther.length;j++){        
        if(auther_tmp.search(Block_auther[j])!=-1){
            block = true;
        }
    }

    if(block==true){
        Delete_post[Delete_post.length]=mtable[0].rows[i].innerHTML;
        mtable[0].deleteRow(i);
        i=i-1;
    }
}

function Post_insert(mtable,Delete_post){
    for(i=0;i<Delete_post.length;i++){
        var New_post = mtable[0].insertRow(1);
        var Post_inside = New_post.insertCell(0);
        Post_inside.innerHTML = Delete_post[i];
    }
}
    
