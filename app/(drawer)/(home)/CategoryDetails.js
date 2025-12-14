// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import { useEffect, useState } from "react";
// // // import { Dimensions, Image, ScrollView, Text, View } from "react-native";
// // // import RenderHTML from "react-native-render-html";
// // // import CustomBackground from "../../../components/Background/Background";
// // // import { useData } from "../../../components/context/DataContext";
// // // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // // import Loader from "../../../components/Loader/Loader";
// // // import UniversalButton from "../../../components/UniversalButton/UniversalButton";
// // // import { BASE_URL_IMG } from "../../../config/api";
// // // import { customButton, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

// // // export default function CategoryDetails() {
// // //   const { id, tableName } = useRoute().params || {};
// // //   const navigation = useNavigation();
// // //   const { width } = Dimensions.get("window");
// // //   const { fetchItemById } = useData();

// // //   const [item, setItem] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //  useEffect(() => {
// // //   const load = async () => {
// // //     if (!tableName || !id) return;
// // //     setLoading(true);


// // //     navigation.setOptions({ title: "..." });

// // //     try {
// // //       const found = await fetchItemById(tableName, id);
// // //       setItem(found);

// // //       if (found?.title) {
// // //         navigation.setOptions({ title: found.title });
// // //       }
// // //     } catch (err) {
// // //       console.error("آئٹم لوڈنگ فیل:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   load();
// // // }, [id, tableName]);


// // //   const allowedTables = ["rohaniilaaj","chehalkaaf","tawizatusmaniya","rohanidokan","amliyatcourse","hamzadkaamal"];

// // //   if (loading) return <Loader />;

// // //   if (!item) return <ErrorMessage text="کوئی ریکارڈ موجود نہیں ہے" />;

// // //   return (
// // //     <CustomBackground>
// // //       <ScrollView showsVerticalScrollIndicator={false}>
// // //          <View style={mainStyles.container}>
// // //         <Text style={mainStyles.heading}>{item.title}</Text>
// // //         <View style={htmlStyles.ContentWrapper}>
// // //           <RenderHTML
// // //             contentWidth={width}
// // //             source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
// // //             tagsStyles={htmlStyles}
// // //             systemFonts={["Jameel-Noori-Regular", "ScheherazadeNew-Bold","NotoNastaliqUrdu-Bold","NotoNastaliqUrdu-Regular"]}
// // //             defaultTextProps={{ selectable: true }}
// // //             baseStyle={htmlBaseStyle}
// // //           />
// // //         </View>
// // //         {item.image && (
// // //           <Image source={{ uri: `${BASE_URL_IMG}${item.image}` }} style={htmlStyles.itemimage} resizeMode="contain" />
// // //         )}
      

// // //   <View style={customButton.container}>
// // //   {/* WhatsApp Button */}
// // //   {allowedTables.includes(tableName) && (
// // //     <UniversalButton
// // //       icon="whatsapp"
// // //      iconColor="#fff"               
// // //       text="رابطہ برائے خریداری"
// // //       color="#fff"                  
// // //      backgroundColor="#6C472D" 
// // //       link="https://wa.me/923008440979"
// // //     />
// // //   )}

// // //   {/* YouTube Button */}
// // //   <UniversalButton
// // //     icon="youtube-play"
// // //     iconColor="#fff"         
// // //     text="مزید تفصیلات کے لیے یوٹیوب وزٹ کریں"
// // //     color="#fff"                   
// // //     backgroundColor="#6C472D"   
// // //     link={item.youtube_link}
// // //   />
// // // </View>




// // //         </View>
// // //       </ScrollView>
// // //     </CustomBackground>
// // //   );
// // // }




// // "use client";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { useEffect, useState } from "react";
// // import { Dimensions, Image, ScrollView, Text, View } from "react-native";
// // import RenderHTML from "react-native-render-html";

// // import CustomBackground from "../../../components/Background/Background";
// // import { useData } from "../../../components/context/DataContext";
// // import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// // import Loader from "../../../components/Loader/Loader";
// // import UniversalButton from "../../../components/UniversalButton/UniversalButton";
// // import { BASE_URL_IMG } from "../../../config/api";
// // import { customButton, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

// // export default function CategoryDetails() {
// //   const route = useRoute();
// //   const navigation = useNavigation();
// //   const { id } = route.params || {}; // اب صرف id چاہیے

// //   const { width } = Dimensions.get("window");
// //   const { fetchItemById } = useData();

// //   const [item, setItem] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const load = async () => {
// //       if (!id) {
// //         setLoading(false);
// //         return;
// //       }

// //       setLoading(true);
// //       navigation.setOptions({ title: "..." });

// //       try {
// //         // نیا سسٹم: صرف id سے آئٹم لوڈ کرو (tableId خود نکالے گا)
// //         const found = await fetchItemById(id);

// //         if (found) {
// //           setItem(found);
// //           navigation.setOptions({ title: found.title || "تفصیلات" });
// //         } else {
// //           setItem(null);
// //         }
// //       } catch (err) {
// //         console.error("آئٹم لوڈنگ فیل:", err);
// //         setItem(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     load();
// //   }, [id, navigation]);

// //   const allowedTables = [
// //     "rohaniilaaj",
// //     "chehalkaaf",
// //     "tawizatusmaniya",
// //     "rohanidokan",
// //     "amliyatcourse",
// //     "hamzadkaamal",
// //   ];

// //   // tableName اب item سے نکالیں گے اگر بٹن دکھانا ہو
// //   const tableName = item?.table_name || item?.tableName; // آپ کے ڈیٹا میں جو فیلڈ ہو

// //   if (loading) return <Loader />;
// //   if (!item) return <ErrorMessage text="کوئی ریکارڈ موجود نہیں ہے" />;

// //   return (
// //     <CustomBackground>
// //       <ScrollView showsVerticalScrollIndicator={false}>
// //         <View style={mainStyles.container}>
// //           <Text style={mainStyles.heading}>{item.title}</Text>

// //           <View style={htmlStyles.ContentWrapper}>
// //             <RenderHTML
// //               contentWidth={width}
// //               source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
// //               tagsStyles={htmlStyles}
// //               systemFonts={[
// //                 "Jameel-Noori-Regular",
// //                 "ScheherazadeNew-Bold",
// //                 "NotoNastaliqUrdu-Bold",
// //                 "NotoNastaliqUrdu-Regular",
// //               ]}
// //               defaultTextProps={{ selectable: true }}
// //               baseStyle={htmlBaseStyle}
// //             />
// //           </View>

// //           {item.image && (
// //             <Image
// //               source={{ uri: `${BASE_URL_IMG}${item.image}` }}
// //               style={htmlStyles.itemimage}
// //               resizeMode="contain"
// //             />
// //           )}

// //           <View style={customButton.container}>
// //             {/* WhatsApp Button — مخصوص ٹیبلز کے لیے */}
// //             {allowedTables.includes(tableName) && (
// //               <UniversalButton
// //                 icon="whatsapp"
// //                 iconColor="#fff"
// //                 text="رابطہ برائے خریداری"
// //                 color="#fff"
// //                 backgroundColor="#6C472D"
// //                 link="https://wa.me/923008440979"
// //               />
// //             )}

// //             {/* YouTube Button */}
// //             {item.youtube_link && (
// //               <UniversalButton
// //                 icon="youtube-play"
// //                 iconColor="#fff"
// //                 text="مزید تفصیلات کے لیے یوٹیوب وزٹ کریں"
// //                 color="#fff"
// //                 backgroundColor="#6C472D"
// //                 link={item.youtube_link}
// //               />
// //             )}
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </CustomBackground>
// //   );
// // }



// "use client";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { Dimensions, Image, ScrollView, Text, View } from "react-native";
// import RenderHTML from "react-native-render-html";

// import CustomBackground from "../../../components/Background/Background";
// import { useData } from "../../../components/context/DataContext";
// import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
// import Loader from "../../../components/Loader/Loader";
// import UniversalButton from "../../../components/UniversalButton/UniversalButton";
// import { BASE_URL_IMG } from "../../../config/api";
// import { customButton, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

// export default function CategoryDetails() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { id, tableName: tableNameFromParams } = route.params || {}; // اگر ItemList سے tableName بھیجا ہو تو استعمال ہوگا (اختیاری)

//   const { width } = Dimensions.get("window");
//   const { fetchItemById } = useData();

//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentTableName, setCurrentTableName] = useState(tableNameFromParams || ""); // fallback

//   console.log("CategoryDetails")

//   useEffect(() => {
//     const load = async () => {
//       if (!id) {
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       navigation.setOptions({ title: "لوڈ ہو رہا ہے..." });

//       try {
//         // نیا سسٹم: صرف id سے آئٹم لوڈ کرو، backend خود table_id نکالے گا
//         const found = await fetchItemById(id);

//         if (found) {
//           setItem(found);
//           navigation.setOptions({ title: found.title || "تفصیلات" });

//           // اگر backend سے table_name نہیں آ رہا، تو params سے استعمال کرو
//           if (tableNameFromParams) {
//             setCurrentTableName(tableNameFromParams);
//           }
//           // اگر backend سے table_name آ جائے تو اسے استعمال کرو (بہتر)
//           if (found.table_name || found.tableName) {
//             setCurrentTableName(found.table_name || found.tableName);
//           }
//         } else {
//           setItem(null);
//         }
//       } catch (err) {
//         console.error("آئٹم لوڈنگ فیل:", err);
//         setItem(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [id, navigation, tableNameFromParams]);

//   // WhatsApp بٹن کے لیے مخصوص ٹیبلز
//   const allowedTablesForWhatsApp = [
//     "rohaniilaaj",
//     "chehalkaaf",
//     "tawizatusmaniya",
//     "rohanidokan",
//     "amliyatcourse",
//     "hamzadkaamal",
//   ];

//   const showWhatsAppButton = currentTableName && allowedTablesForWhatsApp.includes(currentTableName);

//   if (loading) return <Loader />;
//   if (!item) return <ErrorMessage text="کوئی ریکارڈ موجود نہیں ہے" />;

//   return (
//     <CustomBackground>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={mainStyles.container}>
//           <Text style={mainStyles.heading}>{item.title}</Text>

//           <View style={htmlStyles.ContentWrapper}>
//             <RenderHTML
//               contentWidth={width}
//               source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
//               tagsStyles={htmlStyles}
//               systemFonts={[
//                 "Jameel-Noori-Regular",
//                 "ScheherazadeNew-Bold",
//                 "NotoNastaliqUrdu-Bold",
//                 "NotoNastaliqUrdu-Regular",
//               ]}
//               defaultTextProps={{ selectable: true }}
//               baseStyle={htmlBaseStyle}
//             />
//           </View>

//           {item.image && (
//             <Image
//               source={{ uri: `${BASE_URL_IMG}${item.image}` }}
//               style={htmlStyles.itemimage}
//               resizeMode="contain"
//             />
//           )}

//           <View style={customButton.container}>
//             {/* WhatsApp Button — مخصوص ٹیبلز کے لیے */}
//             {showWhatsAppButton && (
//               <UniversalButton
//                 icon="whatsapp"
//                 iconColor="#fff"
//                 text="رابطہ برائے خریداری"
//                 color="#fff"
//                 backgroundColor="#6C472D"
//                 link="https://wa.me/923008440979"
//               />
//             )}

//             {/* YouTube Button */}
//             {item.youtube_link && (
//               <UniversalButton
//                 icon="youtube-play"
//                 iconColor="#fff"
//                 text="مزید تفصیلات کے لیے یوٹیوب وزٹ کریں"
//                 color="#fff"
//                 backgroundColor="#6C472D"
//                 link={item.youtube_link}
//               />
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </CustomBackground>
//   );
// }




import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";

import CustomBackground from "../../../components/Background/Background";
import { useData } from "../../../components/context/DataContext";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import Loader from "../../../components/Loader/Loader";
import UniversalButton from "../../../components/UniversalButton/UniversalButton";
import { BASE_URL_IMG } from "../../../config/api";
import { customButton, htmlBaseStyle, htmlStyles, mainStyles } from "../../../style/globalcss";

export default function CategoryDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {}; // صرف id چاہیے — tableName کی ضرورت ختم!

  const { width } = Dimensions.get("window");
  const { fetchItemById } = useData();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTableName, setCurrentTableName] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      navigation.setOptions({ title: "لوڈ ہو رہا ہے..." });

      try {
        // صرف id سے آئٹم لوڈ کرو — backend خود table_id اور table_name نکالے گا
        const found = await fetchItemById(id);

        if (found) {
          setItem(found);
          navigation.setOptions({ title: found.title || "تفصیلات" });

          // WhatsApp بٹن کے لیے table_name نکالو
          // backend سے table_name آئے تو بہترین، ورنہ خالی چھوڑ دو
          const tableName = found.table_name || found.tableName || "";
          setCurrentTableName(tableName);
        } else {
          setItem(null);
        }
      } catch (err) {
        console.error("آئٹم لوڈنگ فیل:", err);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, navigation]); // tableNameFromParams ہٹا دیا — اب ضرورت نہیں!

  // WhatsApp بٹن صرف ان ٹیبلز کے لیے دکھاؤ
  const allowedTablesForWhatsApp = [
    "rohaniilaaj",
    "chehalkaaf",
    "tawizatusmaniya",
    "rohanidokan",
    "amliyatcourse",
    "hamzadkaamal",
  ];

  const showWhatsAppButton = currentTableName && allowedTablesForWhatsApp.includes(currentTableName);

  if (loading) return <Loader />;
  if (!item) return <ErrorMessage text="کوئی ریکارڈ موجود نہیں ہے" />;

  return (
    <CustomBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={mainStyles.container}>
          <Text style={mainStyles.heading}>{item.title}</Text>

          <View style={htmlStyles.ContentWrapper}>
            <RenderHTML
              contentWidth={width}
              source={{ html: item.content || "<p>کوئی مواد نہیں</p>" }}
              tagsStyles={htmlStyles}
              systemFonts={[
                "Jameel-Noori-Regular",
                "ScheherazadeNew-Bold",
                "NotoNastaliqUrdu-Bold",
                "NotoNastaliqUrdu-Regular",
              ]}
              defaultTextProps={{ selectable: true }}
              baseStyle={htmlBaseStyle}
            />
          </View>

          {item.image && (
            <Image
              source={{ uri: `${BASE_URL_IMG}${item.image}` }}
              style={htmlStyles.itemimage}
              resizeMode="contain"
            />
          )}

          <View style={customButton.container}>
            {/* WhatsApp Button — مخصوص ٹیبلز کے لیے */}
            {showWhatsAppButton && (
              <UniversalButton
                icon="whatsapp"
                iconColor="#fff"
                text="رابطہ برائے خریداری"
                color="#fff"
                backgroundColor="#6C472D"
                link="https://wa.me/923008440979"
              />
            )}

            {/* YouTube Button */}
            {item.youtube_link && (
              <UniversalButton
                icon="youtube-play"
                iconColor="#fff"
                text="مزید تفصیلات کے لیے یوٹیوب وزٹ کریں"
                color="#fff"
                backgroundColor="#6C472D"
                link={item.youtube_link}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}