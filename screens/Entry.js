import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import axios from "axios";

import { gapi } from "gapi-script";

export default function Entry({ navigation }) {
  const [data, setData] = useState();

  const [sheetName, setsheetName] = useState("");
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1RPvWaKVwv_haeUYQsxDIDUb8PgRMQiNJtjz4YGL-ICs/values/${sheetName}!${starting}:${ending}?key=AIzaSyAGmHlfjxg8TVfJppBO5ckv3CrG_5hkT9w`
      );

      const data = await res.json();

      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Sheet Name"
          value={sheetName}
          onChangeText={(x) => setsheetName(x)}
        />
        <TextInput
          placeholder="Starting Cell"
          value={starting}
          onChangeText={(x) => setStarting(x)}
        />
        <TextInput
          placeholder="Ending Cell"
          value={ending}
          onChangeText={(x) => setEnding(x)}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            getData();
          }}
        >
          <Text>Get Data</Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
