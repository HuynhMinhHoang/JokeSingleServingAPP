import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Footer = () => {
  return (
    <SafeAreaView>
      <View style={styles.footerContainer}>
        <View style={styles.br} />
        <View style={styles.bgFooter}>
          <Text style={styles.textFooterUp}>
            This appis created as part of Hlsolutions program. The materials
            con-tained on this website are provided for general information only
            and do not constitute any form of advice. HLS assumes no
            responsibility for the accuracy of any particular statement and
            accepts no liability for any loss or damage which may arise from
            reliance on the infor-mation contained on this site.
          </Text>

          <Text style={styles.textFooterDown}>Copyright 2021 HLS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //header
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 450,
  },

  br: {
    height: 1,
    width: '100%',
    backgroundColor: '#d7d7d7',
  },

  //text footer
  bgFooter: {
    marginTop: 10,
  },
  textFooterUp: {
    width: 400,
    fontSize: 13,
    color: '#898989',
    textAlign: 'center',
    lineHeight: 16,
    // borderWidth: 1,
  },
  textFooterDown: {
    fontSize: 14,
    color: '#404040',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Footer;
