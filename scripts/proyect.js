const artists = [
  {
    name: 'Damian Salazar',
    img: 'https://yt3.googleusercontent.com/ytc/AOPolaQJ4LU9gncSi3onOzb83G2QyWpCzxlgWiz_AgGvMA=s176-c-k-c0x00ffffff-no-rj',
    username: '@DamianSalazarOficial',
    link: 'youtube.com/@DamianSalazarOficial'
  },
  {
    name: 'Max Ostro',
    img: 'https://yt3.googleusercontent.com/eA8JPD9uPwe1sag8aLTDDPZdq9z9flwktUkFiBU3XnofoVSsH1wzy9QB1YgQZJtIhddWqFT-1Q=s160-c-k-c0x00ffffff-no-rj',
    username: '@MaxOstro',
    link: 'youtube.com/@MaxOstro/featured'
  },
  {
    name: 'Telula',
    img: 'https://yt3.googleusercontent.com/3mUCFaFL1I6KmhQStrWPfXO03EX8yjf-hnUSc0u_slb82X_um9PHgZscsUd8QMS21VfPRHf16g=s160-c-k-c0x00ffffff-no-rj',
    username: '@telula',
    link: 'youtube.com/@telula'
  },
  {
    name: 'Alex Shumaker',
    img: 'https://yt3.googleusercontent.com/ytc/AOPolaRc2JY3KvHRo_72fyi4aYsMbengDbN9wyhxmfiS9w=s176-c-k-c0x00ffffff-no-rj-mo',
    username: '@alexshudrums',
    link: 'youtube.com/@alexshudrums'
  },
  {
    name: 'Justin Johnson',
    img: 'https://yt3.googleusercontent.com/yMDWU7bbyG3qG9qI8BarA2wsdFFqTchK3VUqqsD4IH_h_YDfGQ4VMOMGbBb0DBOdx74t9If6jPQ=s160-c-k-c0x00ffffff-no-rj',
    username: '@justinjohnsonlive',
    link: 'youtube.com/@justinjohnsonlive'
  },
  {
    name: 'Luna Di',
    img: 'https://yt3.googleusercontent.com/O65wpNLzQELxzUxXK8vQaz6GPFirFzinQtceT4_a27nnbgtlvAlc_XoKlTrwyqKn_S5hJ1-VD_U=s160-c-k-c0x00ffffff-no-rj',
    username: '@lunadimusic',
    link: 'youtube.com/@lunadimusic'
  }
]

window.addEventListener('load', function () {
  const usuario = JSON.parse(sessionStorage.getItem('user'))
  if (usuario === null) {
    location.replace('./')
  }
  
  const nombreUsuario = document.getElementById('user-name')
  const user = getUserData()
  nombreUsuario.innerText = user.username
  
  nombreUsuario.addEventListener('click', function () {
    swal.fire({
      title: 'You want to exit?',
      icon: 'question',
      iconColor: '#323232',
      confirmButtonColor: '#00008e',
      confirmButtonText: 'Yes!',
      background: 'rgba(223, 175, 1,.8)',
      color: 'black'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear()
        window.location.replace('./index.html')
      }
    })
  })
  
  mostrarPerfiles(artists)
  renderVideos()
  listadoRanking(artists)
  inicializarBotones()
  
  const starContainer = document.createElement('div')
  starContainer.classList.add('contador-star')
  starContainer.innerHTML = `<h2>3</h2><img src="./img/star-pink-krita.png">`
  document.body.appendChild(starContainer)
  
  const rankTable = document.querySelectorAll('.ranking h3')
  let pulsos = getRankData()

  setRank(pulsos, rankTable)

  let contadorPulsos = JSON.parse(sessionStorage.getItem('contador')) ?? 3

  const contadorStarPulsos = document.querySelector('.contador-star h2')
  const pulseButtons = document.querySelectorAll('.videos button')

  descontarPulsos(contadorStarPulsos, pulseButtons, contadorPulsos)

  cambiarTema()
})

function getUserData() {
  const dataJSON = sessionStorage.getItem('user')
  return JSON.parse(dataJSON)
}

function getRankData() {
  const listaPulsos = []
  const dataJSON = localStorage.getItem('pulsos')
  if (dataJSON !== null) {
    JSON.parse(dataJSON).forEach(pulso => listaPulsos.push(pulso))
  } else {
    for (let i = 0; i < artists.length; i++) listaPulsos.push(0)
  }
  return listaPulsos
}

function setRank(pulsosArray, rankTable) {
  pulsosArray.forEach((p, i) => rankTable[i].innerText = p)
}

function cambiarTema() {
  const main = document.querySelector('main')
  const icono = document.querySelector('.fa-star-half-stroke')
  icono.addEventListener('click', function () {
    main.classList.toggle('tema-sitio')
  })
}

function mostrarPerfiles(lista) {
  const profile = document.querySelector('.artist-profile ul')
  lista.forEach(artista => {
    profile.innerHTML += `<li><a href='https://${artista.link}' target='_blank'><img src=${artista.img}></a><h3>${artista.name}</h3></li>`
  })
}

function renderVideos() {
  const videosUl = document.querySelector('.videos ul')
  videosUl.innerHTML += `
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/aM270xHyPMc" frameborder="0"></iframe><button id='damianS'>P\nU\nL\nS\nE</button></li>
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/h_6muWnHVKY" frameborder="0"></iframe><button id='max'>P\nU\nL\nS\nE</button></li>
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/Bkce6lrCafU" frameborder="0"></iframe><button id='telula'>P\nU\nL\nS\nE</button></li>
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/E6PoIv0d1nc" frameborder="0"></iframe><button id='alexS'>P\nU\nL\nS\nE</button></li>
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/yrkBZNbm_Lk" frameborder="0"></iframe><button id='justinJ'>P\nU\nL\nS\nE</button></li>
    <li><iframe width="354" height="630" src="https://www.youtube.com/embed/F-3quTy1Sj4" frameborder="0"></iframe><button id='lunaDi'>P\nU\nL\nS\nE</button></li>
  `
}

function listadoRanking(lista) {
  const articuloRanking = document.querySelector('.ranking ul')
  lista.forEach(artista => {
    articuloRanking.innerHTML += `<li><img src=${artista.img}><a href='https://${artista.link}' target='_blank'>${artista.username}</a><h3 id='${artista.username}'>0</h3></li>`
  })
}

function descontarPulsos(starPulso, buttons, contadorPulsos) {
  const star = document.querySelector('.contador-star')
  let contador = contadorPulsos
  starPulso.innerText = contador

  if (contador === 0) {
    star.style.animation = 'none'
    star.style.opacity = '0.4'
    buttons.forEach(b => {
      b.style.opacity = '0.4'
      b.disabled = true
      b.style.cursor = 'default'
      b.style.transform = 'none'
    })
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      pulsosPush()
      localStorage.setItem('pulsos', JSON.stringify(pulsos))
      contadorPulsos--
      sessionStorage.setItem('contador', JSON.stringify(contadorPulsos))

      if (contadorPulsos > 0) {
        starPulso.innerText = contadorPulsos
        star.classList.add('transition')
        setTimeout(() => star.classList.remove('transition'), 1300)
      } else {
        starPulso.innerText = 0
        star.classList.add('transition')
        setTimeout(() => {
          star.style.animation = 'none'
          star.style.transition = 'opacity 1000ms'
          star.style.opacity = '0.4'
        }, 1200)
        buttons.forEach(b => {
          b.style.transition = 'opacity 1500ms'
          b.style.opacity = '0.4'
          b.disabled = true
          b.style.cursor = 'default'
          b.style.transform = 'none'
        })
      }
    })
  })
}

function pulsosPush() {
  pulsos = [
    document.getElementById('@DamianSalazarOficial')?.innerText ?? '0',
    document.getElementById('@MaxOstro')?.innerText ?? '0',
    document.getElementById('@telula')?.innerText ?? '0',
    document.getElementById('@alexshudrums')?.innerText ?? '0',
    document.getElementById('@justinjohnsonlive')?.innerText ?? '0',
    document.getElementById('@lunadimusic')?.innerText ?? '0'
  ]
}

function inicializarBotones() {
  const ids = {
    'damianS': '@DamianSalazarOficial',
    'max': '@MaxOstro',
    'telula': '@telula',
    'alexS': '@alexshudrums',
    'justinJ': '@justinjohnsonlive',
    'lunaDi': '@lunadimusic'
  }

  Object.entries(ids).forEach(([btnId, pulseId]) => {
    const boton = document.getElementById(btnId)
    const casillero = document.getElementById(pulseId)
    if (boton && casillero) {
      boton.addEventListener('click', () => {
        casillero.innerText++
      })
    }
  })
}
