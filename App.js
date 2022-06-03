import React from 'react';
import { StyleSheet ,Text ,View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Menu from './src/components/Menu';
import { Animated } from 'react-native';
import { PanGestureHandler , State } from 'react-native-gesture-handler';

import { Container , 
  Content , 
  Card , 
  CardHeader , 
  CardContent , 
  Title , 
  Description , 
  CardFooter ,
  Annotation} from './src/pages/Main/styles';
  
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Routes from '~/routes';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
      <Container>
         <Header />

         <Content>

           <Menu />

          <PanGestureHandler>
           <Card>
             <CardHeader>
                 <Icon name="attach-money" size={28} color="#666"/>
                 <Icon name="visibility-off" size={28} color="#666"/>
             </CardHeader>

             <CardContent>
                 <Title>Saldo disponinel</Title>
                 <Description>R$ 202.618,668</Description>
             </CardContent>

             <CardFooter>
                 <Annotation>
                     Tranferência de R$ 110.000,00 recebida de Lucas Silva  hoje às 18:02.
                 </Annotation>
             </CardFooter>

           </Card>
          </PanGestureHandler>
         </Content>

         <Tabs />
      </Container>
    </>
  )
}