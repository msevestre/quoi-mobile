import React from "react-native";
import Dimensions from 'Dimensions';

var {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
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

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={this.buttonClicked.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>E</Text>
          </View>
        </TouchableNativeFeedback>

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
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    borderWidth: 2
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: Dimensions.get('window').height / 6
  }
});

export default Home;