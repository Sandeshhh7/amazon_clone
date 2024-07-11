let signInBtns = document.querySelectorAll('.signIn');
let homePage = document.getElementsByClassName('home-page');
let cartSec = document.getElementsByClassName('cart_sec');
let cartBtn = document.getElementsByClassName('cart');
let backBtn = document.getElementById('backHome');
let loginPage = document.getElementsByClassName('loginSec');    
let logoCreate = document.getElementById('amzn_logo');


signInBtns.forEach((btn) => {   
    btn.addEventListener('click', () => {
      homePage[0].style.display = 'none';
      loginPage[0].style.display = 'flex';
    });
  });



backBtn.onclick = function(){
    homePage[0].style.display = "block";  
    loginPage[0].style.display = 'none';
}

cartBtn[0].onclick = function(){
    homePage[0].style.display = 'none';
    cartSec[0].style.display = 'block';     
    

}

logoCreate.onclick = function(){
    homePage[0].style.display = "block";  
    cartSec[0].style.display = 'none';
}
