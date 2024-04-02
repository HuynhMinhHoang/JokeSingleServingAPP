import React from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerLogo}>
          <Image
            source={require('../src/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerAvt}>
          <View style={styles.bgName}>
            <Text style={styles.textNameUp}>Handicrafted by</Text>
            <Text style={styles.textNameDown}>Jim HLS</Text>
          </View>

          <View style={styles.bgAvt}>
            <Image
              source={require('../src/images/avt.jpg')}
              style={styles.avt}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.bgContent}>
          <Text style={styles.textContentUp}>
            A joke a day keeps the doctor away
          </Text>
          <Text style={styles.textContentDown}>
            If you joke wrong way, your teeth have to pay. (Serious)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
  },

  //logo
  headerLogo: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  logo: {
    width: '100%',
    height: '100%',
  },

  //avt
  headerAvt: {
    marginRight: 10,
    flexDirection: 'row',
  },
  bgAvt: {
    width: 40,
    height: 40,
  },
  avt: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },

  //text
  bgName: {
    marginTop: 5,
    marginRight: 5,
  },
  textNameUp: {
    fontSize: 12.5,
    color: '#919191',
    fontWeight: '500',
  },
  textNameDown: {
    fontSize: 12,
    color: '#4C4C4C',
    fontWeight: '600',
    textAlign: 'right',
  },

  //content
  contentContainer: {
    height: 150,
    backgroundColor: '#29B363',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContentUp: {
    marginTop: 15,
    marginLeft: 15,
    color: '#ffffff',
    fontSize: 19,
    textAlign: 'right',
    marginBottom: 20,
  },
  textContentDown: {
    color: '#ffffff',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default Header;
