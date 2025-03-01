const artists = [{
    name : 'Damian Salazar',
    img : 'https://yt3.googleusercontent.com/ytc/AOPolaQJ4LU9gncSi3onOzb83G2QyWpCzxlgWiz_AgGvMA=s176-c-k-c0x00ffffff-no-rj',
    username : '@DamianSalazar',
    link : 'youtube.com/@DamianSalazarOficial'
},
{
    name : 'Max Ostro',
    img : 'https://yt3.googleusercontent.com/eA8JPD9uPwe1sag8aLTDDPZdq9z9flwktUkFiBU3XnofoVSsH1wzy9QB1YgQZJtIhddWqFT-1Q=s160-c-k-c0x00ffffff-no-rj',
    username : '@MaxOstro',
    link : 'youtube.com/@MaxOstro/featured'
},
{
    name : 'Telula',
    img : 'https://yt3.googleusercontent.com/3mUCFaFL1I6KmhQStrWPfXO03EX8yjf-hnUSc0u_slb82X_um9PHgZscsUd8QMS21VfPRHf16g=s160-c-k-c0x00ffffff-no-rj',
    username : '@telula',
    link : 'youtube.com/@telula'
},
{
    name : 'Alex Shumaker',
    img : 'https://yt3.googleusercontent.com/ytc/AOPolaRc2JY3KvHRo_72fyi4aYsMbengDbN9wyhxmfiS9w=s176-c-k-c0x00ffffff-no-rj-mo',
    username : '@alexshudrums',
    link : 'youtube.com/@alexshudrums'
},
{
    name : 'Justin Johnson',
    img : 'https://yt3.googleusercontent.com/yMDWU7bbyG3qG9qI8BarA2wsdFFqTchK3VUqqsD4IH_h_YDfGQ4VMOMGbBb0DBOdx74t9If6jPQ=s160-c-k-c0x00ffffff-no-rj',
    username : '@justinjohnson',
    link : 'youtube.com/@justinjohnsonlive'
},
{
    name : 'Mateo Mancuso',
    img : 'https://yt3.googleusercontent.com/ytc/AOPolaTBdgi_VOCnE_iDQqbQqa-tMUBYuu2vk1z3kO2uww=s176-c-k-c0x00ffffff-no-rj-mo',
    username : '@MatteoMancuso',
    link : 'youtube.com/@MatteoMancusoofficial'
},
{
    name : 'Luna Di',
    img : 'https://yt3.googleusercontent.com/O65wpNLzQELxzUxXK8vQaz6GPFirFzinQtceT4_a27nnbgtlvAlc_XoKlTrwyqKn_S5hJ1-VD_U=s160-c-k-c0x00ffffff-no-rj',
    username : '@lunadimusic',
    link : 'youtube.com/@lunadimusic'
}
]

let pulsos = []

function chequearUsuarioValido() {

    const usuario = JSON.parse(sessionStorage.getItem('user'))
    if(usuario === null){
        location.replace('./')
    }
}


window.addEventListener('load', function(){

    chequearUsuarioValido()

    const nombreUsuario = document.getElementById('user-name')
    const user = recuperarDataStorage()
    nombreUsuario.innerText = user.username

    const rankTable = document.querySelectorAll('.ranking h3')
    const pulsosStorage = pulsosDataStorage()

    recuperarPulsos(pulsos, pulsosStorage)
    recuperarRank(pulsos, rankTable)

    const contadorStarPulsos = document.querySelector('.contador-star h2')
    const pulseButtons = document.querySelectorAll('.videos button')

    descontarPulsos(contadorStarPulsos, pulseButtons)

    nombreUsuario.addEventListener('click', function(){
    swal.fire({
        title: 'You want to exit?',
        icon: 'question',
        iconColor: '#707070',
        confirmButtonColor: '#00008e',
        confirmButtonText: 'Yes!',
        background: 'rgba(223, 175, 1,.8)',
        color: '#00008e'
      }).then((result) => {
        if (result.isConfirmed) {
        sessionStorage.clear()
        window.location.replace('./index.html')
        }
    })
})

cambiarTema()
  
})


function recuperarDataStorage(){

    const dataJSON = sessionStorage.getItem('user')
    const dataPARSE = JSON.parse(dataJSON)

    return dataPARSE
}

function pulsosDataStorage(){

    const dataJSON = localStorage.getItem('pulsos')
    const dataPARSE = JSON.parse(dataJSON)

    return dataPARSE
}

function recuperarPulsos(pulsosArray,data){
    if(data!==null){
        data.forEach(pulso=>{
        pulsosArray.push(pulso)
    })
    }else if(data==null){
        pulsosArray.push(0)
        pulsosArray.push(0)
        pulsosArray.push(0)
        pulsosArray.push(0)
        pulsosArray.push(0)
        pulsosArray.push(0)
        pulsosArray.push(0)
    }
}


function recuperarRank(pulsosArray, rankTable){
    rankTable[0].innerText = (pulsosArray[0])
    rankTable[1].innerText = (pulsosArray[1])
    rankTable[2].innerText = (pulsosArray[2])
    rankTable[3].innerText = (pulsosArray[3])
    rankTable[4].innerText = (pulsosArray[4])
    rankTable[5].innerText = (pulsosArray[5])
    rankTable[6].innerText = (pulsosArray[6])
}


function cambiarTema(){
    
    const main = document.querySelector('main')
    const icono = document.querySelector('i')
    icono.addEventListener('click', function(){
    main.classList.toggle('tema-sitio')
    })
}


const profile = document.querySelector('.artist-profile ul')

function mostrarPerfiles(lista){
    lista.map(function(artista){
        return profile.innerHTML+=`<li><a href='https://${artista.link}' target='_blank'><img src=${artista.img}></a><h3>${artista.name}</h3></li>`
    })
}

mostrarPerfiles(artists)


const videosUl = document.querySelector('.videos ul')

videosUl.innerHTML+=`<li><iframe width="354" height="630" src="https://www.youtube.com/embed/aM270xHyPMc" title="Queen Bohemian Rhapsody - Amazing Version by Damian Salazar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='damianS'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/h_6muWnHVKY" title="Send this to your fellow guitarists. Am here from now on. 100k likes &amp; I play this piano #guitarsolo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<button id='max'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/Bkce6lrCafU" title="🌷 DOES IT GET ANY TIGHTER?!?! 🌷”Patrol Acrobatique” by Vulfpeck #funkmusic  #musician #bassguitar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='telula'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/E6PoIv0d1nc" title="#livingonaprayer #bonjovi #9yearold #drummer #alexshumaker #alexshudrums #drums" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='alexS'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/yrkBZNbm_Lk" title="Gimme Back my Bullets (on Ammo Can Guitar) #shorts #guitar #blues #lynyrdskynyrd #cover #rock #diy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='justinJ'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/ongw9Otg4fQ" title="Django Reinhardt-Hungaria-Matteo Mancuso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='mateoM'>P\nU\nL\nS\nE</button></li>
<li><iframe width="354" height="630" src="https://www.youtube.com/embed/F-3quTy1Sj4" title="Girls Just wanna have fun - Cindy Lauper | Luna Di (busking cover)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<button id='lunaDi'>P\nU\nL\nS\nE</button></li>
`


const body = document.querySelector('body')

body.innerHTML+=`<div class="contador-star"><h2>3</h2><img src="./img/star-pink-krita.png"></div>`

function descontarPulsos(starPulso, buttons){

    const star = document.querySelector('.contador-star')
    let contador = 3

    if(pulsosRestantes(starPulso)==null){
        contador = 3
    }else if(pulsosRestantes(starPulso)===2){
        contador = 2
        starPulso.innerText = contador
    }else if(pulsosRestantes(starPulso)===1){
        contador = 1
        starPulso.innerText = contador
    }else if(pulsosRestantes(starPulso)===0){
        contador = 0
        starPulso.innerText = contador
        star.style.animation = 'none'
        star.style.opacity = '0.4'
        buttons.forEach(boton=>{
            boton.style.opacity = '0.4'
            boton.disabled = true
            boton.style.cursor = 'default'
            boton.style.transform = 'none'
        })
    }

    buttons.forEach(button=>{
        button.addEventListener('click', function(){

        pulsosPush()
        localStorage.setItem('pulsos', JSON.stringify(pulsos))

        contador = contador - 1
        sessionStorage.setItem('contador', JSON.stringify(contador))

        if(contador>0){
            starPulso.innerText = contador
            star.classList.add('transition')
            setTimeout(function(){
                star.classList.remove('transition')
            },1300)
        }
        else if(contador<1){
            starPulso.innerText = 0
            star.classList.add('transition')
            setTimeout(function(){
                star.style.animation = 'none'
                star.style.transition = 'opacity 1000ms'
                star.style.opacity = '0.4'
            },1200)
            buttons.forEach(boton=>{
                boton.style.transition = 'opacity 1500ms'
                boton.style.opacity = '0.4'
                boton.disabled = true
                boton.style.cursor = 'default'
                boton.style.transform = 'none'
            })
        }
        })
    })
}

function pulsosRestantes(){

    const dataJSON = sessionStorage.getItem('contador')
    const dataPARSE = JSON.parse(dataJSON)

    return dataPARSE
}



/*************************** seccion votos **************************/


const articuloRanking = document.querySelector('.ranking ul')

function listadoRanking(lista){

    lista.map(function(artista){
        return articuloRanking.innerHTML+=`
<li><img src=${artista.img}><a href='https://${artista.link}' target='_blank'>${artista.username}</a><h3 id='${artista.username}'>0</h3></li>
`
})
}

listadoRanking(artists)


const damianSbutton = document.getElementById('damianS')
const maxbutton = document.getElementById('max')
const telulabutton = document.getElementById('telula')
const alexSbutton = document.getElementById('alexS')
const justinJbutton = document.getElementById('justinJ')
const mateoMbutton = document.getElementById('mateoM')
const lunaDibutton = document.getElementById('lunaDi')

const damianSpulses = document.getElementById('@DamianSalazarOficial')
const maxpulses = document.getElementById('@MaxOstro')
const telulapulses = document.getElementById('@telula')
const alexSpulses = document.getElementById('@alexshudrums')
const justinJpulses = document.getElementById('@justinjohnsonlive')
const mateoMpulses = document.getElementById('@MatteoMancusoofficial')
const lunaDipulses = document.getElementById('@lunadimusic')


function sumarPulsos(boton, casillero){

    boton.addEventListener('click', function(){
        casillero.innerText++
    })
}

sumarPulsos(lunaDibutton,lunaDipulses)
sumarPulsos(maxbutton,maxpulses)
sumarPulsos(damianSbutton,damianSpulses)
sumarPulsos(alexSbutton,alexSpulses)
sumarPulsos(justinJbutton,justinJpulses)
sumarPulsos(mateoMbutton,mateoMpulses)
sumarPulsos(telulabutton,telulapulses)


function pulsosPush(){
    pulsos = []
    pulsos.push(damianSpulses.innerText)
    pulsos.push(maxpulses.innerText)
    pulsos.push(telulapulses.innerText)
    pulsos.push(alexSpulses.innerText)
    pulsos.push(justinJpulses.innerText)
    pulsos.push(mateoMpulses.innerText)
    pulsos.push(lunaDipulses.innerText)
}
