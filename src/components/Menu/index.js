import React from "react";
import {Container, Code , Nav, NavItens , NavText , SignOutButton , SignOutButtonText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
    return(
        <Container>
            <Code>
                <Icon name="qr-code" size={95} color="#FFF"/>
            </Code>

            <Nav>
                <NavItens>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavText>Me Ajuda</NavText>
                </NavItens>

                <NavItens>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItens>

                <NavItens>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar Cartão</NavText>
                </NavItens>

                <NavItens>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do App</NavText>
                </NavItens>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}