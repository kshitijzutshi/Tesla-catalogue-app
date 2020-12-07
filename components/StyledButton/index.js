import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

    const { type, content, onPress } = props
    const backgroundColorValue = type === "primary" ? '#171A20CC' : '#FFFFFFA6'
    const textColorValue = type === "primary" ? '#FFFFFF' : '#171A20'
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColorValue}]}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={[styles.text, {color: textColorValue}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
