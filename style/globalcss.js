
import { Dimensions, Platform, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

///////////////////////////////////static pages Styles start/////////////////////////////
export const mainStyles = StyleSheet.create({


  container: {
    // flex:1,
    padding: 15,
    // height: "100%",
    justifyContent: "center",
  },



  heading: {
    fontSize: 28,
    // paddingRight: 6,
    lineHeight: 45,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    overflow: "visible", 
    
    
  },
  subheading: {
    fontSize: 24,
    // paddingRight: 6,
    lineHeight: 32,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    // paddingRight: 4,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  tashkhesHeading: {
    fontSize: 28,
    paddingTop: 5,
    // paddingRight: 6,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  tashkhesDescription: {
    fontSize: 20,
    // paddingRight: 4,
    paddingTop: 4,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  image_section: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 240,
  },
  column: {
    flex: 1,
    paddingRight: 10,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingRight: 10,
  },
  item: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 30,
    paddingVertical: 6,
  },
});
////////////////////////////////////// static pages Styles  end ////////////////////////////////////
////////////////////////////////////// fehrist pages style start ////////////////////////////////////
export const fehristStyles = StyleSheet.create({
imageContainer: {
  flex: 1,
},

imageListCenter: {
  flexGrow: 1,
    padding: 15,
},


imageCard: {
  width: "100%",         
  aspectRatio: 1,      
  // height: undefined, 
  // height:"100%",
  resizeMode: "contain",
  borderRadius: 5, 
},
  container: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    writingDirection: "rtl",
    textAlign: "right",
    alignItems: "center",
  },
  fehristcenter: {
    flexGrow: 1,
    justifyContent: "center",
    padding:15,

  },
  card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  fehristText: {
    paddingTop:2,
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
  noRecordText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
    width:"100%"
  },
image: {
   marginTop: 10,
  width: "100%",  
  height: 200,
  resizeMode: "contain",
},


  deatilContentWrapper: {
    textAlign: "right",
    direction: "right",
    marginTop: 10,
    writingDirection: "rtl",
  },
  text: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
  tashkhesText: {
    fontSize: 22,
    paddingTop: 2,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
////////////////////////////////////// fehrist pages style end ////////////////////////////////////
// //////////////////////////////////// blog-detail-pages style start /////////////////////////////
export const htmlStyles = StyleSheet.create({
  body: {
    color: "#6C472D",
    textAlign: "right",
    fontSize: 20,
    writingDirection: "rtl",
  },
  htmlBaseStyle: {
    whiteSpace: "pre-wrap",
    writingDirection: "rtl",
    textAlign: "right",
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
  },
  p: {
    margin: 0,
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 30,
    whiteSpace: "pre-wrap",
     
  },

dfn: {
  // margin: 0,
  // fontSize: 20,
  // fontFamily: "Jameel-Noori-Regular",
  // color: "#6C472D",
  // writingDirection: "rtl",
  // lineHeight: 30,
  whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center", // ✅ vertical center (if block)
  alignItems: "center", // ✅ horizontal center
},

kbd: {
  // margin: 0,
  // fontSize: 20,
  // fontFamily: "Jameel-Noori-Regular",
  // color: "#6C472D",
  // writingDirection: "rtl",
  // lineHeight: 30,
  whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center", // ✅ vertically center
  alignItems: "flex-end", // ✅ right side (RTL style)
},

samp: {
  // fontSize: 20,
  // fontFamily: "Jameel-Noori-Regular",
  // color: "#6C472D",
  // writingDirection: "rtl",
    whiteSpace: "pre-wrap",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start", // ✅ left align element position
},

  h1: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
      overflow: "visible", 
  },
  h2: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h3: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h4: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h5: {
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl", 
    ...(Platform.OS === "web" && {
     fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight:0,
    textAlign: "right",
    writingDirection: "rtl",
    }),
  },
  h6: {
    fontSize: 16,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    ...(Platform.OS === "web" && {
     fontSize: 16,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight:0,
    textAlign: "right",
    writingDirection: "rtl",
    }),
  },
  ul: {
    margin: 0,
    direction: "rtl",
    // marginTop: 6,
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 30,
  },
  ol: {
    margin: 0,
    direction: "rtl",
    fontFamily: "Jameel-Noori-Regular",
    color: "red",
    textAlign: "right",
    writingDirection: "rtl",
    lineHeight: 30,
  },
  li: {
    paddingRight: 10,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    direction: "ltr",
    textAlign: "start",
    writingDirection: "rtl",
  },
  u: {
    textDecorationLine: "underline",
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  hr: {
    borderBottomColor: "#6C472D",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  br: {
    marginBottom: 10,
    padding: 40,
  },
  strong: {
    // fontSize: 20,
    color: "red",
    lineHeight: undefined,
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "ScheherazadeNew-Bold",
  },
  mark: {
    backgroundColor: "yellow",
    color: "#6C472D",
    borderRadius: 2,
    paddingHorizontal: 2,
    // fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    lineHeight: 30,
  },
   em: {
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: 'Jameel-Noori-Italic',
  },
});
//// ///////////////////////////////////blog-detail-pages style end ////////////////////
///////////////////////////////rohani dokan or kutb style start/////////////////////////////////
const CARD_MARGIN = 5;
export const rohaniDokan = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  
card: {
  flex: 1,
  margin: CARD_MARGIN,
  borderRadius: 5,
  backgroundColor: "#fff",
  padding: 5,
  alignItems: "center",
  justifyContent: "flex-start",
  overflow: "hidden",
  width: "100%"- CARD_MARGIN,
},

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    objectFit: "cover",
  },
});

//////////////////////rohani dokan or kutb style end////////////////////////////////
///////////////////////////////////form style start/////////////////////////////////
export const formStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    overflow: "scroll",
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
    ...(Platform.OS === "web" && {
      borderWidth: 1,
      borderColor: "transparent",
      outlineStyle: "none",
    }),
  },
  datePickers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerInput: {
    color: "#6C472D",
    padding: 1,
    flex: 1,
    marginHorizontal: 2,
    flex: 1,
    backgroundColor: "#fff",
    ...(Platform.OS === "web" && {
      paddingVertical: 14,
      borderWidth: 1,
      borderColor: "transparent",
      outlineStyle: "none",
    }),
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
///////////////////////////////////////////form style end///////////////////////////////////////
/////////////////////////////////component style start /////////////////////////////////
export const backGround = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  container: {
    // padding: 15,
    height: "100%",
    justifyContent: "center",
  },
});
export const links = StyleSheet.create({
  mainRow: {
    // paddingLeft: 20,
    // paddingRight: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
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
