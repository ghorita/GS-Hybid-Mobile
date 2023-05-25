import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import imgLogin from './assets/hamburguer.png';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;


const Registro = (props)=>{
  return(
    <View style = {{flex: 1, backgroundColor: "#202025"}}>    
       <Text>TELA DE REGISTRO</Text>
      </View>
  )
}

const Login = (props) =>{

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return(

    <View style = {{flex: 1, backgroundColor: "#202025"}}>
      <Image source = {imgLogin} style = {styles.logoLogin}/>

      <View style = {{marginTop: 10}}>
        <TextInput placeholder = "Email" style = {styles.inputLogin} value = {email} onChangeText = {setEmail}/>
        <TextInput  secureTextEntry = {true} placeholder = "Senha"style = {styles.inputLogin} value = {senha} onChangeText = {setSenha}/>

        <Text style = {styles.buttonLogin} onPress={()=>{
        AsyncStorage.getItem("USUARIOS")
        .then((info)=>{ 
          const usuarios = JSON.parse(info);
          let achado = false
          for( const user of usuarios) { 
            if (user.email === email && 
                user.senha === senha){ 
                  achado = true;
            }
          }
          if (achado) { 
            props.onLogar(true);
            alert("Usuario logado");
          } else {
            props.onLogar(false);
            alert("Usuario ou senha incorretos");
          }

        })
        .catch((err) => alert("Erro ao ler a lista e usuarios"))
      }}>Login</Text>
  
        <Text style = {{color: "white", textAlign: "center", marginTop: 20}}>Ainda não tem cadastro?</Text>

        <Text style = {styles.buttonCriar} onPress={()=>{
        const usuarios = [ {email: "joao@teste.com", senha: "1234"},
        {email: "gustavo@teste.com", senha: "1234"},
        {email: "julia@teste.com", senha: "1234"},
        {email: "vinicius@teste.com", senha: "1234"} ]
        AsyncStorage.setItem("USUARIOS", JSON.stringify(usuarios));
        alert("Ok")
      }}>Criar Conta</Text>
     
        
      </View>
    </View>
  )
}


const Telas = (props)=>{
  return(
    <View style = {{flex: 1}}>
      <Text>TESTE</Text>
      <Navigator>
        <Screen name = "Registro">
          {(props)=><Registro{...props}/>}
        </Screen>

        <Screen name = "Login">
          {(props)=><Login{...props}/>}
        </Screen>
      </Navigator>
    </View>
  )
}

export default function App(){
  const [logado, setLogado] = useState();


  const fazerLogin = ( logged ) =>{
    setLogado( logged )
  }

  return(
    <NavigationContainer>
      <View style = {{flex: 1}}>
      {logado ? <Registro/> : 
                  <Login onLogar={fazerLogin}/>}
      </View>
    </NavigationContainer>
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
  },
  logoLogin:{
    height: 200, 
    width: 200,
    alignSelf: "center",
    marginTop: 60,
    borderRadius: 9
  },

  inputLogin:{
    backgroundColor: "#32323A",
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 50,
    borderRadius: 9,
    color: "gray"
  },

  buttonLogin:{
    backgroundColor: "#4B74C5",
    paddingVertical: 10,
    marginHorizontal: 80,
    borderRadius: 9,
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 900
  },

  buttonRegistrarse:{
    backgroundColor: "#4B74C5",
    paddingVertical: 10,
    marginHorizontal: 140,
    borderRadius: 9,
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 900
  }
})