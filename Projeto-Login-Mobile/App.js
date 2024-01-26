import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}  
        source={{
          uri:"https://cdn0.iconfinder.com/data/icons/follower/154/follower-man-user-login-round-512.png"
        }}
      />

       <Text style={styles.Text}>Login</Text>

        <TextInput
          style={styles.input1}
        defaultValue='Email:'
        />

        <TextInput
          style={styles.input2}
        defaultValue='Senha:'
        />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E07E79',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 1,
  },
  Text: {
    fontSize: 24,
    marginBottom: 40,
  },
  input1: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 60,
    borderRadius: 22, 
    backgroundColor: 'white',
  },
  input2: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 80,
    borderRadius: 22,
    backgroundColor: 'white',
  },
  textButton:{
    borderRadius: 22,
    textAlign: 'center',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F2F2F2',
  },
  btn: {
    width: 140,
    height: 60,
    borderWidth: 1,
    marginTop: 60,
    marginBottom: 80,
    backgroundColor: '#424242',
    borderRadius: 22,
  }
});
