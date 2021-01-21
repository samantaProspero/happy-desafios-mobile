import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#39CC83'
  },
  topBar:{
    width: 250,
    height: 306,
    alignSelf: 'center',
    marginTop: 120,
  },
  title:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
    lineHeight:45,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 32
  },
  description:{
    fontSize: 18,
    lineHeight:30,
    color: '#FFF',
    textAlign: "center",
    marginHorizontal: 34,
    marginTop: 18
  },
  button:{
    width: 120,
    height: 56,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#19C06D',
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