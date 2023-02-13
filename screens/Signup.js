import React, { useState } from 'react'

import { Image, View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from "@react-native-material/core";

// let system = new System();

function Login({ navigation }) {

    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    return (
        <View id="signup" style={[styles.container]}>

            <View>
                <Text>Find your voice</Text>
                <Text>Signup with your email</Text>
                <View>
                    <TextInput variant="outlined" style={styles.input} type="text"
                        id='name' placeholder='Full Name'
                        placeholderTextColor={'#000000'}
                        onChangeText={newText => setName(newText)}
                        defaultValue={name}>
                    </TextInput>
                    <TextInput variant="outlined" style={styles.input} type="text"
                        id='email' placeholder='Email'
                        placeholderTextColor={'#000000'}
                        onChangeText={newText => setEmail(newText)}
                        defaultValue={email}>
                    </TextInput>
                    <TextInput variant="outlined" style={styles.input} type="text"
                        id='username' placeholder='Username'
                        placeholderTextColor={'#000000'}
                        onChangeText={newText => setUsername(newText)}
                        defaultValue={username}>
                    </TextInput>
                    <TextInput variant="outlined" style={styles.input} type="password"
                        id='password' placeholder='Password'
                        placeholderTextColor={'#696969'}
                        onChangeText={newText => setPassword(newText)}
                        defaultValue={password}>
                    </TextInput>
                </View>
                <Text>or</Text>

                <View>

                </View>
                <Pressable id="execute" style={[styles.button]}
                >
                    <Text style={[styles.start]}>Login</Text>
                </Pressable>

                <Text>Already have an account? Login</Text>



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