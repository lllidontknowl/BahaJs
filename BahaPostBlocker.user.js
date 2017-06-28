// ==UserScript==
// @name         BahaPostBlocker
// @version      1.0
// @description  把含有關鍵字的文章濾掉
// @author       wuken0325
// @include      *forum.gamer.com.tw/*
// ==/UserScript==


    
var Block_str=["康妮","寶拉","蔡英文","馬英九","聖結","聖粉","放火","賴界","小幻","康乙己"]; //關鍵字
var tmp='';
var mtable=document.getElementsByClassName("FM-blist fmb");

for (var i=1;i<mtable[0].rows.length;i++){
    
    for(var j=0;j<Block_str.length;j++){
	
        tmp=mtable[0].rows[i].cells[2].innerHTML;
	
        if(tmp.search(Block_str[j])!=-1){
	    
            mtable[0].deleteRow(i);
            
            i=i-1;
            
            break;
	
	    }
    }
    
}
