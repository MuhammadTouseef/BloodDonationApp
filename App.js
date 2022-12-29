import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();
const redcolor = '#C53437';
const App = () => {
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
        initialRouteName="TempHome"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Outfit-Regular',
            color: 'black',
          },
          headerRight: () => <Icon name="search" size={30} color="#292D32" />,
        }}>
        <Stack.Screen name="TempHome" component={TempHome} />
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen
          name="SignUp Screen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Get Donations" component={GetDonations} />
        <Stack.Screen name="My Campaigns" component={MyCampaigns} />
        <Stack.Screen name="Donors" component={Donors} />
        <Stack.Screen name="Active Campaigns" component={ActiveCampaigns} />
        <Stack.Screen name="Blood Banks" component={BloodBanks} />
        <Stack.Screen name="Campaign Details" component={CampaignDetails} />

        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="About Us" component={AboutUs} />
        <Stack.Screen name="Donation History" component={DonationHistory} />
        <Stack.Screen name="Profile" component={Profile} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Tayyab Screens 

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
      <ScrollView>

        <View style={{ marginTop: 20, marginLeft: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
          <Image style={{ height: 200, width: 200, borderRadius: 100, borderWidth: 4, borderColor: '#C53437' }} source={require('./images/placeholder.png')} />
          <TouchableOpacity>
            <Icon name="cog-outline" size={20} color="black" style={{ marginBottom: 100 }} />
          </TouchableOpacity>

        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>John Doe</Text>
          <TouchableOpacity>
            <Icon name="cog-outline" size={20} color="black" style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>

          <ProfileCard
            gender='Male'

          />

        </View>







      </ScrollView>
    </View>


  );
};

const DonationHistory = () => {
  return (

    <View style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
      <ScrollView>


        <View style={styles.titleContainer}>
          <Image style={{ height: 200, width: 120, marginTop: 40 }} source={require('./images/blood.png')} />
          <ScreenTitle title={'We Are So Proud \n Of You!'} />

          <Image style={{ height: 125, width: 125, borderRadius: 100, borderWidth: 4, borderColor: '#C53437' }} source={require('./images/placeholder.png')} />
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 7 }}>John Doe</Text>
        </View>

        <HistoryCard
          date='4/2/2021'
          location='4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad'
          campaign='No'
        />

        <HistoryCard
          date='12/7/2021'
          location='4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad'
          campaign='Yes'
        />

        <HistoryCard
          date='3/2/2022'
          location='4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad'
          campaign='No'
        />

        <HistoryCard
          date='14/8/2022'
          location='4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad'
          campaign='No'
        />

        <View style={styles.rectangle} >
        </View>

      </ScrollView>
    </View>
  );
};


const AboutUs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
      <ScrollView>

        <View style={styles.titleContainer}>
          <Image style={{ height: 200, width: 120, marginTop: 40 }} source={require('./images/blood.png')} />
          <ScreenTitle title={'About Us'} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tAboutUs}>This organization was{'\n'}created to aid Blood{'\n'}Transfusions across{'\n'}Pakistan. We aim to{'\n'}facilitate this process{'\n'}through this Application.{'\n'}With this Application{'\n'}people can pledge to{'\n'}donate to Active Blood{'\n'}Campaigns. This method{'\n'}will provide ease and{'\n'}confirmation on the{'\n'}people willing to Donate.{'\n'}{'\n'}<Text style={{ fontStyle: 'italic' }}>Not All Heroes Wear Capes, Some Simply Donate Blood.</Text></Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Founders</Text>
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ height: 125, width: 125, borderRadius: 100, marginRight: 25 }} source={require('./images/Arshik.jpg')} />
            <Image style={{ height: 125, width: 125, borderRadius: 100, marginLeft: 25 }} source={require('./images/Touseef.jpg')} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <Text style={{ marginRight: 15, fontWeight: 'bold', fontSize: 18, }}>Syed Arshik Javed</Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 18, }}>Muhammad Touseef</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <Image style={{ height: 125, width: 125, borderRadius: 100, marginRight: 25 }} source={require('./images/Tayyab.jpg')} />
            <Image style={{ height: 125, width: 125, borderRadius: 100, marginLeft: 25 }} source={require('./images/Mujtaba.jpg')} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <Text style={{ marginRight: 15, fontWeight: 'bold', fontSize: 18, }}>M. Tayyab Naveed</Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 18, }}>Mujtaba Aziz Khan</Text>
          </View>
        </View>

        <View style={styles.rectangle} >
        </View>

      </ScrollView>
    </View>


  );
};

const Feedback = () => {
  return (

    <View style={{ flex: 1, backgroundColor: '#EBEBEB' }}>

      <ScrollView>

        <View style={styles.titleContainer}>
          <ScreenTitle title={'We Would Love to \n Hear Your \n Feedback!'} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Email</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Feedback</Text>
          <TextInput style={styles.inputFeedback} />
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle} >
        </View>

      </ScrollView >
    </View >

  );
};

const MainScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 20,
            width: 350,
            marginTop: 130,
            alignContent: 'center',
            marginLeft: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#B0303B',
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#5A1616',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 20,
            width: 350,
            marginTop: 20,
            alignContent: 'center',
            marginLeft: 20,
            marginBottom: -20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#DFDBDB',
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}>
            Create Account
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#DFDBDB',
              marginTop: 100,
              marginLeft: 23,
              fontFamily: 'Outfit-Regular',
            }}>
            {' '}
            Learn More{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: -18,
              color: '#DFDBDB',
              marginLeft: 280,
              fontFamily: 'Outfit-Regular',
            }}>
            {' '}
            Skip Now{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={{ top: -22, marginLeft: 345 }}>
          <MIcon name="arrow-right" size={25} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            borderBottomWidth: 1,
            width: '90%',
            padding: 5,
            fontSize: 22,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Username"
        />

        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            padding: 5,
            borderBottomWidth: 1,
            width: '90%',
            marginTop: 70,
            fontSize: 22,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Password"
        />

        <TouchableOpacity>
          <View style={{ marginLeft: 320, marginTop: -35 }}>
            <MIcon name="eye" size={33} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F2F2F2',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                padding: 10,
                width: 220,
                marginTop: 70,
                alignContent: 'center',
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#B0303B',
                  fontSize: 22,
                  fontFamily: 'Outfit-Regular',
                }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 20, marginLeft: 25 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                  color: '#FFFFFF',
                  fontSize: 18,
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, marginLeft: 25 }}>
            <TouchableOpacity>
              <Text style={{ color: '#FFFFFF', fontFamily: 'Outfit-Regular' }}>
                Don't Have An Account?{' '}
                <Text
                  style={{ fontFamily: 'Outfit-Regular', fontWeight: 'bold' }}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const SignUpScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{ alignSelf: 'center', top: -150 }}>
        <Text
          style={{ color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 25 }}>
          Create Your Account
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: -120 }}>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            borderBottomWidth: 0.7,
            width: '90%',
            padding: 5,
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Full Name"
        />
        <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
          <Icon name="person" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            padding: 5,
            borderBottomWidth: 0.7,
            width: '90%',
            marginTop: 40,
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Email"
        />
        <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
          <MIcon name="email" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            padding: 5,
            borderBottomWidth: 0.7,
            width: '90%',
            marginTop: 40,
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Phone Number"
        />
        <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
          <MIcon name="card-account-phone" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            padding: 5,
            borderBottomWidth: 0.7,
            width: '90%',
            marginTop: 40,
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Password"
        />
        <TouchableOpacity>
          <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
            <MIcon name="eye" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          style={{
            padding: 5,
            borderBottomWidth: 0.7,
            width: '90%',
            marginTop: 40,
            fontSize: 20,
            fontFamily: 'Outfit-Regular',
          }}
          placeholder="Confirm Password"
        />
        <TouchableOpacity>
          <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
            <MIcon name="eye" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              padding: 10,
              width: 250,
              marginTop: 30,
              alignContent: 'center',
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#B0303B',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#C53437',
              borderWidth: 1,
              borderRadius: 70,
              borderColor: 'black',
              padding: 10,
              width: 220,
              marginTop: 20,
              alignContent: 'center',
              marginLeft: 20,
              alignItems: 'center',
              width: 250,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#000000',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginLeft: 20,
              }}>
              Sign up with Google
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginLeft: -155, marginTop: -33, padding: 2 }}>
          <MIcon name="google" size={20} color="#000000" />
        </View>

        <View style={{ marginTop: 30, marginLeft: 25 }}>
          <TouchableOpacity>
            <Text style={{ color: '#FFFFFF', fontFamily: 'Outfit-Regular' }}>
              Have An Account?{' '}
              <Text style={{ fontFamily: 'Outfit-Regular', fontWeight: 'bold' }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={{ marginRight: 340, bottom: 690 }}>
            <MIcon name="arrow-left" size={40} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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

const CampaignCard = props => {
  return (
    <View style={styles.campaignsCard}>
      <View style={styles.campaignsCardInner}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <MIcon name="blood-bag" size={30} color="#FFFFFF" />
          <Text style={styles.campaignBloodgrp}>{props.blood}</Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon name="hospital-building" size={30} color="#FFFFFF" />
          <View style={{ width: 15 }} />
          <Text style={styles.campaignHospital}>{props.hospital}</Text>
        </View>
      </View>
      <View style={styles.campaignsCardInner}>
        <Icon name="location-sharp" size={30} color="#FFFFFF" />
        <Text style={styles.hospitaladdress}>{props.address}</Text>
      </View>
      <View style={styles.campaignsCardInnerRight}>
        <TouchableOpacity style={styles.btncampaign}>
          <Text style={styles.btnTextCampaign}>{props.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DonorCard = props => {
  return (
    <View style={styles.campaignsCard}>
      <View style={styles.campaignsCardInner}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={props.img}
            style={{ borderRadius: 60, height: 80, width: 80 }}
          />
        </View>
        <View
          style={{
            flex: 3,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.donordetails}>{props.name}</Text>

          <Text style={styles.donordetails}>Blood Group: {props.blood}</Text>
        </View>
      </View>

      <View style={styles.donorCardInnerRight}>
        <TouchableOpacity style={styles.btncampaign}>
          <Text style={styles.btnTextCampaign}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncampaign}>
          <Text style={styles.btnTextCampaign}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HistoryCard = props => {
  return (
    <View style={styles.HistoryCardStyle}>

      <View style={styles.HistoryCardRed}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Date</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 7 }}>{props.date}</Text>
      </View>

      <View style={styles.HistoryCardWhite}>
        <Icon name="location-sharp" size={30} color="#C53437" />
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>{props.location}</Text>
      </View>

      <View style={styles.HistoryCardRed}>
        <Text style={{ textAlign: 'center', fontSize: 19, fontWeight: 'bold' }}>Campaign?</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 7 }}>{props.campaign}</Text>
      </View>

    </View>
  );
};

const ProfileCard = props => {
  return (
    <View style={styles.ProfileCardStyle}>

      <View style={styles.ProfileCardRed}>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignContent: 'center', color: 'white', justifyContent: 'center' }}>Gender</Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{props.gender}</Text>
      </View>

      <View style={styles.ProfileCardRed}>
        <TouchableOpacity>
          <Icon name="cog-outline" size={30} color="white" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const BloodBankCard = props => {
  return (
    <View style={styles.campaignsCard}>
      <View style={styles.campaignsCardInner}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <MIcon name="hospital-building" size={30} color="#FFFFFF" />
          <View style={{ width: 15 }} />
          <Text style={styles.campaignHospital}>{props.hospital}</Text>
        </View>
      </View>
      <View style={styles.campaignsCardInner}>
        <Icon name="location-sharp" size={30} color="#FFFFFF" />
        <Text style={styles.hospitaladdress}>{props.address}</Text>
      </View>
      <View style={styles.donorCardInnerRight}>
        <TouchableOpacity style={styles.btncampaign}>
          <Text style={styles.btnTextCampaign}>Get Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncampaign}>
          <Text style={styles.btnTextCampaign}>Call Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CampaignRow = props => {
  return (
    <>
      <View style={{ flexDirection: props.fd, justifyContent: 'space-between' }}>
        <Text style={styles.cpmrowdetail}>{props.left}</Text>
        <Text style={styles.cpmrowdetail}>{props.right}</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Image
          source={require('./images/dotswhite.png')}
          style={{ width: '50%' }}
        />
      </View>
    </>
  );
};

// Screens
const GetDonations = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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

const MyCampaigns = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'My Campaigns'} />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'View Donors'}
          id={'1'}
        />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'View Donors'}
          id={'1'}
        />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'View Donors'}
          id={'1'}
        />
      </ScrollView>
    </View>
  );
};

const Donors = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'Donors'} />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'Details'}
          id={'1'}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image source={require('./images/dots.png')} style={{ width: '50%' }} />
        </View>

        <DonorCard
          img={require('./images/placeholder.png')}
          name={'Muhammad Touseef'}
          blood={'O+'}
          call={'123'}
          accept={'11'}
        />

        <DonorCard
          img={require('./images/placeholder.png')}
          name={'Syed Arshik Javed'}
          blood={'B+'}
          call={'123'}
          accept={'11'}
        />
      </ScrollView>
    </View>
  );
};

const ActiveCampaigns = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'Active Campaigns'} />
        <View style={{ marginBottom: 25 }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder={'Enter Location'} />
            <Icon
              style={styles.acicon}
              name="location-outline"
              size={30}
              color="#000000"
            />
          </View>
        </View>
        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'More Details'}
          id={'1'}
        />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'More Details'}
          id={'1'}
        />

        <CampaignCard
          blood={'O+'}
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          button={'More Details'}
          id={'1'}
        />
      </ScrollView>
    </View>
  );
};

const BloodBanks = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'Blood Banks'} />
        <View style={{ marginBottom: 25 }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder={'Enter Location'} />
            <Icon
              style={styles.acicon}
              name="location-outline"
              size={30}
              color="#000000"
            />
          </View>
        </View>
        <BloodBankCard
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          call={'12345678'}
          location={'37.00,76.00'}
        />

        <BloodBankCard
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          call={'12345678'}
          location={'37.00,76.00'}
        />

        <BloodBankCard
          hospital={'Shifa Hospital'}
          address={'4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8, Islamabad'}
          call={'12345678'}
          location={'37.00,76.00'}
        />
      </ScrollView>
    </View>
  );
};

const CampaignDetails = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'Campaign Details'} />
        <View style={styles.campaigncard}>
          <CampaignRow left={'Patient Name:'} right={'John Doe'} fd={'row'} />
          <CampaignRow left={'Blood Group:'} right={'O+'} fd={'row'} />
          <CampaignRow left={'Contact:'} right={'+9200000000'} fd={'row'} />
          <CampaignRow
            left={'Location:'}
            right={'Shifa Hospital, Islamabad'}
            fd={'row'}
          />
          <CampaignRow
            left={'Details:'}
            right={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dignissim est'
            }
            fd={'column'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const TempHome = ({ navigation }) => {
  return (
    <>

      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Get Blood Donation'}
            onPress={() => navigation.navigate('Get Donations')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'My Campaigns'}
            onPress={() => navigation.navigate('My Campaigns')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Donors'}
            onPress={() => navigation.navigate('Donors')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Active Campaigns'}
            onPress={() => navigation.navigate('Active Campaigns')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Blood Banks'}
            onPress={() => navigation.navigate('Blood Banks')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Campaign Details'}
            onPress={() => navigation.navigate('Campaign Details')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Main Screen'}
            onPress={() => navigation.navigate('Main Screen')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Login Screen'}
            onPress={() => navigation.navigate('Login Screen')}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'SignUp Screen'}
            onPress={() => navigation.navigate('SignUp Screen')}
          />
        </View>


        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Feedback'}
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            title={'About Us'}
            onPress={() => navigation.navigate('About Us')}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Donation History'}
            onPress={() => navigation.navigate('Donation History')}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Profile'}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  campaigncard: {
    backgroundColor: redcolor,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 330,
    width: '100%',
    minHeight: 250,
    borderRadius: 10,
    padding: 15,
  },
  donorCardInnerRight: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  donordetails: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  cpmrowdetail: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  campaignsCard: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 142,
    backgroundColor: redcolor,
    maxWidth: 330,
    width: '100%',
    borderRadius: 16,
    flexDirection: 'column',
    marginBottom: 20,
  },
  campaignsCardInner: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  campaignsCardInnerRight: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  campaignBloodgrp: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  campaignHospital: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  hospitaladdress: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    fontSize: 13,
    color: 'white',
  },
  btncampaign: {
    height: 43,
    width: 134,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    marginVertical: 3,
  },
  btnTextCampaign: {
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    color: redcolor,
  },
  inputContainer: {
    justifyContent: 'center',
    maxWidth: 330,
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
  acicon: {
    position: 'absolute',
    right: 10,
    top: '42%',
    fontWeight: 'bold',
  },
  container: {
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,

    width: '100%',
  },
  titleContainer: {
    minHeight: 144,

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
    width: 330,
  },
  textArea: {
    height: 92,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 330,
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

  //Arshik
  main: {
    flex: 1,
    backgroundColor: '#C53437',
  },
  topLeft: {
    position: 'relative',
    left: -140,
    top: -80,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: '#CD4254',
  },

  // Tayyab's styles
  rectangle: {
    width: 130,
    marginTop: 30,
    marginBottom: 7,
    height: 6,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: "#C53437",
  },
  inputFeedback: {
    height: 220,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 330,
  },
  tAboutUs: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
    color: 'white',
    backgroundColor: '#C53437',
    borderRightColor: 'black',
    borderLeftColor: 'black',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderWidth: 3,
  },
  HistoryCard: {
    backgroundColor: "white",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ProfileCard: {
    backgroundColor: "white",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ProfileCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 15,
    backgroundColor: "white",
    maxWidth: 360,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ProfileCardRed: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    width: '100%',
  },
  ProfileCardWhite: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 120,
    width: '100%',
  },

  HistoryCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 50,
    backgroundColor: "white",
    maxWidth: 360,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  HistoryCardRed: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    width: '100%',
  },
  HistoryCardWhite: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 120,
    width: '100%',
  },

});

export default App;
