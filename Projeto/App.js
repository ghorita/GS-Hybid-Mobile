import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Image, Modal, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import axios from 'axios';
import api from './src/services/api';



import imgLogin from './assets/hamburguer.png';
import imgCarne from './assets/carne.jpg';
import imgMilho from './assets/milho.jpg';
import imgTomate from './assets/tomate.jpg';
import imgBrocolis from './assets/brocolis.jpg';




const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;


const Consulta = (props)=>{

  const [modalMilho, setModalMilho] = useState(false);
  const [modalCarne, setModalCarne] = useState(false);
  const [modalTomate, setModalTomate] = useState(false);
  const [modalBrocolis, setModalBrocolis] = useState(false)

  async function consultaApi(){

    const response = await api.get('documentation');
    console.log(response);
  }
  

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


    <View style = {{flexDirection: "row"}}>
      <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalMilho} animationType= "slide" onRequestClose={()=>{setModalMilho(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgMilho} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Milho</Text>
            <View style = {{marginTop: 10}}>
              <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: </Text>
              <Text style = {styles.dadosModal}>Categoria: </Text>
              <Text style = {styles.dadosModal}>Origem: </Text>
              <Text style = {styles.dadosModal}>Data de validade: </Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: </Text>
              <Text style = {styles.dadosModal}>Nome: </Text>
              <Text style = {styles.dadosModal}>Endereço: </Text>
              <Text style = {styles.dadosModal}>contato: </Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: </Text>
              <Text style = {styles.dadosModal}>Nome: </Text>
              <Text style = {styles.dadosModal}>Endereço: </Text>
              <Text style = {styles.dadosModal}>contato: </Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: </Text>
              <Text style = {styles.dadosModal}>Gorduras totais: </Text>
              <Text style = {styles.dadosModal}>Gordura saturada: </Text>
              <Text style = {styles.dadosModal}>Gordura trans: </Text>
              <Text style = {styles.dadosModal}>Colesterol: </Text>
              <Text style = {styles.dadosModal}>Carboidrato: </Text>
              <Text style = {styles.dadosModal}>Açucar: </Text>
              <Text style = {styles.dadosModal}>Proteínas: </Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: </Text>


              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalMilho(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgMilho} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalMilho(true)
          }}>Milho</Text>
        </View>
       </View> 

       <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalCarne} animationType= "slide" onRequestClose={()=>{setModalCarne(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgCarne} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Água</Text>
            <View style = {{marginTop: 10}}>
              <Text style = {styles.dadosModal}>Fazenda: FIAPO </Text>
              <Text style = {styles.dadosModal}>Fábrica: FIAP</Text>
              <Text style = {styles.dadosModal}>Distribuidor: FIAP</Text>
              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalCarne(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgCarne} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalCarne(true)
          }}>Carne</Text>
        </View>
       </View> 
    </View>
    
    <View style = {{flexDirection: "row"}}>
      <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalTomate} animationType= "slide" onRequestClose={()=>{setModalTomate(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgTomate} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Água</Text>
            <View style = {{marginTop: 10}}>
              <Text style = {styles.dadosModal}>Fazenda: FIAP </Text>
              <Text style = {styles.dadosModal}>Fábrica: FIAP</Text>
              <Text style = {styles.dadosModal}>Distribuidor: FIAP</Text>
              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalTomate(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgTomate} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalTomate(true)
          }}>Tomate</Text>
        </View>
       </View> 

       <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalBrocolis} animationType= "slide" onRequestClose={()=>{setModalBrocolis(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgBrocolis} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Água</Text>
            <View style = {{marginTop: 10}}>
              <Text style = {styles.dadosModal}>Fazenda: FIAPO </Text>
              <Text style = {styles.dadosModal}>Fábrica: FIAP</Text>
              <Text style = {styles.dadosModal}>Distribuidor: FIAP</Text>
              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalBrocolis(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgBrocolis} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalBrocolis(true)
          }}>Brócolis</Text>
        </View>
       </View> 
    </View>

    <Button title = 'consulta'  onPress={consultaApi}/>
       

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
    height: 50, 
    width: 50,
    borderRadius: 9,
    alignSelf: "center",
    marginTop: 10
  },

  logoModal:{
    width: 180, 
    height: 180,
    marginLeft: 10,
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
  },

  VModal:{
    backgroundColor: "#5F6D7A",
    marginHorizontal: 20,
    height: "80%",
    borderRadius: 9
  },

  ModalButton:{
    backgroundColor: "#4B74C5",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500
  },

  titleModal:{
    fontSize: 18,
    fontWeight: 700,
    marginTop: 5,
    textAlign: "center"
  },

  dadosModal:{
    fontSize: 14,
    marginLeft: 130
  }
})