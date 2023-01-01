import React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Tayyab Screens

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

        <View style={styles.container}>
          <Text>
            At Blood Donation Inc, accessible from www.DonateBlood.com, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by Blood Donation Inc and how we use it. {'\n'}
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us. {'\n'}
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Blood Donation Inc. This policy
            is not applicable to any information collected offline or via
            channels other than this website. {'\n'}
            Consent By using our website, you hereby consent to our Privacy
            Policy and agree to its terms. {'\n'}
            Information we collect {'\n'}
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
            How we use your information {'\n'}
            We use the information we collect in various ways, including to:
            {'\n'}
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
            Log Files{'\n'}
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
            Like any other website, Blood Donation Inc uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.{'\n'}
            Advertising Partners Privacy Policies{'\n'}
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Blood Donation Inc.{'\n'}
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
            CCPA Privacy Rights (Do Not Sell My Personal Information){'\n'}
            Under the CCPA, among other rights, California consumers have the
            right to:{'\n'}
            {'\n'}
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.{'\n'}
            Request that a business delete any personal data about the consumer
            that a business has collected.{'\n'}
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.{'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            GDPR Data Protection Rights{'\n'}
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:{'\n'}
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.{'\n'}
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.{'\n'}
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.{'\n'}
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.{'\n'}
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            {'\n'}
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.{'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            Children's Information Another part of our priority is adding
            protection for children while using the internet. We encourage
            parents and guardians to observe, participate in, and/or monitor and
            guide their online activity.{'\n'}
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
          <ScreenTitle title={'Congratulations!'} />
          <Text
            style={{
              fontSize: 25,
              marginTop: -15,
              textAlign: 'center',
              color: redcolor,
            }}>
            Thank you for being the{'\n'}reason someone lives{'\n'}another day
          </Text>
        </View>

        <TopDonorsCard name="Mujtaba Aziz Khan" year="2020" bags="6" />

        <TopDonorsCard name="Syed Arshik Javed" year="2022" bags="2" />

        <TopDonorsCard name="M. Tayyab Naveed" year="2021" bags="2" />
        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};

const Profile = ({navigation}) => {
  const [shouldShowName, setShouldShowName] = useState('None');
  const [shouldShowGender, setShouldShowGender] = useState(true);
  const [shouldShowAddress, setShouldShowAddress] = useState(true);
  const [shouldShowBlood, setShouldShowBlood] = useState(true);
  const [shouldShowMedication, setShouldShowMedication] = useState(true);
  const [shouldShowAilments, setShouldShowAilments] = useState(true);
  const [Name, SetName] = useState('John Doe');
  const [Gender, SetGender] = useState('Male');
  const [Address, SetAddress] = useState(
    'House No 92, Street 49, H-Block, Soan Gardens',
  );
  const [BloodType, SetBloodType] = useState('O+');
  const [Medications, SetMedications] = useState(
    'Stresam, paraxyl CR. Eszopic-2',
  );
  const [Illnesses, SetIllnesses] = useState('None');

  return (
    <View style={{flex: 1, backgroundColor: '#EBEBEB'}}>
      <ScrollView nestedScrollEnabled={true}>
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
              marginLeft: 10,
            }}
            source={require('./images/placeholder.png')}
          />
          <TouchableOpacity>
            <Image
              style={{height: 25, width: 25, marginLeft: 5, marginBottom: 100}}
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
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{Name}</Text>
          <TouchableOpacity onPress={() => setShouldShowName(!shouldShowName)}>
            <Image
              style={{height: 18, width: 18, marginLeft: 8, marginBottom: 10}}
              source={require('./images/Gear.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {shouldShowName ? null : (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: 'black',
                marginTop: 5,
                width: 150,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                textAlign: 'center',
              }}
              onChangeText={SetName}
            />
          )}
        </View>

        <View style={styles.container2}>
          <View style={styles.rectangle2}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  borderColor: 'white',
                  fontFamily: 'Outfit-Regular',
                  textAlign: 'center',
                  fontSize: 30,
                }}
                value={Gender}>
                Gender
              </Text>
              <TouchableOpacity
                onPress={() => setShouldShowGender(!shouldShowGender)}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 5}}
                  source={require('./images/GearRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: 10,
              borderColor: 'white',
              fontFamily: 'Outfit-Regular',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 28,
              textDecorationLine: 'underline',
            }}>
            {Gender}
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {shouldShowGender ? null : (
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  marginTop: 5,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
                onChangeText={SetGender}
              />
            )}
          </View>

          <View style={styles.rectangle2}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  borderColor: 'white',
                  fontFamily: 'Outfit-Regular',
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                Address
              </Text>
              <TouchableOpacity
                onPress={() => setShouldShowAddress(!shouldShowAddress)}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 5}}
                  source={require('./images/GearRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: 10,
              borderColor: 'white',
              fontFamily: 'Outfit-Regular',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 28,
              textDecorationLine: 'underline',
            }}>
            {Address}
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {shouldShowAddress ? null : (
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  marginTop: 5,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
                onChangeText={SetAddress}
              />
            )}
          </View>

          <View style={styles.rectangle2}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  borderColor: 'white',
                  fontFamily: 'Outfit-Regular',
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                Blood Type
              </Text>
              <TouchableOpacity
                onPress={() => setShouldShowBlood(!shouldShowBlood)}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 5}}
                  source={require('./images/GearRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: 10,
              borderColor: 'white',
              fontFamily: 'Outfit-Regular',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 28,
              textDecorationLine: 'underline',
            }}>
            {BloodType}
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {shouldShowBlood ? null : (
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  marginTop: 5,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
                onChangeText={SetBloodType}
              />
            )}
          </View>

          <View style={styles.rectangle2}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  borderColor: 'white',
                  fontFamily: 'Outfit-Regular',
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                Current Medications
              </Text>
              <TouchableOpacity
                onPress={() => setShouldShowMedication(!shouldShowMedication)}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 5}}
                  source={require('./images/GearRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: 10,
              borderColor: 'white',
              fontFamily: 'Outfit-Regular',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 28,
              textDecorationLine: 'underline',
            }}>
            {Medications}
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {shouldShowMedication ? null : (
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  marginTop: 5,
                  width: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
                onChangeText={SetMedications}
              />
            )}
          </View>

          <View style={styles.rectangle2}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  borderColor: 'white',
                  fontFamily: 'Outfit-Regular',
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                Prevailing Illnesses
              </Text>
              <TouchableOpacity
                onPress={() => setShouldShowAilments(!shouldShowAilments)}>
                <Image
                  style={{height: 18, width: 18, marginLeft: 5}}
                  source={require('./images/GearRed.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: 10,
              borderColor: 'white',
              fontFamily: 'Outfit-Regular',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 28,
              textDecorationLine: 'underline',
            }}>
            {Illnesses}
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {shouldShowAilments ? null : (
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  marginTop: 5,
                  width: 250,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
                onChangeText={SetIllnesses}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Privacy Policy')}>
            <Text
              style={{
                color: redcolor,
                fontSize: 17,
                marginLeft: 5,
                marginTop: 30,
                fontWeight: 'bold',
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <View style={styles.rectangle} />
        </View>
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
            This organization was{'\n'}created to aid Blood{'\n'}Transfusions
            across{'\n'}Pakistan. We aim to{'\n'}facilitate this process{'\n'}
            through this Application.{'\n'}With this Application{'\n'}people can
            pledge to{'\n'}donate to Active Blood{'\n'}Campaigns. This method
            {'\n'}will provide ease and{'\n'}confirmation on the{'\n'}people
            willing to Donate.{'\n'}
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={{
                height: 125,
                width: 125,
                borderRadius: 100,
                marginRight: 25,
              }}
              source={require('./images/Arshik.jpg')}
            />
            <Image
              style={{
                height: 125,
                width: 125,
                borderRadius: 100,
                marginLeft: 25,
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
            <Text style={{marginRight: 15, fontWeight: 'bold', fontSize: 18}}>
              Syed Arshik Javed
            </Text>
            <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 18}}>
              Muhammad Touseef
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Image
              style={{
                height: 125,
                width: 125,
                borderRadius: 100,
                marginRight: 25,
              }}
              source={require('./images/Tayyab.jpg')}
            />
            <Image
              style={{
                height: 125,
                width: 125,
                borderRadius: 100,
                marginLeft: 25,
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
          <TextInput style={styles.inputFeedback} />
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle} />
      </ScrollView>
    </View>
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
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.paragraph} />

      <View style={styles.topLeft} />

      <View style={{alignItems: 'center', marginTop: 10}}>
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
          <View style={{marginLeft: 320, marginTop: -35}}>
            <MIcon name="eye" size={33} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
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

          <View style={{marginTop: 20, marginLeft: 25}}>
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

          <View style={{marginTop: 40, marginLeft: 25}}>
            <TouchableOpacity>
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
    </View>
  );
};

const SignUpScreen = () => {
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
          <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
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
          <View style={{marginLeft: 310, marginTop: -35, padding: 2}}>
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

        <TouchableOpacity>
          <View style={{marginRight: 340, bottom: 690}}>
            <MIcon name="arrow-left" size={40} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ForgetPassword = () => {
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

      <TouchableOpacity>
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

      <TouchableOpacity>
        <View style={{marginLeft: 5, bottom: 525}}>
          <MIcon name="arrow-left" size={40} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const OTPPassword = () => {
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
          top: -60,
          flexDirection: 'row',
          marginLeft: 30,
        }}>
        <TextInput style={styles.otp} keyboardType="numeric" maxLength={1}>
          2
        </TextInput>

        <TextInput style={styles.otp} keyboardType="numeric" maxLength={1}>
          2
        </TextInput>

        <TextInput style={styles.otp} keyboardType="numeric" maxLength={1}>
          2
        </TextInput>

        <TextInput style={styles.otp} keyboardType="numeric" maxLength={1}>
          2
        </TextInput>
      </View>

      <TouchableOpacity>
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

      <TouchableOpacity>
        <View style={{marginLeft: 5, bottom: 450}}>
          <MIcon name="arrow-left" size={40} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ResetPassword = () => {
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

      <TouchableOpacity>
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

const ResetPasswordComplete = () => {
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

      <TouchableOpacity>
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

const TopDonorsCard = props => {
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
          <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>
            {props.name}
          </Text>
        </View>

        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 15,
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

const ProfileCardGender = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            alignContent: 'center',
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Gender
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          {props.gender}
        </Text>
      </View>

      <View style={styles.ProfileCardRed}>
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
            fontWeight: 'bold',
            alignContent: 'center',
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Address
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
          }}>
          {props.address}
        </Text>
      </View>

      <View style={styles.ProfileCardRed}>
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

const ProfileCardBloodType = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            alignContent: 'center',
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Blood Type
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          {props.blood}
        </Text>
      </View>

      <View style={styles.ProfileCardRed}>
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
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Current Medications
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          {props.medication}
        </Text>
      </View>

      <View style={styles.ProfileCardRed}>
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
            fontSize: 13,
            textAlign: 'center',
            fontWeight: 'bold',
            alignContent: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Current Illnesses
        </Text>
      </View>

      <View style={styles.ProfileCardWhite}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {props.illness}
        </Text>
      </View>

      <View style={styles.ProfileCardRed}>
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
        <View style={{marginVertical: 10}}>
          <Button
            title={'My Campaigns'}
            onPress={() => navigation.navigate('My Campaigns')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Donors'}
            onPress={() => navigation.navigate('Donors')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Active Campaigns'}
            onPress={() => navigation.navigate('Active Campaigns')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Blood Banks'}
            onPress={() => navigation.navigate('Blood Banks')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Campaign Details'}
            onPress={() => navigation.navigate('Campaign Details')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Main Screen'}
            onPress={() => navigation.navigate('Main Screen')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'Login Screen'}
            onPress={() => navigation.navigate('Login Screen')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            title={'SignUp Screen'}
            onPress={() => navigation.navigate('SignUp Screen')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'Feedback'}
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'About Us'}
            onPress={() => navigation.navigate('About Us')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'Donation History'}
            onPress={() => navigation.navigate('Donation History')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'Profile'}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'Top Donors'}
            onPress={() => navigation.navigate('Top Donors')}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Button
            title={'Privacy Policy'}
            onPress={() => navigation.navigate('Privacy Policy')}
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
    width: 130,
    marginTop: 30,
    marginBottom: 7,
    height: 6,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#C53437',
  },
  rectangle2: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    marginTop: 50,
    height: 50,
    borderRadius: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#C53437',
  },
  BoxGray: {
    padding: 10,
    marginRight: 0,
    height: 120,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    width: '100%',
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
  ProfileCardGender: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  ProfileCardAddress: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  ProfileCardBloodType: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  ProfileCardMedications: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  ProfileCardIllness: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  ProfileCardStyle: {
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
  ProfileCardRed: {
    padding: 10,
    borderRadius: 15,
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

  TopDonorsCard: {
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
  },
  TopDonorsCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 100,
    backgroundColor: 'silver',
    maxWidth: 370,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
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
});

export default App;
