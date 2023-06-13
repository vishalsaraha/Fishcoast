import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
        Text, 
        View, 
        TextInput, 
        Button,  
        Alert, 
        TouchableOpacity,
        SafeAreaView} from 'react-native';

        export default function App() {
          const handleSignIn = () => {
            // Handle sign-in logic here
            Alert.alert('Sign In button pressed');
          };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <View style={styles.TextInput}>
      <Text style={styles.text__in}>Enter your name</Text>
      <TextInput
        style={styles.inputnm}
        maxLength={25}
      />
      <Text style={styles.text__in}>Enter phone number</Text>
      <TextInput
        style={styles.inputph}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button
       title="Get otp"
       color="#2C2C2C"
       onPress={() => Alert.alert('your otp 456678')} 
      />
       <Text style={styles.text__in}>Enter your OTP</Text>
      <TextInput
        style={styles.inputotp}
        keyboardType="numeric"
        maxLength={6}
      />
         <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ffff',
    fontSize: 32,
    fontWeight: 'bold',
    position:'absolute',
    top:'10%',
  },
  text__in:{
    color: '#ffff',
    fontSize: 18,
  },
  inputnm:{
    backgroundColor: '#ffff',
    height: 34,
    width: 250,
    margin: 12,
    padding: 5,
    borderRadius: 8,
  },
  button__otp:{

  },
  inputph:{
   backgroundColor: '#ffff',
   height: 34,
   width: 250,
   margin: 12,
   padding: 5,
   borderRadius: 8,
  },
  inputotp:{
    backgroundColor: '#ffff',
    height: 34,
    width: 250,
    margin: 12,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 8,
    borderRadius: 10,
    alignSelf: 'center',
  },
  
});
