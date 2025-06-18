// src/style/styleDetails.js
import { Dimensions, Platform, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

///////////////////////////////////static pages Styles start/////////////////////////////
export const mainStyles = StyleSheet.create({
  heading: {
    fontSize: 28,
    paddingRight: 6,
    lineHeight: 45,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  subheading:{
  fontSize: 24,
    paddingRight: 6,
    lineHeight: 32,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    paddingRight: 4,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  tashkhesHeading: {
    fontSize: 28,
    paddingTop: 4,
    paddingRight: 6,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  tashkhesDescription: {
    fontSize: 20,
    paddingRight: 4,
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
    paddingVertical: 16,
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
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 300,
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
  span: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h1: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  h2: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight: 40,
    textAlign: "right",
    writingDirection: "rtl",
  },
  h3: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    // lineHeight: 40,
    marginTop: 6,
    textAlign: "right",
    writingDirection: "rtl",
  },
  h4: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
    margin: 0,
    direction: "rtl",
    marginTop: 6,
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
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
  s: {
    textDecorationLine: "line-through",
    color: "#6C472D",
    fontSize: 20,
    lineHeight: 30,
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
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Jameel-Noori-Regular",
    color: "red",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
//// ///////////////////////////////////blog-detail-pages style end ////////////////////
///////////////////////////////rohani dokan or kutb style start/////////////////////////////////
const CARD_MARGIN = 15;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;
export const rohaniDokan = StyleSheet.create({
   container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.1,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 14,
    marginRight: CARD_MARGIN,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});

//////////////////////rohani dokan or kutb style end////////////////////////////////
///////////////////////////////////form style start/////////////////////////////////
const isWeb = Platform.OS === "web";
export const formStyles = StyleSheet.create({
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
    padding:1,
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
    padding: 15,
    height: "100%",
    justifyContent: "center",
  },
});
export const links = StyleSheet.create({
  mainRow: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
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
export const youtube = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "80%",
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
    color: "rgb(228, 218, 193)",
    fontSize: 18,
    fontFamily: "Jameel-Noori-Regular",
  },
});
/////////////////////////////////component style end /////////////////////////////////
