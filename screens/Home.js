import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

const navigation = useNavigation()
	
return (
<View style={styles.container}>
<Text>Home Screen</Text>

<Button 
title="Go to Profile"
onPress={() => navigation.navigate('Profile')}
/>
</View>
)

}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});