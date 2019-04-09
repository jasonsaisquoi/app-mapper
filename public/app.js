$(document).ready( () => {
  console.log(`public/app.js connected`);
  
  function random_bg_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    bgColor = `rgb(${r},${g},${b})`;
    $('.imgPlaceholder').css('background-color',bgColor);
  }
  

})