for(let oJ=0;oJ<document.querySelectorAll('img').length;oJ++){
  console.log(document.querySelectorAll('img')[oJ]);

document.querySelectorAll('img')[oJ].onclick=()=>{
  newImg();
    this.document.querySelectorAll('img')[oJ].classList.add('onCl');
    this.document.querySelectorAll('img')[oJ].classList.remove('onOff');
  }
}
function newImg(){
  for(let oJ=0;oJ<document.querySelectorAll('img').length;oJ++){
    document.querySelectorAll('img')[oJ].classList.remove('onCl');
    document.querySelectorAll('img')[oJ].classList.add('onOff');
  }
}
console.log("oK")
if(window.innerWidth>=1908){
  console.log('>1908')
  let width="3%";
}else{
  console.log('<1900');
}
