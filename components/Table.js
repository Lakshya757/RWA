import {} from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Table({item}) {
  return(
    <View style={styles.item}>
        <Text style={styles.title}>{item[0]}     {item[1]}         {item[2]}</Text>
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