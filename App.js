import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componente/Titulo";
import Saudacao from "./componente/Saudacao";
import FotoPerfil from './componente/FotoPerfil';
import CartaoUsuario from "./componente/CartaoUsuario";

export default function App() {
return <ScrollView>
<Titulo />
<Saudacao nome='pedro' />
<FotoPerfil />

<CartaoUsuario nome='Bosta Amarela'
descricao={'Programador Mobile'}
img='1.jpg'
/>

<CartaoUsuario nome='nicolas caquinhoMa'
descricao={'Programador Mobile'}
img='2.jpg'
/>

<CartaoUsuario nome='guilherme pinto'
descricao={'Programador Mobile'}
img='3.jpg'
/>

<CartaoUsuario nome='gabriel beicinho'
descricao={'Programador Mobile'}
img='4.jpg'
/>

<CartaoUsuario nome='alexota'
descricao={'Programador Mobile'}
img='5.jpg'
/>

</ScrollView>

}