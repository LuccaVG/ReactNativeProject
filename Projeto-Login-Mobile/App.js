import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}  
        source={{
          uri:"https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-600nw-1365533969.jpg"
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
    backgroundColor: '#fff',
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
  },
  input2: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 80,
  },
  textButton:{
    width: 140,
    height: 60,
    borderWidth: 1,
    marginTop: 60,
    textAlign: 'center',
    fontSize: 36,
    marginBottom: 80,
  },
});
