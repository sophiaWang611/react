/**
 * Created by sophia on 15/9/24.
 */
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
    TouchableHighlight,
    } = React;

var MinDetails = require('../MineDetails/MineDetail');

var iconStar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfklEQVQ4jX1SS08TURg99047UKfT0spDaFNINQJVg9QY1I0PdGNc+wuMsbFFhI2JOzYaExUr1KgbNy6IcWHEGENc6MJXxIUbwCYgBBMmBUqfdNqZ+7lo8QX1Jic3X+75Ts7NOSAiVMPE/cDQ82F/3/84VR9il7h/felxYXlmOBENwVmNx1HldHb1XKl12mu2t7TV+9s7+6rxthSI9Une/YdOnkVeA0oZBA+fPn/nAlO24lr+HEbCzMq5pamrO3i9zm13IqsBkNHsafUGAh1DsQi/YQpKREZJbOyw8WvN/S2+tqMO1eFT6+oaFdXhUhRFARkA5DJYDYhk5NKZTDa9mswkE1o6lVhYmJ96YVFttb3dezrOQCbAKACUBrJJgFj5hyQBJIHBCjuzqnaVqzscXh8y7oOJH/G0ZXJqLlzK523HjvT0SnIBKKYBKgHCAIQJmAQIAGZFTFKhF7Zh4suHp/GV1FVGRLgVYq37PK6HJ7r9pySeB0iUHdDGsqiAUNRlejW9OBZfy0YGYrTMiAgAcDPEvEGP89Hxvc29ZQH8FhACEARRIno5oz2ZTuZDgzFa/SvGwXu0mMzp76AbgG4CRbN86yagiwpMliwUJzaWN8XYYJPbUarYLYcECAJMEzABLoB62dpZtQduSdoJ3QAgASawnF1flwDuqrXVgEzAKMHFpcCWTYyGWX2DxeKDULCakvTXsytvxmaXQmNzWv/bheSnVE42ADsaubTr9kVm3eRAZmjSi5y9n09Mfl1beZAjejYwSlo0wvjnzNr4t2zqbFB1nXMQU6wMbgAaAPxKYSTC3JxwQCfEL4/S9387H40wLgR2ywwewfAxfJeyAPATKelrfd3EuF8AAAAASUVORK5CYII=";
var iconGirl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANwSURBVEiJtVVfaFNXGP9959yb3LRNI5qktGVSocEGQaTkQSWmhO1po8yBC4jsZcjYXqylsNe++9CRORB8FxGlgg8KYxtOm+qLRVqQ0mxSmP13a6A2JrnJved8e7gKe7hNI8wPLhzOd36/3z2/7zvnEDPjY4b4qOwAjH1X5HIJMH/LhvE1ed4JENUg5QI873e47s94+nS3HZzaWpTLjTFwl9Ppbp1Oh7i/H9RqAZubEOWyI5aXd6HUeZRKf3y4wJkz4wiFbntnz4Z5cBBcqYDrdUAIUCQCSiRAq6sw7t1z4Dhf7CUSLJDNRiHlS+/cubiOx8Fra6BkEnTwIACAazXwxgaorw9iawvG7KyNVisVZFdwkYmm9PBwDx8+DLZtiFQKcn1dm8Viy7h2rS5fvGBx5Ah4aws8NAROpXphmpeCqIIFDOMzfeyYxbYNOnAAYnFRiwcPXqJWy9ObN9/Ihw9X6flzUH8/eHsbKp22YBifdi6g1HEkEmDH8QUWFpqk1CXMz89jbm4WWk/IZ8/q1N0Ndhygrw9QarRzASLB4l1KSqDRYAD0nxUMpQBmgBksBEAkA80ImmQhylSpnIBlAY4DnclE5KNHPyGbfZ+f0ZlMBI0GYFmgSsXHdLoDUuq+WFpyRCIB/eoVdCZDKpdLcTR6h6PROzqXG9ajo6TX1iASCYilJYeUuh/IFdimJ0/2cij0j7pwoVdHo+DtbYiBASAS8fONBvS71hXVKuSNG7vUan0S1KbtDtpXMM2bXqEQ5mQS+vVrcKXigw4dgojHQbYNeetWkzzvPB4/vtv5Dt5HNvs5hJjVR4+yPnXK0qEQwAzhuhBPnjhiZQXwvC9RKv26F0V7AQAYG0tBqR8QCk26ly+DmGEUi0CzeQXAdZRKf7eDt7+u83kLSq0AmPR/h/zPH/8Ior+Qz1vtKPa/rgG4ExOAZYF3dsAA3MlJwHFgFov7Yjt7cFwXpLV/6KT0x67bEbRtDa5nMrHvLGsHACAl3KkpvwYzM4BSAICLzEN/ 2vZmuVxuBnHsadHISDba04P4L3X3dFLS4G9h3EajAWYGlEK26X5fhdhgpQdisZgxMpK1l5fnqh0LBIV59eqeuXC4qoPm21pUKBTk4uJ6V1dXPeoSxQRRrxZCMlFNMFepab41zebb8fFxZ3p6+sMF/o/4F+DGke/OkZkVAAAAAElFTkSuQmCC";
var iconBoy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQrSURBVEiJvZVrTJtVGMf/5+3bvn1LW9bS0gIFxmVlDhbBoS6kxC1xmSJuUYFkurhL3AdN5ocZNSMukU0d84Iz0+yLGQnLLg5GxIjborHzg5HMLcPIBuMyBtRCW+j9/r59jx/MEpGCwwTPx/P8z/PL8/zPOQ+hlGIlF7Oi2f8PALsc8er6YzWQ6DcMAw0BWRCXqITx3oPc3/fIcj3Ye6iz4fqQo2Nfo22sOD8rTkEoABBQ8vr7ndVj3749j7ysCgDg1JHGrq7vf6872m7fs/+lJ8BxCsSTKViMmrT6/+TBW229l8SUFGMYGZKihJREEU+KabWLVlC27RNDQhJ3MwTPAHiUUhpmCHODSqkhuVKxe9fzNp9CwfKhSByJpICEwKXNkxZQ8vQxG5WTi2uLc0LWwmyxuMDoisWTmPjDWzrt8VtrqkpEvZbPdfvCOP11H0QxhR31jz8YoKS+9UlOJe/aWvtw2GLWFfjCMfmkKwTCEBgMmbDkGiSRgpn1R/BV7zW8+sJjP2rV/MQH7fY9FAsvzDxA3rYWlZLhO+o2VxKO4/LuTHlh1PEoMGkhShIiMQEOT4iRswyyMznE4slE27nr2wcuvBYGgOYvLu/8J2CeyZzEv7G2OEfNK5XaKVcIhSYt5rwBnOn5GT1XbuDuhBsWgxr+UAJxgaLQYkxGopEDANCwZf1e2/rVLy4JYFiyJT8vSz3mDIBTsBi+ Nw2nc46ebH7u4juvbPrF4/Hi1qgTOo0Sd50BlBSYM1gG2++fP3WksWtpAEVlhoonHn8UKiWL8UkXyouMO6rXWRq21pTVlObrd41PzYBlCTz+KDilgiEMsS5o/KIAhsjiyRTCMQGCKCEaFcSzV/od9+M9P90eEwVJjCf+0kQTAhiy9FuaZ7JRr3EEg1GrmpfDH07AnGuUeUORE4V1R/cDgEzGnDDnGGX+cAJqXoFgMAqjXuNInzoNQKVU2Oe8QWue2YDhKR8qS40EoJUTk67LAFBYYMooyM0i/aMeWPN1cM/MQqVU2B+4RWUW9SH3nE+iKREmnQr9ox5otVpSu7FCXbuxQq3Vakn/qAcmnQo0JcI966PKxPDHTU1NssUAC37T1i9/+LDTPvhmxUNFYGRyODwhhGMCAEDNy2ExaiClBAwMjuOpDYaO3nNtxwnL+hBX+m/etPuXBKxZU8dpNDNZBw6fPPPZ+Wubsg066PWZ0KpVAIBgOAqvNwD3rA/7ni3/7fOPDr4LhnoJpV5ZKuUNhcxzIyPfJZasoKpq8yoo46veO9z68uA0mn+95eBuj7sBAOuKslFdbkkaZK72T4+3XaIgARnEAGFZX5hS70hfX/BfWwQALS0tTHd3N7/BZtPvbGqqNJtMjwiCwA4MDN45e/7CkMM5ERJSirhGLobdKlXk3tWrCbrI5Fr2RFvuWvGh/yf1jMmpXdAAhAAAAABJRU5ErkJggg==";
var iconNotify = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjlJREFUOI2dlE9IFGEYh5/3ndkd123dRESjbhIUBElqRf8IgqAIiYigCMzEhU5LHbp07F5BBJYUdhHSDnXxGtGlzDp06xQEGWQblquu6877dWgbNUfcnNPM8Huf7/nNNzPCGoe9y110IbfARETy2jU4HJeTuJvuw5VGKy1+VdUAwKAklaBF99/99W9WYwHmEijekg6KzflxWR9g6trlbnHhiKCfEXdD2wdGw4ncGNANoMpzOfDwRyHfe94JNxHbJsiZpttDYwogzg4KGgDbcTLy/eql +xK6J5FR2Z4W8j2PUIZFaBM0wMmhyADDW15GkNynoeKeQnrBOaB5LnU9GyQ7VtSs1o/tBVAKrXP6SxmATCbZkQ3ic7EPsaoRRquZ2VqxWAPnEbadzHhbXB0A9ZLU4qtKKOGynVkBUIn2VzPMZ476Ka9BCFjy9k/43szLyrzNkKqqT0eARLlyr5LwS6ld0pXa7Z+Ne728rLD5VCI1+z4cWfjoJsSFg3+a/tV+ 0VNn6cSkqjau1RfAjClVtkrng8WqSRWQTh5fbxhAlWYnHIuuIwDuyHrDUdbc4VUAYEetAJCdqwFCS+0Aa40zyNYuoA3Rqb3tv+CEvCJ7azcAM16Lxx0Jx3NFVdL/M7wEsaJudBhAVTepGbMbBRjM+OLRZ2b9Khp9WGElrJ8rW9fycH3gj3uezEfDziqCNxD7U33z+HSTwKSqJqvxEkGitfPc6M9VNeIA+3qeFTz1+gybMvhmTnrjhgF+AwJFwPZuO4TyAAAAAElFTkSuQmCC";
var iconGift = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAXJJREFUOI3dUk1LlFEYPed53xJ0HCHwY+NCAhGxRYti1IW6UfwJBtpOt4GCLfwB/QiLdNOqfkCkjiLqrBS/WhQi2iJ1JD9mYmbyvadV8d6ZEaplB+7i3Od8PFwuUYZ0T1e3Q9T0I3fnw9D2dh4Alvo6EyxhGLQv/Wu763E942Q51TnhxCegNgn1qqapu/HszLL1zMiwSOAxhdd9G3svf3ksHiAyBcPswMb+M8EyLGSns0nOwJQeWN+bFPRKVOrWDVYedbRHYfCGwD0TWyLqrgCGYtFRXwGdw2mkP/Px0++Ai9XknBxHzfyw7y8eeG9T+3zH485BpOasmvlPYAZKfBpawR3yJmgrF+QTFx6vu6rssBAHxlyQrtZA0TtVcY2FUKFySFbOavMNHlfyqLLE8doqbv8S/0MAHYv/alakQhic2tsbaYo18oZXpZLHy/+BK1LhN/eOAJCbbXjoXHA/Ljh+3zwW562DJ/Pe6og+J8Yvt34CQaKQj7XVyjYAAAAASUVORK5CYII=";

class EmptyView extends React.Component {
    render() {
        return (
            <View>
                <Text>just for test</Text>
            </View>
        );
    }
}

class MyInfo extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={[styles.button, {height:100, backgroundColor: '#ffffff'}]}
                onPress={this.props.onPress}>
                <View style={{flexDirection: "row", flex: 3}}>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                        <Image
                            style={{height: 64, width: 64}}
                            source={{uri: this.props.titleImage}}
                            />
                    </View>
                    <View style={{flex: 6, justifyContent: 'center'}}>
                        <Text style={styles.buttonText}>{this.props.text}</Text>
                        <Image
                            style={{height: 16, width: 16, marginTop: 5}}
                            source={{uri: this.props.sex == 0 ? iconGirl : iconBoy}}
                            />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class NavButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={[styles.button, this.props.btnStyle]}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <View style={{flexDirection: "row", flex: 1, backgroundColor: '#ffffff'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image
                            style={{height: 16, width: 16}}
                            source={{uri: this.props.titleImage}}
                            />
                    </View>
                    <View style={{flex: 9, justifyContent: 'center'}}>
                        <Text style={styles.buttonText}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

var MineList = React.createClass({
    getInitialState: function() {
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
                    loading: false
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
            <ScrollView style={{backgroundColor: "#f5f5f5", top: 60, }}>
                <MyInfo
                    onPress={() => {
                        this.props.navigator.push({
                            title: "账号管理",
                            rightText: "完成"
                        })
                    }}
                    text={data.name}
                    titleImage={data.image}
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                            title: "我的收藏",
                            })
                    }}
                    text="我的收藏"
                    titleImage={iconStar}
                    btnStyle={styles.mt10}
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                            title: "通知",
                        })
                    }}
                    text="通知"
                    titleImage={iconNotify}
                    />
                <NavButton
                    onPress={() => {
                        this.props.navigator.push({
                            title: "活动",
                        })
                    }}
                    text="活动"
                    titleImage={iconGift}
                    btnStyle={styles.mt10}
                    />
            </ScrollView>
        );
    },

    _renderImage(asset) {
        var imageSize = this.state.bigImages ? 150 : 75;
        var imageStyle = [styles.image, {width: imageSize, height: imageSize}];
        var location = asset.node.location.longitude ?
            JSON.stringify(asset.node.location) : 'Unknown location';
        return (
            <TouchableOpacity onPress={ this.loadAsset.bind( this, asset ) }>
                <View key={asset} style={styles.imageRow}>
                    <Image
                        source={asset.node.image}
                        style={imageStyle}
                        />
                    <View style={styles.info}>
                        <Text style={styles.url}>{asset.node.image.uri}</Text>
                        <Text>{location}</Text>
                        <Text>{asset.node.group_name}</Text>
                        <Text>{new Date(asset.node.timestamp).toString()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
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
    button: {
        backgroundColor: 'white',
        height: 35,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
        paddingLeft: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '100'
    },
    mt10: {
        marginTop: 10,
    }

});

module.exports = MineList;