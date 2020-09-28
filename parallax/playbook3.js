// var images;
// for(var i = 0; i <= 2; i++){
//   images[i]= document.querySelector('#image' + i);
//   console.log(images[i]);
// }
var timeLog = document.getElementById('timeLog')
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var person1 = document.getElementById("person1");
var ground1 = document.getElementById("ground1");
var tree1 = document.getElementById("tree1");
var content = document.getElementById("content");



scroll = window.pageYOffset;

document.addEventListener("scroll", function (e) {
  var offset = window.pageYOffset;
  scroll = offset;
  console.log(scroll);
  content.style.opacity = scroll < image1.offsetTop*.9 ? 1 * scroll + "%" : 1;
 
  image1.style.left = scroll < image1.offsetTop * 0.8 ? scroll - image1.offsetTop  + "px" : 0;
  image2.style.opacity = image2.offsetTop * .9 ? 1 * scroll + "%" : 1;
  image2.style.left =
    scroll < (image2.offsetTop) ? scroll - image2.offsetTop + "px" : 0;
  
    // person1.style.left = scroll < 600 ? scroll + 200 + 'px' : 0;
    // ground1.style.left = scroll < ground1.offsetTop*.9 ? scroll - ground1.offsetTop + 'px' : 0;
    // tree1.style.left = scroll < tree1.offsetTop*.9 ? scroll - tree1.offsetTop + 'px' : 0;
    image3.style.left =
    scroll < image3.offsetTop ? scroll - image3.offsetTop + "px" : 0;

    
      timeLog.style.top = scroll > timeLog.offsetTop ? scroll/2 + scroll/5 + "px" : 0;
    
});
