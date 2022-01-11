let screen = document.getElementById('inpVal');
buttons = document.querySelectorAll('button');
let screenValues = '';
 for (item of buttons) {
 item.addEventListener('click', (e) => {
 buttonText = e.target.innerText;
 if( buttonText=='='){
    screen.value = eval(screenValues);
 }else if( buttonText=='AC'){
    screenValues ='';
    screen.value = screenValues;

 }else{
    screenValues += buttonText;
    screen.value = screenValues;
 }
});
}