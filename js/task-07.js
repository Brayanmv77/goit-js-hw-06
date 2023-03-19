const control = document.getElementById('font-size-control');
const span = document.getElementById('text');

control.addEventListener('input', fontSize);

function fontSize(){
span.style.fontSize = `${control.value}px`;
}