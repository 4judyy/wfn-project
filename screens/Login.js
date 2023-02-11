import React, { useState } from 'react'
// import { System } from '../../firebase/config';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Image, View, Text, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";

// add register with google account

// let system = new System();

function Login({ navigation }) {


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    return (
        <View id="login" style={[styles.container]}>

            <View>
                <Image source={require('./images/music.png')} />
                <Text>Sign In</Text>
                <Text>Welcome back. Log in to continue.</Text>
                <TextInput variant="outlined" style={styles.input} type="text"
                    id='email' placeholder='Enter your email'
                    placeholderTextColor={'#696969'}
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}>
                </TextInput>
                <TextInput variant="outlined" style={styles.input} type="password"
                    id='password' placeholder='Enter your password'
                    placeholderTextColor={'#696969'}
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}>
                </TextInput>
                <Text>Forgot your password?</Text>
                <Pressable id="execute" style={[styles.button]} onPress={() => auth() // need to fix this!!!
                }>
                    <Text style={[styles.start]}>Login</Text>
                </Pressable>



            </View>
        </View>
    );

}

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            flex: "1",
            height: "100%",
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        button: {

        },

        start: {

        },

        input: {
            marginVertical: 5,
        },

    }
)

export default Login;