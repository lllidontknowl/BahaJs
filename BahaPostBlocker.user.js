// ==UserScript==
// @name         BahaPostBlocker
// @version      1.2
// @description  把含有關鍵字的文章和黑名單從文中列表中濾掉
// @author       wuken0325
// @include      *forum.gamer.com.tw/*
// ==/UserScript==


    
var Block_str=["康妮","寶拉","蔡英文","馬英九","聖結","聖粉","結石","放火","賴界","小幻","康乙己"]; //關鍵字
var Block_auther=["ss54564152","ru3715","chocolatebox","bennysit2003","daved070708"]; //黑名單
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
        Delete_cell0[Delete_cell0.length]=mtable[0].rows[i].cells[0].innerHTML;
        Delete_cell1[Delete_cell1.length]=mtable[0].rows[i].cells[1].innerHTML;
        Delete_cell2[Delete_cell2.length]=mtable[0].rows[i].cells[2].innerHTML;
        Delete_cell3[Delete_cell3.length]=mtable[0].rows[i].cells[3].innerHTML;
        Delete_cell4[Delete_cell4.length]=mtable[0].rows[i].cells[4].innerHTML;
        Delete_cell5[Delete_cell5.length]=mtable[0].rows[i].cells[5].innerHTML;
        mtable[0].deleteRow(i);
        i=i-1;
    }
}

function Post_insert(mtable,Delete_post){
    for(i=0;i<Delete_post.length;i++){
        var New_post = mtable[0].insertRow(1);
        for(j=0;j<Delete_post[i].length+1;j++){
            var Post_inside_tmp = New_post.insertCell(-1);
            Post_inside_tmp.innerHTML = Delete_post[j][i];
        }
    }
}
    
