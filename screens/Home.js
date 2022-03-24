import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Pills from '../navigation/pills';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header';


export default function Home() {
  return (
    <SafeAreaView style= {{flex: 1, backgroundColor: '#999999'}}>
      <View>
        <Header />
      </View>
      <ScrollView style={{flex:1, backgroundColor: '#ffffff'}}>
        <View style= {{marginTop: 25, marginLeft: 25}}>
          <Text style= {styles.titleText}>Welcome Back Anna</Text>
        </View>
        <View style= {{height: 30,marginHorizontal: 25, marginTop: 10, flexDirection: "row"}}>
          <View style= {{...styles.container, alignItems: "flex-start", flex: 0 }}>
            <Ionicons 
              name="md-partly-sunny-outline"
              size={25}
              color={"#000000"}
            />
          </View>
          <View style= {{...styles.container, alignItems: "flex-start", flex: 0 }}>
            <Text style= {{fontSize: 16}}> 4°C</Text>
          </View>
        </View>
        <View style= {{marginTop: 20}}>
          <Pills/>
        </View>
      </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
