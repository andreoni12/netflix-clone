import React from 'react';
import './styles';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { MovieRow, ListArea, Item, List, Navigator, Left, Right } from './styles';

export default class MovieRowComponent extends React.Component {
    state = {
        scrollX: 0,
    }

    handleLeftArrow = () => {
        let x = this.state.scrollX + Math.round(window.innerWidth / 2);

        x = x > 0 ? 0 : x;
        this.setState({ scrollX: x })
    }

    handleRightArrow = () => {
        let x = this.state.scrollX - Math.round(window.innerWidth / 2);
        let max = this.props.itens.results.length * 180;

        x = (x < (window.innerWidth - max) ? (window.innerWidth - max) - 60 : x);
        this.setState({ scrollX: x })
    }

    selectMovie(movie) {
        this.props.onMovieSelect(movie);
    }

    render() {
        return (
            <MovieRow>
                <h2>{this.props.title}</h2>
                <Left>
                    <Navigator onClick={this.handleLeftArrow}>
                        <NavigateBeforeIcon style={{ fontSize: 50 }} />
                    </Navigator>
                </Left>

                <Right>
                    <Navigator onClick={this.handleRightArrow}>
                        <NavigateNextIcon style={{ fontSize: 50 }} />
                    </Navigator>
                </Right>

                <ListArea>
                    <List style={{
                        marginLeft: this.state.scrollX,
                        width: this.props.itens.results.length * 180
                    }}>
                        {this.props.itens?.results?.length > 0 && this.props.itens.results?.map((item, key) => (
                            <Item key={key}>
                                <img onClick={() => this.selectMovie(item)} alt={item.name} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                            </Item>
                        ))}
                    </List>
                </ListArea>
            </MovieRow >
        );
    }
}