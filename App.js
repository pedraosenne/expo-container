import react from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo";

export default function app(){
 return(
 <ScrollView style={{padding:20}}>
  <Titulo /> 
 <Saudacao nome="Pedro"/>
 <Saudacao nome="Guilherme"/>
 <Saudacao nome="Nicolas"/>

 </ScrollView>
 )
}

