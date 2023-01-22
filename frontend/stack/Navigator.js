import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ClosestClinics from '../screens/ClosestClinics';
import ChatScreen from '../screens/ChatScreen';

const screens = {
    ClosestClinics: {
        screen: ClosestClinics,
        navigationOptions: {
            headerShown: false,
          }
    },

    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const closestClinics = createStackNavigator(screens);

export default createAppContainer(closestClinics);