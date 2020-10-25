import React from 'react';
import tmdb from './providers/tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import './styles';
import { List, Loading } from './styles';
import MovieInfoModal from './components/MovieInfoModal';

export default class App extends React.Component {
    state = {
        movieList: [],
        featuredData: null,
        showBlack: false,
        chosenMovie: null,
        showModal: false,
    }

    showMovieInfo = (movie) => {
        this.setState({ chosenMovie: movie, showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    loadAll = async () => {
        let list = await tmdb.getHomeList();
        this.setState({ movieList: list });

        let originals = list.filter(item => item.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
        let chosen = originals[0].itens.results[randomChosen];
        let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

        this.setState({ featuredData: chosenInfo });
    }

    componentDidMount() {
        this.loadAll();
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ showBlack: window.scrollY > 10 ? true : false });
    }

    render() {
        return (
            <div>
                <Header blackHeader={this.state.showBlack} />

                {this.state.showModal && <MovieInfoModal onClose={this.closeModal} movie={this.state.chosenMovie} />}

                {this.state.featuredData != null && <FeaturedMovie item={this.state.featuredData} />}

                <List>
                    {this.state.movieList.map((movie, key) => (
                        <MovieRow onMovieSelect={this.showMovieInfo} key={key} title={movie.title} itens={movie.itens} />
                    ))}
                </List>

                <footer>
                    Made using TMDB API <br />
                    Copyright to Netflix
                </footer>

                {this.state.movieList.length <= 0 && <Loading>
                    <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando..." />
                </Loading>}

            </div>
        )
    }

}