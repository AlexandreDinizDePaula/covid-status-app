import React,{useEffect,useState} from "react"
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles"
import logo from "../../assets/logo.png"
import image from "../../assets/mapa.png"
import api from '../../services/api'

export default function Home() {

    const [cases, setCases] = useState({data:{data:[]}});
    

    useEffect(() =>{
        loadCases();
    },[])

    async function loadCases(){

        const result = await api.get('brazil')
        setCases(result.data.data)
    }

   

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.1, resizeMode:'center'}}>
                <View style={styles.header}>

                    <View style={styles.title}>
                        
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleText}>Status Covid App</Text>
                    </View>
                    <Text style={styles.data}>Atualizado em {cases.updated_at}</Text>
                    <Text style={styles.subTitle}>Brasil</Text>

                </View>

                <View style={styles.casesContainer}>
                    <View style={styles.casesRows}>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Casos</Text>
                            <Text style={styles.casesNumber}>{cases.cases}</Text>
                        </View>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Confirmados</Text>
                            <Text style={styles.casesNumber}>{cases.confirmed}</Text>
                        </View>
                    </View>
                    <View style={styles.casesRows}>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Mortes</Text>
                            <Text style={styles.casesNumber}>{cases.deaths}</Text>
                        </View>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Recuperados</Text>
                            <Text style={styles.casesNumber}>{cases.recovered}</Text>
                        </View>
                    </View>
                    
                </View>

            </ImageBackground>    
        </View>
    );
}