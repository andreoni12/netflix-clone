import React from 'react';
import { Header, Logo, User } from './styles';

export default ({blackHeader}) => {
    return (
        <Header blackHeader={blackHeader}>
            <Logo>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo-netflix" />
                </a>
            </Logo>
            <User>
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user-logo" />
                </a>
            </User>
        </Header>
    )
}