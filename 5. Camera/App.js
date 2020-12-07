import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PandingView = () => (
  <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    <Text style={{fontSize: 30, color: '#121212'}}>Loading...</Text>
  </View>
);

export default function App() {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.camera}>
          <Text style={styles.conText}>Here is your new profile pic</Text>
          <Image
            style={styles.ProfilePic}
            source={{uri: image, width: '100%', height: '100%'}}
          />
          <Button
            onPress={() => {
              setImage(null);
            }}
            title=" Click a new Image"></Button>
        </View>
      ) : (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use Camera',
            message: 'longer text to access Camera',
            buttonPositive: 'Okay',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use Audio',
            message: 'longer text to access Audio',
            buttonPositive: 'Okay',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status}) => {
            if (status != 'READY') {
              return <PandingView />;
            }
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.capture}
                  onPress={() => takePicture(camera)}>
                  <Text>SNAP</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  conText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  ProfilePic: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },
});
