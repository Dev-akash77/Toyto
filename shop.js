let mainImg = document.querySelector('.main_img')

let subImg = document.querySelector('.subimg_div');
subImg.onclick = (e) => {
  mainImg.src = e.target.src;
};