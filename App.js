import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import axios from "axios";

const shits=[];

export default function App() {
  const [data, setData] = useState();
  const [x, setX] = useState();

  const [sheetName, setsheetName] = useState("Master");
  const [starting, setStarting] = useState("A1");
  const [ending, setEnding] = useState("A10");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1RPvWaKVwv_haeUYQsxDIDUb8PgRMQiNJtjz4YGL-ICs/values/${sheetName}!${starting}:${ending}?key=AIzaSyAGmHlfjxg8TVfJppBO5ckv3CrG_5hkT9w`
      );

      const dataCollected = await res.json();


      setData(dataCollected);
      
      // console.log(data);
      // console.log(data.values[0]);

      for(var i = 0;i<10;i++){
        console.log(data.values[i])
        shits[i] = data.values[i]
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          placeholder="Sheet Name"
          value={sheetName}
          onChangeText={(x) => setsheetName(x)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Starting Cell"
          value={starting}
          onChangeText={(x) => setStarting(x)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Ending Cell"
          value={ending}
          onChangeText={(x) => setEnding(x)}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity
          onPress={() => {
            getData();
          }}
        >
          <Text>Get Data</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item})=>{
            <View>
              <Text>{item}</Text>
            </View>
          }}
        />

        <Text>{shits[1]}</Text>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center'
  },
  inputs:{
    marginTop:100,
    borderWidth:1,
    width:300
  }

});
