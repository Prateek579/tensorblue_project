import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const notification = () => {
  const [allNotices, setAllNotices] = useState([]);

  useEffect(() => {
    const notices = async () => {
      try {
        const data = await getDocs(collection(db, "notifications"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAllNotices(filteredData);
      } catch (error) {
        console.error("Error in notification", error);
      }
    };
    notices();
  }, []);

  return (
    <View style={styles.notification}>
      {/* header section */}
      <View style={styles.header}>
        <TouchableHighlight>
          <Link href="/">
            <Entypo name="chevron-left" size={25}>
              <Text style={styles.headerFont}>Notification</Text>
            </Entypo>
          </Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.headeropt}>
            <Entypo name="notification" size={25} />
          </View>
        </TouchableHighlight>
      </View>

      {/* notification section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.allNotification}>
          {allNotices.map((notice) => (
            <View style={styles.noti} key={notice.id}>
              <Text style={styles.notiText}>{notice.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    paddingHorizontal: 20,
    paddingTop: 20,
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headeropt: {
    padding: 6,
    backgroundColor: "#dcd5fb",
    borderRadius: 50,
  },
  headerFont: {
    fontSize: 23,
    fontWeight: "400",
  },
  noti: {
    backgroundColor: "#dcd5fb",
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
  },
  notiText: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 22,
  },
});

export default notification;
