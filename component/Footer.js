import {View,Text,Image,StyleSheet} from 'react-native'
 
function Footer(){
    return(
        <View style={styles.bottom}>
        
        <Text style={styles.lines}>By continuing, I override my NDNC registration and authorise Ring</Text> 
        <Text style={styles.lines}>to communicate through call, WhatsApp, SMS or Email & agree to </Text>
        <View style={styles.Lowerlines}>
        <Text style={styles.lines3}>Ring's</Text>
        <Text style={styles.txt}> Terms of Service  </Text> 
        <Text style={styles.lines4}>and </Text>
        <Text style={styles.txt}> Privacy Policy</Text>

        </View>
        <View style={styles.bottomLines}>
        <Text style={styles.LastLine}> Powered by <Text style={styles.Cibil}>CIBIL</Text></Text>

        </View>
        
         

        


        </View>
    )
}

export default Footer;


const styles = StyleSheet.create({
    Lowerlines:{
        flexDirection:'row'
    },

    lines:{
        width:320,
        height:18,
        marginLeft:35,
        fontSize:10,

       
    },
    lines3:{
        marginLeft:35,
        fontSize:10,

    },
    lines4:{
        
        fontSize:10,

    },
    bottom:{
        marginLeft:12,
        marginRight:40,
        marginTop:60
        
        
    },
    txt:{
        color:'#590FB7',
        fontSize:10,
        fontWeight:'900'
        
        
       
    },
    txt1:{
        borderBottomColor:'#590FB7',
        borderBottomWidth:2,
        

    }, 
    bottomLines:{

        marginTop:25,
        marginLeft:140
    },
    LastLine:{
        fontSize:10
    },
    Cibil:{
        color:"#00A2D1",
        fontSize:12

    }


   

    
})


