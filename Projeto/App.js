import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, ImageBackground, ScrollView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Registro = ()=>{
  return(
    <View style = {{flex: 1, backgroundColor: "#202025"}}>    
        <Text style= {{textAlign: "center", color: "white", FontWeight: 900, fontSize: 24, marginTop: 40}}>Criando nova conta</Text>
        <Text style = {{textAlign: "center", color: "gray", fontSize: 14, marginTop: 10}}>Por favor, preencha tudo para continuar</Text>
        
        <View style = {{marginTop: 40}}>
          <TextInput placeholder = "Nome completo" style = {styles.inputRegistrar}/>
          <TextInput placeholder = "Email" style = {styles.inputRegistrar}/>
          <TextInput placeholder = "Senha" style = {styles.inputRegistrar}/>
          <TextInput placeholder = "CEP" style = {styles.inputRegistrar}/>
          
          <Text style = {styles.buttonCriar}>Criar conta</Text>
        </View>

      </View>
  )
}







export default function App(){

  const Tab = createBottomTabNavigator();
  const {Navigator, Screen} = Tab;

  return(
    <View style = {{flex: 1}}>
      <Registro/>
    </View>
  )
}



const styles = StyleSheet.create({
  inputRegistrar:{
    backgroundColor: "#32323A",
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 50,
    borderRadius: 9,
  },

  buttonCriar:{
    backgroundColor: "#4B74C5",
    paddingVertical: 10,
    marginHorizontal: 80,
    borderRadius: 9,
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 900
  }
})