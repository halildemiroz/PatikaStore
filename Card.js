import React  from "react";
import {View, StyleSheet, Dimensions, Image, Text, SafeAreaView} from 'react-native'

export default function Card({items}) {
    return(
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: items.imgURL}} />
                <Text style={styles.title}>{items.title}</Text>
                <Text style={styles.price} disabled={items.inStock}>{items.price}</Text>
                {!items.inStock && <Text style={{color:'red'}}>STOKTA YOK</Text>}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1e2e3",
        margin: 10,
        borderRadius: 10,
    },
    title: {
        margin: 4,
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
    price: {
        margin: 4,
        fontSize: 15,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        margin: 10,
        borderRadius: 10,
    }
})