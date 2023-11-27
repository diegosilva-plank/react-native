import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.blankText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.blankText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.blankText}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    blankText: {
        color: '#FFFFFF',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
})