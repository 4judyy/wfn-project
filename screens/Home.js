import React, { useState } from 'react'
// import { System } from '../../firebase/config';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Image, View, Text, Pressable, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from "@react-native-material/core";

// add register with google account

// let system = new System();

function Home({ navigation }) {


    // would change after figuring out what we're using (firebase most likely)

    const username = "Judy"


    return (
        <View id="home" style={[styles.container]}>

            <View>
                <Text>Welcome Back, {username}</Text>
                <Pressable id="execute" style={[styles.button]} onPress={() => create() // need to fix this!!!
                }>
                    <Text style={[styles.start]}>Create New Project</Text>
                </Pressable>
                <Text>Hottest Voices</Text>
                {/* would just map out the different artists... hopefully similar with react */}

                <Text>Your Projects</Text>
                {/* would also map through different projects, similar to how james did it in study sprint */}

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

export default Home;