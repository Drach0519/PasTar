const product = {
  nameProduct: [
  "Макарон з гороху жовтого",
  "Макарони з гороху зеленого",
  "Макарони із квасолі",
  "Макарони із сочевиці зеленої",
  "Макарони із сочевиці червоної"
  ],
}
document.getElementById("name-1").innerHTML = "Макарон із гороху жовтого";
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
  product1:[0],
  product2:[0],
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
    console.log(localStorage.getItem('text'))
    return newValue=inp.value;
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
    }
    //збереження даних
      localStorage.setItem('text',newValue.toString())
      console.log(localStorage.getItem('text'))
      return newValue=inp.value;
  }
}


// збільшення товару 
const plusFunction = id =>{
  cart[id]++;
  renderCart();

}
//уменшение товара
const minusFunction = id =>{
  if(cart[id] - 1 == 0){
    deleteFunction(id);
    return true; 
  }
  cart[id]--;
  renderCart();
};
//удаление товара
const deleteFunction = id =>{
  delete cart[id];
  renderCart();
}
const renderCart = () => {
  console.log(cart);

}
