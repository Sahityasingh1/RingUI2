import {Image,StyleSheet,View,Text} from 'react-native'
 
function SocialBox(){
    return(
        <View style = {styles.all}>
        <View style = {styles.all1}>
        <Image style={styles.img} source={require('../Image/tc.jpg')}/>
        <Text style = {styles.txt}>Continue with Mobile</Text>
        </View>
        <View style = {styles.all2}>
        <Image style={styles.img} source={require('../Image/google.jpg')}/>
        <Text style = {styles.txt}>Continue with Google</Text>
        </View>
        <View style = {styles.all3}>
        <Image style={styles.img} source={require('../Image/fb.jpg')}/>
        <Text style = {styles.txt}>Continue with Facebook</Text>
        </View>
        

        </View>
        

       
      
        
       
    )
}

export default SocialBox;


const styles = StyleSheet.create({

    all1:{
        marginTop:20,
        borderWidth:1,
        borderColor:'gray',
        height:60,
        weidth:320,
        marginHorizontal:30,
        borderTopEndRadius:12,
        borderTopLeftRadius:12,
        flexDirection:'row',
    },
    all2:{
        
        borderWidth:1,
        borderColor:'gray',
        height:60,
        weidth:320,
        marginHorizontal:30,
        borderTopWidth:0,
        flexDirection:'row',

    },
    all3:{
        
        borderWidth:1,
        borderColor:'gray',
        height:60,
        weidth:320,
        marginHorizontal:30,
        borderTopWidth:0,
        flexDirection:'row',
        borderBottomEndRadius:12,
        borderBottomLeftRadius:12,

    },
    img:{
        height:24,
        width:24,
        marginVertical:18,
        marginHorizontal:30,
        
    },
    txt:{
        width:230,
        height:20,
        marginVertical:22,
        fontSize:14,
        fontWeight:'bold'
    },
    all:{
        marginTop:80
    }

   

 

    
})