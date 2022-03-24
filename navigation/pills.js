import {StyleSheet, Button, Text, View, Image, TouchableOpacity, ScrollView}  from 'react-native';
import CustomButton from '../components/customButton';

const Pills = () => {
    return(
        <ScrollView horizontal= {true} showsHorizontalScrollIndicator= {false}>
            <CustomButton title="Alles" />
            <CustomButton title="Freunde" />
            <CustomButton title="Rangliste" />
            <CustomButton title="Events" />
            <CustomButton title="Vereine" />
        </ScrollView>         
    );
}

export default Pills;