import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  topBar:{
    width: 295,
    height: 427,
    alignSelf: 'center',
    marginTop: 60,
  },
  title:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    lineHeight:36,
    color: '#0089A5',
    marginHorizontal: 40,
    textAlign: 'right',
    marginTop: 47
  },
  goicon:{
    width: 56,
    height: 56,
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 20
  }
})
export default styles;