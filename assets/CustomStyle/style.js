// defaultStyles.js

import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
  // General style for body
  body: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    textAlign: "justify",
    marginBottom: 10,
  },

  h1: {
    fontFamily: "Arial",
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },

  h2: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },

  h3: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },

  p: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 10,
  },

  ul: {
    marginBottom: 12,
  },

  ol: {
    marginBottom: 12,
  },

  li: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 6,
    marginLeft: 20,
  },

  strong: {
    fontWeight: "bold",
  },

  em: {
    fontStyle: "italic",
  },

  img: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },

  blockquote: {
    fontFamily: "Arial",
    fontStyle: "italic",
    color: "#888",
    marginBottom: 12,
    marginLeft: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#6C472D",
    paddingLeft: 10,
  },

  a: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },

  pre: {
    fontFamily: "Courier New",
    fontSize: 14,
    backgroundColor: "#f4f4f4",
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
    lineHeight: 20,
  },
});

export default defaultStyles;
