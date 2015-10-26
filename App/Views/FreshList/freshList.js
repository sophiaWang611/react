'use strict';

var React = require('react-native');

var {
    AppRegistry,
  StyleSheet,
  NavigatorIOS,
  } = React;

var List = require('./listView');

var FreshList = React.createClass({

  /**
   * 渲染方法
   * @returns {XML}
   */
  render: function () {
      return (
          <NavigatorIOS
              style={styles.container}
              initialRoute={{
                  component: List,
                  title: '最新文章',
               }}
              tintColor="#FFFFFF"
              barTintColor="#247ac3"
              titleTextColor="#FFFFFF"
          />
      );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('FreshList', () => FreshList);

