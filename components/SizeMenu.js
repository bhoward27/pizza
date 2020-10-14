import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default function SizeMenu({ mediumPrice }) {
    const [checked, setChecked] = React.useState('medium');
    return (
        <RadioButton
            style={styles.radioButton}
            value='small'
            status={checked === 'small' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('small')}
        ></RadioButton>
    );
}

const styles = StyleSheet.create({
    radioButton: {
        flex: 1,
        backgroundColor: 'purple',
    },
});