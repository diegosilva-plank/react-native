import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            headers: {
              Accept: '*/*',
            },
          }}
          style={styles.cardImage} 
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>
                The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.
            </Text>
            <Text style={styles.cardFooter}>12 min away</Text>
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
    card: {
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    cardElevated: {
      backgroundColor: '#DDDDDD',
      elevation: 3,
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    cardTitle: {
      color: '#000000',

    },
    cardLabel: {
      color: '#000000',
    },
    cardDescription: {
      color: '#000000',
    },
    cardFooter: {},
})