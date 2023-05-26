import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Image, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';


import imgLogin from './assets/hamburguer.png';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;


const Consulta = (props)=>{

  const [visivel, setVisivel] = useState(false);

  return(
    <View style = {{flex: 1, backgroundColor: "#202025"}}>    

      <View style = {{flexDirection: "row", marginTop: 30}}>
        <View>
          <AntDesign name = "user" size = {30} color = "white"/>
        </View>

        <View style = {{flexDirection: "row", alignItems:"center", marginLeft: 100}}>
          <Image source = {imgLogin} style = {styles.logoConsulta}/>
          <Text style= {{color: "white", textAlign: "center", fontSize: 16, fontWeight: 700}}>TechTitan</Text>  
        </View>

        <View style = {{marginLeft: 103}}>
          <AntDesign name="hearto" size = {30} color = "white"/>
        </View>
      </View>   

      <View style = {{marginTop: 10}}>
        <TextInput placeholder = "Digite o nome ou QR Code do produto"
                   style = {{borderWidth: 1, borderColor: "gray",
                              paddingVertical: 15, fontSize: 16,
                              borderRightWidth: 0, borderLeftWidht: 0}}/>
      </View>

      
        <Modal transparent = {true} visible = {visivel} animationType= "slide" onRequestClose={()=>{setVisivel(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgLogin} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Água</Text>
            <View style = {{marginTop: 10}}>
              <Text style = {styles.dadosModal}>Fazenda: FIAP </Text>
              <Text style = {styles.dadosModal}>Fábrica: FIAP</Text>
              <Text style = {styles.dadosModal}>Distribuidor: FIAP</Text>
              <Text style = {styles.ModalButton}onPress = {() =>{
              setVisivel(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>
        <Text onPress = {()=>{
          setVisivel(true)
        }}>Agúa</Text>
     
      

    
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
  const [logado, setLogado] = useState(true);


  const fazerLogin = ( logged ) =>{
    setLogado( logged )
  }

  return(
    <NavigationContainer>
      <View style = {{flex: 1}}>
      {logado ? <Consulta/> : 
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

  logoConsulta:{
    height: 100, 
    width: 100,
    borderRadius: 9,
    alignSelf: "center",
    marginTop: 10
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
  },

  VModal:{
    backgroundColor: "white",
    marginHorizontal: 20,
    height: "50%",
    borderRadius: 9
  },

  ModalButton:{
    backgroundColor: "#4B74C5",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500
  },

  titleModal:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    marginTop: 5
  },

  dadosModal:{
    fontSize: 14,
    marginLeft: 130
  }
})