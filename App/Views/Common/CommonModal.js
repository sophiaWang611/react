/**
 * Created by sophia on 15/10/20.
 */

'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    Button,
    } = React;

var CommonModal = React.createClass({
    getInitialState() {
        console.log("12345");
        return {
            animated: this.props.animated,
            modalVisible: this.props.modalVisible,
            transparent: this.props.transparent,
        };
    },

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    },

    render() {
        console.log("1111111");
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;

        return (
            <Modal
                animated={this.state.animated}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}>
                <View style={[styles.container, modalBackgroundStyle]}>
                    <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                        <Text>This modal was presented {this.state.animated ? 'with' : 'without'} animation.</Text>
                        <Button
                            onPress={this._setModalVisible.bind(this, false)}
                            style={styles.modalButton}>
                            Close
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },
    modalButton: {
        marginTop: 10,
    },
});

module.exports = CommonModal;