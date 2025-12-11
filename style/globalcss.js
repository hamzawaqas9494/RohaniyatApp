import { Platform, StyleSheet } from "react-native";
///////////////////////////////////static pages Styles start/////////////////////////////
export const mainStyles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 15,
},
  heading: {
    fontSize: 22,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    includeFontPadding: false,
  },
  subheading: {
    fontSize: 18,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
description: {
   fontSize: 16,
   color: "#6C472D",
   fontFamily: "NotoNastaliqUrdu-Regular",
  textAlign: "right",    
  includeFontPadding: false,
},

 sirparastimagesection: {
    alignItems: "center",
  },
  sirparastimage: {
    width: 200,
    height: 240,
  },
   rohaniishayacolumn: {
    flex: 1,
  },
   rohaniishayaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rohaniishayaitem: {
    fontSize: 14,
    color: "#6C472D",
    fontFamily: "NotoNastaliqUrdu-Regular",
    textAlign: "right",
  },

carditems: {
  width: "100%",
  backgroundColor: "#E4DAC1",
  paddingVertical: 5,
  marginTop: 5,
  marginBottom: 5,
  borderRadius: 5,
  // justifyContent: "center",  
  // alignItems: "center",
    flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // flexWrap: "wrap",
  height:60
},

carditemstext: {
  fontFamily: "NotoNastaliqUrdu-Regular",
  color: "#6C472D",
  // textAlign: "center",
  // flexWrap: "wrap",
  paddingBottom: Platform.OS === "web" ? 5 : 0,
  lineHeight:50,
    // includeFontPadding: false,
},

  noRecordText: {
    fontSize: 16,
    fontWeight: "600",
   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
//////////////////////////////////static pages Styles  end ////////////////////////////////////
/////////////////////////////////component style start /////////////////////////////////
export const backGround = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
    justifyContent: "center",
  },
});
export const links = StyleSheet.create({
  mainRow: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  userSection: {
    alignItems: "center",
  },
  userText: {
    color: "#6C472D",
    fontSize: 10,
    fontWeight: "bold",
  },
  centerContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#6C472D",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  socialMedia: {
    width: 25,
    height: 25,
    margin: 3,
  },
  iconSpacing: {
    marginTop: 2,
  },
  logo: {
    width: "100%",
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
export const shareApp = StyleSheet.create({
  container: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 20,
    alignItems: "center",
  },
  dotButton: {
    zIndex: 10,
    backgroundColor: "#E4DAC1",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    cursor: Platform.OS === "web" ? "pointer" : "default",
  },
  dropdown: {
    position: "absolute",
    top: 55,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    transformOrigin: "top",
    backgroundColor: "transparent",
  },
  iconButton: {
    backgroundColor: "#E4DAC1",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    cursor: Platform.OS === "web" ? "pointer" : "default",
  },
});
export const splash = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DAC1",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainLogo: {
    width: 200,
    height: 200,
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
  },
  brandLogo: {
    width: 150,
    height: 80,
  },
});
export const customButton = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "rgb(108, 71, 45)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
  },
});
/////////////////////////////////component style end /////////////////////////////////
// //////////////////////////////////// blog-detail-pages style start /////////////////////////////
export const htmlStyles = StyleSheet.create({
  htmlBaseStyle: {
    whiteSpace: "pre-wrap",
    writingDirection: "rtl",
    textAlign: "right",

   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
  },
  ContentWrapper: {
    writingDirection: "rtl",
  },
  itemimage: {
  marginTop: 10,
  width: "100%",  
  height: 200,
  resizeMode: "contain",
},

// taypography start
  p: {
    margin: 0,
    fontSize: 16,
  
   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    whiteSpace: "pre-wrap",   
  },
  h1: {
    margin: 0,
    fontSize: 22,
    
   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h2: {
    margin: 0,
    fontSize: 18,
   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h3: {
    margin: 0,
    fontSize: 16,
   fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h4: {
    margin: 0,
    fontSize: 14,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h5: {
    margin: 0,
    fontSize: 12,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl", 
  },
  h6: {
    margin: 0,
    fontSize: 10,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    margin: 0,
    direction: "rtl",
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
   lineHeight: Platform.OS === "web" ? 36 : 42,
  },
ol: {
  margin: 0,
  direction: "rtl",
  fontFamily: "NotoNastaliqUrdu-Regular",
  color: "red",
  textAlign: "right",
  writingDirection: "rtl",
  lineHeight: Platform.OS === "web" ? 36 : 42,
},
  li: {
    paddingRight: 10,
    direction: "ltr",
    lineHeight:undefined
  },
  u: {
    textDecorationLine: "underline",
  },
   mark: {
    backgroundColor: "yellow",
    color: Platform.OS === "web" ? "#6C472D" : undefined,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
 strong: {
  ...(Platform.OS !== "web" && {
    textShadowColor: "#6C472D",
    textShadowOffset: { width: 0.6, height: 0 },
    textShadowRadius: 0.1,
  }),
},
// taypography end
// custom tag style start
 var: {
    color: "red",
    fontFamily: "ScheherazadeNew-Bold",
    fontStyle:"normal"
  },
dfn: {
  whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
},

kbd: {
  whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center", 
  alignItems: "flex-end", 
},

samp: {
  whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center",
  alignItems: Platform.OS === "web" ? "flex-end" : "flex-start",
},
});
// custom tag style end
//// ///////////////////////////////////blog-detail-pages style end ////////////////////
