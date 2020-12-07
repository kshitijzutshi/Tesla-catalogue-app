import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/index";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/images/ModelS.jpeg")}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,000</Text>
            </View>
            <StyledButton
                type="primary"
                content={"Custom Order"}
                onPress={() => {
                    console.warn("Custom order pressed");
                }}
            />
            <StyledButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    console.warn("Existing Inventory pressed");
                }}
            />
        </View>
    );
};

export default CarItem;
