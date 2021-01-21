import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Ilustra from '../../images/success.png';
import goIcon from '../../images/icons/goicon.png';
import styles from './styles';

function Success (){
  const { navigate } = useNavigation()
  function handleGo(){
    navigate('Onboarding')
  }

  return (
    <View style={styles.container}>
      <Image source={Ilustra} style={styles.topBar}/>
      <View>
        <Text style={styles.title} >Ebaaa!</Text>
        <Text style={styles.description} >
          `O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)`
        </Text>
        <RectButton style={styles.button} onPress={handleGo}>
          <Text style={styles.textButton} >OK</Text>
        </RectButton>
      </View>
    </View>
  )
}
export default Success;