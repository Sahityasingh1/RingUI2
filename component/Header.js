import {View,Text,Image,StyleSheet} from 'react-native'
 
function Header(){
    return(
        <View style={styles.top}>
        <Image  style={styles.arrow} source={require('../Image/arrow.png')}/>
        <View >
        <Text style={styles.signUp}>Sign up/Login</Text>

        </View>


        </View>
    )
}

export default Header;


const styles = StyleSheet.create({

    top:{
        flexDirection:'row',
        marginTop:60,
        marginLeft:30,
        
    },
    arrow:{
        width:15,
        height :15,
        marginTop:5,

    },
    signUp:{
        fontSize:20,
        fontWeight:'900',
        width:150,
        height:50,
        marginLeft:90,
    }

    
})


