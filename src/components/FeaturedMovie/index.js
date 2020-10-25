import React from 'react';
import { Featured, FeaturedVertical, FeaturedHorizontal, Name, Info, Inline, Green, Description, Buttons, Button, Genres } from './styles';

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    let description = item.overview;
    if (description.length > 250) {
        description = description.substring(0, 200) + '...';
    }

    item.genres.forEach(genre => {
        genres.push(genre.name);
    });

    return (
        <Featured style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Inline>
                            <Green>{item.vote_average} pontos</Green>
                        </Inline>
                        <Inline>
                            <div>{firstDate.getFullYear()}</div>
                        </Inline>
                        <Inline>
                            <div>{item.number_of_seasons} {item.number_of_seasons > 1 ? 'temporadas' : 'temporada'}</div>
                        </Inline>

                        <Description>{description}</Description>

                        <Buttons>
                            <Button color={'#000'} backgroundColor={'#FFF'} href={`/watch/${item.id}`}>► Assistir</Button>
                            <Button color={'#FFF'} backgroundColor={'#333'} href={`/list/add/${item.id}`}>+ Minha Lista</Button>
                        </Buttons>

                        <Genres><strong>Gêneros:</strong> {genres.join(', ')}</Genres>
                    </Info>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </Featured>
    )
};