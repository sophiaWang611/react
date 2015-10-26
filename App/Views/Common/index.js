'use strict';
var React = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    } = React;

var FreshList = require('../FreshList');
var Mine = require('../Mine');
var HistoryList = require('../HistoryList');

var icon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var icon2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAADQxJREFUeJzNW31wXNV1/52zX1rtrmRL/pQF/tpdxWrtBOxdGQOGkLjFgWnjhEw7lNQkAUzcQkManGmZZjKkLZRQ3JaUwaSlDl/5wNNkpkk6xWVSO47BK8lpiJGtlbCxY8u1ZcmWdlcfu/vO6R945fdW+/FW2iX5/bXv3HPO/d279917zz33EWoMbzDa6nDgOlK9BqKrwLwMgoVgmQOwBwJDIAkiSgB6AURxgHpBeFszjv2p42+cryU/qoVPf7jjeqjcoYTbGBScpb+3VfU1Jv32aLyrsyoMTahaBzSuvmGuMZm+V4H7GFhZLb9WyFEoP+9m566h3oOJanicdQc0tK9v0ozsENU/YSZ/RcaCDACA4arITOUig57mdHrnyMlfXKqozjzMpgO4IRTdbkAeZeK5xdVkAoKDIDog4KOqRq/DSacSnEqgpycNAGhvdwfEFzAMXEWkbay0Cqo3grEB4LoSHAYh9OVE/6HdAHQmjZhRBwQ+EAmL6LcYvL5QuQhSRPg+s740alz8H/T3T86kHgSDngbH3JtF6C5VbGGGr6Ce6AEm3TrS13W80ioq7oBAKLJViZ4hoL4AkzMAP1nn9P7LYM++ZKW+S2F++03+iez4PYB8CeAl02oGRohwT7I3tqcSv5V0APvD0Z0EPFioclb9SsKVenZqWNcK7e3uQMZ3vxA9ykBjfrFCn0zGO3fA5ithrwOCQU8Ac74D5o9PrxCvaIa+mDpx6JwtX1WCb3nHQnLpUwTcOY2T4qVkg/FZdHdnyvkp3wHt7W5/2v8DYmw2i0WQYsbnE/HYixUxrzICoegfi+KZ/PlBgB+mFnu3YN++bCl7LuOfA+n6705vvLxLRJFfd+MBINEXe4GIIiLyrlnOwO3+gfF/Q5k/ 2VGq0B+O/gMRbbUIRX8pTvlwKt51Yoacq4708JkLrgWLvscGNoFoYU5OhDWu5pb6zNDA3mK2RXsnEIpsBdFui1BxhOvcG0d+eeBiNYhXG41LPzhHXO79YFptlqvKJ5N9Xf9eyKZgBwTa1rWp8mHzUqeqJw12bRjvPThQXdrVhbdtQwsb6Z8x87KcTIARJ3DNSDw2bdQWmgNYFLstjQfGVHDbb3rjAWC89+AAlG5XYCwnY6BRgN2F9KfNAb5wdDuD7jPLSGhb8p3Ya8Uq9YciWzzNS9a75l9tZIZO1zR89YU71tQ1tWx2z2tdmh4601tIJ3NxYNAzb8n/Afh9k3ipp2nJifTwmV+YdS2vQEP7+iYjk+237O1V9yT6Oj9VjFBz24ZAWrODADwAIMA7rNjlZuez1YrYmts2BNKS3SaEzzOw4j2pjPsTOu/s2e6xYnaBUORVEN1xRSLnnVkNXzzePZKTOM0GmpEd5saLSEIc7j8rRS5tZG4Ckyf3zMBKEJ5IG9kdvnD0q6n40meBVw0AaGzrWCZqrFJgOcDzFeoDAAKlABkk4AST4+hI76F3c+78wch9ac0+CsJ86/vK3lSD3oiz+K9i3LJwfIHFuPVKlMoLMk59EMDXcjpTI6Bx9Q1zs+OTpywhrWJHoi/29VId4A9FHiGivy5WrirdpPiVgG9kRnMpXzmIyDCIDoB0QbGA6z16+HIyHnuilK9AKPowCFM6Ihiqd3uX5WKVqU41JtP35sXzg/6k8c9l2ZrW3cLFvBbMH7fbeABg5iYm+r1Sjb+MBeV8XW7D4BXfaJ7Ijt879ZzjqYBl4lPFzlLvl0lRyurUDFo24Dl7tntMFTutZvhs7icDgD/ccb3lGEuQZhfvskOBQKft0q02SPErO3rs4l0QXIlSCb9dH1x3DZAbASp3WC3wo9GeN4dtsRD9mT261QcxDtrRG+15cxiMH5llzHQncLkDlHCbuVBVXrJLQhkfsatbbYjSLXZ1Vehl8zNBNwEAeYPRViebh5IYLuGm4f7YaDmngVBHB0gPonxUWRuIZFmdHSPvvHm4nOrcFWsbs04aAji3+VOwzmeHA9eZFVX4sJ3GA4BAn8Kvq/EAwOwUypZcpnO4eLx7RIV/bhKRGtjIpHqNRZP0gB2HjSvXX8uEDfbZ1gjMt/ja1q8urwiAps1Xv8UQXZXn8ZgdX+KQT9iq9H0AqTHtqK6wIvJiB2pjmMJGAIAaBQOMAuiwqVdzKNQWFwX15gnaGALLTs5B9tZWEVxtm2GNwcpLbemxWvYsCpnH72VpryBruGyd5zPDa59ibSFUKEcxHVm1to3BAQbYYxam0morhBWVCfsUawuGPS71gLVtjMCMlzACbC2V7wcEPFJeC1Ajaz0CFBADYsnbBfyGreFExKdsM6wxGHrSjt6EWy1tEyDBELaklylrzIE9vG1Tr+ZQoMeOHmclr20yymBYUlqGw2lrdiebG6b3A0pkiwuTdbUg8AVGXkaFNHfmVhqjjtRPBJjV5YSqQHAhtcj7U1uqBpZbBIQ4g+moRSZ5W+Ni6OlJk+pumzRrB5Lny+X/plRBa60C7WUlMgcIUFDUbt3iMJ4QwNYMXAuIyLBq9knbBiwRy7PiCBsG3jDLiOXaxtU3lLjycgVjxw6fZcif2iZQZZCD70/2/+9geU3At+K6BQCvMYmUHNjP4/2x0wLtvyJnR3Yi87t2SSTiXS+p4hHbrKsFxcPJ3tirdtXZYdwKSx5E3koc6xxiACC1HheBdNqlg1JI9sX+lkjvEkjNN0cCXBLIHyb6YvaHPgDNu0ihoL1A7jCDxNKTLLLZt7yj4HG3P7x2HvCpaSm10d7Ol5FxhBX6DXNerloQ0aSq/iNJOpyKd323EltvMNpKhE15/l4BLndAMt59UIB3pkqZneyU7fmO/OHIXxEcg77wieFAMPKNxqUftGwsUicOnUvGOx/wkHMRIJ9WxcsiMtN7BCrAcVV9kUT/qN5dvzjZ1/kFu++8GU6SB2A+uVIcGevv+jlgeif84egOAv4u9ywiw/Vu31LLba/W9d6AN/s0iD8HAKLSpw65aezY4bOlCDQFow1p0geJ6Gul9Kb4KR7xsPPpauQW565Y25h20ikGN5jEX0zEYzsBU684JiefE9GpxjJz00Rm7GGLt9Nvjif6uu5Rxf0AwMQhMpx7UOZc0MhMsqo+ZJe0qvx5diJV8vaKXaSd/Ii58SIYqnN6v5l7nqpkcuTcRF1zawMIN0wRIYrwnMUvZi8OWCa39PCZbnfzkmYCOohwlbt5yVh66EzR/IB74dXbiabfMCsGIvLC4RiYHB6I2bUphIbgtSuJHC/AnAQmffzSsYP/nXu0/HNc535CRKYSIgTUO5m/iQLwOr1/ics5NwIe8wcj9xdlIvSxSskrZp1vIGXnv+Jy2v4ykXOurPyTWckyzCbPn5rwzGtJEmgqUUKEoLu55Xx6aKDLrDs2eDLtaWrxgehmAEREt3uaF3/E3bTE6W5u9bnmL1npaW7Z7Gpu/QqRbAKosrMHIiM9dOaZimxMCISjDwHYlud0+0h/l2VUFbojxL5w9ADDki+YJDU2jvZ1W4x9K65bAKfRy4DdENo2ROTdVH/X8vKa0+EPRTaS6utgNt9/2JeIx27O1y30rwg7aKsIUiaZR5W/ 39jWscysmDr+xnkW/fTUtfcqgohmfJGbiPaYGy/AJSa6u5B+wWGZOHqoj1ms7zRTS1aM1/I3SIn+ zh8q6UdFEJ8J4WqibuW6q1RoL4D5ZjkBnzHdOkFeWXH4Q5GniMiyfIlKn8vp2nTp6Bv5x1DcEIx+ VAm3AFgOqEcIw6TUp5CHS39TMB2qejLZ17nMrn7gA5GwCu0l5B3XKx5P9MX+ophduWHGgXDkewB90iIVHSCSLflzQlFy4XWnC11xL4VKOsAfimwkoj3I++cV8kIy3nU3StwcLzczS8KZulOhP7ZaUYuSY78/FN1WxO79AgXC0YdI9XXkNV6A/0gu9n0OZa7Nl1+aenrSSWdqC1TzP0TwEOFZfzD6Y28w2lop89miMbRuRSC07nUAT+XN9lDIC6nF3k/YOSmytzb39KQTfZ1/oMDf5xcRY7OD0RsIRb66cM2awp+0VBFNwWhDIBR9TIh7QPzhaQqKx5PxrrvtH5NViIZg5E4D2FXoCzERDBHjaUj6mamobe1aly9BF/KCkbIQwVCqP7YAgABAfXtkkSOLBwS0vdC+Q4BLBHwmGY/9oJJ6ZrTWNgSvXalwfguM6wuzR0ZI/5OJfqLQTYTKt8IAAMWrBP2pQfQ7LHJr/lA3YR8T3V1sqSuF2Xw2R/5Qx72k+jdgzJuFn1lAzgH4UiLeZftOUz5mFXKmh890++Ysek6YswL5EIE85a1mDxEMAfqYW/mukb7OWX1OW7VPZ+euWNuYdfA9At3GxKFq+bVAcQSE5+vrJp4799ZbqfIG5VGLj6cRCEbXK+MOgnwM4FXlLYpCAXlLQXtF9JXcMVY1UZMOMKO+PbKIM7qBwB8CdJVClxNhoQjPZZY6CBsCJAAZJfAFEOIg7YXiCDmwP3Gsc6iW/P4fcaopS2MCwhAAAAAASUVORK5CYII=';

var TabBarExample = React.createClass({
    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.'
    },
    getInitialState: function() {
        return {
            selectedTab: 'freshList',
            notifCount: 0,
            presses: 0,
        };
    },
    render: function() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    icon={{uri: icon1, scale: 3}}
                    title="逛逛逛"
                    selected={this.state.selectedTab === 'freshList'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'freshList'
                        });
                }}>
                    <FreshList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    title="历史"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'history'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'history',
                        notifCount: this.state.notifCount + 1,
                    });
                }}>
                    <HistoryList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri: icon2, scale: 3}}
                    title="我我我"
                    selected={this.state.selectedTab === 'mime'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'mime',
                          presses: this.state.presses + 1
                        });
                }}>
                    <Mine/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});
var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
module.exports = TabBarExample;