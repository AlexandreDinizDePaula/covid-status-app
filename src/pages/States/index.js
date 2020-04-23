import React,{useState, useEffect} from "react"
import { View, Text, Image, ImageBackground, Picker } from "react-native";
import styles from "./styles"
import logo from "../../assets/logo.png"
import image from "../../assets/mapa.png"
import api from "../../services/api"

export default function Home() {

    const [cases, setCases] = useState({data:{data:[]}});
    const [states, setStates] = useState('ac');
    
    useEffect(()=>{
        loadCases();
    },[states])

    async function loadCases(){
        
        const result = await api.get(`brazil/uf/` + states)
        setCases(result.data)
    }

    console.log(cases)
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.1, resizeMode:'center'}}>
                <View style={styles.header}>

                    <View style={styles.title}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleText}>Status Covid App</Text>
                    </View>
                    <Text>Selecione o Estado abaixo:</Text>
                    <Picker selectedValue={states}
                            style={{height:30, width:150,alignItems:'center' ,marginTop: 20 ,backgroundColor: 'rgb(220,220,220)'
                            }}
                        
                            onValueChange={(itemValue) => setStates(itemValue)}
                            >
                        <Picker.Item label='Acre' value='ac' />
                        <Picker.Item label='Alagoas' value='al' />
                        <Picker.Item label='Amapa' value='ap' />
                        <Picker.Item label='Bahia' value='ba' />
                        <Picker.Item label='Ceará' value='ce' />
                        <Picker.Item label='Distrito Federal' value='df' />
                        <Picker.Item label='Espírito Santo' value='es' />
                        <Picker.Item label='Goiás' value='go' />
                        <Picker.Item label='Maranhão' value='ma' />
                        <Picker.Item label='Mato Grosso' value='mt' />
                        <Picker.Item label='Mato Grosso do Sul' value='ms' />
                        <Picker.Item label='Minas Gerais' value='mg' />
                        <Picker.Item label='Pará' value='pa' />
                        <Picker.Item label='Paraíba' value='pb' />
                        <Picker.Item label='Paraná' value='pr' />
                        <Picker.Item label='Pernambuco' value='pe' />
                        <Picker.Item label='Piauí' value='pi' />
                        <Picker.Item label='Rio de Janeiro' value='rj' />
                        <Picker.Item label='Rio Grande do Norte' value='rn' />
                        <Picker.Item label='Rio Grande do Sul' value='rs' />
                        <Picker.Item label='Rondônia' value='ro' />
                        <Picker.Item label='Roraima' value='r' />
                        <Picker.Item label='Santa Catarina' value='sc' />
                        <Picker.Item label='São Paulo' value='sp' />
                        <Picker.Item label='Sergipe' value='se' />
                        <Picker.Item label='Tocantins' value='to' />
                    </Picker>

                </View>

                <View style={styles.casesContainer}>
                    <Text style={styles.subTitle}>{cases.state}</Text>
                    <View style={styles.casesRows}>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Casos</Text>
                            <Text style={styles.casesNumber}>{cases.cases}</Text>
                        </View>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Mortes</Text>
                            <Text style={styles.casesNumber}>{cases.deaths}</Text>
                        </View>
                    </View>
                    <View style={styles.casesRows}>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Suspeitos</Text>
                            <Text style={styles.casesNumber}>{cases.suspects}</Text>
                        </View>
                        <View style={styles.casesColumns}>
                            <Text style={styles.casesText}>Rejeitados</Text>
                            <Text style={styles.casesNumber}>{cases.refuses}</Text>
                        </View>
                    </View>
                    <Text style={styles.data}>Atualizado em {cases.datetime}</Text>

                </View>
            </ImageBackground>    
        </View>
    );
}