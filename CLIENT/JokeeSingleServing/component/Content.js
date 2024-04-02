import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Content = () => {
  const [jokeContent, setJokeContent] = useState('');
  const [jokeId, setJokeId] = useState('');
  const [showContent, setShowContent] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    fetchJokeContent();
  }, []);

  useEffect(() => {
    if (errorMessage !== '') {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (countdown === 0) {
      setErrorMessage('');
      setShowContent(true);
      setCountdown(15);
    }
  }, [countdown]);

  const fetchJokeContent = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8080/random-joke/');
      const data = response.data;
      if (data.errMessage !== undefined) {
        setErrorMessage(data.errMessage);
        setShowContent(false);
      } else {
        setJokeContent(data.content);
        setJokeId(data.id);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/vote-joke?jokeId=${jokeId}&like=true`,
      );

      console.log(response.data);
      // console.log('nhan idjoke', jokeId);

      if (response.data.errCode !== undefined) {
        console.log('Error vote like:', response.data.errMessage);
      } else {
        setJokeContent(response.data);
      }
      fetchJokeContent();
    } catch (error) {
      console.error('Error catch vote like:', error.response.data);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/vote-joke?jokeId=${jokeId}&like=false`,
      );

      console.log(response.data);

      if (response.data.errCode !== undefined) {
        console.log('Error vote dislike:', response.data.errMessage);
      } else {
        setJokeContent(response.data);
      }

      fetchJokeContent();
    } catch (error) {
      console.error('Error catch vote dislike:', error.response.data);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        {showContent && (
          <View style={styles.bgContent}>
            <Text style={styles.textContent}>{jokeContent}</Text>
          </View>
        )}

        {errorMessage !== '' && (
          <View style={styles.bgContent}>
            <Text style={styles.textContent}>{errorMessage}</Text>
            <Text style={styles.countdownText}>Retry in {countdown}s</Text>
          </View>
        )}

        {showContent && (
          <View style={styles.bgButton}>
            <TouchableOpacity onPress={handleLike}>
              <Text style={styles.btnRight}>This is Funny!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDislike}>
              <Text style={styles.btnLeft}>This is not funny.</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //header
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 460,
  },

  //text content
  bgContent: {
    marginTop: 50,
  },
  textContent: {
    width: 353,
    fontSize: 15,
    color: '#4b4b4b',
    textAlign: 'left',
    lineHeight: 20,
  },

  //button
  bgButton: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-evenly',
    bottom: 40,
  },

  btnRight: {
    textAlign: 'center',
    width: 135,
    height: 40,
    backgroundColor: '#2C7EDB',
    color: 'white',
    padding: 10,
    fontSize: 15,
  },
  btnLeft: {
    textAlign: 'center',
    width: 135,
    height: 40,
    backgroundColor: '#29B363',
    color: 'white',
    padding: 10,
    fontSize: 15,
  },

  countdownText: {
    marginTop: 20,
    fontSize: 15,
    color: '#8a0000',
  },
});

export default Content;
