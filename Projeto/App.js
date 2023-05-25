import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image, ImageBackground, ScrollView, FlatList, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import imgLogin from './assets/hamburguer.png';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const Registro = (props)=>{

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");

  return(
    <View style = {{flex: 1, backgroundColor: "#202025"}}>    
        <Text style= {{textAlign: "center", color: "white", FontWeight: 900, fontSize: 24, marginTop: 40}}>Criando nova conta</Text>
        <Text style = {{textAlign: "center", color: "gray", fontSize: 14, marginTop: 10}}>Por favor, preencha tudo para continuar</Text>
        
        <View style = {{marginTop: 40}}>
          <TextInput placeholder = "Nome completo" style = {styles.inputRegistrar} value = {nome} onChangeText = {setNome}/>
          <TextInput placeholder = "Email" style = {styles.inputRegistrar} value = {email} onChangeText = {setEmail}/>
          <TextInput placeholder = "Senha" style = {styles.inputRegistrar} value = {senha} onChangeText = {setSenha}/>
          <TextInput placeholder = "CEP" style = {styles.inputRegistrar} value = {cep} onChangeText = {setCep}/>

        <Text style = {styles.buttonCriar} title="Registrar" onPress={()=>{
          const usuarios = [
            {nome: "Gustavo", email: "gustavo@teste.com", senha: "123", cep: "111"},
            {nome: "Julia", email: "julia@teste.com", senha: "123", cep: "222"}]
        AsyncStorage.setItem("USUARIOS", JSON.stringify(usuarios));
      }}>Criar conta</Text>
 
        </View>

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
        <TextInput placeholder = "Senha"style = {styles.inputLogin} value = {senha} onChangeText = {setSenha}/>

        <Text style = {styles.buttonLogin}>Login</Text>
        <Text style = {{color: "white", textAlign: "center", marginTop: 20}}>Ainda não tem cadastro?</Text>
        <Text style = {styles.buttonCriar} title="Login" onPress={()=>{
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
          {()=><Registro/>}
        </Screen>

        <Screen name = "Login">
          {()=><Login/>}
        </Screen>
      </Navigator>
    </View>
  )
}

export default function App(){

  const Tab = createBottomTabNavigator();
  const {Navigator, Screen} = Tab;

  return(
    <NavigationContainer>
      <View style = {{flex: 1}}>
        <Telas/>
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