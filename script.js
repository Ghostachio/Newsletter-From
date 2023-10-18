let subscribe = document.getElementById('submit');
let dismiss = document.getElementById('dismiss');
let next = document.getElementById('wrapper');
let back = document.getElementById('goback');
let adress = document.getElementById('adress');




subscribe.addEventListener('click', function(event){
  let email = adress.value;
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailPattern.test(email)){
      event.preventDefault()
      next.style.display = "none";
      back.style.display = "flex";
  }
});



dismiss.addEventListener('click', function(){
  next.style.display = "flex";
  back.style.display = "none";
})