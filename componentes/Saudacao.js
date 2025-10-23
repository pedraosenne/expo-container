import react from "react";
import {text} from "react-native";

export default function Saudacao({nome}){
    return(
       <Text style={{fontSize:18, mardingBottom:5}}>
        olá{nome}
        </Text>
    )

}