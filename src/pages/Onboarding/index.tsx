import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import Ilustra from '../../images/ilustra.png';
import goIcon from '../../images/icons/goicon.png';
import styles from './styles';





function Onboarding (){
  const { navigate } = useNavigation()
  function handleGo(){
    navigate('DeleteConfirm')
  }

  return (
    <View style={styles.container}>
      <Image source={Ilustra} style={styles.topBar}/>
      <View>
        <Text style={styles.title} >Leve felicidade para o mundo</Text>
        <Text style={styles.description} >
          Visite orfanatos e mude o dia de muitas crianças.
        </Text>
        <BorderlessButton onPress={handleGo}>
          <Image source={goIcon} resizeMode="contain" style={styles.goicon}/>
        </BorderlessButton>
      </View>
    </View>
  )
}
export default Onboarding;