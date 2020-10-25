import React from 'react';
import { Icon, ModalBody, ModalContainer, ModalHeader, Name, IconSpan, ModalContent, Info, Description } from './styles';
import CloseIcon from '@material-ui/icons/Close';



export default class MovieInfoModal extends React.Component {

    closeInfo = () => {
        this.props.onClose();
    }

    render() {
        return (
            <ModalContainer>
                <ModalBody>
                    <ModalHeader url={this.props.movie.backdrop_path}>
                        <IconSpan onClick={this.closeInfo}>
                            <Icon>
                                <CloseIcon></CloseIcon>
                            </Icon>
                        </IconSpan>

                        <Name>{this.props.movie.original_name ? this.props.movie.original_name : this.props.movie.title}</Name>
                    </ModalHeader>

                    <ModalContent>
                        <Info>
                            {this.props.movie.vote_average} pontos
                        </Info>

                        <Description>{this.props.movie.overview}</Description>
                    </ModalContent>
                </ModalBody>
            </ModalContainer>
        )
    }
}