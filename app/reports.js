import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";

const reports = () => {
  return (
    <View style={styles.container}>
      {/* header section */}
      <View style={styles.header}>
        <TouchableHighlight>
          <Link href="/">
            <Entypo name="chevron-left" size={25}>
              <Text>Report</Text>
            </Entypo>
          </Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.headeropt}>
            <Entypo name="notification" size={25} />
          </View>
        </TouchableHighlight>
      </View>

      {/* reports list */}
      <View style={styles.allReports}>
        <View style={styles.report}>
          <View style={styles.reportLeft}>
            <View style={styles.reportIcon}>
              <Entypo name="text-document" size={27} color="white" />
            </View>
            <Text>Unit-test-1</Text>
          </View>
          <View style={styles.reportLeft}>
            <Entypo name="download" size={20} />
          </View>
        </View>
        <View style={styles.report}>
          <View style={styles.reportLeft}>
            <View style={styles.reportIcon}>
              <Entypo name="text-document" size={27} color="white" />
            </View>
            <Text>Unit-test-2</Text>
          </View>
          <View style={styles.reportLeft}>
            <Entypo name="download" size={20} />
          </View>
        </View>
        <View style={styles.report}>
          <View style={styles.reportLeft}>
            <View style={styles.reportIcon}>
              <Entypo name="text-document" size={27} color="white" />
            </View>
            <Text>Unit-test-3</Text>
          </View>
          <View style={styles.reportLeft}>
            <Entypo name="download" size={20} />
          </View>
        </View>
        <View style={styles.report}>
          <View style={styles.reportLeft}>
            <View style={styles.reportIcon}>
              <Entypo name="text-document" size={27} color="white" />
            </View>
            <Text>Mid-term</Text>
          </View>
          <View style={styles.reportLeft}>
            <Entypo name="download" size={20} />
          </View>
        </View>
        <View style={styles.report}>
          <View style={styles.reportLeft}>
            <View style={styles.reportIcon}>
              <Entypo name="text-document" size={27} color="white" />
            </View>
            <Text>Final</Text>
          </View>
          <View style={styles.reportLeft}>
            <Entypo name="download" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
};

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
    padding: 6,
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
  allReports: {
    marginVertical: 20,
  },
  report: {
    marginVertical: 6,
    borderWidth: 2,
    borderColor: "#9e8af5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  reportLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  reportIcon:{
    backgroundColor:"#9e8af5",
    padding:10,
    marginRight:10,
    borderRadius:50,
  }
});

export default reports;
