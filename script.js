const BASEURLAPI = 'https://api.themoviedb.org/3';
const APIKEY = '87d5b20bdad5ee372ff4e52f3d4b4acd';
const URLIMAGES = 'https://image.tmdb.org/t/p';
const IMAGE_SIZE_W300 = "w300";
const IMAGE_SIZE_W780 = "w780";
const IMAGE_SIZE_W1280 = "w1280";
const IMAGE_SIZE_ORIGINAL = "original";
const MESSAGEERROR = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';

async function getNowPlaying(page) {
    page = page ? page : 1;
    try {
        return await $.ajax({
            url: `${BASEURLAPI}/movie/now_playing`,
            data: {
                api_key: APIKEY,
                page: page,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGEERROR);
    }       
}

async function getMovie(id) {
    try {
        return await $.ajax({
            url: `${BASEURLAPI}/movie/${id}`,
            data: {
                api_key: APIKEY,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGEERROR);
    } 
}

async function searchMovies(search) {
    try {
        return await $.ajax({
            url: `${BASEURLAPI}/search/movie`,
            data: {
                api_key: APIKEY,
                query: search,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGEERROR);
    }
}
