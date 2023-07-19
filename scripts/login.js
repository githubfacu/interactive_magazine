const user = {
    username : '',
}

window.addEventListener('load', function(){


    const form = document.querySelector('form')
    const username = document.querySelector('#userName')


    form.addEventListener('submit', function(e){
        e.preventDefault()

        capturarDatos()

        if(user.username.length>1 && !user.username.includes(' ') && user.username.length<15){
            navegarPagina()            
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







