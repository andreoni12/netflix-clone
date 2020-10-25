const API_KEY = '52a50fd83859ba503241c1541e268099';
const API_BASE = 'https://api.themoviedb.org/3';

const fetchData = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                itens: await fetchData(`/discover/tv?with_network=213?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: await fetchData(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await fetchData(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await fetchData(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await fetchData(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await fetchData(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await fetchData(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: await fetchData(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (id, type) => {
        let info = {};

        if (id) {
            switch (type) {
                case 'movie':
                    info = await fetchData(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await fetchData(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    break;
            }
        }

        return info;
    }
}