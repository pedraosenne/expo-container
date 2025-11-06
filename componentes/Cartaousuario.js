import React from "react";
import { View, Text, Image, } from "react-native"
import fotos from '../img/fotos';




export default function CartaoUsuario({ nome, Descricao, imag }) {
   return (
       <view style={estilos.catao}>
           <image source={fotos[img]} style={estilos.foto} />
           <text style={estilos.nome}>{nome}</text>
           <text style={estilos.descricao}>{descricao}</text>
       </view>


   )
}

const estilos = StyleSheet.create({
    
   cartao:{
      backgroundColor:'#e1f7f7',
      padding:16,
      marginTop:15,
      borderRadius:10,
      alingItems:'center',
      shadowColor:'#000',
      shadowOpacity: 0.1,
      shadowOffset:{width:0,height:2},
      shadowRadius:5,
      elevation:5,
  },
  foto:{width:80, height:80, borderRadius:40, marginBottom:10,},
  nome:{fontSize:18, fontWeight:'bold'},
  descricao:{fontSize:14,color:'#555', textAlign:'center'},
});

















