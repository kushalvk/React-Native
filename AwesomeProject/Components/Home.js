
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HelloWorldApp from "./HelloWorldApp";
import TextControle from "./Text";
import ViewControle from './View';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>

                <Text>Open up App.js to start working on your app!</Text>
                <View style={{ height: 1, width: '100%', backgroundColor: '#000', marginVertical: 10 }} />

                <HelloWorldApp />
                <View style={{ height: 1, width: '100%', backgroundColor: '#000', marginVertical: 10 }} />

                <ViewControle />
                <View style={{ height: 1, width: '100%', backgroundColor: '#000', marginVertical: 10 }} />

                <TextControle />
                <View style={{ height: 1, width: '100%', backgroundColor: '#000', marginVertical: 10 }} />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('HelloWorldApp')}
                >
                    <Text style={styles.btnText}>Go to Hello World Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ViewControle')}
                >
                    <Text style={styles.btnText}>Go to View Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('TextControle')}
                >
                    <Text style={styles.btnText}>Go to Text Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ImageControle')}
                >
                    <Text style={styles.btnText}>Go to Image Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('TextInputControle')}
                >
                    <Text style={styles.btnText}>Go to TextInput Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ButtonControle')}
                >
                    <Text style={styles.btnText}>Go to Button Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('TouchableOpacityControle')}
                >
                    <Text style={styles.btnText}>Go to TouchableOpacity Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ScrollViewControle')}
                >
                    <Text style={styles.btnText}>Go to ScrollView Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('FlatListControle')}
                >
                    <Text style={styles.btnText}>Go to FlatList Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('SectionListControle')}
                >
                    <Text style={styles.btnText}>Go to SectionList Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ActivityIndicatorControle')}
                >
                    <Text style={styles.btnText}>Go to ActivityIndicator Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('SwitchControl')}
                >
                    <Text style={styles.btnText}>Go to Switch Control Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('PressableControl')}
                >
                    <Text style={styles.btnText}>Go to Pressable Control Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('ModalControle')}
                >
                    <Text style={styles.btnText}>Go to Modal Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('KeyboardAvoidingViewControle')}
                >
                    <Text style={styles.btnText}>Go to KeyboardAvoidingView Controle Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('SafeAreaViewControle')}
                >
                    <Text style={styles.btnText}>Go to SafeAreaView Controle Screen</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('StatusBarControle')}
                >
                    <Text style={styles.btnText}>Go to StatusBar Controle Screen</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('LinkingControle')}
                >
                    <Text style={styles.btnText}>Go to Linking Controle Screen</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        backgroundColor: '#31F527',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});