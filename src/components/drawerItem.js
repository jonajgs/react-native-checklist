import React from 'react';
import { View, Text } from 'react-native';

export default function({ children }) {
    return (
        <View style={{ marginTop: 10 }}>
            <Text>
                {children}
            </Text>
        </View>
    );
}
