import React, { useState } from 'react'

import { Image, View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from "@react-native-material/core";

function Survey() {
    return (
        <View>

            <Text>What does your song sound like?</Text>
            <View>
                <Text>Music Genre</Text>
            </View>

            <View>
                <Text>Pacing</Text>
            </View>

            <View>
                <Text>The Feel</Text>
            </View>

        </View>
    );
}

export default Survey;