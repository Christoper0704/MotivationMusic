let index = 1;

function show(x) {
  let slide = document.getElementsByClassName("slides");
  if (x > slide.length) {
      index = 1
  }    
  if (x < 1) {
      index = slide.length
  }
  for (let i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  slide[index-1].style.display = "block";  
}

show(index);

function addSlides(x) {
  show(index += x);
}