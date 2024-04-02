/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View>
        <Header />
        <Content />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
