import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet, Image, Modal, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'axios';



import imgCarne from './assets/carne.jpg';
import imgMilho from './assets/milho.jpg';
import imgTomate from './assets/tomate.jpg';
import imgBrocolis from './assets/brocolis.jpg';
import imgOvo from './assets/ovos.jpg';
import imgArroz from './assets/arroz.jpg';
import imgCenoura from './assets/cenoura.jpg';
import imgBeringela from './assets/beringela.jpg';
import imgLogo from './assets/logo.png';


const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const Procurar = (props) =>{

  const [alimentos, setAlimentos] = useState([]);

  const api  = axios.create({
    baseURL: "https://api-techtitans-default-rtdb.firebaseio.com"
  });

  useEffect(()=>{
    api.get("/TAB_ALIMENTO.json")
    .then((info)=>{
      const lista = []
      for (const chave in info.data) { 
        const obj = info.data[chave];
        obj["ID"] = chave;
        lista.push(obj);
      }

      setAlimentos(lista)
    })
    .catch((err)=>{alert("Erro ao acessar a lista de despesas")})
}, [])
  
  return(
    <View style = {{flex: 1, backgroundColor: "#202025" }}> 
      <View style = {{flexDirection: "row", marginTop: 30}}>
        <View>
          <AntDesign name = "user" size = {30} color = "white"/>
        </View>

        <View style = {{flexDirection: "row", alignItems:"center", marginLeft: 100}}>
          <Image source = {imgLogo} style = {styles.logoConsulta}/>
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
                              borderRightWidth: 0, borderLeftWidth: 0}}/>
        <Text style = {styles.buttonProcurar}>Consultar</Text>
      </View>

      <View>
        <Text>ALimento</Text>
        <Text>ID:</Text>
        <Text>Categoria: </Text>
        <Text>Origem: </Text>
        <Text>Data de validade: </Text>
      </View>

      <Button title="Ler a Lista" onPress={()=>{
        api.get("/TAB_ALIMENTO.json")
        .then((info)=>{alert("Dados lidos: " + JSON.stringify(info.data))})
        .catch((err)=>{alert("Erro: " + err)})
      }}/>

      
      <Button title="Salvar na Lista" onPress={()=>{
        api.post("/agenda.json", 
        {nome: "Maria Silva", email:"maria@teste.com", telefone: "(11) 222-222"})
        .then((info)=>{alert("Dados lidos: " + JSON.stringify(info.data))})
        .catch((err)=>{alert("Erro: " + err)})
      }}/>


      
    </View>
  )
}


const Alimentos = (props)=>{

  const [modalMilho, setModalMilho] = useState(false);
  const [modalCarne, setModalCarne] = useState(false);
  const [modalTomate, setModalTomate] = useState(false);
  const [modalBrocolis, setModalBrocolis] = useState(false);
  const [modalOvo, setModalOvo] = useState(false);
  const [modalArroz, setModalArroz] = useState(false);
  const [modalCenoura, setModalCenoura]= useState(false);
  const [modalBeringela, setModalBeringela] = useState(false);

  
  return(
    <View style = {{flex: 1, backgroundColor: "#202025"}}>    

      <View style = {{flexDirection: "row", marginTop: 30}}>
        <View>
          <AntDesign name = "user" size = {30} color = "white"/>
        </View>

        <View style = {{flexDirection: "row", alignItems:"center", marginLeft: 100}}>
          <Image source = {imgLogo} style = {styles.logoConsulta}/>
          <Text style= {{color: "white", textAlign: "center", fontSize: 16, fontWeight: 700}}>TechTitan</Text>  
        </View>

        <View style = {{marginLeft: 103}}>
          <AntDesign name="hearto" size = {30} color = "white"/>
        </View>
      </View>  

  <ScrollView>
    <View style = {{flexDirection: "row"}}>
      <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalMilho} animationType= "slide" onRequestClose={()=>{setModalMilho(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgMilho} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Milho</Text>
            <View style = {{marginTop: 10}}>
              <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 1 </Text>
              <Text style = {styles.dadosModal}>Categoria: Cereais </Text>
              <Text style = {styles.dadosModal}>Origem: Plantação Ágricola </Text>
              <Text style = {styles.dadosModal}>Descriçaõ: O milho é um tipo de
              grão nativo da América do Norte. É uma boa fonte de carboidratos, fibras
               e vitaminas. O milho pode ser comido sozinho ou em uma variedade de pratos,
                como pão de milho, sopa de milho e espiga de milho. </Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 1</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda BoaVista</Text>
              <Text style = {styles.dadosModal}>Endereço: Estrada da Esperança, S/N, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: João da Silva - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 1</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora Alimentar Sabor & Qualidade</Text>
              <Text style = {styles.dadosModal}>Endereço: Rua dos Sabores, 123, Centro</Text>
              <Text style = {styles.dadosModal}>contato: Maria Lurdes - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 1</Text>
              <Text style = {styles.dadosModal}>Calorias: 96</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 1</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 0</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 0</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 21</Text>
              <Text style = {styles.dadosModal}>Açucar: 3</Text>
              <Text style = {styles.dadosModal}>Proteínas: 3</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 2</Text>
              <Text style = {styles.dadosModal}>Sódio: 1</Text>

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
            <Text style = {styles.titleModal}>Carne Vermelha</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 2</Text>
              <Text style = {styles.dadosModal}>Categoria: Carnes</Text>
              <Text style = {styles.dadosModal}>Origem: Pecuaria</Text>
              <Text style = {styles.dadosModal}>Descrição: A carne é um 
               tipo de proteína que vem de animais. É uma boa fonte de proteína,
               ferro e zinco. A carne pode ser consumida sozinha ou pode ser usada
               em uma variedade de pratos, como hambúrgueres, bifes e nuggets de frango.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 2</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Primavera</Text>
              <Text style = {styles.dadosModal}>Endereço: Rodovia do Cerrado, KM 50, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Maria Oliveira - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 2</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora Gourmet Bella Vita</Text>
              <Text style = {styles.dadosModal}>Endereço: Avenida da Saúde, 456, Vila Verde</Text>
              <Text style = {styles.dadosModal}>contato: Pedro Santos - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: </Text>
              <Text style = {styles.dadosModal}>Calorias: 250 </Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 17</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 7</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0.8</Text>
              <Text style = {styles.dadosModal}>Colesterol: 80</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 0</Text>
              <Text style = {styles.dadosModal}>Açucar: 0</Text>
              <Text style = {styles.dadosModal}>Proteínas: 26</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 0</Text>

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
            <Text style = {styles.titleModal}>Tomate</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 3</Text>
              <Text style = {styles.dadosModal}>Categoria: Frutas</Text>
              <Text style = {styles.dadosModal}>Origem: Plantação Ágricola</Text>
              <Text style = {styles.dadosModal}>Descrição: O tomate é um tipo de
               fruta nativa da América do Sul. Eles são uma boa fonte de vitaminas
               C e A, bem como licopeno, um antioxidante que demonstrou reduzir o
               risco de câncer. Os tomates podem ser consumidos sozinhos ou podem
                ser usados ​​em uma variedade de pratos, como salsa, pizza e molho
                 de macarrão.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 3</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Sol Poente</Text>
              <Text style = {styles.dadosModal}>Endereço: Sítio das Montanhas, S/N, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Pedro Santos - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 3</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora de Alimentos Frescor do Campo</Text>
              <Text style = {styles.dadosModal}>Endereço: Rua dos Chefs, 789, Bairro Nobre</Text>
              <Text style = {styles.dadosModal}>contato: Ana Rodrigues - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 3</Text>
              <Text style = {styles.dadosModal}>Calorias: 18</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 0.2</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 0</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 0</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 3.9</Text>
              <Text style = {styles.dadosModal}>Açucar: 2.6</Text>
              <Text style = {styles.dadosModal}>Proteínas: 0.9</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 1.2</Text>

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
            <Text style = {styles.titleModal}>Brócolis</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 4</Text>
              <Text style = {styles.dadosModal}>Categoria: Verduras</Text>
              <Text style = {styles.dadosModal}>Origem: Plantação Ágricola</Text>
              <Text style = {styles.dadosModal}>Descrição: O brócolis é um tipo de vegetal
               originário da Itália. É uma boa fonte de vitaminas C, K e fibras. O brócolis
              pode ser consumido sozinho ou em uma variedade de pratos, como refogados, sopas
               e saladas.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 4</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Monte Verde</Text>
              <Text style = {styles.dadosModal}>Endereço: Sítio dos Pássaros, S/N, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Ana Rodrigues - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 4</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora de Alimentos NutriVida</Text>
              <Text style = {styles.dadosModal}>Endereço: Avenida das Colheitas, 987, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Laura Nunes - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 4</Text>
              <Text style = {styles.dadosModal}>Calorias: 34</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 0.4</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 0</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 0</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 7</Text>
              <Text style = {styles.dadosModal}>Açucar: 1.7</Text>
              <Text style = {styles.dadosModal}>Proteínas: 2.8</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 2.6</Text>

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

    <View style = {{flexDirection: "row"}}>
      <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalOvo} animationType= "slide" onRequestClose={()=>{setModalOvo(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgOvo} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Ovo</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 5</Text>
              <Text style = {styles.dadosModal}>Categoria: Animais</Text>
              <Text style = {styles.dadosModal}>Origem: Galinhas</Text>
              <Text style = {styles.dadosModal}>Descrição: Os ovos são um 
              tipo de proteína que vem das galinhas. Eles são uma boa fonte
               de proteínas, vitaminas e minerais. Os ovos podem ser consumidos
               sozinhos ou podem ser usados ​​em uma variedade de pratos, como
               omeletes, ovos mexidos e quiches.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 5</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Vista Alegre</Text>
              <Text style = {styles.dadosModal}>Endereço: Estrada do Sertão, KM 30, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Lucas Almeida - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 5</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora de Alimentos Sabores do Mundo</Text>
              <Text style = {styles.dadosModal}>Endereço: Rua das Vitaminas, 654, Parque Industrial</Text>
              <Text style = {styles.dadosModal}>contato: Sofia Mendes - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 5</Text>
              <Text style = {styles.dadosModal}>Calorias: 155</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 11</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 3.3</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 373</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 1.1</Text>
              <Text style = {styles.dadosModal}>Açucar: 1.1</Text>
              <Text style = {styles.dadosModal}>Proteínas: 13</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 0 </Text>
              <Text style = {styles.dadosModal}>Sódio: 124 </Text>

              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalOvo(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgOvo} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalOvo(true)
          }}>Ovo</Text>
        </View>
       </View> 

       <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalArroz} animationType= "slide" onRequestClose={()=>{setModalArroz(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgArroz} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Arroz</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 6</Text>
              <Text style = {styles.dadosModal}>Categoria: Cereais</Text>
              <Text style = {styles.dadosModal}>Origem: Plantação Ágricola</Text>
              <Text style = {styles.dadosModal}>Descrição: O arroz é um tipo de grão
               originário da Ásia. É uma boa fonte de carboidratos e fibras. O arroz
               pode ser consumido sozinho ou em diversos pratos, como sushi, risoto
               e arroz frito.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 6</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Boa Esperança</Text>
              <Text style = {styles.dadosModal}>Endereço: Fazenda do Sol, S/N, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Laura Nunes - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 6</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora de Alimentos Primeira Escolha</Text>
              <Text style = {styles.dadosModal}>Endereço: Rua dos Temperos, 321, Centro</Text>
              <Text style = {styles.dadosModal}>contato: Rafaela Santos - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 6</Text>
              <Text style = {styles.dadosModal}>Calorias: 130</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 0.3</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 0.1</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 0</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 28</Text>
              <Text style = {styles.dadosModal}>Açucar: 0</Text>
              <Text style = {styles.dadosModal}>Proteínas: 2.7</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 0.6</Text>
              <Text style = {styles.dadosModal}>Sódio: 1</Text>

              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalArroz(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgArroz} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalArroz(true)
          }}>Arroz</Text>
        </View>
       </View> 
    </View>

    <View style = {{flexDirection: "row"}}>
      <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalCenoura} animationType= "slide" onRequestClose={()=>{setModalCenoura(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgCenoura} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Cenoura</Text>
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
              setModalCenoura(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgCenoura} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalCenoura(true)
          }}>Cenoura</Text>
        </View>
       </View> 

       <View style = {{marginTop: 10}}>
        <Modal transparent = {true} visible = {modalBeringela} animationType= "slide" onRequestClose={()=>{setModalBeringela(false)}}>
          <View style = {styles.VModal}>
            <Image source = {imgBeringela} style = {styles.logoConsulta}/>
            <Text style = {styles.titleModal}>Beringela</Text>
            <View style = {{marginTop: 10}}>
            <Text>ALimento</Text>
              <Text style = {styles.dadosModal}>ID: 7</Text>
              <Text style = {styles.dadosModal}>Categoria: Legumes</Text>
              <Text style = {styles.dadosModal}>Origem: Plantação Ágricola</Text>
              <Text style = {styles.dadosModal}>Descrição: A berinjela é um tipo de
               legume originário da Índia. É uma boa fonte de vitaminas C e K, além
               de fibras. A berinjela pode ser consumida sozinha ou em uma variedade
               de pratos, como berinjela ao parmesão, baba ghanoush e moussaka.</Text>

              <Text>Fazenda</Text>
              <Text style = {styles.dadosModal}>ID: 7</Text>
              <Text style = {styles.dadosModal}>Nome: Fazenda Estrela do Norte</Text>
              <Text style = {styles.dadosModal}>Endereço: Sítio da Paz, S/N, Zona Rural</Text>
              <Text style = {styles.dadosModal}>contato: Gabriel Costa - (XX) XXXX-XXXX</Text>

              <Text>Distribuidor</Text>
              <Text style = {styles.dadosModal}>ID: 7</Text>
              <Text style = {styles.dadosModal}>Nome: Distribuidora Alimentar Sabor & Qualidade</Text>
              <Text style = {styles.dadosModal}>Endereço: Avenida da Qualidade, 246, Bairro Novo</Text>
              <Text style = {styles.dadosModal}>contato: Camila Mendonça - (XX) XXXX-XXXX</Text>

              <Text>Nutrição</Text>
              <Text style = {styles.dadosModal}>ID: 7</Text>
              <Text style = {styles.dadosModal}>Calorias: 25</Text>
              <Text style = {styles.dadosModal}>Gorduras totais: 0.2</Text>
              <Text style = {styles.dadosModal}>Gordura saturada: 0</Text>
              <Text style = {styles.dadosModal}>Gordura trans: 0</Text>
              <Text style = {styles.dadosModal}>Colesterol: 0</Text>
              <Text style = {styles.dadosModal}>Carboidrato: 6</Text>
              <Text style = {styles.dadosModal}>Açucar: 2.2</Text>
              <Text style = {styles.dadosModal}>Proteínas: 2.7</Text>
              <Text style = {styles.dadosModal}>Fibra Alimentar: 0.6</Text>
              <Text style = {styles.dadosModal}>Sódio: 2</Text>

              <Text style = {styles.ModalButton}onPress = {() =>{
              setModalBeringela(false);
              }}>x</Text>
            </View>
          </View>
        </Modal>

        <View>        
        <Image source = {imgBeringela} style = {styles.logoModal}/>
          <Text  style = {{marginLeft: 85, fontSize: 16, color: "white"}} onPress = {()=>{
            setModalBeringela(true)
          }}>Beringela</Text>
        </View>
       </View> 
    </View>
  </ScrollView>
    </View>
  )
}

const Login = (props) =>{

  const [email, setEmail] = useState(""); 
  const [senha, setSenha] = useState("");
  return(

    <View style = {{flex: 1, backgroundColor: "#202025"}}>
      <Image source = {imgLogo} style = {styles.logoLogin}/>

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
      <Navigator screenOptions = {{headerStyle:{ 
                                    backgroundColor: "#4B74C5"},
                                  headerTitleStyle:{
                                    fontWeight: "bold"
                                  },
                                  headerTitleAlign: "center",
                                  headerTintColor: "white",
                                  headerStatusBarHeight: 1,
                                  tabBarActiveBackgroundColor: "#4B74C5",
                                  tabBarActiveTintColor: "white"
                                
      }}>
        <Screen name = "Alimentos" options = {{tabBarIcon: ({color, size}) =>(
          <MaterialCommunityIcons name  ="food-fork-drink" color = {color} size = {size}/>
        )}}>
          {(props)=><Alimentos{...props}/>}
        </Screen>

        <Screen name = "Procura" options = {{tabBarIcon: ({color, size})=>(
          <FontAwesome5 name = "search" color = {color} size = {size}/>
        )}}>
          {(props)=><Procurar{...props}/>}
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
      {logado ? <Telas/> : 
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

  buttonProcurar:{
    backgroundColor: "#4B74C5",
    textAlign: "center",
    marginHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 9,
    marginTop: 15,
    fontWeight: 700
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