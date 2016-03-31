import React from "react-native";
import Dimensions from 'Dimensions';

var {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

class Home extends React.Component {

  buttonClicked() {
    console.log('button clicked');
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>E</Text>
          </View>
        </TouchableHighlight>

      </ScrollView>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

var styles = StyleSheet.create({
  scrollView: {
  },
  contentContainer: {
    height: Dimensions.get('window').height,
    justifyContent: "center",
    alignItems: "center"
  },
  touchableHighlight: {
    flex: 1,
    width: Dimensions.get('window').width,
    borderWidth: 2
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: Dimensions.get('window').height / 6
  }
});

export default Home;