/**
 * Created by sophia on 15/9/24.
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableOpacity,
    } = React;

var MineList = require("../Mine/listView");
var MineDetail = require("../MineDetails/MineDetail");
var CameraRollView = require("../Camera/CameraRollView.ios");

var NavigationBarRouteMapper = {

    LeftButton: function(route, navigator, index, navState) {
        if (!index || index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {previousRoute.title}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        if (!route.rightText || route.rightText.length == 0) {
            return null;
        }
        return (
            <TouchableOpacity
                onPress={route.rightBtnAction}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {route.rightText}
                </Text>
            </TouchableOpacity>
        );
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    },

};

var Mine = React.createClass({
    getInitialState: function() {
        return {
            loading: true
        };
    },

    renderScene: function(route, nav) {
        switch (route.title) {
            case '账号管理':
                return <MineDetail navigator={nav} route={route} />;
            case '图片库':
                return <CameraRollView
                    ref={"camera_roll_view"}
                    batchSize={5}
                    groupTypes={"SavedPhotos"}
                    renderImage={route.renderImage}
                    />;
            default:
                return <MineList navigator={nav} />;
        }
    },

    /**
     * 渲染方法
     * @returns {XML}
     */
    render: function () {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{
                    title: "我的信息",
                    rightText: ""
                }}
                renderScene={this.renderScene}
                configureScene={(route) => {
                  if (route.sceneConfig) {
                    return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
                navigationBar={
                <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
                style={styles.navBar}
                />}
            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        backgroundColor: '#247ac3',
        color: '#FFFFFF',
        height: 65,
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: '#FFFFFF',
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: '#F5F5F5',
        fontSize: 12,
    },
});

AppRegistry.registerComponent('Mine', () => Mine);
