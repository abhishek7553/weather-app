const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne =  document.querySelector('#message-err')
const messageTwo =  document.querySelector('#message-weather')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    messageOne.textContent = "Loading..." 
    messageTwo.textContent = " "
    
    const location = searchElement.value
    fetch('/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent= data.location
            messageTwo.textContent= data.forecast
        }        
    })
})

})