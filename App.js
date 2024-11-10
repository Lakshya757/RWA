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


const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title[0]}     {title[1]}           {title[2]}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState();
  const [x, setX] = useState();

  const [master, setMaster] = useState();
  const [transactions, setTransactions] = useState();
  const [cmwd, setCmwd] = useState();
  const [bwfc, setBwfc] = useState()


  const [sheetName, setsheetName] = useState("Master");
  const [starting, setStarting] = useState("A1");
  const [ending, setEnding] = useState("B10");

  const getData = async (sheet,range) => {
    try {
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1RPvWaKVwv_haeUYQsxDIDUb8PgRMQiNJtjz4YGL-ICs/values/${sheet}${range}?key=AIzaSyAGmHlfjxg8TVfJppBO5ckv3CrG_5hkT9w`
      );

      const dataCollected = await res.json();

      switch (sheet) {
        case "Master":
            setMaster(dataCollected.values);

          break;
        
        case "Transactions":
          setTransactions(dataCollected.values);
        break;
        
        case "Customer%20Month%20Wise%20Data":
          setCmwd(dataCollected)

        break;

        case "Block%20Wise%20Fund%20Collection":
          setBwfc(dataCollected)
        break;
        default:
          break;
      }

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {      
      getData("Master","");
      getData("Master","");
      getData("Transactions","");
      getData("Transactions","");
      getData("Customer%20Month%20Wise%20Data","");
      getData("Customer%20Month%20Wise%20Data","");
      getData("Block%20Wise%20Fund%20Collection","");
      getData("Block%20Wise%20Fund%20Collection","");
      console.log(master);
      console.log(transactions);
      console.log(cmwd);
    }, [])
  

  
  return (
    <View style={{marginTop:50}}>
       <FlatList
        data={master}
        renderItem={({item}) => <Item title={item} />}
        // keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#3A3A3A',
    padding: 13,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color:'#AAA'
  },
});
