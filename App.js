import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from "./componentes/cartaoUsuario";


export default function App() {
 return <ScrollView>
   <Titulo />
   <Saudacao nome='Pedro' />
   <FotoPerfil />


   <CartaoUsuario nome='gabriel'
     descricao={'Programador Mobile'}
     img='1.jpg'
   />


   <CartaoUsuario nome='Pedro'
     descricao={'Programador Mobile'}
     img='2.jpg'
   />


   <CartaoUsuario nome='Guilherme'
     descricao={'Programador Mobile'}
     img='3.jpg'
   />


   <CartaoUsuario nome='nicolas'
     descricao={'Programador Mobile'}
     img='4.jpg'
   />

 </ScrollView>


}



