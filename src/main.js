function $(selector){
  return document.querySelector(selector)
}
$('header .login').onclick = (e)=>{
  e.stopPropagation();
  $('.flip-modal').style.display = 'block'
}
$('.flip-modal').addEventListener('click', function(e){
  e.stopPropagation()
  if(e.target.classList.contains('login')){
    $('.flip-modal').classList.remove('register')
    $('.flip-modal').classList.add('login')
  }
  if(e.target.classList.contains('register')){
    $('.flip-modal').classList.remove('login')
    $('.flip-modal').classList.add('register')
  }
  if(e.target.classList.contains('close')){
    $('.flip-modal .login').style.display = 'none'
  }
})
document.addEventListener('click', ()=>{
  $('.flip-modal').style.display = 'none'
})