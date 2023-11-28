import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
          source={{
            uri: 'https://i0.wp.com/media.architecturaldigest.com/photos/5dcc33a8995edd00090eeb8e/16:9/w_4287,h_2411,c_limit/GettyImages-158630535.jpg?ssl=1',
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