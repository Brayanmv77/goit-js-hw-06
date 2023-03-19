const input = document.getElementById('validation-input'); 

input.addEventListener('blur', ()=>{
    let inputValue = input.value.length;
    let numberOfSymbols = input.dataset.length;
    
    if(inputValue == numberOfSymbols){
        input.setAttribute('class', 'valid');
    }else{
        input.setAttribute('class', 'invalid');
    }
})
