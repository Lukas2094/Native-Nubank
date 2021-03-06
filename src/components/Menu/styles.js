import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.ScrollView.attrs({
     contentContainerStyle: {alignItems: 'center'}
})` 
     margin: 0 30px;
`;

export const Code = styled.View`
    /* background: #FFF; */
    padding: 10px;
    align-self: stretch;
    align-items: center;
`;

export const Nav = styled.View`
    width: 100%;
    margin-top: 10px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255 , 255 , 255 , 0.8);
 
`;

export const NavItens = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255 , 255 , 255 , 0.8);
`;

export const NavText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
    margin-left: 20px;

`;

export const SignOutButton = styled.TouchableOpacity`
    width: 100%;
    border: rgba(255 , 255 , 255 , 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const SignOutButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 13px;
`;