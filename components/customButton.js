import React, {useState} from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


TouchableOpacity.defaultProps = { activeOpacity: 0.6};

const CustomButton = ({ onPress, title }) => {
    const [isActive, setIsActive]=useState(() => {
        return false
    });
    
    const isActiveHandler = () => {
            setIsActive(!isActive)}

        return (
            <TouchableOpacity onPress={isActiveHandler} style={{...styles.appButtonContainer, backgroundColor: isActive ? "#DD0000" : "#fff", borderColor: isActive ? "transparent" : "black"   }}>
                <Text style={{...styles.appButtonText, color: isActive ? "#fff" : "#000" }}>{title}</Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    
    appButtonContainer: {
        borderRadius: 15,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginLeft: 20,
        borderWidth: 1.5,
    },
    appButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    }

});


export default CustomButton;