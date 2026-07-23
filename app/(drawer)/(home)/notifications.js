// // // // // import { useEffect } from "react";
// // // // // import {
// // // // //   FlatList,
// // // // //   StyleSheet,
// // // // //   Text,
// // // // //   TouchableOpacity,
// // // // //   View,
// // // // // } from "react-native";

// // // // // import { useNotifications } from "../../../components/Notifications/NotificationContext";

// // // // // export default function Notifications() {
// // // // //   const { notifications, loadNotifications, markAsRead } = useNotifications();

// // // // //   useEffect(() => {
// // // // //     loadNotifications();
// // // // //   }, []);

// // // // //   const renderItem = ({ item }) => (
// // // // //     <TouchableOpacity
// // // // //       activeOpacity={0.8}
// // // // //       style={[styles.card, !item.is_read && styles.unreadCard]}
// // // // //       onPress={() => markAsRead(item.id)}
// // // // //     >
// // // // //       <View style={styles.row}>
// // // // //         <Text style={styles.title}>{item.title}</Text>

// // // // //         {!item.is_read && <View style={styles.dot} />}
// // // // //       </View>

// // // // //       <Text style={styles.body}>{item.body}</Text>

// // // // //       <Text style={styles.date}>
// // // // //         {new Date(item.created_at).toLocaleString()}
// // // // //       </Text>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       {notifications.length === 0 ? (
// // // // //         <View style={styles.emptyContainer}>
// // // // //           <Text style={styles.emptyText}>
// // // // //             ابھی تک کوئی نوٹیفکیشن موجود نہیں۔
// // // // //           </Text>
// // // // //         </View>
// // // // //       ) : (
// // // // //         <FlatList
// // // // //           data={notifications}
// // // // //           keyExtractor={(item) => item.id.toString()}
// // // // //           renderItem={renderItem}
// // // // //           contentContainerStyle={styles.list}
// // // // //           showsVerticalScrollIndicator={false}
// // // // //         />
// // // // //       )}
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#E4DAC1",
// // // // //   },

// // // // //   list: {
// // // // //     padding: 15,
// // // // //   },

// // // // //   card: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 12,
// // // // //     padding: 15,
// // // // //     marginBottom: 12,
// // // // //     elevation: 2,
// // // // //   },

// // // // //   unreadCard: {
// // // // //     borderLeftWidth: 5,
// // // // //     borderLeftColor: "#6C472D",
// // // // //   },

// // // // //   row: {
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   title: {
// // // // //     flex: 1,
// // // // //     fontSize: 16,
// // // // //     fontWeight: "bold",
// // // // //     color: "#6C472D",
// // // // //     marginRight: 10,
// // // // //   },

// // // // //   body: {
// // // // //     marginTop: 8,
// // // // //     color: "#444",
// // // // //     fontSize: 14,
// // // // //     lineHeight: 20,
// // // // //   },

// // // // //   date: {
// // // // //     marginTop: 10,
// // // // //     fontSize: 12,
// // // // //     color: "#888",
// // // // //   },

// // // // //   dot: {
// // // // //     width: 10,
// // // // //     height: 10,
// // // // //     borderRadius: 5,
// // // // //     backgroundColor: "red",
// // // // //   },

// // // // //   emptyContainer: {
// // // // //     flex: 1,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 20,
// // // // //   },

// // // // //   emptyText: {
// // // // //     fontSize: 15,
// // // // //     color: "#777",
// // // // //     textAlign: "center",
// // // // //   },
// // // // // });

// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   FlatList,
// // // //   StyleSheet,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   View,
// // // // } from "react-native";

// // // // import { useNotifications } from "../../../components/Notifications/NotificationContext";

// // // // export default function Notifications() {
// // // //   const { notifications, loadNotifications, markAsRead } = useNotifications();

// // // //   const [filter, setFilter] = useState("all");

// // // //   useEffect(() => {
// // // //     loadNotifications();
// // // //   }, []);

// // // //   const getFilteredNotifications = () => {
// // // //     const now = new Date();

// // // //     return notifications.filter((item) => {
// // // //       const date = new Date(item.created_at);

// // // //       const diffTime = now - date;

// // // //       const diffDays = diffTime / (1000 * 60 * 60 * 24);

// // // //       if (filter === "today") {
// // // //         return (
// // // //           date.getDate() === now.getDate() &&
// // // //           date.getMonth() === now.getMonth() &&
// // // //           date.getFullYear() === now.getFullYear()
// // // //         );
// // // //       }

// // // //       if (filter === "yesterday") {
// // // //         const yesterday = new Date();

// // // //         yesterday.setDate(now.getDate() - 1);

// // // //         return (
// // // //           date.getDate() === yesterday.getDate() &&
// // // //           date.getMonth() === yesterday.getMonth() &&
// // // //           date.getFullYear() === yesterday.getFullYear()
// // // //         );
// // // //       }

// // // //       if (filter === "7days") {
// // // //         return diffDays <= 7;
// // // //       }

// // // //       if (filter === "30days") {
// // // //         return diffDays <= 30;
// // // //       }

// // // //       return true;
// // // //     });
// // // //   };

// // // //   const filteredNotifications = getFilteredNotifications();

// // // //   const renderItem = ({ item }) => (
// // // //     <TouchableOpacity
// // // //       activeOpacity={0.8}
// // // //       style={[styles.card, !item.is_read && styles.unreadCard]}
// // // //       onPress={() => markAsRead(item.id)}
// // // //     >
// // // //       <View style={styles.row}>
// // // //         <Text style={styles.title}>{item.title}</Text>

// // // //         {!item.is_read && <View style={styles.dot} />}
// // // //       </View>

// // // //       <Text style={styles.body}>{item.body}</Text>

// // // //       <Text style={styles.date}>
// // // //         {new Date(item.created_at).toLocaleString()}
// // // //       </Text>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       {/* Filter Tabs */}

// // // //       <View style={styles.tabs}>
// // // //         <TouchableOpacity
// // // //           style={[styles.tab, filter === "all" && styles.activeTab]}
// // // //           onPress={() => setFilter("all")}
// // // //         >
// // // //           <Text style={[styles.tabText, filter === "all" && styles.activeText]}>
// // // //             سب
// // // //           </Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity
// // // //           style={[styles.tab, filter === "today" && styles.activeTab]}
// // // //           onPress={() => setFilter("today")}
// // // //         >
// // // //           <Text
// // // //             style={[styles.tabText, filter === "today" && styles.activeText]}
// // // //           >
// // // //             آج
// // // //           </Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity
// // // //           style={[styles.tab, filter === "yesterday" && styles.activeTab]}
// // // //           onPress={() => setFilter("yesterday")}
// // // //         >
// // // //           <Text
// // // //             style={[
// // // //               styles.tabText,
// // // //               filter === "yesterday" && styles.activeText,
// // // //             ]}
// // // //           >
// // // //             کل
// // // //           </Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity
// // // //           style={[styles.tab, filter === "7days" && styles.activeTab]}
// // // //           onPress={() => setFilter("7days")}
// // // //         >
// // // //           <Text
// // // //             style={[styles.tabText, filter === "7days" && styles.activeText]}
// // // //           >
// // // //             7 دن
// // // //           </Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity
// // // //           style={[styles.tab, filter === "30days" && styles.activeTab]}
// // // //           onPress={() => setFilter("30days")}
// // // //         >
// // // //           <Text
// // // //             style={[styles.tabText, filter === "30days" && styles.activeText]}
// // // //           >
// // // //             30 دن
// // // //           </Text>
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {filteredNotifications.length === 0 ? (
// // // //         <View style={styles.emptyContainer}>
// // // //           <Text style={styles.emptyText}>
// // // //             ابھی تک کوئی نوٹیفکیشن موجود نہیں۔
// // // //           </Text>
// // // //         </View>
// // // //       ) : (
// // // //         <FlatList
// // // //           data={filteredNotifications}
// // // //           keyExtractor={(item) => item.id.toString()}
// // // //           renderItem={renderItem}
// // // //           contentContainerStyle={styles.list}
// // // //           showsVerticalScrollIndicator={false}
// // // //         />
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#E4DAC1",
// // // //   },

// // // //   tabs: {
// // // //     flexDirection: "row",
// // // //     padding: 10,
// // // //     justifyContent: "center",
// // // //     flexWrap: "wrap",
// // // //   },

// // // //   tab: {
// // // //     backgroundColor: "#fff",
// // // //     paddingHorizontal: 12,
// // // //     paddingVertical: 6,
// // // //     borderRadius: 20,
// // // //     margin: 4,
// // // //   },

// // // //   activeTab: {
// // // //     backgroundColor: "#6C472D",
// // // //   },

// // // //   tabText: {
// // // //     color: "#6C472D",
// // // //     fontSize: 13,
// // // //     fontFamily: "NotoNastaliqUrdu-Regular",
// // // //   },

// // // //   activeText: {
// // // //     color: "#fff",
// // // //   },

// // // //   list: {
// // // //     padding: 15,
// // // //   },

// // // //   card: {
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 12,
// // // //     padding: 15,
// // // //     marginBottom: 12,
// // // //     elevation: 2,
// // // //   },

// // // //   unreadCard: {
// // // //     borderLeftWidth: 5,
// // // //     borderLeftColor: "#6C472D",
// // // //   },

// // // //   row: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //   },

// // // //   title: {
// // // //     flex: 1,
// // // //     fontSize: 16,
// // // //     fontWeight: "bold",
// // // //     color: "#6C472D",
// // // //     marginRight: 10,
// // // //   },

// // // //   body: {
// // // //     marginTop: 8,
// // // //     color: "#444",
// // // //     fontSize: 14,
// // // //     lineHeight: 20,
// // // //   },

// // // //   date: {
// // // //     marginTop: 10,
// // // //     fontSize: 12,
// // // //     color: "#888",
// // // //   },

// // // //   dot: {
// // // //     width: 10,
// // // //     height: 10,
// // // //     borderRadius: 5,
// // // //     backgroundColor: "red",
// // // //   },

// // // //   emptyContainer: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 20,
// // // //   },

// // // //   emptyText: {
// // // //     fontSize: 15,
// // // //     color: "#777",
// // // //     textAlign: "center",
// // // //   },
// // // // });

// // // import { useEffect, useState } from "react";
// // // import {
// // //   FlatList,
// // //   StyleSheet,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // // } from "react-native";

// // // import { FontAwesome } from "@expo/vector-icons";

// // // import { useNotifications } from "../../../components/Notifications/NotificationContext";

// // // export default function Notifications() {
// // //   const { notifications, loadNotifications, markAsRead } = useNotifications();

// // //   const [filter, setFilter] = useState("all");

// // //   useEffect(() => {
// // //     loadNotifications();
// // //   }, []);

// // //   const filters = [
// // //     {
// // //       id: "all",
// // //       title: "سب",
// // //     },
// // //     {
// // //       id: "today",
// // //       title: "آج",
// // //     },
// // //     {
// // //       id: "yesterday",
// // //       title: "کل",
// // //     },
// // //     {
// // //       id: "7days",
// // //       title: "7 دن",
// // //     },
// // //     {
// // //       id: "30days",
// // //       title: "30 دن",
// // //     },
// // //   ];

// // //   const filteredNotifications = notifications.filter((item) => {
// // //     const now = new Date();

// // //     const created = new Date(item.created_at);

// // //     const diff = (now - created) / (1000 * 60 * 60 * 24);

// // //     if (filter === "today") {
// // //       return now.toDateString() === created.toDateString();
// // //     }

// // //     if (filter === "yesterday") {
// // //       const yesterday = new Date();

// // //       yesterday.setDate(now.getDate() - 1);

// // //       return yesterday.toDateString() === created.toDateString();
// // //     }

// // //     if (filter === "7days") {
// // //       return diff <= 7;
// // //     }

// // //     if (filter === "30days") {
// // //       return diff <= 30;
// // //     }

// // //     return true;
// // //   });

// // //   const formatDate = (date) => {
// // //     return new Date(date).toLocaleString("ur-PK", {
// // //       day: "numeric",
// // //       month: "long",
// // //       year: "numeric",
// // //       hour: "numeric",
// // //       minute: "numeric",
// // //     });
// // //   };

// // //   const renderItem = ({ item }) => (
// // //     <TouchableOpacity
// // //       activeOpacity={0.85}
// // //       onPress={() => markAsRead(item.id)}
// // //       style={[styles.card, !item.is_read && styles.unreadCard]}
// // //     >
// // //       <View style={styles.header}>
// // //         <View style={styles.iconBox}>
// // //           <FontAwesome name="bell" size={18} color="#6C472D" />
// // //         </View>

// // //         <View style={styles.titleBox}>
// // //           <Text style={styles.title}>{item.title}</Text>

// // //           {!item.is_read && (
// // //             <View style={styles.newBadge}>
// // //               <Text style={styles.newText}>نئی</Text>
// // //             </View>
// // //           )}
// // //         </View>
// // //       </View>

// // //       <Text style={styles.body}>{item.body}</Text>

// // //       <View style={styles.footer}>
// // //         <FontAwesome name="clock-o" size={12} color="#8a8a8a" />

// // //         <Text style={styles.date}>{formatDate(item.created_at)}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.top}>
// // //         <Text style={styles.heading}>اطلاعات</Text>

// // //         <View style={styles.filters}>
// // //           {filters.map((item) => (
// // //             <TouchableOpacity
// // //               key={item.id}
// // //               onPress={() => setFilter(item.id)}
// // //               style={[styles.filter, filter === item.id && styles.activeFilter]}
// // //             >
// // //               <Text
// // //                 style={[
// // //                   styles.filterText,
// // //                   filter === item.id && styles.activeFilterText,
// // //                 ]}
// // //               >
// // //                 {item.title}
// // //               </Text>
// // //             </TouchableOpacity>
// // //           ))}
// // //         </View>
// // //       </View>

// // //       {filteredNotifications.length === 0 ? (
// // //         <View style={styles.empty}>
// // //           <FontAwesome name="bell-slash" size={40} color="#6C472D" />

// // //           <Text style={styles.emptyText}>ابھی کوئی اطلاع موجود نہیں</Text>
// // //         </View>
// // //       ) : (
// // //         <FlatList
// // //           data={filteredNotifications}
// // //           keyExtractor={(item) => item.id.toString()}
// // //           renderItem={renderItem}
// // //           showsVerticalScrollIndicator={false}
// // //           contentContainerStyle={{
// // //             padding: 16,
// // //           }}
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#E4DAC1",
// // //   },

// // //   top: {
// // //     paddingTop: 15,
// // //     paddingHorizontal: 15,
// // //   },

// // //   heading: {
// // //     fontSize: 22,
// // //     color: "#6C472D",
// // //     fontFamily: "NotoNastaliqUrdu-Bold",
// // //     textAlign: "center",
// // //     marginBottom: 15,
// // //   },

// // //   filters: {
// // //     flexDirection: "row",
// // //     justifyContent: "center",
// // //     flexWrap: "wrap",
// // //   },

// // //   filter: {
// // //     backgroundColor: "#fff",
// // //     paddingHorizontal: 15,
// // //     paddingVertical: 7,
// // //     borderRadius: 25,
// // //     margin: 4,
// // //   },

// // //   activeFilter: {
// // //     backgroundColor: "#6C472D",
// // //   },

// // //   filterText: {
// // //     color: "#6C472D",
// // //     fontSize: 13,
// // //     fontFamily: "NotoNastaliqUrdu-Regular",
// // //   },

// // //   activeFilterText: {
// // //     color: "#fff",
// // //   },

// // //   card: {
// // //     backgroundColor: "#fff",
// // //     borderRadius: 18,
// // //     padding: 16,
// // //     marginBottom: 14,

// // //     shadowColor: "#000",
// // //     shadowOpacity: 0.08,
// // //     shadowRadius: 8,
// // //     shadowOffset: {
// // //       width: 0,
// // //       height: 3,
// // //     },

// // //     elevation: 3,
// // //   },

// // //   unreadCard: {
// // //     borderRightWidth: 4,
// // //     borderRightColor: "#6C472D",
// // //   },

// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },

// // //   iconBox: {
// // //     width: 38,
// // //     height: 38,
// // //     borderRadius: 19,
// // //     backgroundColor: "#E4DAC1",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },

// // //   titleBox: {
// // //     flex: 1,
// // //     marginLeft: 12,
// // //   },

// // //   title: {
// // //     fontSize: 16,
// // //     color: "#6C472D",
// // //     fontWeight: "bold",
// // //     fontFamily: "NotoNastaliqUrdu-Bold",
// // //   },

// // //   newBadge: {
// // //     marginTop: 5,
// // //     backgroundColor: "#6C472D",
// // //     alignSelf: "flex-start",
// // //     paddingHorizontal: 8,
// // //     borderRadius: 10,
// // //   },

// // //   newText: {
// // //     color: "#fff",
// // //     fontSize: 10,
// // //   },

// // //   body: {
// // //     marginTop: 14,
// // //     fontSize: 14,
// // //     lineHeight: 24,
// // //     color: "#444",
// // //     fontFamily: "NotoNastaliqUrdu-Regular",
// // //   },

// // //   footer: {
// // //     marginTop: 14,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },

// // //   date: {
// // //     marginLeft: 6,
// // //     fontSize: 11,
// // //     color: "#888",
// // //   },

// // //   empty: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },

// // //   emptyText: {
// // //     marginTop: 15,
// // //     color: "#6C472D",
// // //     fontSize: 15,
// // //     fontFamily: "NotoNastaliqUrdu-Regular",
// // //   },
// // // });

// // import { useEffect, useState } from "react";
// // import {
// //   FlatList,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";

// // import { FontAwesome } from "@expo/vector-icons";

// // import { useNotifications } from "../../../components/Notifications/NotificationContext";

// // export default function Notifications() {
// //   const { notifications, loadNotifications, markAsRead } = useNotifications();

// //   const [filter, setFilter] = useState("all");

// //   const [refreshing, setRefreshing] = useState(false);

// //   useEffect(() => {
// //     loadNotifications();
// //   }, []);

// //   const filters = [
// //     {
// //       id: "all",
// //       title: "سب",
// //     },
// //     {
// //       id: "today",
// //       title: "آج",
// //     },
// //     {
// //       id: "yesterday",
// //       title: "کل",
// //     },
// //     {
// //       id: "7days",
// //       title: "7 دن",
// //     },
// //     {
// //       id: "30days",
// //       title: "30 دن",
// //     },
// //   ];

// //   const filteredNotifications = notifications.filter((item) => {
// //     const now = new Date();

// //     const created = new Date(item.created_at);

// //     const diffDays = (now - created) / (1000 * 60 * 60 * 24);

// //     if (filter === "today") {
// //       return now.toDateString() === created.toDateString();
// //     }

// //     if (filter === "yesterday") {
// //       const yesterday = new Date();

// //       yesterday.setDate(now.getDate() - 1);

// //       return yesterday.toDateString() === created.toDateString();
// //     }

// //     if (filter === "7days") {
// //       return diffDays <= 7;
// //     }

// //     if (filter === "30days") {
// //       return diffDays <= 30;
// //     }

// //     return true;
// //   });

// //   const formatDate = (date) => {
// //     return new Date(date).toLocaleString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //       hour: "numeric",
// //       minute: "numeric",
// //     });
// //   };

// //   const onRefresh = async () => {
// //     setRefreshing(true);

// //     await loadNotifications();

// //     setRefreshing(false);
// //   };

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity
// //       activeOpacity={0.8}
// //       onPress={() => markAsRead(item.id)}
// //       style={[styles.card, !item.is_read && styles.unreadCard]}
// //     >
// //       <View style={styles.topRow}>
// //         <View style={styles.iconBox}>
// //           <FontAwesome name="bell" size={18} color="#6C472D" />
// //         </View>

// //         <View style={styles.content}>
// //           <Text style={styles.title}>{item.title}</Text>

// //           <Text style={styles.body}>{item.body}</Text>

// //           <Text style={styles.date}>{formatDate(item.created_at)}</Text>
// //         </View>

// //         {!item.is_read && <View style={styles.dot} />}
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.filters}>
// //         {filters.map((item) => (
// //           <TouchableOpacity
// //             key={item.id}
// //             onPress={() => setFilter(item.id)}
// //             style={[styles.filter, filter === item.id && styles.activeFilter]}
// //           >
// //             <Text
// //               style={[
// //                 styles.filterText,
// //                 filter === item.id && styles.activeFilterText,
// //               ]}
// //             >
// //               {item.title}
// //             </Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {filteredNotifications.length === 0 ? (
// //         <View style={styles.empty}>
// //           <FontAwesome name="bell-slash" size={35} color="#6C472D" />

// //           <Text style={styles.emptyText}>ابھی کوئی نوٹیفکیشن موجود نہیں</Text>
// //         </View>
// //       ) : (
// //         <FlatList
// //           data={filteredNotifications}
// //           keyExtractor={(item) => item.id.toString()}
// //           renderItem={renderItem}
// //           showsVerticalScrollIndicator={false}
// //           contentContainerStyle={{
// //             padding: 15,
// //           }}
// //           refreshing={refreshing}
// //           onRefresh={onRefresh}
// //         />
// //       )}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#E4DAC1",
// //   },

// //   filters: {
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     flexWrap: "wrap",
// //     paddingTop: 12,
// //   },

// //   filter: {
// //     backgroundColor: "rgba(255,255,255,0.5)",

// //     paddingHorizontal: 14,

// //     paddingVertical: 5,

// //     borderRadius: 10,

// //     margin: 4,
// //   },

// //   activeFilter: {
// //     backgroundColor: "#6C472D",
// //   },

// //   filterText: {
// //     color: "#6C472D",

// //     fontSize: 12,

// //     fontFamily: "NotoNastaliqUrdu-Regular",
// //   },

// //   activeFilterText: {
// //     color: "#fff",
// //   },

// //   card: {
// //     backgroundColor: "#fff",

// //     borderRadius: 14,

// //     padding: 14,

// //     marginBottom: 12,

// //     elevation: 2,
// //   },

// //   unreadCard: {
// //     borderRightWidth: 4,

// //     borderRightColor: "#6C472D",
// //   },

// //   topRow: {
// //     flexDirection: "row",

// //     alignItems: "flex-start",
// //   },

// //   iconBox: {
// //     width: 35,

// //     height: 35,

// //     borderRadius: 18,

// //     backgroundColor: "#E4DAC1",

// //     alignItems: "center",

// //     justifyContent: "center",
// //   },

// //   content: {
// //     flex: 1,

// //     marginLeft: 10,
// //   },

// //   title: {
// //     fontSize: 16,

// //     color: "#6C472D",

// //     fontWeight: "bold",

// //     fontFamily: "NotoNastaliqUrdu-Bold",

// //     textAlign: "right",
// //   },

// //   body: {
// //     marginTop: 6,

// //     fontSize: 14,

// //     lineHeight: 24,

// //     color: "#444",

// //     fontFamily: "NotoNastaliqUrdu-Regular",

// //     textAlign: "right",
// //   },

// //   date: {
// //     marginTop: 10,

// //     fontSize: 11,

// //     color: "#888",

// //     textAlign: "right",
// //   },

// //   dot: {
// //     width: 9,

// //     height: 9,

// //     borderRadius: 5,

// //     backgroundColor: "#6C472D",

// //     marginTop: 5,
// //   },

// //   empty: {
// //     flex: 1,

// //     justifyContent: "center",

// //     alignItems: "center",
// //   },

// //   emptyText: {
// //     marginTop: 12,

// //     color: "#6C472D",

// //     fontSize: 15,

// //     fontFamily: "NotoNastaliqUrdu-Regular",
// //   },
// // });

// import { useEffect, useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// import { FontAwesome } from "@expo/vector-icons";

// import { useNotifications } from "../../../components/Notifications/NotificationContext";

// export default function Notifications() {
//   const { notifications, loadNotifications, markAsRead } = useNotifications();

//   const [filter, setFilter] = useState("all");

//   const [refreshing, setRefreshing] = useState(false);

//   useEffect(() => {
//     loadNotifications();
//   }, []);

//   const filters = [
//     {
//       id: "all",
//       title: "سب",
//     },
//     {
//       id: "today",
//       title: "آج",
//     },
//     {
//       id: "yesterday",
//       title: "کل",
//     },
//     {
//       id: "7days",
//       title: "7 دن",
//     },
//     {
//       id: "30days",
//       title: "30 دن",
//     },
//   ];

//   const filteredNotifications = notifications.filter((item) => {
//     const now = new Date();

//     const created = new Date(item.created_at);

//     const diffDays = (now - created) / (1000 * 60 * 60 * 24);

//     if (filter === "today") {
//       return now.toDateString() === created.toDateString();
//     }

//     if (filter === "yesterday") {
//       const yesterday = new Date();

//       yesterday.setDate(now.getDate() - 1);

//       return yesterday.toDateString() === created.toDateString();
//     }

//     if (filter === "7days") {
//       return diffDays <= 7;
//     }

//     if (filter === "30days") {
//       return diffDays <= 30;
//     }

//     return true;
//   });

//   const formatDate = (date) => {
//     return new Date(date).toLocaleString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//     });
//   };

//   const onRefresh = async () => {
//     setRefreshing(true);

//     await loadNotifications();

//     setRefreshing(false);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={() => markAsRead(item.id)}
//       style={[styles.card, !item.is_read && styles.unreadCard]}
//     >
//       <View style={styles.topRow}>
//         <View style={styles.iconBox}>
//           <FontAwesome name="bell" size={18} color="#6C472D" />
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.title}>{item.title}</Text>

//           <Text style={styles.body}>{item.body}</Text>

//           <Text style={styles.date}>{formatDate(item.created_at)}</Text>
//         </View>

//         {!item.is_read && <View style={styles.dot} />}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.filters}>
//         {filters.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             onPress={() => setFilter(item.id)}
//             style={[styles.filter, filter === item.id && styles.activeFilter]}
//           >
//             <Text
//               style={[
//                 styles.filterText,
//                 filter === item.id && styles.activeFilterText,
//               ]}
//             >
//               {item.title}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {filteredNotifications.length === 0 ? (
//         <View style={styles.empty}>
//           <FontAwesome name="bell-slash" size={35} color="#6C472D" />

//           <Text style={styles.emptyText}>ابھی کوئی نوٹیفکیشن موجود نہیں</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={filteredNotifications}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             padding: 15,
//           }}
//           refreshing={refreshing}
//           onRefresh={onRefresh}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E4DAC1",
//   },

//   filters: {
//     flexDirection: "row",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     paddingTop: 12,
//   },

//   filter: {
//     backgroundColor: "rgba(255,255,255,0.5)",

//     paddingHorizontal: 14,

//     paddingVertical: 5,

//     borderRadius: 10,

//     margin: 4,
//   },

//   activeFilter: {
//     backgroundColor: "#6C472D",
//   },

//   filterText: {
//     color: "#6C472D",

//     fontSize: 12,

//     fontFamily: "NotoNastaliqUrdu-Regular",
//   },

//   activeFilterText: {
//     color: "#fff",
//   },

//   card: {
//     backgroundColor: "#fff",

//     borderRadius: 14,

//     padding: 14,

//     marginBottom: 12,

//     elevation: 2,
//   },

//   unreadCard: {
//     borderRightWidth: 4,

//     borderRightColor: "#6C472D",
//   },

//   topRow: {
//     flexDirection: "row",

//     alignItems: "flex-start",
//   },

//   iconBox: {
//     width: 35,

//     height: 35,

//     borderRadius: 18,

//     backgroundColor: "#E4DAC1",

//     alignItems: "center",

//     justifyContent: "center",
//   },

//   content: {
//     flex: 1,

//     marginLeft: 10,
//   },

//   title: {
//     fontSize: 16,

//     color: "#6C472D",

//     fontWeight: "bold",

//     fontFamily: "NotoNastaliqUrdu-Bold",

//     textAlign: "right",
//   },

//   body: {
//     marginTop: 6,

//     fontSize: 14,

//     lineHeight: 24,

//     color: "#444",

//     fontFamily: "NotoNastaliqUrdu-Regular",

//     textAlign: "right",
//   },

//   date: {
//     marginTop: 10,

//     fontSize: 11,

//     color: "#888",

//     textAlign: "right",
//   },

//   dot: {
//     width: 9,

//     height: 9,

//     borderRadius: 5,

//     backgroundColor: "#6C472D",

//     marginTop: 5,
//   },

//   empty: {
//     flex: 1,

//     justifyContent: "center",

//     alignItems: "center",
//   },

//   emptyText: {
//     marginTop: 12,

//     color: "#6C472D",

//     fontSize: 15,

//     fontFamily: "NotoNastaliqUrdu-Regular",
//   },
// });

import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { useNotifications } from "../../../components/Notifications/NotificationContext";

export default function Notifications() {
  const { notifications, loadNotifications, markAsRead } = useNotifications();

  const [filter, setFilter] = useState("today");

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadNotifications("today");
  }, []);

  const filters = [
    {
      id: "all",
      title: "سب",
    },

    {
      id: "30days",
      title: "30 دن",
    },
    {
      id: "7days",
      title: "7 دن",
    },
    {
      id: "yesterday",
      title: "کل",
    },
    {
      id: "today",
      title: "آج",
    },
  ];

  const changeFilter = async (value) => {
    setFilter(value);

    await loadNotifications(value);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await loadNotifications(filter);

    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => markAsRead(item.id)}
      style={[styles.card, !item.is_read && styles.unreadCard]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconBox}>
          <FontAwesome name="bell" size={18} color="#6C472D" />
        </View>

        <View style={styles.content}>
          {item.type && <Text style={styles.type}>{item.type}</Text>}

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.body}>{item.body}</Text>

          <Text style={styles.date}>{formatDate(item.created_at)}</Text>
        </View>

        {!item.is_read && <View style={styles.dot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        {filters.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => changeFilter(item.id)}
            style={[styles.filter, filter === item.id && styles.activeFilter]}
          >
            <Text
              style={[
                styles.filterText,

                filter === item.id && styles.activeFilterText,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {notifications.length === 0 ? (
        <View style={styles.empty}>
          <FontAwesome name="bell-slash" size={35} color="#6C472D" />

          <Text style={styles.emptyText}>ابھی کوئی نوٹیفکیشن موجود نہیں</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 15,
          }}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DAC1",
  },

  filters: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 12,
  },

  filter: {
    backgroundColor: "rgba(255,255,255,0.5)",

    paddingHorizontal: 14,

    paddingVertical: 5,

    borderRadius: 10,

    margin: 4,
  },

  activeFilter: {
    backgroundColor: "#6C472D",
  },

  filterText: {
    color: "#6C472D",

    fontSize: 12,

    fontFamily: "NotoNastaliqUrdu-Regular",
  },

  activeFilterText: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",

    borderRadius: 14,

    padding: 14,

    marginBottom: 12,

    elevation: 2,
  },

  unreadCard: {
    borderRightWidth: 4,

    borderRightColor: "#6C472D",
  },

  topRow: {
    flexDirection: "row",

    alignItems: "flex-start",
  },

  iconBox: {
    width: 35,

    height: 35,

    borderRadius: 18,

    backgroundColor: "#E4DAC1",

    alignItems: "center",

    justifyContent: "center",
  },

  content: {
    flex: 1,

    marginLeft: 10,
  },

  type: {
    fontSize: 11,

    color: "#999",

    textAlign: "right",

    marginBottom: 3,
  },

  title: {
    fontSize: 16,

    color: "#6C472D",

    fontWeight: "bold",

    fontFamily: "NotoNastaliqUrdu-Bold",

    textAlign: "right",
  },

  body: {
    marginTop: 6,

    fontSize: 14,

    lineHeight: 24,

    color: "#444",

    fontFamily: "NotoNastaliqUrdu-Regular",

    textAlign: "right",
  },

  date: {
    marginTop: 10,

    fontSize: 11,

    color: "#888",

    textAlign: "right",
  },

  dot: {
    width: 9,

    height: 9,

    borderRadius: 5,

    backgroundColor: "#6C472D",

    marginTop: 5,
  },

  empty: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  emptyText: {
    marginTop: 12,

    color: "#6C472D",

    fontSize: 15,

    fontFamily: "NotoNastaliqUrdu-Regular",
  },
});
