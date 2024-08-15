import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
  Switch,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { notAuthenticated } from "../context/redux/slicers/authSlicer";
import CustomButton from "../components/CustomButton";
import { Divider } from "react-native-paper";

const Configuration = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleLogout = () => {
    dispatch(notAuthenticated());
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* Profile section */}
          <View style={[styles.section, { paddingTop: 4 }]}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.sectionBody}>
              <View style={styles.profileBody}>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle onPress */
                  }}
                  style={styles.row}
                >
                  <Text style={styles.rowLabel}>Profile</Text>

                  <View style={styles.rowSpacer} />

                  <Text style={styles.rowValue}>User</Text>
                  <FeatherIcon color="#bcbcbc" name="chevron-right" size={22} />
                </TouchableOpacity>
                <Divider />
                {/* Additional Profile Options */}
                <TouchableOpacity style={styles.row}>
                  <Text style={styles.rowLabel}>Home</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Actual Home</Text>
                  <FeatherIcon color="#bcbcbc" name="chevron-right" size={22} />
                </TouchableOpacity>
                <Divider />

                <TouchableOpacity style={styles.row}>
                  <Text style={styles.rowLabel}>Invite User</Text>
                  <FeatherIcon color="#bcbcbc" name="chevron-right" size={22} />
                </TouchableOpacity>
                <Divider />

                <TouchableOpacity style={styles.row}>
                  <Text style={styles.rowLabel}>Join Home</Text>
                  <FeatherIcon color="#bcbcbc" name="chevron-right" size={22} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.sectionBody}>
              {/* Language */}
              <TouchableOpacity
                onPress={() => {
                  /* Handle onPress */
                }}
                style={[styles.row]}
              >
                <Text style={styles.rowLabel}>Language</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>English</Text>
                <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} />
              </TouchableOpacity>
              <Divider />
              {/* Email Notifications */}
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Notifications</Text>
                <View style={styles.rowSpacer} />
                <Switch
                  onValueChange={(value) =>
                    setForm({ ...form, emailNotifications: value })
                  }
                  value={form.emailNotifications}
                  style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                />
              </View>
            </View>
          </View>

          {/* Info Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>
            <View style={styles.sectionBody}>
              {/* Contact */}
              <TouchableOpacity
                onPress={() => {
                  /* Handle onPress */
                }}
                style={[styles.row]}
              >
                <Text style={styles.rowLabel}>Contact</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} />
              </TouchableOpacity>
              <Divider />
              {/* Terms and Privacy */}
              <TouchableOpacity
                onPress={() => {
                  /* Handle onPress */
                }}
                style={[styles.row]}
              >
                <Text style={styles.rowLabel}>Terms of Service</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.contentFooter}>App Version 1.0 </Text>
        </ScrollView>

        {/* Logout button at the bottom */}
        <View style={styles.logOutButton}>
          <CustomButton text="Logout" onPress={handleLogout} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 8,
  },
  sectionTitle: {
    margin: 8,
    fontSize: 13,
    fontWeight: "500",
    color: "#a69f9f",
  },
  sectionBody: {
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  profileBody: {
    flex: 1,
  },
  profileHandle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 44,
    backgroundColor: "#fff",
  },
  rowLabel: {
    fontSize: 16,
    color: "#333",
  },
  rowValue: {
    fontSize: 16,
    color: "#ababab",
  },
  rowSpacer: {
    flex: 1,
  },

  contentFooter: {
    fontSize: 13,
    textAlign: "center",
    color: "#a69f9f",
  },
  logOutButton: {
    padding: 16,
    alignItems: "center",
  },
});
