function resizeAllGridItems(){
  allItems = document.getElementsByClassName("gridItem");
  var topPx0=0;
  var topPx1=0;
  var topPx2=0;
  for(x=0;x<allItems.length;x++){
    allItems[x].style.position = 'absolute';
    if (x%3==0) {
      allItems[x].style.left = '0px';
      allItems[x].style.top = topPx0+'px';
      topPx0 += allItems[x].querySelector('.card-content').getBoundingClientRect().height+20;
    }
    else if (x%3==1) {
      allItems[x].style.left = allItems[x].querySelector('.card-content').getBoundingClientRect().width+20 + 'px';
      allItems[x].style.top = topPx1+'px';
      topPx1 += allItems[x].querySelector('.card-content').getBoundingClientRect().height+20;
    }
    else {
      allItems[x].style.left = allItems[x].querySelector('.card-content').getBoundingClientRect().width*2+40 + 'px';
      allItems[x].style.top = topPx2+'px';
      topPx2 += allItems[x].querySelector('.card-content').getBoundingClientRect().height+20;
    }
  }
  box = document.getElementsByClassName("featured-box");
  if(box[0]!=null){
    if(topPx0>=topPx1 && topPx0>=topPx2){
      box[0].style.height = topPx0+'px';
    }
    else if (topPx1>=topPx0 && topPx1>=topPx2){
      box[0].style.height = topPx1+'px';
    }
    else{
      box[0].style.height = topPx2+'px';
    }
  }
}

function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
