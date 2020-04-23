import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(239,239,239)',
        paddingHorizontal: 16,
        paddingTop: Constants.statusBarHeight + 20,
        
    },
    image:{
        
        flex:1,
        
    },
    header: {
        
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        flexDirection: "row",
        alignItems: 'center',
    },
    logo: {
     right: 5,   
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    subTitle: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 30,
        textDecorationLine: 'underline',
        
    },
    casesContainer: {
        marginTop:20,
        alignItems: 'center',
    },
    casesRows: {
        
        flexDirection: 'row',
        alignItems:'center',
        marginVertical: 10,
        
    },
    casesColumns: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: 130,
        height: 80,
        borderRadius: 8,
        marginHorizontal:10,   
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    casesText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    casesNumber:{
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    teste:{
        color: 'white',
    }
});