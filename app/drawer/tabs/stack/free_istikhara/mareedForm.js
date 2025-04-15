// // // // // // // // import React, { useState } from "react";
// // // // // // // // import {
// // // // // // // //   View,
// // // // // // // //   Text,
// // // // // // // //   TextInput,
// // // // // // // //   StyleSheet,
// // // // // // // //   TouchableOpacity,
// // // // // // // //   Alert,
// // // // // // // //   ScrollView,
// // // // // // // // } from "react-native";

// // // // // // // // export default function FormScreen() {
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: "",
// // // // // // // //     fatherName: "",
// // // // // // // //   });

// // // // // // // //   const handleChange = (key, value) => {
// // // // // // // //     setFormData((prev) => ({ ...prev, [key]: value }));
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(
// // // // // // // //         "https://rohaniyat-web-jys5.vercel.app/api/email",
// // // // // // // //         {
// // // // // // // //           method: "POST",
// // // // // // // //           headers: {
// // // // // // // //             "Content-Type": "application/json",
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify(formData),
// // // // // // // //         }
// // // // // // // //       );

// // // // // // // //       const data = await response.json();

// // // // // // // //       if (response.ok) {
// // // // // // // //         Alert.alert("Success", "Form submitted successfully!");
// // // // // // // //       } else {
// // // // // // // //         Alert.alert("Error", data.error || "Failed to submit form.");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       Alert.alert("Error", "Something went wrong.");
// // // // // // // //       console.error("Error:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <ScrollView contentContainerStyle={styles.container}>
// // // // // // // //       <Text style={styles.heading}>Form Submission</Text>

// // // // // // // //       {Object.keys(formData).map((key) => (
// // // // // // // //         <TextInput
// // // // // // // //           key={key}
// // // // // // // //           style={styles.input}
// // // // // // // //           placeholder={key.replace(/([A-Z])/g, " $1").trim()}
// // // // // // // //           value={formData[key]}
// // // // // // // //           onChangeText={(text) => handleChange(key, text)}
// // // // // // // //         />
// // // // // // // //       ))}

// // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // // // // // //         <Text style={styles.buttonText}>Submit</Text>
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </ScrollView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flexGrow: 1,
// // // // // // // //     padding: 20,
// // // // // // // //     backgroundColor: "#E4DAC1",
// // // // // // // //     alignItems: "center",
// // // // // // // //   },
// // // // // // // //   heading: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: "bold",
// // // // // // // //     marginBottom: 20,
// // // // // // // //     textAlign: "center",
// // // // // // // //   },
// // // // // // // //   input: {
// // // // // // // //     width: "100%",
// // // // // // // //     padding: 10,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: "#6C472D",
// // // // // // // //     marginBottom: 10,
// // // // // // // //     borderRadius: 8,
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //   },
// // // // // // // //   button: {
// // // // // // // //     backgroundColor: "#6C472D",
// // // // // // // //     padding: 15,
// // // // // // // //     borderRadius: 8,
// // // // // // // //     alignItems: "center",
// // // // // // // //     marginTop: 20,
// // // // // // // //     width: "100%",
// // // // // // // //   },
// // // // // // // //   buttonText: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 18,
// // // // // // // //     fontWeight: "bold",
// // // // // // // //   },
// // // // // // // // });

// // // // // // // import React, { useState } from "react";
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   TextInput,
// // // // // // //   StyleSheet,
// // // // // // //   TouchableOpacity,
// // // // // // //   Alert,
// // // // // // //   ScrollView,
// // // // // // // } from "react-native";

// // // // // // // export default function FormScreen() {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     fatherName: "",
// // // // // // //     motherName: "",
// // // // // // //     country: "",
// // // // // // //     cityName: "",
// // // // // // //     age: "",
// // // // // // //     dateOfBirth: "",
// // // // // // //     gender: "",
// // // // // // //     status: "",
// // // // // // //     whatsappNumber: "",
// // // // // // //     email: "",
// // // // // // //     natureOfBait: "",
// // // // // // //   });

// // // // // // //   const handleChange = (key, value) => {
// // // // // // //     setFormData((prev) => ({ ...prev, [key]: value }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async () => {
// // // // // // //     try {
// // // // // // //       const response = await fetch(
// // // // // // //         "https://rohaniyat-web-jys5.vercel.app/api/email",
// // // // // // //         {
// // // // // // //           method: "POST",
// // // // // // //           headers: {
// // // // // // //             "Content-Type": "application/json",
// // // // // // //           },
// // // // // // //           body: JSON.stringify(formData),
// // // // // // //         }
// // // // // // //       );

// // // // // // //       const data = await response.json();

// // // // // // //       if (response.ok) {
// // // // // // //         Alert.alert("Success", "Form submitted successfully!");
// // // // // // //       } else {
// // // // // // //         Alert.alert("Error", data.error || "Failed to submit form.");
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       Alert.alert("Error", "Something went wrong.");
// // // // // // //       console.error("Error:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <ScrollView contentContainerStyle={styles.container}>
// // // // // // //       <Text style={styles.heading}>Form Submission</Text>

// // // // // // //       {Object.keys(formData).map((key) => (
// // // // // // //         <TextInput
// // // // // // //           key={key}
// // // // // // //           style={styles.input}
// // // // // // //           placeholder={key.replace(/([A-Z])/g, " $1").trim()}
// // // // // // //           value={formData[key]}
// // // // // // //           onChangeText={(text) => handleChange(key, text)}
// // // // // // //         />
// // // // // // //       ))}

// // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // // // // //         <Text style={styles.buttonText}>Submit</Text>
// // // // // // //       </TouchableOpacity>
// // // // // // //     </ScrollView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flexGrow: 1,
// // // // // // //     padding: 20,
// // // // // // //     backgroundColor: "#E4DAC1",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   heading: {
// // // // // // //     fontSize: 24,
// // // // // // //     fontWeight: "bold",
// // // // // // //     marginBottom: 20,
// // // // // // //     textAlign: "center",
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     width: "100%",
// // // // // // //     padding: 10,
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: "#6C472D",
// // // // // // //     marginBottom: 10,
// // // // // // //     borderRadius: 8,
// // // // // // //     backgroundColor: "#fff",
// // // // // // //   },
// // // // // // //   button: {
// // // // // // //     backgroundColor: "#6C472D",
// // // // // // //     padding: 15,
// // // // // // //     borderRadius: 8,
// // // // // // //     alignItems: "center",
// // // // // // //     marginTop: 20,
// // // // // // //     width: "100%",
// // // // // // //   },
// // // // // // //   buttonText: {
// // // // // // //     color: "#fff",
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: "bold",
// // // // // // //   },
// // // // // // // });

// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   TextInput,
// // // // // //   StyleSheet,
// // // // // //   TouchableOpacity,
// // // // // //   Alert,
// // // // // //   ScrollView,
// // // // // //   Keyboard,
// // // // // //   TouchableWithoutFeedback,
// // // // // // } from "react-native";

// // // // // // export default function FormScreen() {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     fatherName: "",
// // // // // //     motherName: "",
// // // // // //     country: "",
// // // // // //     cityName: "",
// // // // // //     age: "",
// // // // // //     dateOfBirth: "",
// // // // // //     gender: "",
// // // // // //     status: "",
// // // // // //     whatsappNumber: "",
// // // // // //     email: "",
// // // // // //     natureOfBait: "",
// // // // // //   });

// // // // // //   const handleChange = (key, value) => {
// // // // // //     setFormData((prev) => ({ ...prev, [key]: value }));
// // // // // //   };

// // // // // //   const handleSubmit = async () => {
// // // // // //     // ✅ Validation: Check if all fields are filled
// // // // // //     for (const key in formData) {
// // // // // //       if (!formData[key]) {
// // // // // //         Alert.alert(
// // // // // //           "Error",
// // // // // //           `Please fill in the ${key.replace(/([A-Z])/g, " $1").trim()} field.`
// // // // // //         );
// // // // // //         return;
// // // // // //       }
// // // // // //     }

// // // // // //     try {
// // // // // //       const response = await fetch(
// // // // // //         "https://rohaniyatweb-production-99fc.up.railway.app/api/email",
// // // // // //         {
// // // // // //           method: "POST",
// // // // // //           headers: {
// // // // // //             "Content-Type": "application/json",
// // // // // //           },
// // // // // //           body: JSON.stringify(formData),
// // // // // //         }
// // // // // //       );

// // // // // //       const data = await response.json();

// // // // // //       if (response.ok) {
// // // // // //         Alert.alert("Success", "Form submitted successfully!");
// // // // // //         setFormData({
// // // // // //           // ✅ Form Clear After Submission
// // // // // //           name: "",
// // // // // //           fatherName: "",
// // // // // //           motherName: "",
// // // // // //           country: "",
// // // // // //           cityName: "",
// // // // // //           age: "",
// // // // // //           dateOfBirth: "",
// // // // // //           gender: "",
// // // // // //           status: "",
// // // // // //           whatsappNumber: "",
// // // // // //           email: "",
// // // // // //           natureOfBait: "",
// // // // // //         });
// // // // // //       } else {
// // // // // //         Alert.alert("Error", data.error || "Failed to submit form.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       Alert.alert("Error", "Something went wrong.");
// // // // // //       console.error("Error:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// // // // // //       <ScrollView contentContainerStyle={styles.container}>
// // // // // //         <Text style={styles.heading}>📜 Form Submission</Text>

// // // // // //         {Object.keys(formData).map((key) => (
// // // // // //           <TextInput
// // // // // //             key={key}
// // // // // //             style={styles.input}
// // // // // //             placeholder={key.replace(/([A-Z])/g, " $1").trim()}
// // // // // //             value={formData[key]}
// // // // // //             onChangeText={(text) => handleChange(key, text)}
// // // // // //             keyboardType={key === "email" ? "email-address" : "default"}
// // // // // //             autoCapitalize="none"
// // // // // //           />
// // // // // //         ))}

// // // // // //         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // // // //           <Text style={styles.buttonText}>📩 Submit</Text>
// // // // // //         </TouchableOpacity>
// // // // // //       </ScrollView>
// // // // // //     </TouchableWithoutFeedback>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flexGrow: 1,
// // // // // //     padding: 20,
// // // // // //     backgroundColor: "#FAF3E0",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   heading: {
// // // // // //     fontSize: 26,
// // // // // //     fontWeight: "bold",
// // // // // //     color: "#4A3F35",
// // // // // //     marginBottom: 20,
// // // // // //     textAlign: "center",
// // // // // //   },
// // // // // //   input: {
// // // // // //     width: "100%",
// // // // // //     padding: 12,
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: "#8D6E63",
// // // // // //     marginBottom: 12,
// // // // // //     borderRadius: 10,
// // // // // //     backgroundColor: "#FFFFFF",
// // // // // //     fontSize: 16,
// // // // // //   },
// // // // // //   button: {
// // // // // //     backgroundColor: "#6D4C41",
// // // // // //     padding: 15,
// // // // // //     borderRadius: 10,
// // // // // //     alignItems: "center",
// // // // // //     marginTop: 20,
// // // // // //     width: "100%",
// // // // // //   },
// // // // // //   buttonText: {
// // // // // //     color: "#FFFFFF",
// // // // // //     fontSize: 18,
// // // // // //     fontWeight: "bold",
// // // // // //   },
// // // // // // });

// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TextInput,
// // // //   StyleSheet,
// // // //   TouchableOpacity,
// // // //   ScrollView,
// // // //   Keyboard,
// // // //   TouchableWithoutFeedback,
// // // //   Modal,
// // // //   Animated,
// // // //   Easing,
// // // //   Platform,
// // // // } from "react-native";
// // // // import DatePicker from "react-native-material-datetime-picker";

// // // // export default function FormScreen() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     fatherName: "",
// // // //     motherName: "",
// // // //     country: "",
// // // //     cityName: "",
// // // //     age: "",
// // // //     dateOfBirth: "",
// // // //     gender: "",
// // // //     status: "",
// // // //     whatsappNumber: "",
// // // //     email: "",
// // // //     natureOfBait: "",
// // // //   });

// // // //   const [errors, setErrors] = useState({});
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [modalMsg, setModalMsg] = useState("");
// // // //   const slideAnim = useRef(new Animated.Value(-300)).current;

// // // //   const [showDatePicker, setShowDatePicker] = useState(false);

// // // //   const handleChange = (key, value) => {
// // // //     setFormData((prev) => ({ ...prev, [key]: value }));
// // // //     setErrors((prev) => ({ ...prev, [key]: null }));
// // // //   };

// // // //   const validateForm = () => {
// // // //     const newErrors = {};

// // // //     Object.entries(formData).forEach(([key, value]) => {
// // // //       if (!value) {
// // // //         newErrors[key] = `Please fill in the ${formatKey(key)}`;
// // // //       } else {
// // // //         if (key === "email" && !value.endsWith("@gmail.com")) {
// // // //           newErrors[key] = "Only Gmail addresses allowed";
// // // //         }
// // // //         if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
// // // //           newErrors[key] = `${formatKey(key)} must be a number`;
// // // //         }
// // // //       }
// // // //     });

// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const formatKey = (key) =>
// // // //     key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

// // // //   const showAnimatedModal = (msg) => {
// // // //     setModalMsg(msg);
// // // //     setShowModal(true);
// // // //     Animated.timing(slideAnim, {
// // // //       toValue: 0,
// // // //       duration: 400,
// // // //       easing: Easing.out(Easing.exp),
// // // //       useNativeDriver: true,
// // // //     }).start(() => {
// // // //       setTimeout(() => {
// // // //         Animated.timing(slideAnim, {
// // // //           toValue: -300,
// // // //           duration: 300,
// // // //           easing: Easing.in(Easing.exp),
// // // //           useNativeDriver: true,
// // // //         }).start(() => {
// // // //           setShowModal(false);
// // // //         });
// // // //       }, 2500);
// // // //     });
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     if (!validateForm()) {
// // // //       showAnimatedModal("Please fix the errors above.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch(
// // // //         "https://rohaniyatweb-production-99fc.up.railway.app/api/email",
// // // //         {
// // // //           method: "POST",
// // // //           headers: { "Content-Type": "application/json" },
// // // //           body: JSON.stringify(formData),
// // // //         }
// // // //       );

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         showAnimatedModal("Form submitted successfully!");
// // // //         setFormData({
// // // //           name: "",
// // // //           fatherName: "",
// // // //           motherName: "",
// // // //           country: "",
// // // //           cityName: "",
// // // //           age: "",
// // // //           dateOfBirth: "",
// // // //           gender: "",
// // // //           status: "",
// // // //           whatsappNumber: "",
// // // //           email: "",
// // // //           natureOfBait: "",
// // // //         });
// // // //       } else {
// // // //         showAnimatedModal(data.error || "Submission failed.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       showAnimatedModal("Something went wrong.");
// // // //     }
// // // //   };

// // // //   const handleDateChange = (_, selectedDate) => {
// // // //     setShowDatePicker(false);
// // // //     if (selectedDate) {
// // // //       const formatted = selectedDate.toISOString().split("T")[0];
// // // //       handleChange("dateOfBirth", formatted);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// // // //       <ScrollView contentContainerStyle={styles.container}>
// // // //         <Text style={styles.heading}>📜 Form Submission</Text>

// // // //         {Object.keys(formData).map((key) => {
// // // //           if (key === "dateOfBirth") {
// // // //             return (
// // // //               <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// // // //                 <TouchableOpacity
// // // //                   onPress={() => setShowDatePicker(true)}
// // // //                   style={styles.input}
// // // //                 >
// // // //                   <Text style={{ color: formData[key] ? "#000" : "#999" }}>
// // // //                     {formData[key] || "Date Of Birth"}
// // // //                   </Text>
// // // //                 </TouchableOpacity>
// // // //                 {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// // // //                 {showDatePicker && (
// // // //                   <DatePicker
// // // //                     mode="date"
// // // //                     value={new Date()}
// // // //                     display={Platform.OS === "ios" ? "spinner" : "default"}
// // // //                     onChange={handleDateChange}
// // // //                   />
// // // //                 )}
// // // //               </View>
// // // //             );
// // // //           }

// // // //           return (
// // // //             <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// // // //               <TextInput
// // // //                 style={styles.input}
// // // //                 placeholder={formatKey(key)}
// // // //                 value={formData[key]}
// // // //                 onChangeText={(text) => handleChange(key, text)}
// // // //                 keyboardType={
// // // //                   key === "email"
// // // //                     ? "email-address"
// // // //                     : ["age", "whatsappNumber"].includes(key)
// // // //                     ? "numeric"
// // // //                     : "default"
// // // //                 }
// // // //               />
// // // //               {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// // // //             </View>
// // // //           );
// // // //         })}

// // // //         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // //           <Text style={styles.buttonText}>📩 Submit</Text>
// // // //         </TouchableOpacity>

// // // //         <Modal transparent visible={showModal} animationType="none">
// // // //           <Animated.View
// // // //             style={[
// // // //               styles.modal,
// // // //               {
// // // //                 transform: [{ translateY: slideAnim }],
// // // //               },
// // // //             ]}
// // // //           >
// // // //             <Text style={styles.modalText}>{modalMsg}</Text>
// // // //           </Animated.View>
// // // //         </Modal>
// // // //       </ScrollView>
// // // //     </TouchableWithoutFeedback>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flexGrow: 1,
// // // //     padding: 20,
// // // //     backgroundColor: "#FAF3E0",
// // // //     alignItems: "center",
// // // //   },
// // // //   heading: {
// // // //     fontSize: 26,
// // // //     fontWeight: "bold",
// // // //     color: "#4A3F35",
// // // //     marginBottom: 20,
// // // //     textAlign: "center",
// // // //   },
// // // //   input: {
// // // //     width: "100%",
// // // //     padding: 12,
// // // //     borderWidth: 1,
// // // //     borderColor: "#8D6E63",
// // // //     borderRadius: 10,
// // // //     backgroundColor: "#FFFFFF",
// // // //     fontSize: 16,
// // // //   },
// // // //   error: {
// // // //     color: "red",
// // // //     fontSize: 12,
// // // //     marginTop: 4,
// // // //   },
// // // //   button: {
// // // //     backgroundColor: "#6D4C41",
// // // //     padding: 15,
// // // //     borderRadius: 10,
// // // //     alignItems: "center",
// // // //     marginTop: 20,
// // // //     width: "100%",
// // // //   },
// // // //   buttonText: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: 18,
// // // //     fontWeight: "bold",
// // // //   },
// // // //   modal: {
// // // //     position: "absolute",
// // // //     top: 100,
// // // //     left: 40,
// // // //     right: 40,
// // // //     padding: 20,
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 12,
// // // //     shadowColor: "#000",
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 10,
// // // //     elevation: 10,
// // // //     alignItems: "center",
// // // //   },
// // // //   modalText: {
// // // //     fontSize: 16,
// // // //     color: "#333",
// // // //     textAlign: "center",
// // // //   },
// // // // });

// // // import React, { useState, useRef, useEffect } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ScrollView,
// // //   Keyboard,
// // //   TouchableWithoutFeedback,
// // //   Modal,
// // //   Animated,
// // //   Easing,
// // //   Platform,
// // // } from "react-native";
// // // import DatePicker from "react-native-material-datetime-picker";

// // // // For web support, import react-datepicker
// // // import ReactDatePicker from "react-datepicker";
// // // import "react-datepicker/dist/react-datepicker.css"; // Important for web styling

// // // export default function FormScreen() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     fatherName: "",
// // //     motherName: "",
// // //     country: "",
// // //     cityName: "",
// // //     age: "",
// // //     dateOfBirth: "",
// // //     gender: "",
// // //     status: "",
// // //     whatsappNumber: "",
// // //     email: "",
// // //     natureOfBait: "",
// // //   });

// // //   const [errors, setErrors] = useState({});
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [modalMsg, setModalMsg] = useState("");
// // //   const slideAnim = useRef(new Animated.Value(-300)).current;

// // //   const [showDatePicker, setShowDatePicker] = useState(false);

// // //   const handleChange = (key, value) => {
// // //     setFormData((prev) => ({ ...prev, [key]: value }));
// // //     setErrors((prev) => ({ ...prev, [key]: null }));
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = {};

// // //     Object.entries(formData).forEach(([key, value]) => {
// // //       if (!value) {
// // //         newErrors[key] = `Please fill in the ${formatKey(key)}`;
// // //       } else {
// // //         if (key === "email" && !value.endsWith("@gmail.com")) {
// // //           newErrors[key] = "Only Gmail addresses allowed";
// // //         }
// // //         if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
// // //           newErrors[key] = `${formatKey(key)} must be a number`;
// // //         }
// // //       }
// // //     });

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const formatKey = (key) =>
// // //     key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

// // //   const showAnimatedModal = (msg) => {
// // //     setModalMsg(msg);
// // //     setShowModal(true);
// // //     Animated.timing(slideAnim, {
// // //       toValue: 0,
// // //       duration: 400,
// // //       easing: Easing.out(Easing.exp),
// // //       useNativeDriver: true,
// // //     }).start(() => {
// // //       setTimeout(() => {
// // //         Animated.timing(slideAnim, {
// // //           toValue: -300,
// // //           duration: 300,
// // //           easing: Easing.in(Easing.exp),
// // //           useNativeDriver: true,
// // //         }).start(() => {
// // //           setShowModal(false);
// // //         });
// // //       }, 2500);
// // //     });
// // //   };

// // //   const handleSubmit = async () => {
// // //     if (!validateForm()) {
// // //       showAnimatedModal("Please fix the errors above.");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch(
// // //         "https://rohaniyatweb-production-99fc.up.railway.app/api/email",
// // //         {
// // //           method: "POST",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify(formData),
// // //         }
// // //       );

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         showAnimatedModal("Form submitted successfully!");
// // //         setFormData({
// // //           name: "",
// // //           fatherName: "",
// // //           motherName: "",
// // //           country: "",
// // //           cityName: "",
// // //           age: "",
// // //           dateOfBirth: "",
// // //           gender: "",
// // //           status: "",
// // //           whatsappNumber: "",
// // //           email: "",
// // //           natureOfBait: "",
// // //         });
// // //       } else {
// // //         showAnimatedModal(data.error || "Submission failed.");
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       showAnimatedModal("Something went wrong.");
// // //     }
// // //   };

// // //   const handleDateChange = (_, selectedDate) => {
// // //     setShowDatePicker(false);
// // //     if (selectedDate) {
// // //       const formatted = selectedDate.toISOString().split("T")[0];
// // //       handleChange("dateOfBirth", formatted);
// // //     }
// // //   };

// // //   return (
// // //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// // //       <ScrollView contentContainerStyle={styles.container}>
// // //         <Text style={styles.heading}>📜 Form Submission</Text>

// // //         {Object.keys(formData).map((key) => {
// // //           if (key === "dateOfBirth") {
// // //             return (
// // //               <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// // //                 {Platform.OS === "web" ? (
// // //                   <ReactDatePicker
// // //                     selected={formData[key] ? new Date(formData[key]) : null}
// // //                     onChange={(date) =>
// // //                       handleChange(
// // //                         "dateOfBirth",
// // //                         date.toISOString().split("T")[0]
// // //                       )
// // //                     }
// // //                     dateFormat="yyyy-MM-dd"
// // //                     placeholderText="Date of Birth"
// // //                     className="react-datepicker" // Add your custom class if necessary
// // //                   />
// // //                 ) : (
// // //                   <TouchableOpacity
// // //                     onPress={() => setShowDatePicker(true)}
// // //                     style={styles.input}
// // //                   >
// // //                     <Text style={{ color: formData[key] ? "#000" : "#999" }}>
// // //                       {formData[key] || "Date Of Birth"}
// // //                     </Text>
// // //                   </TouchableOpacity>
// // //                 )}
// // //                 {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// // //                 {showDatePicker && Platform.OS !== "web" && (
// // //                   <DatePicker
// // //                     mode="date"
// // //                     value={new Date()}
// // //                     display={Platform.OS === "ios" ? "spinner" : "default"}
// // //                     onChange={handleDateChange}
// // //                   />
// // //                 )}
// // //               </View>
// // //             );
// // //           }

// // //           return (
// // //             <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// // //               <TextInput
// // //                 style={styles.input}
// // //                 placeholder={formatKey(key)}
// // //                 value={formData[key]}
// // //                 onChangeText={(text) => handleChange(key, text)}
// // //                 keyboardType={
// // //                   key === "email"
// // //                     ? "email-address"
// // //                     : ["age", "whatsappNumber"].includes(key)
// // //                     ? "numeric"
// // //                     : "default"
// // //                 }
// // //               />
// // //               {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// // //             </View>
// // //           );
// // //         })}

// // //         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // //           <Text style={styles.buttonText}>📩 Submit</Text>
// // //         </TouchableOpacity>

// // //         <Modal transparent visible={showModal} animationType="none">
// // //           <Animated.View
// // //             style={[styles.modal, { transform: [{ translateY: slideAnim }] }]}
// // //           >
// // //             <Text style={styles.modalText}>{modalMsg}</Text>
// // //           </Animated.View>
// // //         </Modal>
// // //       </ScrollView>
// // //     </TouchableWithoutFeedback>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flexGrow: 1,
// // //     padding: 20,
// // //     backgroundColor: "#FAF3E0",
// // //     alignItems: "center",
// // //   },
// // //   heading: {
// // //     fontSize: 26,
// // //     fontWeight: "bold",
// // //     color: "#4A3F35",
// // //     marginBottom: 20,
// // //     textAlign: "center",
// // //   },
// // //   input: {
// // //     width: "100%",
// // //     padding: 12,
// // //     borderWidth: 1,
// // //     borderColor: "#8D6E63",
// // //     borderRadius: 10,
// // //     backgroundColor: "#FFFFFF",
// // //     fontSize: 16,
// // //   },
// // //   error: {
// // //     color: "red",
// // //     fontSize: 12,
// // //     marginTop: 4,
// // //   },
// // //   button: {
// // //     backgroundColor: "#6D4C41",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //     marginTop: 20,
// // //     width: "100%",
// // //   },
// // //   buttonText: {
// // //     color: "#FFFFFF",
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //   },
// // //   modal: {
// // //     position: "absolute",
// // //     top: 100,
// // //     left: 40,
// // //     right: 40,
// // //     padding: 20,
// // //     backgroundColor: "#fff",
// // //     borderRadius: 12,
// // //     shadowColor: "#000",
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 10,
// // //     elevation: 10,
// // //     alignItems: "center",
// // //   },
// // //   modalText: {
// // //     fontSize: 16,
// // //     color: "#333",
// // //     textAlign: "center",
// // //   },
// // // });

// // import React, { useState, useRef } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   Keyboard,
// //   TouchableWithoutFeedback,
// //   Modal,
// //   Animated,
// //   Platform,
// // } from "react-native";
// // import { DatePickerAndroid, DatePickerIOS } from "react-native";

// // export default function FormScreen() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     fatherName: "",
// //     motherName: "",
// //     country: "",
// //     cityName: "",
// //     age: "",
// //     dateOfBirth: "",
// //     gender: "",
// //     status: "",
// //     whatsappNumber: "",
// //     email: "",
// //     natureOfBait: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [showModal, setShowModal] = useState(false);
// //   const [modalMsg, setModalMsg] = useState("");
// //   const slideAnim = useRef(new Animated.Value(-300)).current;

// //   const handleChange = (key, value) => {
// //     setFormData((prev) => ({ ...prev, [key]: value }));
// //     setErrors((prev) => ({ ...prev, [key]: null }));
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};

// //     Object.entries(formData).forEach(([key, value]) => {
// //       if (!value) {
// //         newErrors[key] = `Please fill in the ${formatKey(key)}`;
// //       } else {
// //         if (key === "email" && !value.endsWith("@gmail.com")) {
// //           newErrors[key] = "Only Gmail addresses allowed";
// //         }
// //         if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
// //           newErrors[key] = `${formatKey(key)} must be a number`;
// //         }
// //       }
// //     });

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const formatKey = (key) =>
// //     key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

// //   const showAnimatedModal = (msg) => {
// //     setModalMsg(msg);
// //     setShowModal(true);
// //     Animated.timing(slideAnim, {
// //       toValue: 0,
// //       duration: 400,
// //       easing: Easing.out(Easing.exp),
// //       useNativeDriver: true,
// //     }).start(() => {
// //       setTimeout(() => {
// //         Animated.timing(slideAnim, {
// //           toValue: -300,
// //           duration: 300,
// //           easing: Easing.in(Easing.exp),
// //           useNativeDriver: true,
// //         }).start(() => {
// //           setShowModal(false);
// //         });
// //       }, 2500);
// //     });
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateForm()) {
// //       showAnimatedModal("Please fix the errors above.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch(
// //         "https://rohaniyatweb-production-99fc.up.railway.app/api/email",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         showAnimatedModal("Form submitted successfully!");
// //         setFormData({
// //           name: "",
// //           fatherName: "",
// //           motherName: "",
// //           country: "",
// //           cityName: "",
// //           age: "",
// //           dateOfBirth: "",
// //           gender: "",
// //           status: "",
// //           whatsappNumber: "",
// //           email: "",
// //           natureOfBait: "",
// //         });
// //       } else {
// //         showAnimatedModal(data.error || "Submission failed.");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       showAnimatedModal("Something went wrong.");
// //     }
// //   };

// //   const handleDateChange = () => {
// //     if (Platform.OS === "android") {
// //       DatePickerAndroid.open({
// //         date: new Date(formData.dateOfBirth || new Date()),
// //       }).then((response) => {
// //         if (response.action !== DatePickerAndroid.dismissedAction) {
// //           const selectedDate = new Date(
// //             response.year,
// //             response.month,
// //             response.day
// //           );
// //           const formatted = selectedDate.toISOString().split("T")[0]; // format the date as 'YYYY-MM-DD'
// //           handleChange("dateOfBirth", formatted); // store formatted date in the form data state
// //         }
// //       });
// //     } else if (Platform.OS === "ios") {
// //       // For iOS, DatePickerIOS is used
// //       setShowDatePicker(true);
// //     }
// //   };

// //   return (
// //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.heading}>📜 Form Submission</Text>

// //         {Object.keys(formData).map((key) => {
// //           if (key === "dateOfBirth") {
// //             return (
// //               <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// //                 <TouchableOpacity
// //                   onPress={handleDateChange}
// //                   style={styles.input}
// //                 >
// //                   <Text style={{ color: formData[key] ? "#000" : "#999" }}>
// //                     {formData[key] || "Date Of Birth"}
// //                   </Text>
// //                 </TouchableOpacity>
// //                 {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// //                 {showDatePicker && (
// //                   <DatePickerIOS
// //                     date={new Date(formData[key] || new Date())}
// //                     onDateChange={(newDate) => {
// //                       const formatted = newDate.toISOString().split("T")[0];
// //                       handleChange("dateOfBirth", formatted);
// //                     }}
// //                   />
// //                 )}
// //               </View>
// //             );
// //           }

// //           return (
// //             <View key={key} style={{ width: "100%", marginBottom: 12 }}>
// //               <TextInput
// //                 style={styles.input}
// //                 placeholder={formatKey(key)}
// //                 value={formData[key]}
// //                 onChangeText={(text) => handleChange(key, text)}
// //                 keyboardType={
// //                   key === "email"
// //                     ? "email-address"
// //                     : ["age", "whatsappNumber"].includes(key)
// //                     ? "numeric"
// //                     : "default"
// //                 }
// //               />
// //               {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
// //             </View>
// //           );
// //         })}

// //         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// //           <Text style={styles.buttonText}>📩 Submit</Text>
// //         </TouchableOpacity>

// //         <Modal transparent visible={showModal} animationType="none">
// //           <Animated.View
// //             style={[
// //               styles.modal,
// //               {
// //                 transform: [{ translateY: slideAnim }],
// //               },
// //             ]}
// //           >
// //             <Text style={styles.modalText}>{modalMsg}</Text>
// //           </Animated.View>
// //         </Modal>
// //       </ScrollView>
// //     </TouchableWithoutFeedback>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1,
// //     padding: 20,
// //     backgroundColor: "#FAF3E0",
// //     alignItems: "center",
// //   },
// //   heading: {
// //     fontSize: 26,
// //     fontWeight: "bold",
// //     color: "#4A3F35",
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   input: {
// //     width: "100%",
// //     padding: 12,
// //     borderWidth: 1,
// //     borderColor: "#8D6E63",
// //     borderRadius: 10,
// //     backgroundColor: "#FFFFFF",
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: "red",
// //     fontSize: 12,
// //     marginTop: 4,
// //   },
// //   button: {
// //     backgroundColor: "#6D4C41",
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     marginTop: 20,
// //     width: "100%",
// //   },
// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   modal: {
// //     position: "absolute",
// //     top: 100,
// //     left: 40,
// //     right: 40,
// //     padding: 20,
// //     backgroundColor: "#fff",
// //     borderRadius: 12,
// //     shadowColor: "#000",
// //     shadowOpacity: 0.3,
// //     shadowRadius: 10,
// //     elevation: 10,
// //     alignItems: "center",
// //   },
// //   modalText: {
// //     fontSize: 16,
// //     color: "#333",
// //     textAlign: "center",
// //   },
// // });
// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Modal,
//   Animated,
//   Platform,
// } from "react-native";
// import { DatePickerAndroid, DatePickerIOS } from "react-native";
// import { Easing } from "react-native";

// export default function FormScreen() {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     motherName: "",
//     country: "",
//     cityName: "",
//     age: "",
//     dateOfBirth: "",
//     gender: "",
//     status: "",
//     whatsappNumber: "",
//     email: "",
//     natureOfBait: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const [modalMsg, setModalMsg] = useState("");
//   const [showDatePicker, setShowDatePicker] = useState(false); // ✅ Added state
//   const slideAnim = useRef(new Animated.Value(-300)).current;

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//     setErrors((prev) => ({ ...prev, [key]: null }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!value) {
//         newErrors[key] = `Please fill in the ${formatKey(key)}`;
//       } else {
//         if (key === "email" && !value.endsWith("@gmail.com")) {
//           newErrors[key] = "Only Gmail addresses allowed";
//         }
//         if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
//           newErrors[key] = `${formatKey(key)} must be a number`;
//         }
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const formatKey = (key) =>
//     key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

//   const showAnimatedModal = (msg) => {
//     setModalMsg(msg);
//     setShowModal(true);
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 400,
//       easing: Easing.out(Easing.exp),
//       useNativeDriver: true,
//     }).start(() => {
//       setTimeout(() => {
//         Animated.timing(slideAnim, {
//           toValue: -300,
//           duration: 300,
//           easing: Easing.in(Easing.exp),
//           useNativeDriver: true,
//         }).start(() => {
//           setShowModal(false);
//         });
//       }, 2500);
//     });
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       showAnimatedModal("Please fix the errors above.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://rohaniyatweb-production-99fc.up.railway.app/api/email",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         showAnimatedModal("Form submitted successfully!");
//         setFormData({
//           name: "",
//           fatherName: "",
//           motherName: "",
//           country: "",
//           cityName: "",
//           age: "",
//           dateOfBirth: "",
//           gender: "",
//           status: "",
//           whatsappNumber: "",
//           email: "",
//           natureOfBait: "",
//         });
//         setShowDatePicker(false);
//       } else {
//         showAnimatedModal(data.error || "Submission failed.");
//       }
//     } catch (error) {
//       console.error(error);
//       showAnimatedModal("Something went wrong.");
//     }
//   };

//   const handleDateChange = () => {
//     if (Platform.OS === "android") {
//       DatePickerAndroid.open({
//         date: new Date(formData.dateOfBirth || new Date()),
//       }).then((response) => {
//         if (response.action !== DatePickerAndroid.dismissedAction) {
//           const selectedDate = new Date(
//             response.year,
//             response.month,
//             response.day
//           );
//           const formatted = selectedDate.toISOString().split("T")[0];
//           handleChange("dateOfBirth", formatted);
//         }
//       });
//     } else if (Platform.OS === "ios") {
//       setShowDatePicker(true);
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.heading}>📜 Form Submission</Text>

//         {Object.keys(formData).map((key) => {
//           if (key === "dateOfBirth") {
//             return (
//               <View key={key} style={{ width: "100%", marginBottom: 12 }}>
//                 <TouchableOpacity
//                   onPress={handleDateChange}
//                   style={styles.input}
//                 >
//                   <Text style={{ color: formData[key] ? "#000" : "#999" }}>
//                     {formData[key] || "Date Of Birth"}
//                   </Text>
//                 </TouchableOpacity>
//                 {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
//                 {Platform.OS === "ios" && showDatePicker && (
//                   <DatePickerIOS
//                     date={formData[key] ? new Date(formData[key]) : new Date()}
//                     mode="date"
//                     onDateChange={(newDate) => {
//                       const formatted = newDate.toISOString().split("T")[0];
//                       handleChange("dateOfBirth", formatted);
//                       setShowDatePicker(false); // hide after selection
//                     }}
//                   />
//                 )}
//               </View>
//             );
//           }

//           return (
//             <View key={key} style={{ width: "100%", marginBottom: 12 }}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={formatKey(key)}
//                 value={formData[key]}
//                 onChangeText={(text) => handleChange(key, text)}
//                 keyboardType={
//                   key === "email"
//                     ? "email-address"
//                     : ["age", "whatsappNumber"].includes(key)
//                     ? "numeric"
//                     : "default"
//                 }
//               />
//               {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
//             </View>
//           );
//         })}

//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>📩 Submit</Text>
//         </TouchableOpacity>

//         <Modal transparent visible={showModal} animationType="none">
//           <Animated.View
//             style={[
//               styles.modal,
//               {
//                 transform: [{ translateY: slideAnim }],
//               },
//             ]}
//           >
//             <Text style={styles.modalText}>{modalMsg}</Text>
//           </Animated.View>
//         </Modal>
//       </ScrollView>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#FAF3E0",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#4A3F35",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: 12,
//     borderWidth: 1,
//     borderColor: "#8D6E63",
//     borderRadius: 10,
//     backgroundColor: "#FFFFFF",
//     fontSize: 16,
//   },
//   error: {
//     color: "red",
//     fontSize: 12,
//     marginTop: 4,
//   },
//   button: {
//     backgroundColor: "#6D4C41",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//     width: "100%",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   modal: {
//     position: "absolute",
//     top: 100,
//     left: 40,
//     right: 40,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 10,
//     alignItems: "center",
//   },
//   modalText: {
//     fontSize: 16,
//     color: "#333",
//     textAlign: "center",
//   },
// });
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  Animated,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBackground from "../../../../../components/Background/Background";

export default function FormScreen() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    country: "",
    cityName: "",
    age: "",
    dateOfBirth: "",
    gender: "",
    status: "",
    whatsappNumber: "",
    email: "",
    natureOfBait: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `Please fill in the ${formatKey(key)}`;
      } else {
        if (key === "email" && !value.endsWith("@gmail.com")) {
          newErrors[key] = "Only Gmail addresses allowed";
        }
        if (["age", "whatsappNumber"].includes(key) && isNaN(value)) {
          newErrors[key] = `${formatKey(key)} must be a number`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

  const showAnimatedModal = (msg) => {
    setModalMsg(msg);
    setShowModal(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -700,
          duration: 700,
          useNativeDriver: true,
        }).start(() => {
          setShowModal(false);
        });
      }, 2500);
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showAnimatedModal("Please fix the errors above.");
      return;
    }

    try {
      const response = await fetch(
        "https://rohaniyatweb-production-99fc.up.railway.app/api/mureed_form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showAnimatedModal("Form submitted successfully!");
        setFormData({
          name: "",
          fatherName: "",
          motherName: "",
          country: "",
          cityName: "",
          age: "",
          dateOfBirth: "",
          gender: "",
          status: "",
          whatsappNumber: "",
          email: "",
          natureOfBait: "",
        });
      } else {
        showAnimatedModal(data.error || "Submission failed.");
      }
    } catch (error) {
      console.error(error);
      showAnimatedModal("Something went wrong.");
    }
  };

  const onDateChange = (event, date) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      handleChange("dateOfBirth", formattedDate);
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  return (
    <CustomBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text style={styles.heading}>مرید ہونے کیلئے</Text>
          <Text style={styles.description}>
            الحمد للہ اس سروس کے ذریعے ہزاروں لوگ ہمارے سلسلے میں داخل ہو رہے
            ہیں ان کو ای میل یا واٹس اپ کے ذریعے سلسلے کے تمام وظائف و اذکار
            بھیج دئے جاتے ہیں اور وقتا فوقتا ان کی رہنمائی بھی کی جاتی ہے یاد
            رہے تصوف اور عملیات دونوں علیحدہ علیحدہ شعبے ہیں
          </Text>

          {Object.keys(formData).map((key) => {
            if (key === "dateOfBirth") {
              return (
                <View key={key} style={{ width: "100%", marginBottom: 12 }}>
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    style={styles.input}
                  >
                    <Text style={{ color: formData[key] ? "#000" : "#999" }}>
                      {formData[key] || "Date Of Birth"}
                    </Text>
                  </TouchableOpacity>
                  {errors[key] && (
                    <Text style={styles.error}>{errors[key]}</Text>
                  )}
                  {showDatePicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="default"
                      onChange={onDateChange}
                      maximumDate={new Date()}
                    />
                  )}
                </View>
              );
            }

            return (
              <View key={key} style={{ width: "100%", marginBottom: 12 }}>
                <TextInput
                  style={styles.input}
                  placeholder={formatKey(key)}
                  value={formData[key]}
                  onChangeText={(text) => handleChange(key, text)}
                  keyboardType={
                    key === "email"
                      ? "email-address"
                      : ["age", "whatsappNumber"].includes(key)
                      ? "numeric"
                      : "default"
                  }
                />
                {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
              </View>
            );
          })}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>📩 Submit</Text>
          </TouchableOpacity>

          <Modal transparent visible={showModal} animationType="none">
            <Animated.View
              style={[
                styles.modal,
                {
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <Text style={styles.modalText}>{modalMsg}</Text>
            </Animated.View>
          </Modal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
    marginBottom: 10,
    writingDirection: "rtl",
  },

  description: {
    fontSize: 18,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 10,
  },

  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#6D4C41",
    color: "#6D4C41",
    borderRadius: 10,
    backgroundColor: "#EFEADF",
    fontSize: 16,
    borderWidth: 2,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#6D4C41",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: 40,
    right: 40,
    padding: 20,
    backgroundColor: "#6D4C41",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignItems: "center",
  },
  modalText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    borderRadius: 10,
  },
});
