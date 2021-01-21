import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import Onboarding from './pages/Onboarding';
import Onboarding2 from './pages/Onboarding2';
import Success from './pages/Success';
import DeleteConfirm from './pages/DeleteConfirm';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import  Header  from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
        <Screen 
          name="Onboarding" 
          component={Onboarding} />
        <Screen 
          name="Onboarding2" 
          component={Onboarding2} />
        <Screen 
          name="Success" 
          component={Success} />
        <Screen 
          name="DeleteConfirm" 
          component={DeleteConfirm} />
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap} />
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title= "Orfanato" />
          }} />
        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition} 
          options={{
            headerShown: true,
            header: () => <Header title= "Selecione no mapa" />
          }} />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData} 
          options={{
            headerShown: true,
            header: () => <Header title= "Informe os dados" />
          }} />

      </Navigator>
    </NavigationContainer>
  )
}