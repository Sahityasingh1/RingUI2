import {Image,StyleSheet} from 'react-native'
 
function MiddleImage(){
    return(
       
        <Image  style={styles.img} source={require('../Image/mid.jpg')}/>
        
       
    )
}

export default MiddleImage;


const styles = StyleSheet.create({

    img:{
        width:330,
        height:240,
        marginLeft:30,
        marginRight:15,
        marginTop:15,
    }

 

    
})