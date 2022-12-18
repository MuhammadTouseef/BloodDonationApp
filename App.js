import type {Node} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();
const redcolor = '#C53437';
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          position: 'absolute',
          zIndex: 30, // works on ios
          elevation: 30, // works on android
        }}>
        <Image source={require('./images/barcircle.png')} style={{}} />
      </View>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Outfit-Regular',
            color: 'black',
          },
        }}>
        <Stack.Screen name="Get Donations" component={GetDonations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Components
const ScreenTitle = props => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

// Screens
const GetDonations = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Get Blood \n Donations'} />
        {/*<View style={styles.titleContainer}>*/}
        {/*  <Text style={styles.title}>*/}
        {/*    Get Blood {'\n'}*/}
        {/*    Donations*/}
        {/*  </Text>*/}
        {/*</View>*/}

        {/*<ScrollView>*/}
        <View style={styles.container}>
          <Text style={styles.tfield}>Patient Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.tfield}>Blood Group</Text>
          <TextInput style={styles.input} />
          <Icon
            style={styles.icon}
            name="location-outline"
            size={30}
            color="#000000"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tfield}>Location</Text>
          <TextInput style={styles.input} />
          <Icon
            style={styles.icon}
            name="location-outline"
            size={30}
            color="#000000"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Contact Number</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.container}>
          <Text style={styles.tfield}>Case Details</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.tfield}>Case Details</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Get Blood Donation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    maxWidth: 370,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: '100%',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: '55%',
    fontWeight: 'bold',
  },
  container: {
    maxWidth: 370,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,

    width: '100%',
  },
  titleContainer: {
    height: 184,

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
  },
  tfield: {
    fontSize: 24,
    fontFamily: 'Outfit-Regular',
    color: 'black',
  },
  input: {
    height: 60,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 370,
  },
  textArea: {
    height: 92,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 370,
  },
  btn: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: redcolor,
    padding: 10,
    borderRadius: 16,
    marginVertical: 12,
  },
  btnText: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
});

export default App;
