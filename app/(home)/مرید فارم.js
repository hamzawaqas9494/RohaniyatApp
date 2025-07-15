import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomBackground from "../../components/Background/Background";
import { BASE_URL } from "../../config/api";
import { fehristStyles, formStyles, mainStyles } from "../../style/globalcss";
const isMobile = Platform.OS === "ios" || Platform.OS === "android";
const KeyboardWrapper = ({ children }) => {
  return isMobile ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  ) : (
    <View>{children}</View>
  );
};
const MareedForm = () => {
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
    natureOfBait: "",
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
    } else if (!formData.natureOfBait) {
      formErrors.natureOfBait = "Nature Of Bait is required";
    }

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(
            `${BASE_URL}/api/app-form-routes/mureed_form`,
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
            natureOfBait: "",
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
    <View style={formStyles.formContainer}>
        <KeyboardAvoidingView
          style={fehristStyles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <KeyboardWrapper>
          <ScrollView>
              <Text style={mainStyles.heading}>مرید ہونے کیلئے</Text>
              <Text style={mainStyles.description}>
                الحمدللہ ادارہ روحانیات کی اس سروس کے ذریعے پوری دنیا سے لاکھوں
                لوگ ہمارے سلسلے میں داخل ہو کر اپنی روحانی تربیت کر رہے ہیں اور
                بعد ازاں امت خلافت حاصل کرنے کے بعد امت مسلمہ کی خیر خواہی کیلئے
                کوشاں ہیں ۔ آپ اس فارم کو پُر کر کے ہمارے سلسلے کے ساتھ منسلک
                ہو جائیں تو آپ کی آن لائن بذریعہ واٹس ایپ آپ کی خدمت کیلئے
                سلسلے کے اذکار اور وظائف بھیجے جاتے ہیں ۔
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
                <View style={formStyles.inputRow} key={key}>
                  <Text style={formStyles.label}>{label}:</Text>
                  <TextInput
                    style={formStyles.inputBox}
                    value={formData[key]}
                    onChangeText={(value) => handleChange(key, value)}
                    keyboardType={keyboardType}
                  />
                </View>
              ))}

              {/* DOB */}
              <View style={formStyles.inputRow}>
                <Text style={formStyles.label}>DOB:</Text>
                <View style={formStyles.datePickers}>
                  <Picker
                    selectedValue={formData.day}
                    style={formStyles.pickerInput}
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
                    style={formStyles.pickerInput}
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
                    style={formStyles.pickerInput}
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
              <View style={formStyles.inputRow}>
                <Text style={formStyles.label}>Age:</Text>
                <TextInput
                  style={[formStyles.inputBox, { backgroundColor: "white" }]}
                  value={formData.age}
                  editable={false}
                />
              </View>

              {/* Gender Picker */}
              <View style={formStyles.inputRow}>
                <Text style={formStyles.label}>Gender:</Text>
                <Picker
                  selectedValue={formData.gender}
                  style={formStyles.pickerInput}
                  onValueChange={(value) => handleChange("gender", value)}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>

              {/* Status Picker */}
              <View style={formStyles.inputRow}>
                <Text style={formStyles.label}>Status:</Text>
                <Picker
                  selectedValue={formData.status}
                  style={formStyles.pickerInput}
                  onValueChange={(value) => handleChange("status", value)}
                >
                  <Picker.Item label="Select Status" value="" />
                  <Picker.Item label="Single" value="Single" />
                  <Picker.Item label="Married" value="Married" />
                </Picker>
              </View>

              {/* Additional Info Textarea */}
              <View style={formStyles.inputRow}>
                <Text style={formStyles.label}>Nature Of Bait:</Text>
                <TextInput
                  style={[
                    formStyles.inputBox,
                    { height: 60, textAlignVertical: "top" },
                  ]}
                  value={formData.natureOfBait}
                  onChangeText={(value) => handleChange("natureOfBait", value)}
                  multiline
                />
              </View>

              <TouchableOpacity
                style={formStyles.button}
                onPress={handleSubmit}
              >
                <Text style={formStyles.buttonText}>Submit</Text>
              </TouchableOpacity>

              {/* Modal for errors or success */}
              <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
              >
              
                <View style={formStyles.modalBackground}>
                  <View style={formStyles.modalContainer}>
                    <Text style={formStyles.modalText}>{modalMessage}</Text>
                    <TouchableOpacity
                      style={[
                        formStyles.button,
                        { backgroundColor: "#6C472D", marginTop: 10 },
                      ]}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={formStyles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
                </View>
              </Modal>
            </ScrollView>
          </KeyboardWrapper>
        </KeyboardAvoidingView>
    </View>
    </CustomBackground>
  );
};
export default MareedForm;
