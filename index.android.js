/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Image,
    ListView,
    Text,
    View,
    StyleSheet,
    ContentWrapper,
    ToolbarAndroid,
    } = React;

var Footer = require('./App/Views/Common/indexAndroid');

var AwesomeProject = React.createClass({

  render: function () {
    return (
        <Footer></Footer>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
