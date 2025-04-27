document.addEventListener('click', async function(e){
    //delete
    if(e.target.classList.contains('delete-me')){
        if(confirm('Do you really want to delete?')){
            axios.post('/delete-item', {id: e.target.getAttribute('data-id')}).then(function(){
                e.target.parentElement.parentElement.remove()
            }).catch(function(){
                console.log('Please try again later')
            })
        }
    }

    //update
    if(e.target.classList.contains('edit-me')){
        let userInput = prompt('Enter your desired new text', e.target.parentElement.parentElement.querySelector('.item-text').innerHTML)
        if(userInput){
            axios.post('/update-item', {text: userInput, id: e.target.getAttribute('data-id')}).then(function(){
                e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput
            }).catch(function(e){
                console.log(e)
            })
        }
    }
})
