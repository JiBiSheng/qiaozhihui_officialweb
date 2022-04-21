let detailimglist=document.querySelectorAll('.detailimg')
let path='';
for(let i=0;i<detailimglist.length;i++){
    detailimglist[i].onclick=function(e){
        path=e.srcElement.currentSrc;
        let bigcontent=document.querySelector('.bigcontent');
        bigcontent.removeChild(bigcontent.children[0])
        let detailbigimg=document.createElement('img')        
        detailbigimg.src=path;
        detailbigimg.setAttribute("class","detailBigImg")
        bigcontent.appendChild(detailbigimg)        
    }
}