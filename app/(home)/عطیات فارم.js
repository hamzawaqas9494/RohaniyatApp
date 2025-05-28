import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
const AttiyatForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    country: "",
    cityName: "",
    day: "",
    month: "",
    year: "",
    age: "",
    whatsappNumber: "",
    email: "",
    gender: "",
    status: "",
    sendingdonations: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    const { day, month, year } = formData;
    if (day && month && year) {
      const birthDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (!isNaN(age)) {
        setFormData((prevData) => ({ ...prevData, age: String(age) }));
      }
    }
  }, [formData.day, formData.month, formData.year]);

  const handleSubmit = async () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!formData.fatherName) {
      formErrors.fatherName = "Father's Name is required";
    } else if (!formData.motherName) {
      formErrors.motherName = "Mother's Name is required";
    } else if (!formData.country) {
      formErrors.country = "Country is required";
    } else if (!formData.cityName) {
      formErrors.cityName = "City is required";
    } else if (!formData.day || !formData.month || !formData.year) {
      formErrors.dob = "Date of Birth is required";
    } else if (!formData.whatsappNumber) {
      formErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d+$/.test(formData.whatsappNumber)) {
      formErrors.whatsappNumber =
        "Please enter a valid phone number (only numbers)";
    } else if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    } else if (!formData.gender) {
      formErrors.gender = "Gender is required";
    } else if (!formData.status) {
      formErrors.status = "Status is required";
    } else if (!formData.sendingdonations) {
      formErrors.sendingdonations = "Donations is required";
    }

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(
          "https://rohaniyatweb-production-99fc.up.railway.app/api/attiyat_form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setModalMessage("Form submitted successfully!");
          setModalVisible(true);
          setFormData({
            name: "",
            fatherName: "",
            motherName: "",
            country: "",
            cityName: "",
            day: "",
            month: "",
            year: "",
            age: "",
            whatsappNumber: "",
            email: "",
            gender: "",
            status: "",
            sendingdonations: "",
          });
        } else {
          const result = await response.json();
          setModalMessage(`Error: ${result.message || "Submission failed."}`);
          setModalVisible(true);
        }
      } catch (err) {
        setModalMessage("Network error: Unable to submit form.");
        setModalVisible(true);
      }
    } else {
      const errorMessages = Object.values(formErrors).join("\n");
      setModalMessage(errorMessages);
      setModalVisible(true);
    }
  };

  return (
    <CustomBackground>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <Text style={styles.heading}>عطیات کیلئے فارم</Text>
            <Text style={styles.description}>
              الحمدللہ ادارہ روحانیات کی اس سروس کے ذریعے پوری دنیا سے لاکھوں
              لوگ ادارے کی خدمات کو سراہتے ہوئے مالی تعاون فرماتے ہیں ۔ ادارے کی
              طرف سے پوری دنیا میں موجود مستحق افراد کا مفت روحانی ، مدرسہ تعلیم
              القرآن میں بچوں کی مفت تعلیم کیلئے اخرات ، اساتذہ کی تنخواہ،
              یوٹیلیٹی بل ، ہفتہ وار لنگر اور دیگر اخراجات کیلئے آپ کے تعاون
              اور مالی معاونت سے ہی ممکن ہے ۔اس فارم کو پُر کر کے جتنا ہو سکے
              ادارے کے ساتھ مالی تعاون فرمائیں ۔
            </Text>

            {[
              { label: "Name", key: "name", keyboardType: "default" },
              {
                label: "Father's Name",
                key: "fatherName",
                keyboardType: "default",
              },
              {
                label: "Mother's Name",
                key: "motherName",
                keyboardType: "default",
              },
              { label: "Country", key: "country", keyboardType: "default" },
              { label: "City", key: "cityName", keyboardType: "default" },
              {
                label: "WhatsApp Number",
                key: "whatsappNumber",
                keyboardType: "phone-pad",
              },
              { label: "Email", key: "email", keyboardType: "email-address" },
            ].map(({ label, key, keyboardType }) => (
              <View style={styles.inputRow} key={key}>
                <Text style={styles.label}>{label}:</Text>
                <TextInput
                  style={styles.inputBox}
                  value={formData[key]}
                  onChangeText={(value) => handleChange(key, value)}
                  keyboardType={keyboardType}
                />
              </View>
            ))}

            {/* DOB */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>DOB:</Text>
              <View style={styles.datePickers}>
                <Picker
                  selectedValue={formData.day}
                  style={styles.pickerInput}
                  onValueChange={(value) => handleChange("day", value)}
                >
                  <Picker.Item label="Day" value="" />
                  {Array.from({ length: 31 }, (_, i) => (
                    <Picker.Item
                      key={i + 1}
                      label={`${i + 1}`}
                      value={`${i + 1}`}
                    />
                  ))}
                </Picker>

                <Picker
                  selectedValue={formData.month}
                  style={styles.pickerInput}
                  onValueChange={(value) => handleChange("month", value)}
                >
                  <Picker.Item label="Month" value="" />
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m, i) => (
                    <Picker.Item key={i + 1} label={m} value={`${i + 1}`} />
                  ))}
                </Picker>

                <Picker
                  selectedValue={formData.year}
                  style={styles.pickerInput}
                  onValueChange={(value) => handleChange("year", value)}
                >
                  <Picker.Item label="Year" value="" />
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <Picker.Item
                        key={year}
                        label={`${year}`}
                        value={`${year}`}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>

            {/* Age */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>Age:</Text>
              <TextInput
                style={[styles.inputBox, { backgroundColor: "white" }]}
                value={formData.age}
                editable={false}
              />
            </View>

            {/* Gender Picker */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>Gender:</Text>
              <Picker
                selectedValue={formData.gender}
                style={styles.pickerInput}
                onValueChange={(value) => handleChange("gender", value)}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>

            {/* Status Picker */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>Status:</Text>
              <Picker
                selectedValue={formData.status}
                style={styles.pickerInput}
                onValueChange={(value) => handleChange("status", value)}
              >
                <Picker.Item label="Select Status" value="" />
                <Picker.Item label="Single" value="Single" />
                <Picker.Item label="Married" value="Married" />
              </Picker>
            </View>

            {/* Additional Info Textarea */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>The purpose of sending donations</Text>
              <TextInput
                style={[
                  styles.inputBox,
                  { height: 60, textAlignVertical: "top" },
                ]}
                value={formData.sendingdonations}
                onChangeText={(value) =>
                  handleChange("sendingdonations", value)
                }
                multiline
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Modal for errors or success */}
            <Modal
              visible={modalVisible}
              transparent
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <Text style={styles.modalText}>{modalMessage}</Text>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { backgroundColor: "#6C472D", marginTop: 10 },
                    ]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </CustomBackground>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },

  inputRow: {
    flex: 1,
    marginBottom: 8,
  },
  label: {
    color: "#6C472D",
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 14,
  },
  inputBox: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    color: "#6C472D",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  datePickers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerInput: {
    color: "#6C472D",
    flex: 1,
    marginHorizontal: 2,
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6C472D",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    elevation: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
});
export default AttiyatForm;
