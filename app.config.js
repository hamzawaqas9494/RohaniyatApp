export default {
  expo: {
    name: "IdaraRohaniyat",
    slug: "rohaniyatversion",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo.png",
    scheme: "idararohaniyat",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/defultsplash.png",
      backgroundColor: "#E4DAC1"
    },
    ios: {
      bundleIdentifier: "com.creationnext.idararohaniyat",
      supportsTablet: true,
      icon: "./assets/images/app-icon.png"
    },
    android: {
      package: "com.creationnext.idararohaniyat",
      versionCode: 1,
      permissions: ["INTERNET", "ACCESS_FINE_LOCATION", "CAMERA"],
      icon: "./assets/images/app-icon.png",
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo.png",
        backgroundColor: "#FFFFFF"
      },
      googleServicesFile: "./android/app/google-services.json" // ✅ Add this line
    },
    web: {
      favicon: "./assets/images/main-logo.png",
      name: "Idara Rohaniyat",
      themeColor: "#E4DAC1",
      backgroundColor: "#E4DAC1",
      display: "standalone"
    },
    notification: {
      vapidPublicKey:
        "BOGdlk9eupdizH0Jl4sARJBlhe_YtFv9qEZnfCrT0YnVyxZ-kiAXloQ9XVMRUlsEDlpe08Jlq8qgqNyyv4Ztrt4",
      serviceWorkerPath: "firebase-messaging-sw.js"
    },
    extra: {
      eas: {
        projectId: "bdd14ab6-f4c0-4dde-82de-02d84a53403e"
      }
    },
    owner: "idararohaniyat"
  }
};
