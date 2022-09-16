// Movie App
const left = document.getElementById('left')
const right = document.getElementById('right')
const pageNo = document.getElementById('pageNo')
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
let page = 1
let API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=59a109543f6789b139444cfe1abbddd3&query="'
const btns = document.querySelectorAll('.btn')
const theatresBtn = document.getElementById('theatres')
const kidsBtn = document.getElementById('kids')
const bestBtn = document.getElementById('best')
const dramaBtn = document.getElementById('drama')

left.addEventListener('click', () => {
    if (page > 1) {
        if (theatresBtn.classList.contains('active') && theatresBtn.id === 'theatres') {
            page--
            API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-08-01&primary_release_date.lte=2022-12-31&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            pageNo.innerText = page
        } else if (kidsBtn.classList.contains('active') && kidsBtn.id === 'kids') {
            page--
            API_URL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            pageNo.innerText = page
        } else if (bestBtn.classList.contains('active') && bestBtn.id === 'best') {
            page--
            API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            pageNo.innerText = page
        } else if (dramaBtn.classList.contains('active') && dramaBtn.id === 'drama') {
            page--
            API_URL = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            pageNo.innerText = page
        } else {
            page--
            API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            pageNo.innerText = page
        }
    } else {
        page = 1
    }
})

right.addEventListener('click', () => {
    if (theatresBtn.classList.contains('active') && theatresBtn.id === 'theatres') {
        page++
        API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-08-01&primary_release_date.lte=2022-12-31&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
        getMovies(API_URL)
        pageNo.innerText = page
    } else if (kidsBtn.classList.contains('active') && kidsBtn.id === 'kids') {
        page++
        API_URL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
        getMovies(API_URL)
        pageNo.innerText = page
    } else if (bestBtn.classList.contains('active') && bestBtn.id === 'best') {
        page++
        API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
        getMovies(API_URL)
        pageNo.innerText = page
    } else if (dramaBtn.classList.contains('active') && dramaBtn.id === 'drama') {
        page++
        API_URL = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
        getMovies(API_URL)
        pageNo.innerText = page
    } else {
        page++
        API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
        getMovies(API_URL)
        pageNo.innerText = page
    }
})

btns.forEach(btn => {
    btn.addEventListener('click', changeApi)
})

function changeApi(id) {
    id = this.id
    switch (id) {
        case 'theatres':
            page = 1
            pageNo.innerText = page
            API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-08-01&primary_release_date.lte=2022-12-31&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            break;
        case 'kids':
            page = 1
            pageNo.innerText = page
            API_URL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            break;
        case 'best':
            page = 1
            pageNo.innerText = page
            API_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            break;
        case 'drama':
            page = 1
            pageNo.innerText = page
            API_URL = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=59a109543f6789b139444cfe1abbddd3&page=${page}`
            getMovies(API_URL)
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            btns.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            break;
        default:
            break;
    }
}

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {
            title,
            poster_path,
            vote_average,
            overview,
            release_date
        } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
          <div class="release_date">${release_date}</div
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})