'use strict';

var React = require('react-native');

var {
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    TextInput,
    TouchableHighlight,
    AlertIOS,
    ActionSheetIOS,
    ImagePickerIOS,
    TouchableOpacity,
    NativeModules: {
        UIImagePickerManager
        }
    } = React;


var MineDetail = React.createClass({
    getInitialState: function() {
        this.props.route.rightBtnAction = this.submitForm;
        return {
            loading: true
        };
    },

    componentDidMount: function() {
        fetch('http://172.16.10.241:3000/api/mineInfo.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    resData: responseData,
                    loading: false,
                    userName: responseData.name
                });
            })
            .done();
    },

    /**
     * 渲染方法
     * @returns {XML}
     */
    render: function () {
        if (this.state.loading) {
            return this.renderLoadingView();
        }

        var data = this.state.resData;
        return (
            <ScrollView style={{top: 60,backgroundColor: "#f5f5f5", }}>
                <TouchableHighlight
                    style={[styles.button, {height:100, backgroundColor: '#ffffff'}]}
                    onPress={this._renderImage}
                    >
                    <View style={{flexDirection: "row", flex: 3}}>
                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Image
                                style={{height: 64, width: 64}}
                                source={{uri: data.image}}
                                />
                        </View>
                        <View style={{flex: 6, justifyContent: 'center'}}>
                            <Text style={styles.buttonText}>点击修改头像</Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <View
                    style={[styles.button, styles.mt10, {height:60, backgroundColor: '#ffffff'}]}
                    >
                    <View style={{flexDirection: "row", flex: 3}}>
                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Text>账号名称：</Text>
                        </View>
                        <View style={{flex: 6, justifyContent: 'center'}}>
                            <TextInput
                                style={{height: 25}}
                                value={this.state.userName}
                                placeholder={this.state.userName ? '' : '请输入用户名'}
                                onChangeText={(text) => this.setState({userName: text})}
                                />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    },

    submitForm: function() {
        var header = new Headers();
        header.append("Content-type", "application/json");
        fetch('http://172.16.10.241:3000/api/post/updateMineInfo', {method: "POST", headers: header, body:'{"name": "'+this.state.userName+'"}'})
            .then((response) => response.json())
            .then((responseData) => {
                AlertIOS.alert(responseData.result);
            })
            .done();
    },

    _renderImage() {
        var _root = this;
        ActionSheetIOS.showActionSheetWithOptions({
            "title": "选择图片来源",
            "options": ['图片库', '相机拍摄', '取消'],
            "cancelButtonIndex": 2
        }, function(buttonIndex) {
            //图片库
            if (buttonIndex == 0) {
                _root._renderPhoto();
            }
            if (buttonIndex == 1) {
                //相机拍摄
                _root._renderCamera();
            }
        });
    },

    _renderPhoto() {
        UIImagePickerManager.launchImageLibrary({

        }, function(isCancel, res) {
            if (!isCancel) {
                alert("uri: " + res.uri);
                //alert("data: " + res.data);
                //alert("quality: " + res.quality);
                //alert("isVertical: " + res.isVertical);
            }
        });
    },

    _renderCamera() {
        UIImagePickerManager.launchCamera({

        }, function(isCancel, res) {
            if (!isCancel) {
                alert("uri: " + res.uri);
                //alert("data: " + res.data);
                //alert("quality: " + res.quality);
                //alert("isVertical: " + res.isVertical);
            }
        });
    },

    _postImage(asset){
        alert("提交！");
    },

    /**
     * 页面进来的时候加载 loading
     * @returns {XML}
     */
    renderLoadingView: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>
                    加载中...
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    listView: {
        paddingBottom: 20
    },

    loadingText: {
        marginTop: 100,
        textAlign: 'center',
        flex: 1
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '100'
    },
    row: {
        backgroundColor: 'white',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
        paddingLeft: 20,
    },
    button: {
        backgroundColor: 'white',
        height: 35,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
        paddingLeft: 20,
    },
    mt10: {
        marginTop: 10,
    },
    imageRow: {
        flexDirection: 'row',
        flex: 1,
    },
    url: {
        fontSize: 9,
        marginBottom: 14,
    },
    image: {
        margin: 4,
    },
    info: {
        flex: 1,
    },

    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    cameraWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    cameraInstructions: {
        textAlign: 'center',
        color: '#333333',
    },
});

module.exports = MineDetail;
