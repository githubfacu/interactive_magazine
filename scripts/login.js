const user = {
    username : '',
}

window.addEventListener('load', function(){
    
    const grid = document.querySelector(".bg-grid")

    for(let i=0;i<120;i++){
        const cell = document.createElement("div")
        grid.appendChild(cell)
    }

    const form = document.querySelector('form')
    const username = document.querySelector('#userName')


    form.addEventListener('submit', function(e){
        e.preventDefault()

        capturarDatos()

        if(user.username.length>1 && !user.username.includes(' ') && user.username.length<15){
            navegarPagina()            
        }
        else{
            alert('between 2 and 15 characters')
        }
    })

    function capturarDatos(){

        user.username = username.value
    }

    function navegarPagina(){
        sessionStorage.setItem('user', JSON.stringify(user))
        window.location.replace('./proyect.html')
    }
})







