import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
  AlertNotificationDialog,
} from 'react-native-alert-notification';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
  ImageBackground,
  Linking,
  Alert,
} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const redcolor = '#C53437';
const URL = 'http://20.102.109.51:8080';

const showSuccessToast = message => {
  Toast.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: message,
  });
};

axios.interceptors.request.use(
  async config => {
    const token = await EncryptedStorage.getItem('JWT');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => response,
  error => {
    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: 'ERROR',
      textBody: error.response.data.error,
      button: 'close',
    });
    throw error;
  },
);

const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    zIndex: 1, // works on ios*/}
        {/*    elevation: 1, // works on android*/}
        {/*  }}>*/}
        {/*  <Image source={require('./images/barcircle.png')} style={{}} />*/}
        {/*</View>*/}
        <Stack.Navigator
          initialRouteName="Main Screen"
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
          <Stack.Screen
            name="Main Screen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp Screen"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forget Password"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTPPassword Screen"
            component={OTPPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword Screen"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPasswordComplete Screen"
            component={ResetPasswordComplete}
            options={{headerShown: false}}
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
          <Stack.Screen name="Top Donors" component={TopDonors} />
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />

          <Stack.Screen
            name="Home"
            component={DashboardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Blood Type"
            component={BloodTypeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Socials"
            component={SocialsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerM}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};

//Tayyab's Screens

const PrivacyPolicy = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{height: 140, width: 140, marginTop: 40}}
            source={require('./images/bloodLogo.png')}
          />
          <ScreenTitle title={'Privacy Policy for Blood Donation Inc'} />
        </View>

        <View style={{marginLeft: 10, marginRight: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            At Blood Donation Inc, accessible from www.DonateBlood.com, one of
            our main priorities is the privacy of our visitors.
            {'\n'}
            {'\n'}This Privacy Policy document contains types of information
            that is collected and recorded by Blood Donation Inc and how we use
            it.{'\n'}
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us. {'\n'}
            {'\n'}
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Blood Donation Inc. This policy
            is not applicable to any information collected offline or via
            channels other than this website. {'\n'}
            Consent By using our website, you hereby consent to our Privacy
            Policy and agree to its terms. {'\n'}
            {'\n'}
            Information we collect {'\n'}
            {'\n'}
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. {'\n'}
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. {'\n'}
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number. {'\n'}
            {'\n'}
            How we use your information {'\n'}
            We use the information we collect in various ways, including to:
            {'\n'}
            Provide, operate, and maintain our website{'\n'}
            Improve, personalize, and expand our website{'\n'}
            Understand and analyze how you use our website{'\n'}
            Develop new products, services, features, and functionality{'\n'}
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes{'\n'}
            Send you emails{'\n'}
            Find and prevent fraud{'\n'}
            {'\n'}
            Log Files
            {'\n'}
            Blood Donation Inc follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.{'\n'}
            Cookies and Web Beacons{'\n'}
            {'\n'}
            Like any other website, Blood Donation Inc uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.{'\n'}
            Advertising Partners Privacy Policies{'\n'}
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Blood Donation Inc.{'\n'}
            {'\n'}
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Blood Donation
            Inc, which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.{'\n'}
            Note that Blood Donation Inc has no access to or control over these
            cookies that are used by third-party advertisers.{'\n'}
            {'\n'}
            Third Party Privacy Policies{'\n'}
            Blood Donation Inc's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.{'\n'}
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.{'\n'}
            {'\n'}
            CCPA Privacy Rights (Do Not Sell My Personal Information){'\n'}
            Under the CCPA, among other rights, California consumers have the
            right to:{'\n'}
            {'\n'}
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.{'\n'}
            {'\n'}
            Request that a business delete any personal data about the consumer
            that a business has collected.{'\n'}
            {'\n'}
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.{'\n'}
            {'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            {'\n'}
            GDPR Data Protection Rights{'\n'}
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:{'\n'}
            {'\n'}
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.{'\n'}
            {'\n'}
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.{'\n'}
            {'\n'}
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.{'\n'}
            {'\n'}
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.{'\n'}
            {'\n'}
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            {'\n'}
            {'\n'}
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.{'\n'}
            {'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            {'\n'}
            Children's Information Another part of our priority is adding
            protection for children while using the internet. We encourage
            parents and guardians to observe, participate in, and/or monitor and
            guide their online activity.{'\n'}
            {'\n'}
            Blood Donation Inc does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.{'\n'}
          </Text>

          <View style={styles.rectangle} />
        </View>
      </ScrollView>
    </View>
  );
};

const TopDonors = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{height: 140, width: 140, marginTop: 40}}
            source={require('./images/bloodLogo.png')}
          />
          <View style={{marginTop: -48}}>
            <ScreenTitle title={'Congratulations!'} />
          </View>
          <Text
            style={{
              fontSize: 25,
              marginTop: -40,
              textAlign: 'center',
              color: redcolor,
            }}>
            Thank you for being the{'\n'}reason someone lives{'\n'}another day
          </Text>
        </View>

        <TopDonorsCardJamal name="Jamal Blackman" year="2018" bags="8" />

        <TopDonorsCardMujtaba name="Mujtaba Aziz Khan" year="2022" bags="6" />

        <TopDonorsCardTouseef name="Muhammad Touseef" year="2021" bags="4" />

        <TopDonorsCardTayyab name="M. Tayyab Naveed" year="2021" bags="2" />

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              borderWidth: 4,
              borderColor: '#C53437',
            }}
            source={require('./images/placeholder.png')}
          />
          <TouchableOpacity>
            <Image
              style={{height: 20, width: 20, marginBottom: 100}}
              source={require('./images/Gear.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 20,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>John Doe</Text>
          <TouchableOpacity>
            <Image
              style={{height: 20, width: 20, marginLeft: 5, marginRight: 10}}
              source={require('./images/Gear.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <ProfileCardGender gender="Male" />

          <ProfileCardAddress address="House No 92, Street 49, H-Block, Soan Gardens" />

          <ProfileCardBlood blood="O+" />

          <ProfileCardMedications medications="None" />

          <ProfileCardIllness illnesses="None" />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Privacy Policy');
          }}>
          <Text
            style={{
              color: redcolor,
              marginLeft: 10,
              fontFamily: 'Outfit-Regular',
              fontSize: 16,
            }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

const DonationHistory = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{height: 140, width: 140, marginTop: 40}}
            source={require('./images/bloodLogo.png')}
          />
          <ScreenTitle title={'We Are So Proud \n Of You!'} />

          <Image
            style={{
              height: 125,
              width: 125,
              borderRadius: 100,
              borderWidth: 4,
              borderColor: '#C53437',
            }}
            source={require('./images/placeholder.png')}
          />
          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 7}}>
            John Doe
          </Text>
        </View>

        <HistoryCard
          date="4/2/2021"
          location="4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad"
          campaign="No"
        />

        <HistoryCard
          date="12/7/2021"
          location="4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad"
          campaign="Yes"
        />

        <HistoryCard
          date="3/2/2022"
          location="4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad"
          campaign="No"
        />

        <HistoryCard
          date="14/8/2022"
          location="4 Pitras Bukhari Rd, H-8/4 H 8/4 H-8 Islamabad"
          campaign="No"
        />

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

const AboutUs = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{height: 140, width: 140, marginTop: 40}}
            source={require('./images/bloodLogo.png')}
          />
          <ScreenTitle title={'About Us'} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tAboutUs}>
            This organization Was{'\n'}Created To Aid Blood{'\n'}Transfusions
            Across{'\n'}Pakistan. We Aim To{'\n'}Facilitate This Process{'\n'}
            Through This Application.{'\n'}With This Application{'\n'}People Can
            Pledge To{'\n'}Donate To Active Blood{'\n'}Campaigns. This Method
            {'\n'}Will Provide Ease And{'\n'}Confirmation On The{'\n'}People
            Willing To Donate.{'\n'}
            {'\n'}
            <Text style={{fontStyle: 'italic'}}>
              Not All Heroes Wear Capes, Some Simply Donate Blood.
            </Text>
          </Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Founders</Text>
        </View>

        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                marginRight: 30,
              }}
              source={require('./images/Arshik.jpg')}
            />
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                marginLeft: 30,
              }}
              source={require('./images/Touseef.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 18}}>
              Syed Arshik Javed
            </Text>
            <Text style={{marginLeft: 0, fontWeight: 'bold', fontSize: 18}}>
              Muhammad Touseef
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                marginRight: 30,
              }}
              source={require('./images/Tayyab.jpg')}
            />
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                marginLeft: 30,
              }}
              source={require('./images/Mujtaba.jpg')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{marginRight: 15, fontWeight: 'bold', fontSize: 18}}>
              M. Tayyab Naveed
            </Text>
            <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 18}}>
              Mujtaba Aziz Khan
            </Text>
          </View>
        </View>

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

const Feedback = () => {
  const [message, setMessage] = useState('');

  const getFeedback = async () => {
    console.log(
      //////////////
      Feedback,
    );

    try {
      let res = await axios.post(`${URL}/api/v1/user/feedback/`, {
        message: message,
      });

      if (res.data.success === true) {
        showSuccessToast('Successfully Sent Feedback');
      }
    } catch {}
  };

  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{height: 140, width: 140, marginTop: 40}}
            source={require('./images/bloodLogo.png')}
          />
          <ScreenTitle title={'We Would Love to \n Hear Your \n Feedback!'} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Email</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Feedback</Text>
          <TextInput style={styles.inputFeedback} onChangeText={setMessage} />
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={getFeedback}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

//Arshik's Screens
const MainScreen = ({navigation}) => {
  const check = async () => {
    let token = await EncryptedStorage.getItem('JWT');
    if (token) {
      navigation.navigate('Drawer');
    }
  };
  useEffect(() => {
    check();
  }, []);
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.paragraph} />

        <View style={styles.topLeft} />

        <View>
          <Image
            style={{height: 90, width: 90, alignSelf: 'center', marginTop: -60}}
            source={require('./images/whiteblood.png')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              padding: 20,
              width: 350,
              marginTop: 180,
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

        <TouchableOpacity onPress={() => navigation.navigate('SignUp Screen')}>
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

        <View style={{flexDirection: 'column'}}>
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
          <View style={{top: -22, marginLeft: 345}}>
            <MIcon name="arrow-right" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const login = async () => {
    try {
      let res = await axios.post(`${URL}/api/v1/auth/login`, {
        email: username,
        password: password,
      });

      if (res.data.success === true) {
        await EncryptedStorage.setItem('JWT', res.data.token);
        navigation.navigate('Drawer');
      }
    } catch {}
  };
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.paragraph} />

        <View style={styles.topLeft} />

        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Blood Bank',

              button: 'Close',
            })
          }>
          <View>
            <Image
              style={{
                height: 90,
                width: 90,
                alignSelf: 'center',
                marginTop: -70,
                marginBottom: 70,
              }}
              source={require('./images/whiteblood.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <TextInput
            placeholderTextColor={'#D0B5B5'}
            onChangeText={setUsername}
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
            onChangeText={setPassword}
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
            secureTextEntry={passwordVisibility}
          />

          <TouchableOpacity onPress={handlePasswordVisibility}>
            <View style={{marginLeft: 320, marginTop: -35}}>
              <MIcon name="eye" size={33} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={login}>
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
                  alignSelf: 'center',
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

            <View style={{marginTop: 20, marginLeft: 25, alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forget Password')}>
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

            <View style={{marginTop: 40, marginLeft: 25, alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp Screen')}>
                <Text style={{color: '#FFFFFF', fontFamily: 'Outfit-Regular'}}>
                  Don't Have An Account?{' '}
                  <Text
                    style={{fontFamily: 'Outfit-Regular', fontWeight: 'bold'}}>
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const SignUpFunc = async () => {
    try {
      if (Confirmpassword == password) {
        let res = await axios.post(`${URL}/api/v1/auth/register`, {
          name: name,
          email: email,
          password: password,
          phonenumber: phone,
        });

        if (res.data.success === true) {
          await EncryptedStorage.setItem('JWT', res.data.token);
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Signed Up Successfully',
            textBody: '',
            button: 'Close',
          });

          navigation.navigate('Login Screen');
        } else {
        }
      }
    } catch {}
  };
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignSelf: 'center', top: -150}}>
        <Text
          style={{color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 25}}>
          Create Your Account
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: -120}}>
        <TextInput
          onChangeText={setName}
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
        <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
          <Icon name="person" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          placeholderTextColor={'#D0B5B5'}
          onChangeText={setEmail}
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
        <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
          <MIcon name="email" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          onChangeText={setPhone}
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
        <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
          <MIcon name="card-account-phone" size={25} color="#FFFFFF" />
        </View>
        <TextInput
          onChangeText={setPassword}
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
          secureTextEntry={passwordVisibility}
        />
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
            <MIcon name="eye" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <TextInput
          onChangeText={setConfirmPassword}
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
          secureTextEntry={passwordVisibility}
        />
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
            <MIcon name="eye" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={SignUpFunc}>
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
        <View style={{marginLeft: -155, marginTop: -33, padding: 2}}>
          <MIcon name="google" size={20} color="#000000" />
        </View>

        <View style={{marginTop: 30, marginLeft: 25}}>
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF', fontFamily: 'Outfit-Regular'}}>
              Have An Account?{' '}
              <Text style={{fontFamily: 'Outfit-Regular', fontWeight: 'bold'}}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./assets/icons/backArrowWhite.png')}
            style={{marginRight: 340, bottom: 690, width: 14, height: 28}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const forget = async () => {
    try {
      let res = await axios.post(`${URL}/api/v1/auth/forgotpassword`, {
        email: email,
      });

      if (res.data.success === true) {
        navigation.navigate('OTPPassword Screen');
      }
    } catch {}
  };
  // const Forget = async () => {
  //   try {
  //     if (Confirmpassword === password) {
  //       let res = await axios.post(`${URL}/api/v1/auth/register`, {
  //         name: name,
  //         email: email,
  //         password: password,
  //         phonenumber: phone,
  //       });
  //
  //       if (res.data.success === true) {
  //         await EncryptedStorage.setItem('JWT', res.data.token);
  //         Dialog.show({
  //           type: ALERT_TYPE.SUCCESS,
  //           title: 'Signed Up Successfully',
  //           textBody: '',
  //           button: 'Close',
  //         });
  //
  //         navigation.navigate();
  //       } else {
  //       }
  //     }
  //   } catch {}
  // };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignSelf: 'center', top: -60}}>
        <Text
          style={{color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 25}}>
          {' '}
          Forgot Your Password?{' '}
        </Text>
      </View>

      <View style={{alignSelf: 'center', marginLeft: 50, marginRight: 50}}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Outfit-Regular',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -10,
          }}>
          Enter your email address to
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Outfit-Regular',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          reset your password
        </Text>
      </View>

      <TextInput
        onChangeText={setEmail}
        placeholderTextColor={'#EA8A8B'}
        style={{
          padding: 10,
          alignSelf: 'center',
          width: '70%',
          marginTop: 40,
          fontSize: 20,
          borderWidth: 1,
          borderRadius: 10,
          fontFamily: 'Outfit-Regular',
          backgroundColor: '#F2F2F2',
          borderColor: '#FFFFFF',
        }}
        placeholder="Email"
      />

      <TouchableOpacity onPress={forget}>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 10,
            width: 150,
            marginTop: 50,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#B0303B',
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}>
            Next
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('./assets/icons/backArrowWhite.png')}
          style={{marginLeft: 20, bottom: 525, width: 14, height: 28}}
        />
      </TouchableOpacity>
    </View>
  );
};

const OTPPassword = ({navigation}) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const fwdcode = () => {
    let code = first + second + third + fourth;
    navigation.navigate('ResetPassword Screen', {
      code,
    });
  };
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignSelf: 'center', top: -60}}>
        <Text
          style={{color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 22}}>
          {' '}
          Code Has Been Sent To Your Email{' '}
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          top: -20,
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: '#D9D9D9',
            padding: 1,
            height: 50,
            width: 40,
          }}>
          <TextInput
            onChangeText={setFirst}
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 5,
              alignSelf: 'center',
            }}
            maxLength={1}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: '#D9D9D9',
            marginLeft: 20,
            padding: 1,
            height: 50,
            width: 40,
          }}>
          <TextInput
            onChangeText={setSecond}
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 5,
              alignSelf: 'center',
            }}
            maxLength={1}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: '#D9D9D9',
            marginLeft: 20,
            padding: 1,
            height: 50,
            width: 40,
          }}>
          <TextInput
            onChangeText={setThird}
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 5,
              alignSelf: 'center',
            }}
            maxLength={1}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: '#D9D9D9',
            marginLeft: 20,
            padding: 1,
            height: 50,
            width: 40,
          }}>
          <TextInput
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 5,
              alignSelf: 'center',
            }}
            onChangeText={setFourth}
            maxLength={1}
          />
        </View>
      </View>

      <TouchableOpacity onPress={fwdcode}>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 10,
            width: 150,
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#B0303B',
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}>
            Verify
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('./assets/icons/backArrowWhite.png')}
          style={{
            marginRight: 340,
            bottom: 410,
            width: 14,
            height: 28,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const ResetPassword = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const {code} = route.params;

  const resetpass = async () => {
    try {
      let res = await axios.put(`${URL}/api/v1/auth/resetpassword/${code}`, {
        password: password,
      });

      if (res.data.success == true) {
        showSuccessToast('Successfully Updated Password');
        navigation.navigate('ResetPasswordComplete Screen');
      }
    } catch {}
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignSelf: 'center', top: -60}}>
        <Text
          style={{color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 22}}>
          {' '}
          Reset Your Password{' '}
        </Text>
      </View>

      <TextInput
        onChangeText={setPassword}
        placeholderTextColor={'#EA8A8B'}
        style={{
          padding: 10,
          alignSelf: 'center',
          width: '80%',
          marginTop: 20,
          fontSize: 20,
          borderWidth: 1,
          borderRadius: 20,
          fontFamily: 'Outfit-Regular',
          backgroundColor: '#F2F2F2',
          borderColor: '#FFFFFF',
        }}
        placeholder="New Password"
      />

      <TextInput
        onChangeText={setcPassword}
        placeholderTextColor={'#EA8A8B'}
        style={{
          padding: 10,
          alignSelf: 'center',
          width: '80%',
          marginTop: 40,
          fontSize: 20,
          borderWidth: 1,
          borderRadius: 20,
          fontFamily: 'Outfit-Regular',
          backgroundColor: '#F2F2F2',
          borderColor: '#FFFFFF',
        }}
        placeholder="Confirm Password"
      />

      <TouchableOpacity onPress={resetpass}>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 10,
            width: 200,
            marginTop: 50,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#B0303B',
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}>
            Reset
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{marginLeft: 5, bottom: 540}}>
          <MIcon name="arrow-left" size={40} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ResetPasswordComplete = ({navigation}) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={redcolor} />
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignSelf: 'center', top: -60}}>
        <Text
          style={{color: 'white', fontFamily: 'Kaushan-Regular', fontSize: 25}}>
          {' '}
          Woo Hoo!{' '}
        </Text>
      </View>
      <View style={{alignSelf: 'center', top: 0}}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Outfit-Regular',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          Your Password has been reset{' '}
        </Text>
      </View>
      <View style={{alignSelf: 'center', top: 0}}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Outfit-Regular',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          successfully. Login now with your{' '}
        </Text>
      </View>
      <View style={{alignSelf: 'center', top: 0}}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Outfit-Regular',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          new password{' '}
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            padding: 10,
            width: 200,
            marginTop: 50,
            alignSelf: 'center',
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

      <TouchableOpacity>
        <View style={{marginLeft: 5, bottom: 540}}>
          <MIcon name="arrow-left" size={40} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
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
  const [path, setPath] = useState('');
  useEffect(() => {
    if (props.button === 'Details' || props.button ===  'More Details') {
      setPath('Campaign Details');
    } else {
      setPath('Donors');
    }
  }, []);

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
        <TouchableOpacity
          style={styles.btncampaign}

          onPress={() => props.navigation.navigate(path, {id: props.id})}>
          <Text style={styles.btnTextCampaign}>{props.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileCardGender = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 20,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Gender
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 20, color: 'black'}}>{props.gender}</Text>
      </View>

      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileCardAddress = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 20,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Address
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 9, color: 'black', textAlign: 'center'}}>
          {props.address}
        </Text>
      </View>

      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileCardBlood = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 20,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Blood Type
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 20, color: 'black'}}>{props.blood}</Text>
      </View>

      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileCardMedications = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 14,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Current Medications
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 20, color: 'black'}}>{props.medications}</Text>
      </View>

      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileCardIllness = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 12,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Current Illnesses/ Ailments
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 20, color: 'black'}}>{props.illnesses}</Text>
      </View>

      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DonorCard = props => {
  const acceptDonor = async () => {
    try {
      let res = await axios.put(
        `${URL}/api/v1/campaign/${props.campaignID}/${props.accept}`,
      );
      res = res.data;

      if (res.success == true) {
        showSuccessToast('Successfully Accepted Donor');
        props.navigation.navigate('Drawer');
      }
    } catch {}
  };

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

          <Text style={styles.donordetails}>
            Blood Group: {props.blood || 'N/A'}{' '}
          </Text>
        </View>
      </View>

      <View style={styles.donorCardInnerRight}>
        <TouchableOpacity
          style={styles.btncampaign}
          onPress={() => Linking.openURL(`tel:${props.call}`)}>
          <Text style={styles.btnTextCampaign}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncampaign} onPress={acceptDonor}>
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
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Date
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 7,
          }}>
          {props.date}
        </Text>
      </View>

      <View style={styles.HistoryCardWhite}>
        <Icon name="location-sharp" size={30} color="#C53437" />
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          {props.location}
        </Text>
      </View>

      <View style={styles.HistoryCardRed}>
        <Text style={{textAlign: 'center', fontSize: 19, fontWeight: 'bold'}}>
          Campaign?
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 7,
          }}>
          {props.campaign}
        </Text>
      </View>
    </View>
  );
};

const TopDonorsCardJamal = props => {
  return (
    <>
      <View style={styles.TopDonorsCardStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 100}}
            source={require('./images/placeholder.png')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: 100,
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {props.year}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <View style={styles.BoxGray}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.bags} bags donated
            </Text>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              (1 bag equals 250 ml)
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const TopDonorsCardMujtaba = props => {
  return (
    <>
      <View style={styles.TopDonorsCardStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 100}}
            source={require('./images/Mujtaba.jpg')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: 100,
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {props.year}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <View style={styles.BoxGray}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.bags} bags donated
            </Text>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              (1 bag equals 250 ml)
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const TopDonorsCardTouseef = props => {
  return (
    <>
      <View style={styles.TopDonorsCardStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 100}}
            source={require('./images/Touseef.jpg')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: 100,
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {props.year}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <View style={styles.BoxGray}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.bags} bags donated
            </Text>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              (1 bag equals 250 ml)
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const TopDonorsCardTayyab = props => {
  return (
    <>
      <View style={styles.TopDonorsCardStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 100}}
            source={require('./images/Tayyab.jpg')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: 100,
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {props.year}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <View style={styles.BoxGray}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {props.bags} bags donated
            </Text>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              (1 bag equals 250 ml)
            </Text>
          </View>
        </View>
      </View>
    </>
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
const GetDonations = ({navigation}) => {
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [hospital, setHospital] = useState('');
  const [location, setlocation] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [details, setDetails] = useState('');

  const getDonation = async () => {
    try {
      let res = await axios.post(`${URL}/api/v1/campaign/`, {
        bloodGroup: bloodGroup,
        hospital: hospital,
        phonenumber: contactNumber,
        patientName: patientName,
        location: location,
        details: details,
      });

      if (res.data.success === true) {
        showSuccessToast('Successfully Created Donation Campaign ');
        navigation.navigate('My Campaigns');
      }
    } catch {}
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Get Blood \n Donations'} />

        <View style={styles.container}>
          <Text style={styles.tfield}>Patient Name</Text>
          <TextInput style={styles.input} onChangeText={setPatientName} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.tfield}>Blood Group</Text>
          <TextInput style={styles.input} onChangeText={setBloodGroup} />
          <Fontisto
            style={styles.icon}
            name="blood-drop"
            size={30}
            color="#000000"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.tfield}>Location</Text>
          <TextInput style={styles.input} onChangeText={setlocation} />
          <Icon
            style={styles.icon}
            name="location-outline"
            size={30}
            color="#000000"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Contact Number</Text>
          <TextInput style={styles.input} onChangeText={setcontactNumber} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Hospital</Text>
          <TextInput style={styles.input} onChangeText={setHospital} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tfield}>Case Details</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            onChangeText={setDetails}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={getDonation}>
            <Text style={styles.btnText}>Get Blood Donation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const MyCampaigns = ({navigation}) => {
  const [data, setData] = useState([]);
  const getmyCampaign = async () => {
    try {
      let res = await axios.get(`${URL}/api/v1/campaign/`);
      res = res.data.data;
      setData(res);
    } catch {}
  };

  useEffect(() => {
    getmyCampaign();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'My Campaigns'} />

        {data.map(x => {
          return (
            <CampaignCard
              key={x._id}
              blood={x.bloodGroup}
              hospital={x.hospital}
              address={x.location}
              button={'Donors'}
              id={x._id}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Donors = ({navigation, route}) => {
  const {id} = route.params;

  const [data, setData] = useState({});
  const [donor, setDonor] = useState([]);

  const getDonors = async () => {
    try {
      let res = await axios.get(`${URL}/api/v1/campaign/${id}`);
      res = res.data.data;
      setData(res);
      setDonor(res.donors);
    } catch {}
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Donors'} />

        <CampaignCard
          blood={data.bloodGroup}
          hospital={data.hospital}
          address={data.location}
          button={'Details'}
          id={data._id}
          navigation={navigation}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image source={require('./images/dots.png')} style={{width: '50%'}} />
        </View>
        {donor.map(a => {
          return (
            <DonorCard
              key={a._id}
              img={require('./images/placeholder.png')}
              name={a.name}
              blood={a.bloodGroup}
              call={a.phonenumber}
              accept={a._id}
              campaignID={data._id}
              navigation={navigation}
            />
          );
        })}

        {/*<DonorCard*/}
        {/*  img={require('./images/placeholder.png')}*/}
        {/*  name={'Syed Arshik Javed'}*/}
        {/*  blood={'B+'}*/}
        {/*  call={'123'}*/}
        {/*  accept={'11'}*/}
        {/*/>*/}
      </ScrollView>
    </View>
  );
};

const ActiveCampaigns = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const findCampaigns = async () => {
    try {
      let res = await axios.get(`${URL}/api/v1/campaign/all?search=${search}`);
      res = res.data.data;
      setData(res);
    } catch {}
  };

  useEffect(() => {
    findCampaigns();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Active Campaigns'} />
        <View style={{marginBottom: 25}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Enter Location'}
              onChangeText={e => {
                setSearch(e);
                findCampaigns();
              }}
            />
            <Icon
              style={styles.acicon}
              name="location-outline"
              size={30}
              color="#000000"
            />
          </View>
        </View>
        {data.map(a => {
          return (
            <CampaignCard
              key={a._id}
              blood={a.bloodGroup}
              hospital={a.hospital}
              address={a.location}
              button={'More Details'}
              id={a._id}
              navigation={navigation}
            />
          );
        })}
        <TouchableOpacity onPress={() => navigation.navigate('Get Donations')}>
          <View
            style={{
              backgroundColor: redcolor,

              marginLeft: 300,
              marginTop: 170,
              borderWidth: 1,
              borderColor: 'white',
              height: 70,
              width: 70,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Fontisto name={'plus-a'} color={'white'} size={26} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const BloodBanks = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const findBloodBank = async () => {
    try {
      let res = await axios.get(`${URL}/api/v1/bloodbank/?search=${search}`);
      res = res.data.data;
      setData(res);
    } catch {}
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Blood Banks'} />
        <View style={{marginBottom: 25}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Enter Location'}
              onChangeText={e => {
                setSearch(e);
                findBloodBank();
              }}
            />
            <Icon
              style={styles.acicon}
              name="location-outline"
              size={30}
              color="#000000"
            />
          </View>
        </View>
        {data.map(x => {
          return (
            <BloodBankCard
              key={x._id}
              hospital={x.name}
              address={x.address}
              call={x.phonenumber}
              location={x.address}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const CampaignDetails = ({route, navigation}) => {
  const {id} = route.params;

  const [data, setData] = useState({});
  console.log(`${URL}/api/v1/campaign/${id}`);
  const donateblood = async () => {
    try {
      let res = await axios.put(`${URL}/api/v1/campaign/${id}`);
      res = res.data;

      if (res.success == true) {
        showSuccessToast('Successfully added you in available donors');
        navigation.navigate('Drawer');
      }
    } catch {}
  };
  const getCampaignDetails = async () => {
    try {
      let res = await axios.get(`${URL}/api/v1/campaign/${id}`);
      res = res.data.data;
      setData(res);
    } catch {}
  };

  useEffect(() => {
    getCampaignDetails();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ScreenTitle title={'Campaign Details'} />
        <View style={styles.campaigncard}>
          <CampaignRow
            left={'Patient Name:'}
            right={data.patientName}
            fd={'row'}
          />
          <CampaignRow
            left={'Blood Group:'}
            right={data.bloodGroup}
            fd={'row'}
          />
          <CampaignRow left={'Contact:'} right={data.phonenumber} fd={'row'} />
          <CampaignRow
            left={'Location:'}
            right={`${data.hospital} ${data.location}`}
            fd={'row'}
          />
          <CampaignRow left={'Details:'} right={data.details} fd={'column'} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={donateblood}>
            <View style={styles.button}>
              <Text style={styles.innerBtnText}>Donate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

//MAK Screens and Drawer

function BloodTypeScreen({navigation}) {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.mainBTS}>
      <View
        style={{height: '25%', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('./assets/logos/bloodLogo.png')}
          style={{
            height: 110,
            width: 110,
          }}
        />
      </View>
      <Text style={styles.text}>Please pick your blood type</Text>

      <Text style={styles.text2}>Don't know about your blood type?</Text>

      <View style={styles.containerBTS}>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>A</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>B</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>O</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>AB</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '12%',
        }}>
        <View>
          <TouchableOpacity style={styles.smBox}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.smBox}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 2}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color={'#C83335'}
        />
        <Text
          style={{
            marginTop: 5,
            marginLeft: 2,
            fontSize: 14,
            color: 'black',
            fontFamily: 'Outfit-Regular',
          }}>
          I want to receive notifications about blood donation campaigns
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <View style={styles.button}>
            <Text style={styles.innerBtnText}>Finish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DashboardScreen({navigation}) {
  return (
    <View style={{height: '100%', backgroundColor: '#F9F9F9'}}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 20}}>
        <Text style={styles.textD}>Blood bank stock near you!</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '38%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            height: '90%',
            width: '88%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/images/bloodstock.png')}
            style={{height: '90%', width: '100%', borderRadius: 5}}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Blood Banks')}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 25,
              padding: 24,
              width: 160,
              height: 156,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./assets/images/bloodBank.png')}
              style={{width: 59, height: 74}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 10,
              }}>
              Blood Banks
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Active Campaigns')}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 25,
              padding: 24,
              width: 160,
              height: 156,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./assets/images/Campaign.png')}
              style={{width: 70, height: 70}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 10,
              }}>
              Campaign
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            color: '#C83335',
            fontSize: 18,
            fontFamily: 'Outfit-Light',
            margin: 18,
          }}>
          Can I give blood?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Socials')}>
        <Text style={styles.text2}>Share on social media!</Text>
      </TouchableOpacity>
    </View>
  );
}

function SocialsScreen({navigation}) {
  return (
    <View style={styles.mainBTS}>
      <View style={styles.ContainerSms}>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Facebook',

              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBox}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./assets/logos/fb.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.text2}>Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Twitter',

              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBox}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./assets/logos/twitter.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
              <View style={{marginTop: 10}}>
                <Text style={styles.text2}>Twitter</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Instagram',

              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBox}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./assets/logos/instagram.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.text2}>Instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to LinkedIn',

              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBox}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./assets/logos/linkedin.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.text2}>LinkedIn</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Youtube',

              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBox}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./assets/logos/yt.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.text2}>Youtube</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingsScreen({navigation}) {
  const logout = async () => {
    let token = await EncryptedStorage.setItem('JWT', null);
    try {
      if (!token) {
        navigation.navigate('Login Screen');
      }
    } catch {
      console.log('some Error');
    }
  };
  return (
    <View
      style={{
        backgroundColor: '#EBEBEB',
        height: '100%',
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'Outfit-Bold',
            fontSize: 20,
            color: 'black',
            margin: 15,
            marginLeft: 42,
            marginTop: 30,
          }}>
          Settings
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={{alignItems: 'center', marginBottom: 35}}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image
              source={require('./assets/images/mt.jpeg')}
              style={{width: 38, height: 38, borderRadius: 38 / 2}}
            />
            <View style={{marginRight: 130, marginLeft: 15}}>
              <Text
                style={{
                  fontFamily: 'Outfit-SemiBold',
                  fontSize: 16,
                  color: 'black',
                }}>
                M.Touseef
              </Text>
              <Text
                style={{
                  fontFamily: 'Outfit-Light',
                  fontSize: 12,
                  color: 'black',
                }}>
                Edit Personal details
              </Text>
            </View>
            <Image
              source={require('./assets/icons/arrowW.png')}
              style={{width: 10, height: 20, marginRight: 20, marginTop: 6}}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            height: 45,
            margin: 10,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/icons/dark.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.textS}>Dark Mode</Text>
            <Image
              source={require('./assets/icons/toggleW.png')}
              style={{width: 28, height: 24, marginLeft: '45%'}}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: 'black',
            marginRight: 260,
          }}>
          Profile
        </Text>
        <View
          style={{
            backgroundColor: '#e5a2a2',
            width: '80%',
            height: 83,
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/icons/profile.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.textS}>Edit Profile</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={{marginLeft: '30%'}}>
              <Image
                source={require('./assets/icons/arrowP.png')}
                style={{width: 12, height: 22, marginLeft: '48%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <Image
              source={require('./assets/icons/password.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.textS}>Change Password</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={{marginLeft: '23%'}}>
              <Image
                source={require('./assets/icons/arrowP.png')}
                style={{width: 12, height: 22, marginLeft: '32%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: 'black',
            marginRight: 220,
          }}>
          Notifications
        </Text>
        <View
          style={{
            backgroundColor: '#e5a2a2',
            width: '80%',
            height: 45,
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/icons/notification.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.textS}>Notifications</Text>
            <Image
              source={require('./assets/icons/toggleP.png')}
              style={{width: 29, height: 24, marginLeft: '42%'}}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: 'black',
            marginRight: 250,
          }}>
          Regional
        </Text>
        <View
          style={{
            backgroundColor: '#e5a2a2',
            width: '80%',
            height: 83,
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/icons/language.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.textS}>Language</Text>
            <TouchableOpacity
              style={{marginLeft: '30%'}}
              onPress={() => navigation.navigate('TempHome')}>
              <Image
                source={require('./assets/icons/arrowP.png')}
                style={{width: 12, height: 22, marginLeft: '51%'}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={logout}>
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              <Image
                source={require('./assets/icons/logout.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.textS}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#690004'}}>
        <ImageBackground
          source={require('./assets/images/bg.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('./assets/images/johnWick.jpg')}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              color: 'white',
              fontSize: 18,
            }}>
            John Wick
          </Text>
        </ImageBackground>
        <View style={{backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: 'grey'}}>
        <TouchableOpacity onPress={logout1}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name={'log-out-outline'} size={22} color={'black'} />
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 15,
                marginLeft: 5,
                color: '#333',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerM = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Outfit-Regular',
          fontSize: 15,
        },
        drawerActiveBackgroundColor: '#C83335',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/search.png')}
                style={{width: 25, height: 25, marginLeft: -40}}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
          },
          drawerIcon: ({color}) => (
            <Ionicons name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={22} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/search.png')}
                style={{width: 25, height: 25, marginLeft: -40}}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
          },
        }}
      />
      <Drawer.Screen
        name="My Campaigns"
        component={MyCampaigns}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/search.png')}
                style={{width: 25, height: 25, marginLeft: -40}}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
          },
          drawerIcon: ({color}) => (
            <MaterialIcons name={'campaign'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Socials"
        component={SocialsScreen}
        options={{
          title: 'Socials',
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/search.png')}
                style={{width: 25, height: 25, marginLeft: -40}}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
          },
          drawerIcon: ({color}) => (
            <Ionicons name={'share-social-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require('./assets/icons/search.png')}
                style={{width: 25, height: 25, marginLeft: -40}}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#F9F9F9',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
          },
          drawerIcon: ({color}) => (
            <Ionicons name={'settings-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blood"
        component={BloodTypeScreen}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -20,
            fontFamily: 'Outfit-Regular',
            fontSize: 15,
          },
          drawerIcon: ({color}) => (
            <Fontisto
              name={'blood-drop'}
              size={22}
              color={color}
              style={{marginLeft: 5}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const logout1 = async ({navigation}) => {
  let token = await EncryptedStorage.setItem('JWT', null);
  try {
    if (!token) {
      navigation.navigate('Settings');
    }
  } catch {
    console.log('Error');
  }
};
const TempHome = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Get Blood Donation'}
            onPress={() => navigation.navigate('Get Donations')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'My Campaigns'}
            onPress={() => navigation.navigate('My Campaigns')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Donors'}
            onPress={() => navigation.navigate('Donors')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Active Campaigns'}
            onPress={() => navigation.navigate('Active Campaigns')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Blood Banks'}
            onPress={() => navigation.navigate('Blood Banks')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Campaign Details'}
            onPress={() => navigation.navigate('Campaign Details')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Main Screen'}
            onPress={() => navigation.navigate('Main Screen')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Login Screen'}
            onPress={() => navigation.navigate('Login Screen')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'SignUp Screen'}
            onPress={() => navigation.navigate('SignUp Screen')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Forget Password'}
            onPress={() => navigation.navigate('Forget Password')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'OTPPassword Screen'}
            onPress={() => navigation.navigate('OTPPassword Screen')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'ResetPassword Screen'}
            onPress={() => navigation.navigate('ResetPassword Screen')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'ResetPasswordComplete Screen'}
            onPress={() => navigation.navigate('ResetPasswordComplete Screen')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Feedback'}
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'About Us'}
            onPress={() => navigation.navigate('About Us')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Donation History'}
            onPress={() => navigation.navigate('Donation History')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Profile'}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Top Donors'}
            onPress={() => navigation.navigate('Top Donors')}
          />
        </View>

        <View style={{marginVertical: 1}}>
          <Button
            title={'Privacy Policy'}
            onPress={() => navigation.navigate('Privacy Policy')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Blood Type'}
            onPress={() => navigation.navigate('Blood Type')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Settings'}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Socials'}
            onPress={() => navigation.navigate('Socials')}
          />
        </View>
        <View style={{marginVertical: 1}}>
          <Button
            title={'Drawer'}
            onPress={() => navigation.navigate('Drawer')}
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
  container2: {
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: '100%',
    borderColor: redcolor,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 20,
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#C53437',
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
  ProfileCardStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 50,
    backgroundColor: 'white',
    maxWidth: 360,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  ProfileCardRed: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    mindWidth: 120,
    minHeight: 50,
    width: '100%',
  },
  ProfileCardRedRight: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 70,
    mindWidth: 70,
    minHeight: 50,
    width: '100%',
  },
  ProfileCardWhite: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 120,
    minHeight: 50,
    width: '100%',
  },

  TopDonorsCard: {
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  TopDonorsCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 120,
    maxHeight: 120,
    backgroundColor: '#D9D9D9',
    maxWidth: 360,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  BoxGray: {
    padding: 10,
    marginRight: 20,
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#E6F8FC',
    maxWidth: 110,
    width: '100%',
  },

  HistoryCard: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },

  HistoryCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 50,
    backgroundColor: 'white',
    maxWidth: 360,
    width: '100%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  HistoryCardRed: {
    padding: 10,
    borderRadius: 15,
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
  //MAK Screens
  textD: {
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    color: 'black',
    fontSize: 35,
    lineHeight: 45,
    letterSpacing: 0.5,
  },
  //Blood Type Screen
  mainBTS: {
    backgroundColor: '#EBEBEB',
    height: '100%',
  },

  text: {
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    color: 'black',
    fontSize: 35,
    marginLeft: 22,
    marginRight: 25,
    marginBottom: 25,
    lineHeight: 45,
    letterSpacing: 0.5,
  },
  text2: {
    textAlign: 'center',
    color: '#C83335',
    fontSize: 18,
    fontFamily: 'Outfit-Light',
  },
  containerBTS: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    flexWrap: 'wrap',
    height: '100%',
    padding: 5,
  },
  bigBox: {
    backgroundColor: '#C83335',
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  innerText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smBox: {
    backgroundColor: '#C83335',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#C83335',
    padding: 18,
    width: 300,
    height: 60,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  innerBtnText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Outfit-Light',
    textAlign: 'center',
  },
  //Social Media Screen
  ContainerSms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '6%',
  },
  SocialMediaBox: {
    backgroundColor: 'white',
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  //Settings Screen

  textS: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
    margin: 3,
    marginLeft: 28,
  },
});

export default App;
