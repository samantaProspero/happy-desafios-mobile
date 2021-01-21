import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  topBar:{
    width: 256,
    height: 280,
    alignSelf: 'center',
    marginTop: 60,
  },
  title:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 48,
    lineHeight:48,
    color: '#0089A5',
    marginHorizontal: 46,
    marginTop: 47
  },
  description:{
    fontSize: 20,
    lineHeight:30,
    color: '#5C8599',
    marginHorizontal: 46,
    marginTop: 20

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