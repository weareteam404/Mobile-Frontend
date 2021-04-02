import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const profile = () => {
  const userLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 10,
          }}>
          <Button
            style={{
              backgroundColor: '#645391',
              borderRadius: 5,
              justifyContent: 'center',
              width: responsiveWidth(30),
              height: responsiveHeight(4),
            }}
            onPress={userLogout}
            color="white">
            Logout
          </Button>
        </View>
        <View style={styles.header} />
        <Image
          source={require('./img/kk.jpg')}
          style={{
            alignSelf: 'center',
            marginTop: -52,
            height: 90,
            width: 90,
            borderRadius: 45,
          }}
        />
        <View style={styles.hedingname}>
          <Image
            source={require('./img/dimg.png')}
            style={{width: 20, height: 15, marginLeft: 40, marginTop: 5}}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Shanika Fernando
          </Text>
          <View
            style={{
              backgroundColor: '#645391',
              borderRadius: 5,
              justifyContent: 'center',
              width: responsiveWidth(22),
              height: responsiveHeight(4),
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>Get Help</Text>
          </View>
        </View>

        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Architecture at Future House Group (Pvt) Ltd.
        </Text>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Faculty of Architecture - Batch12
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 22,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Department :</Text>
          <Text style={{paddingLeft: 15}}>Building Economices</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 2,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Current Residance :</Text>
          <Text style={{paddingLeft: 15}}>Bambalapitiya,Colombo 03.</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 2,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Contact :</Text>
          <Text style={{paddingLeft: 15}}>0776274321</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 2,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Birthday :</Text>
          <Text style={{paddingLeft: 15}}>25 Oct</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 2,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Status :</Text>
          <Text style={{paddingLeft: 15}}>Married</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 2,
            width: '100%',
            height: responsiveHeight(4),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>E-mail :</Text>
          <Text style={{paddingLeft: 15}}>Shubh.parmar26@gmail.com</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            width: '100%',
            height: responsiveHeight(10),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Experience :</Text>
          <Text style={{paddingLeft: 15}}>
            Deginer at Git Technology -2 Years {'\n'}Trainee at Virtusa - 6
            Months{' '}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            width: '100%',
            height: responsiveHeight(10),
            marginLeft: 33,
          }}>
          <Text style={{fontWeight: 'bold'}}>Work Place :</Text>
          <Text style={{paddingLeft: 15}}>
            Architecture at Future House Group{'\n'}(Pvt)Ltd.{' '}
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            height: responsiveHeight(18),
            justifyContent: 'center',
          }}>
          <ImageBackground
            source={require('./img/loc.jpg')}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              height: 120,
              width: 200,
            }}>
            <View
              style={{
                backgroundColor: '#645391',
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                width: responsiveWidth(26),
                height: responsiveHeight(5),
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 9}}>
                View Location
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: responsiveHeight(5),
          }}>
          <View
            style={{
              width: '50%',
              height: responsiveHeight(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./img/fbimg.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 15,
              }}>
              Shanika Malmi
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              height: responsiveHeight(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./img/tw.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 15,
              }}>
              Shanika Fernando
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: responsiveHeight(10),
          }}>
          <View
            style={{
              width: '50%',
              height: responsiveHeight(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./img/linkedimg.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 15,
              }}>
              Shanika Malmi
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              height: responsiveHeight(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./img/inst.png')}
              style={{width: 20, height: 20}}
            />

            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 15,
              }}>
              Shanika Fernando
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: responsiveHeight(4),
            borderTopWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('./img/home.png')}
            style={{width: 20, height: 20}}
          />

          <Image
            source={require('./img/profile.png')}
            style={{width: 20, height: 20}}
          />

          <Image
            source={require('./img/cal.png')}
            style={{width: 20, height: 20}}
          />
          <Image
            source={require('./img/bell.png')}
            style={{width: 20, height: 20}}
          />

          <Image
            source={require('./img/msg.png')}
            style={{width: 20, height: 20}}
          />

          <Image
            source={require('./img/gal.png')}
            style={{width: 20, height: 20}}
          />

          <Image
            source={require('./img/harmbuger.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},

  header: {
    width: '100%',
    height: responsiveHeight(14),
    backgroundColor: '#dbd3ec',
  },
  hedingname: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: responsiveHeight(5),
    // backgroundColor:"red"
  },
});

export default profile;
