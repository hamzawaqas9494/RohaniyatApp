import { Platform, StyleSheet } from "react-native";
///////////////////////////////////static pages Styles start/////////////////////////////
export const mainStyles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 15,
},
  heading: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    includeFontPadding: false,
  },
  subheading: {
    fontSize: 24,
    lineHeight: 32,
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
  includeFontPadding: false,
},

// working after client disscusion
  tashkhesHeading: {
    fontSize: 28,
    paddingTop: 5,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  tashkhesDescription: {
    fontSize: 20,
    paddingTop: 4,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },

// working after client disscusion

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
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
  },

carditems: {
  width: "100%",
  backgroundColor: "#E4DAC1",
  paddingVertical: 8,
  marginTop: 8,
  marginBottom: 8,
  borderRadius: 5,
  alignItems: "center",
},

carditemstext: {
  fontSize: 20,
  fontFamily: "Jameel-Noori-Regular",
  color: "#6C472D",
  textAlign: "center",

},
  noRecordText: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
////////////////////////////////////// static pages Styles  end ////////////////////////////////////
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
    fontFamily: "Jameel-Noori-Regular",
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
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    whiteSpace: "pre-wrap",   
  },
  h1: {
    margin: 0,
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h2: {
    margin: 0,
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h3: {
    margin: 0,
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h4: {
    margin: 0,
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h5: {
    margin: 0,
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl", 
  },
  h6: {
    margin: 0,
    fontSize: 16,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    margin: 0,
    direction: "rtl",
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
   lineHeight: Platform.OS === "web" ? 36 : 42,
  },
ol: {
  margin: 0,
  direction: "rtl",
  fontFamily: "Jameel-Noori-Regular",
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


//   em:{
// color:"red",
//  fontSize: 20,
//     // color: "#000",
//     transform: [{ skewX: "-12deg" }], // main italic effect
//   },



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
