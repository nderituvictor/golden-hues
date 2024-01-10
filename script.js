import { dataList, saleList } from "./data.js"

const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")
const mainImage = document.getElementById("MainImg")
const smallImage = document.getElementsByClassName("small-img")
const section = document.getElementById('feature')
const proContainer = document.querySelector('.pro-container')

dataList.forEach((data) => {
  const promote = `<div class="fe-box">
  <img src="${data.image}" alt="">
  <h6>${data.title}</h6>
</div>
`
section.innerHTML += promote
})

saleList.forEach((sale) => {
  const items = `<div class="pro">
  <img src="${sale.img}" alt="">
  <div class="des">
    <span>${sale.brand}</span>
    <h5>${sale.name}</h5>
    <div class="star">
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
      <i class='bx bxs-star'></i>
    </div>
    <h4>$${sale.price}</h4>
  </div>
  <a href="#"><i class='bx bxs-cart cart'></i></a>
</div>`

proContainer.innerHTML += items
})

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
} 
if(close){
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}

smallImage[0].addEventListener('click', () => {
  mainImage.src = smallImage[0].src
})
smallImage[1].addEventListener('click', () => {
  mainImage.src = smallImage[1].src
})
smallImage[2].addEventListener('click', () => {
  mainImage.src = smallImage[2].src
})
smallImage[3].addEventListener('click', () => {
  mainImage.src = smallImage[3].src
})


