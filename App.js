import * as React from 'react';
import {StyleSheet, Text, Image, View, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

const mainImage = require('./assets/bruschetta.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Bruschetta Recipe</Text>
      <Image source={mainImage} style={styles.mainImage} />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter the Number of Servings"
        keyboardType="numeric"
      />
      <Pressable 
        style={styles.button}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            number: number
          });
        }}
      >
      <Text style={styles.button_text}>View Recipe</Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({ route }) {
  /* 2. Get the param */
  const { number } = route.params;
  return (
    <View>
      <Text style={styles.secondMainText}>Bruschetta</Text>
      <Text style={styles.labels}>Ingredients</Text>
      <Text style={styles.Ingredients_list}>{JSON.stringify(number * 8)} plum tomatoes</Text>
      <Text style={styles.Ingredients_list}>{JSON.stringify(number * 12)} basil leaves</Text>
      <Text style={styles.Ingredients_list}>{JSON.stringify(number * 6)} garlic cloves, chopped</Text>
      <Text style={styles.Ingredients_list}>{JSON.stringify(number * 6)} TB olive oil</Text>
      <Text style={styles.labels}>Directions</Text>
      <Text style={styles.Ingredients_list}>
        Combine the ingredients.
        Add salt to taste.
        Top French bread slices with mixture
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
    }}>
        <Stack.Screen 
          name="Healthy Recipes" 
          component={HomeScreen}
          options={{ title: 'Healthy Recipes' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 45,
    fontWeight: 'bold',
    paddingTop: 100,
    paddingBottom: 10
  },
  secondMainText: {
    fontSize: 45,
    fontWeight: 'bold',
    paddingTop: 100,
    paddingBottom: 10,
    textAlign: 'center'
  },
  mainImage: {
    width: 411,
    height: 252
  },
  textInput: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 35,
    paddingBottom: 35
  },
  button: {
    backgroundColor: 'grey',
    borderWidth: 10,
    borderColor: 'grey',
  },
  button_text: {
    color: 'white'
  },
  labels: {
    fontSize: 30,
    paddingLeft: 25,
    paddingTop:10
  },
  Ingredients_list: {
    fontSize: 25,
    paddingLeft: 50,
    paddingRight:50
  }
});
