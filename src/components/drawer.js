import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants';
import DrawerItem from './drawerItem';

const rows = [
    'MIS TODOS',
    'MIS RUTINAS',
    'CONFIGURACIÓN',
];

export default function({ navigator, closeDrawer }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View
                style={{
                    flex: 0.2,
                    backgroundColor: COLORS.background,
                    justifyContent: 'flex-end',
                    paddingLeft: 15,
                }}
            >
                <Text style={{ marginBottom: 10, fontSize: 20, color: COLORS.color1 }}>
                    {'Hi Jonathan'}
                </Text>
            </View>
             <View style={{ flex: 0.8, paddingLeft: 10 }}>
                {rows.map((row, key) =>
                    <DrawerItem
                        key={key}
                        index={key}
                        navigator={navigator}
                        onCloseDrawer={closeDrawer}
                    >
                        {row}
                    </DrawerItem>
                )}
             </View>
        </View>
    );
}
