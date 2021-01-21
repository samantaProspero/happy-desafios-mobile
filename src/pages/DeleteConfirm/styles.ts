import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FF669D'
  },
  topBar:{
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginTop: 256,
  },
  title:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 32,
    lineHeight:34,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 32
  },
  description:{
    fontSize: 18,
    lineHeight:30,
    color: '#FFF',
    textAlign: "center",
    marginHorizontal: 81,
    marginTop: 18
  },
  buttons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonNao:{
    width: 128,
    height: 56,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: '#D6487B',

  },
  buttonSim:{
    width: 128,
    height: 56,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6487B',
    borderRadius: 20,
    marginTop: 20,
  },  
  textButton:{
  fontSize: 15,
  lineHeight:25,
  color: '#FFF',
  textAlign: "center",
  paddingVertical: 15
  },

})
export default styles;