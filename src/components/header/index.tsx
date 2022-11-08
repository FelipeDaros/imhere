import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Header(){
    return(
        <View style={style.container}>
            <MaterialCommunityIcons name="rocket-launch" size={36} color="#4EA8DE"/>
            <Text style={style.textInitials}>to</Text>
            <Text style={style.textEndOf}>do</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    },
    textInitials: {
        color: '#4EA8DE',
        fontSize: 36,
        marginLeft: 8
    },
    textEndOf: {
        color: '#5E60CE',
        fontSize: 36
    }
})