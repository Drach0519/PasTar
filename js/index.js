const product = {
  nameProduct: [
  "Макарон з гороху жовтого",
  "Макарони з гороху зеленого",
  "Макарони із квасолі",
  "Макарони із сочевиці зеленої",
  "Макарони із сочевиці червоної"
  ],
  priceProduct:[
    85 + "грн"
  ]
}
document.getElementById("name-1").innerHTML = "Макарони з гороху жовтого";
document.getElementById("name-2").innerHTML = "Макарони із сочевиці зеленої";
document.getElementById("name-3").innerHTML = "Макарони із квасолі";
document.getElementById("name-4").innerHTML = "Макарони із сочевиці червоної";
document.getElementById("name-5").innerHTML = "Макарони з гороху жовтого";
document.getElementById("name-6").innerHTML = "Макарони із сочевиці зеленої";
document.getElementById("name-7").innerHTML = "Макарони з гороху зеленого";
document.getElementById("price.product1").innerHTML = "85 грн";
document.getElementById("price.product2").innerHTML = "85 грн";
document.getElementById("price.product3").innerHTML = "85 грн";
document.getElementById("price.product4").innerHTML = "85 грн";
document.getElementById("price.product5").innerHTML = "85 грн";
document.getElementById("price.product6").innerHTML = "85 грн";
document.getElementById("price.product7").innerHTML = "85 грн";
document.getElementById("avatar-1").innerHTML ='<img src="img/peas.jpg"> <div class="product-type""><img src="img/spiral.png"></div>';
document.getElementById("avatar-2").innerHTML ='<img src="img/green-lentils-spiral.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';
document.getElementById("avatar-3").innerHTML ='<img src="img/bean.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';
document.getElementById("avatar-4").innerHTML ='<img src="img/red-lentils-spiral.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';
document.getElementById("avatar-5").innerHTML ='<img src="img/peas-mushla-yellow.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';
document.getElementById("avatar-6").innerHTML ='<img src="img/green-lentils-mushla.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';document.getElementById("avatar-7").innerHTML ='<img src="img/peas-green-spiral.jpg"> <div class="product-type"><img src="img/spiral.png"></div>';



let cart = {
  product1:[],
  product2:[],
};
document.onclick = event =>{
  if(event.target.classList.contains('btn-active')){
    plusFunction(event.target.dataset.id);
    const inp = document.querySelector('.current-value');
    let carentValue = +inp.value;
    let newValue = carentValue + 1;
    inp.value = newValue;
    //виводми лічильник
    if( inp.value >0){
    document.querySelector('.header-lang .tray span').style.cssText = 'color: #53c6f2';
    document.querySelector('.current-value').style.cssText = 'opacity: 1';
  }
    localStorage.setItem('text',newValue.toString())
    return newValue=inp.value;
    let productBasket2 = document.getElementById("productBasket2").innerHTML=product.nameProduct[3];
}
  if(event.target.classList.contains('btn-minus')){
    minusFunction(event.target.dataset.id);
    const inp = document.querySelector('.current-value');
    let carentValue = +inp.value;
    let newValue = carentValue - 1;
    inp.value = newValue;
    if (inp.value <= 0){
      inp.value =0//перевірка щоб не заходило в мінус 
      //ховаємо лічильник
      document.querySelector('.header-lang .tray span').style.cssText = 'color: #666';
      document.querySelector('.current-value').style.cssText = 'opacity: 0';
      productBasket2.innerHTML='';
      productBasket1.innerHTML='';
      
    }
    //збереження даних
      localStorage.setItem('text',inp.value.toString())
      return newValue=inp.value;
  }
    
}


// збільшення товару 
const plusFunction = id =>{
  cart[id]++;

}
//уменшение товара
const minusFunction = id =>{
  if(cart[id] - 1 == 0){
    deleteFunction(id);
    return true; 
  }
  cart[id]--;
};
//удаление товара
const deleteFunction = id =>{
  delete cart[id];
}
const showNumber = () => {
 let number = localStorage.getItem('text'); 
 let inp = document.querySelector('.current-value');
 inp.value=number; 
 return number
 
}
window.onload =function(){
  let myNumber= showNumber() 
  if( myNumber >0){
    document.querySelector('.header-lang .tray span').style.cssText = 'color: #53c6f2';
    document.querySelector('.current-value').style.cssText = 'opacity: 1';  

}
}
 let btn1=document.getElementById("btn-activ1");
  btn1.onclick = function(){
    let productBasket1 = document.getElementById("productBasket1").innerHTML=product.nameProduct[0];
 };

 let btn2=document.getElementById("btn-activ2");
  btn2.onclick = function(){
  let productBasket2 = document.getElementById("productBasket2").innerHTML=product.nameProduct[3];
 };

/* let delete1 = document.querySelector('.btn-minus');
delete1.onclick=function(){
  productBasket2.innerHTML='';
  productBasket1.innerHTML='';
} */
function move() {
  document.querySelector('.tray-grocery-basket').classList.toggle('active');
}
document.getElementById('basket').addEventListener('click', move);