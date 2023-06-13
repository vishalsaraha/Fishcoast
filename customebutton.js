import react from "react";
import { StyleSheet, Text, Text } from "react-native-web";

const signbutton = ()=>{
    return(
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 8,
        borderRadius: 10,
        alignSelf: 'center',
      },
      
})

export default signbutton;