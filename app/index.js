import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export default function Page() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const events = async () => {
      try {
        const data = await getDocs(collection(db, "notifications"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEvents(filteredData);
      } catch (error) {
        console.error("Error in notification", error);
      }
    };
    events();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight>
          <View style={styles.headeropt}>
            <Entypo name="menu" size={28} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.headeropt}>
            <Entypo name="notification" size={26} />
          </View>
        </TouchableHighlight>
      </View>

      {/* displaying user name */}
      <View style={styles.userDetails}>
        <Text style={styles.midfont}>Welcome back</Text>
        <Text style={styles.lgfont}>Amit Patel</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* user attendance section*/}
        <View style={styles.attendanceSection}>
          <View style={styles.attendanceLeft}>
            <Text style={styles.attendanceMidFont}>Attendance</Text>
            <Text style={styles.attendanceLgFont}>JAN 2024</Text>
          </View>
          <View style={styles.attendanceright}>
            <View style={styles.attendancerightText}>
              <Text style={styles.attendanceText}>100%</Text>
            </View>
          </View>
        </View>

        {/* links section */}
        <View style={styles.linkSection}>
          <Text style={styles.linkHeader}>Quick Links</Text>
          <View style={styles.links}>
            <Link href="/reports">
              <View style={styles.link}>
                <Entypo name="text-document" size={27} style={styles.linkOpt} />
                <Text style={styles.linkText}>Report</Text>
              </View>
            </Link>
            <View style={styles.link}>
              <Entypo name="news" size={27} style={styles.linkOpt} />
              <Text style={styles.linkText}>Syllabus</Text>
            </View>
            <View style={styles.link}>
              <Entypo name="new-message" size={27} style={styles.linkOpt} />
              <Text style={styles.linkText}>Unit Test</Text>
            </View>
            <View style={styles.link}>
              <Entypo name="credit-card" size={27} style={styles.linkOpt} />
              <Text style={styles.linkText}>Payment</Text>
            </View>
          </View>
        </View>

        {/* events sections */}
        <View style={styles.events}>
          <Text style={styles.linkHeader}>Upcoming Events</Text>
          {events.map((event) => (
            <View style={styles.event} key={event.id}>
              <Text style={styles.eventText}>{event.context}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.menus}>
        <View style={styles.menuOpts}>
          <TouchableHighlight style={styles.menuOpt}>
            <FontAwesome name="home" size={25} style={styles.menuBtn} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Link href="/notification">
              <FontAwesome name="calendar" size={23} style={styles.menuBtn} />
            </Link>
          </TouchableHighlight>
          <TouchableHighlight>
            <Link href="/profile">
              <FontAwesome name="user" size={23} style={styles.menuBtn} />
            </Link>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headeropt: {
    padding: 7,
    backgroundColor: "#dcd5fb",
    borderRadius: 50,
  },
  midfont: {
    fontSize: 10,
    fontWeight: "400",
  },
  lgfont: {
    fontSize: 20,
    fontWeight: "500",
  },
  userDetails: {
    marginTop: 25,
  },
  attendanceSection: {
    marginTop: 25,
    height: "20%",
    backgroundColor: "#9e8af5",
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
  },
  attendanceLeft: {
    height: "100%",
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  attendanceright: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  attendancerightText: {
    height: 100,
    width: 100,
    padding: 20,
    borderWidth: 8,
    borderColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  attendanceText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  attendanceMidFont: {
    color: "white",
    fontSize: 13,
  },
  attendanceLgFont: {
    color: "white",
    fontSize: 20,
  },
  linkSection: {
    marginTop: 25,
  },
  linkHeader: {
    paddingLeft: 10,
    marginBottom: 5,
    fontWeight: "600",
  },
  links: {
    backgroundColor: "#dcd5fb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 25,
    borderRadius: 20,
  },
  link: {
    alignItems: "center",
  },
  linkOpt: {
    color: "white",
    backgroundColor: "#9e8af5",
    borderRadius: 50,
    padding: 10,
  },
  linkText: {
    marginTop: 7,
    fontSize: 12,
  },
  events: {
    marginTop: 20,
    paddingBottom: 20,
  },
  event: {
    marginTop: 5,
    backgroundColor: "#dcd5fb",
    marginVertical: 5,
    padding: 10,
    borderRadius: 7,
  },
  menus: {
    marginLeft: 20,
    width: "100%",
    padding: 10,
    bottom: 20,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "white",
  },
  menuOpts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  menuOpt: {
    alignItems: "center",
    backgroundColor: "#9e8af5",
    borderRadius: 40,
    color: "white",
  },
  menuBtn: {
    padding: 8,
    color: "#555555",
    borderRadius: 30,
  },
});
