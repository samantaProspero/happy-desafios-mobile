import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import Ilustra from '../../images/Ilustra02.png';
import goIcon from '../../images/icons/goicon.png';
import styles from './styles';





function Onboarding2 (){
  const { navigate } = useNavigation()
  function handleGo(){
    navigate('OrphanagesMap')
  }

  return (
    <View style={styles.container}>
      <Image source={Ilustra} style={styles.topBar}/>
      <View>
        <Text style={styles.title} >
        Escolha um orfanato no mapa e faça uma visita
          </Text>
        <BorderlessButton onPress={handleGo}>
          <Image source={goIcon} resizeMode="contain" style={styles.goicon}/>
        </BorderlessButton>
      </View>
    </View>
  )
}
export default Onboarding2;