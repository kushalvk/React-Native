import HelloWorldApp from './Components/HelloWorldApp';
import ViewControle from './Components/View';
import TextControle from './Components/Text';
import ImageControle from './Components/Image';
import TextInputControle from './Components/TextInput';
import ButtonControle from './Components/Button';
import TouchableOpacityControle from './Components/TouchableOpacity';
import ScrollViewControle from './Components/ScrollView';
import FlatListControle from './Components/FlatList';
import SectionListControle from './Components/SectionList';
import ActivityIndicatorControle from './Components/ActivityIndicator';
import SwitchControl from './Components/Switch';
import PressableControl from './Components/Pressable';
import ModalControle from './Components/Modal';
import KeyboardAvoidingViewControle from './Components/KeyboardAvoidingView';
import SafeAreaViewControle from './Components/SafeAreaView';
import StatusBarControle from './Components/StatusBar';
import LinkingControle from './Components/Linking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HelloWorldApp" component={HelloWorldApp} />
        <Stack.Screen name="ViewControle" component={ViewControle} />
        <Stack.Screen name="TextControle" component={TextControle} />
        <Stack.Screen name="ImageControle" component={ImageControle} />
        <Stack.Screen name="TextInputControle" component={TextInputControle} />
        <Stack.Screen name="ButtonControle" component={ButtonControle} />
        <Stack.Screen name="TouchableOpacityControle" component={TouchableOpacityControle} />
        <Stack.Screen name="ScrollViewControle" component={ScrollViewControle} />
        <Stack.Screen name="FlatListControle" component={FlatListControle} />
        <Stack.Screen name="SectionListControle" component={SectionListControle} />
        <Stack.Screen name="ActivityIndicatorControle" component={ActivityIndicatorControle} />
        <Stack.Screen name="SwitchControl" component={SwitchControl} />
        <Stack.Screen name="PressableControl" component={PressableControl} />
        <Stack.Screen name="ModalControle" component={ModalControle} />
        <Stack.Screen name="KeyboardAvoidingViewControle" component={KeyboardAvoidingViewControle} />
        <Stack.Screen name="SafeAreaViewControle" component={SafeAreaViewControle} />
        <Stack.Screen name="StatusBarControle" component={StatusBarControle} />
        <Stack.Screen name="LinkingControle" component={LinkingControle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
