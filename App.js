import type {Node} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
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
        initialRouteName="Campaign Details"
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
        <Stack.Screen name="Campaign Details" component={CampaignDetails} />
        {/*<Stack.Screen name="Get Donations" component={GetDonations} />*/}
        {/*<Stack.Screen name="My Campaigns" component={MyCampaigns} />*/}
        {/*<Stack.Screen name="Donors" component={Donors} />*/}
        {/*<Stack.Screen name="Active Campaigns" component={ActiveCampaigns} />*/}
        {/*<Stack.Screen name="Blood Banks" component={BloodBanks} />*/}
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
          <View style={{width: 15}} />
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
            style={{borderRadius: 60, height: 80, width: 80}}
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
          <View style={{width: 15}} />
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
      <View style={{flexDirection: props.fd, justifyContent: 'space-between'}}>
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
          style={{width: '50%'}}
        />
      </View>
    </>
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

const MyCampaigns = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          <Image source={require('./images/dots.png')} style={{width: '50%'}} />
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Active Campaigns'} />
        <View style={{marginBottom: 25}}>
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Blood Banks'} />
        <View style={{marginBottom: 25}}>
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
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

const styles = StyleSheet.create({
  campaigncard: {
    backgroundColor: redcolor,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 360,
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
    maxWidth: 370,
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
    fontSize: 14,
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
  acicon: {
    position: 'absolute',
    right: 10,
    top: '42%',
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
