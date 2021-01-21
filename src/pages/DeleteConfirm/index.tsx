import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import Ilustra from '../../images/icons/cancel.png';
import goIcon from '../../images/icons/goicon.png';
import styles from './styles';


function DeleteConfirm (){
  const { navigate, goBack } = useNavigation()
  function handleGo(){
    navigate('Onboarding')
  }
  function handleGoBack(){
    goBack()
  }

  return (
    <View style={styles.container}>
      <Image source={Ilustra} style={styles.topBar}/>
      <View>
        <Text style={styles.title} >Cancelar cadastro</Text>
        <Text style={styles.description} >
          Tem certeza que quer cancelar esse cadastro?
        </Text>
        <View style={styles.buttons}>
          <RectButton style={styles.buttonNao} onPress={handleGoBack}>
            <Text style={styles.textButton} >Não</Text>
          </RectButton>
          <RectButton style={styles.buttonSim} onPress={handleGo}>
            <Text style={styles.textButton} >Sim</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
export default DeleteConfirm;