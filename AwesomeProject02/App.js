/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const htmlContent = "<h1>This HTML snippet is now rendered with native components !</h1>";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
           <ScrollView style={{ flex: 1 }}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
    );
  }
}
