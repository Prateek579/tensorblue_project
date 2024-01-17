import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

const profile = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await getDocs(collection(db, "students"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserDetails(filteredData);
      } catch (error) {
        console.error("Error in notification", error);
      }
    };
    userData();
  }, []);

  return (
    <View style={styles.container}>
      {/* header section for notification */}
      <View style={styles.header}>
        <TouchableHighlight>
          <Link href="/">
            <Entypo name="chevron-left" size={25}>
              <Text style={styles.headerFont}>Profile</Text>
            </Entypo>
          </Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.headeropt}>
            <Entypo name="notification" size={25} />
          </View>
        </TouchableHighlight>
      </View>

      {/* userdetails section for displaying name and img */}
      <View style={styles.userDetails}>
        <View style={styles.userName}>
          <Text style={styles.userNameStyl}> Amit Patel</Text>
        </View>
        <View>
          <Image
            source={require("../assets/user2.jpeg")}
            style={styles.userImage}
          />
        </View>
      </View>

      {/* user info section */}
      {userDetails.map((user) => (
        <View style={styles.userInfo} key={user.id}>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Student ID Number : </Text>
            <Text style={styles.text}>{user.schoolid}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Class/Grade : </Text>
            <Text style={styles.text}>{user.grade}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Contact Number : </Text>
            <Text style={styles.text}>{user.number}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Email Address : </Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Parent/Guardian : </Text>
            <Text style={styles.text}>{user.parent}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Parent Contact :</Text>
            <Text style={styles.text}>{user.pnumber}</Text>
          </View>
          <View style={styles.userInfor}>
            <Text style={styles.text}>Address : </Text>
            <Text style={styles.text}>{user.address}</Text>
          </View>
        </View>
      ))}

      {/* menu section for navigating */}
      <View style={styles.menus}>
        <View style={styles.menuOpts}>
          <TouchableHighlight>
            <Link href="/">
              <FontAwesome name="home" size={25} style={styles.menuBtn} />
            </Link>
          </TouchableHighlight>
          <TouchableHighlight>
            <Link href="/notification">
              <FontAwesome name="calendar" size={23} style={styles.menuBtn} />
            </Link>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuOpt}>
            <FontAwesome name="user" size={23} style={styles.menuBtn} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  menus: {
    marginLeft: 20,
    width: "100%",
    padding: 10,
    bottom: 20,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#ffffff",
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
    paddingHorizontal: 3,
  },
  menuBtn: {
    padding: 8,
    color: "#555555",
    borderRadius: 30,
  },
  userDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  userNameStyl: {
    fontSize: 20,
    fontWeight: "500",
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userInfo: {
    backgroundColor: "#dcd5fb",
    padding: 20,
    borderRadius: 20,
  },
  userInfor: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "300",
  },
});

export default profile;
