var i = 0;
var images = [];
var time = 3000;
var text = [];

images[0] = 'https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80';
images[1] = 'https://images.unsplash.com/photo-1539735257177-0d3949225f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
images[2] = 'https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80';

text[0] = 'Breakfast';
text[1] = 'Lunch';
text[2] = 'Dinner';

function changeImg() {
  document.slide.src = images[i];
  document.getElementById("textIn").innerHTML = text[i];
  if(i < images.length - 1) {
     i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
  return;
}

window.onload = changeImg;



