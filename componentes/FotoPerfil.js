import react from "react";
import { Image } from "react-native";



export default function FotoPerfil(){
   return(
       <image
           source={require('../img/base.jpg')}
           style={{widht:100,height:100, borderRadius:50, marginBottom:10}}
       />
   );
}




