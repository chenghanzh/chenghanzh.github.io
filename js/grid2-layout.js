function resizeAllGridItems(){
  allItems = document.getElementsByClassName("grid2Item");
  var topPx0=0;
  var topPx1=0;
  for(x=0;x<allItems.length;x++){
    allItems[x].style.position = 'absolute';
    if (x%2==0) {
      allItems[x].style.left = '0px';
      allItems[x].style.top = topPx0+'px';
      topPx0 += allItems[x].querySelector('.card-content').getBoundingClientRect().height+40;
    }
    else {
      allItems[x].style.left = allItems[x].querySelector('.card-content').getBoundingClientRect().width+80 + 'px';
      allItems[x].style.top = topPx1+'px';
      topPx1 += allItems[x].querySelector('.card-content').getBoundingClientRect().height+40;
    }
  }
  box = document.getElementsByClassName("featured-box");
  if(box[0]!=null){
    if(topPx0>=topPx1){
      box[0].style.height = topPx0+'px';
    }
    else {
      box[0].style.height = topPx1+'px';
    }
  }
}

function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
