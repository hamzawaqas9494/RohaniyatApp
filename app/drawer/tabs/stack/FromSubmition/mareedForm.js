// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Alert,
// //   ScrollView,
// // } from "react-native";

// // export default function FormScreen() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     fatherName: "",
// //   });

// //   const handleChange = (key, value) => {
// //     setFormData((prev) => ({ ...prev, [key]: value }));
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://rohaniyat-web-jys5.vercel.app/api/email",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         Alert.alert("Success", "Form submitted successfully!");
// //       } else {
// //         Alert.alert("Error", data.error || "Failed to submit form.");
// //       }
// //     } catch (error) {
// //       Alert.alert("Error", "Something went wrong.");
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.heading}>Form Submission</Text>

// //       {Object.keys(formData).map((key) => (
// //         <TextInput
// //           key={key}
// //           style={styles.input}
// //           placeholder={key.replace(/([A-Z])/g, " $1").trim()}
// //           value={formData[key]}
// //           onChangeText={(text) => handleChange(key, text)}
// //         />
// //       ))}

// //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// //         <Text style={styles.buttonText}>Submit</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1,
// //     padding: 20,
// //     backgroundColor: "#E4DAC1",
// //     alignItems: "center",
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   input: {
// //     width: "100%",
// //     padding: 10,
// //     borderWidth: 1,
// //     borderColor: "#6C472D",
// //     marginBottom: 10,
// //     borderRadius: 8,
// //     backgroundColor: "#fff",
// //   },
// //   button: {
// //     backgroundColor: "#6C472D",
// //     padding: 15,
// //     borderRadius: 8,
// //     alignItems: "center",
// //     marginTop: 20,
// //     width: "100%",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// // });

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from "react-native";

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

//   const handleChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(
//         "https://rohaniyat-web-jys5.vercel.app/api/email",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert("Success", "Form submitted successfully!");
//       } else {
//         Alert.alert("Error", data.error || "Failed to submit form.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "Something went wrong.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Form Submission</Text>

//       {Object.keys(formData).map((key) => (
//         <TextInput
//           key={key}
//           style={styles.input}
//           placeholder={key.replace(/([A-Z])/g, " $1").trim()}
//           value={formData[key]}
//           onChangeText={(text) => handleChange(key, text)}
//         />
//       ))}

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#E4DAC1",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#6C472D",
//     marginBottom: 10,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//   },
//   button: {
//     backgroundColor: "#6C472D",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 20,
//     width: "100%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

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

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // ✅ Validation: Check if all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        Alert.alert(
          "Error",
          `Please fill in the ${key.replace(/([A-Z])/g, " $1").trim()} field.`
        );
        return;
      }
    }

    try {
      const response = await fetch(
        "https://rohaniyat-web.vercel.app/api/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Form submitted successfully!");
        setFormData({
          // ✅ Form Clear After Submission
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
        Alert.alert("Error", data.error || "Failed to submit form.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
      console.error("Error:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>📜 Form Submission</Text>

        {Object.keys(formData).map((key) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={key.replace(/([A-Z])/g, " $1").trim()}
            value={formData[key]}
            onChangeText={(text) => handleChange(key, text)}
            keyboardType={key === "email" ? "email-address" : "default"}
            autoCapitalize="none"
          />
        ))}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>📩 Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FAF3E0",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A3F35",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#8D6E63",
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6D4C41",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
