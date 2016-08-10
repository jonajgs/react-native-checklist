import React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../constants';

export default function({ text, onChange }) {
    return (
        <View style={{ flex: 3 }}>
            <TextInput
                onChangeText={(text) => {
                    onChange(text);
                }}
                placeholder={'ej: hacer la tarea'}
                placeholderTextColor={COLORS.color1}
                underlineColorAndroid={COLORS.button}
                style={{ color: COLORS.color1 }}
                value={text}
            />
        </View>
    );
}
