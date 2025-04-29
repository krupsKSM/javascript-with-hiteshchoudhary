const buttons =  document.querySelectorAll('.button')

const targetBody = document.querySelector('body')
console.log(buttons);  // returns a nodeList of button class

buttons.forEach(function (clickButton){
    console.log(clickButton);

    clickButton.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target); 

        if (event.target.id === 'grey'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'white'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'blue'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'red'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'green'){
            targetBody.style.backgroundColor = event.target.id 
        }
        
    })

})