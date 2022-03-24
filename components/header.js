import React, {useState} from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>LOGO</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 25,
    },
    headerText: {
        fontSize: 26,
        fontWeight: "bold",
        letterSpacing: 1,
    }

});
