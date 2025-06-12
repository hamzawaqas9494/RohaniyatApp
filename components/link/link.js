import {
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { links } from "../../style/globalcss";
const openLink = (url) => {
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open URL:", err)
  );
};
const Links = () => {
  return (
    <View style={links.mainRow}>
      {/* For Ladies */}
      <View style={links.userSection}>
        <Text style={links.userText}>For Ladies</Text>
        <TouchableOpacity
          onPress={() => openLink("https://wa.me/923008430971")}
        >
          <FontAwesome
            name="whatsapp"
            size={40}
            color="#25D366"
            style={links.iconSpacing}
          />
        </TouchableOpacity>
      </View>

      {/* Center */}
      <View style={links.centerContainer}>
        <Image
          source={require("../../assets/images/Idararohaniyat.png")}
          style={links.logo}
        />
        <View style={links.iconContainer}>
          <TouchableOpacity
            onPress={() => openLink("https://www.facebook.com/IdaraRohaniayt")}
          >
            <Image
              source={require("../../assets/images/facebook.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://taweez.idararohaniyat.com")}
          >
            <Image
              source={require("../../assets/images/Google.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.youtube.com/@IdaraRohaniyat")}
          >
            <Image
              source={require("../../assets/images/youtube.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.tiktok.com/@idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/Tiktok.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.instagram.com/idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/instagram.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://www.pinterest.com/idararohaniyat")}
          >
            <Image
              source={require("../../assets/images/pinterest.png")}
              style={links.socialMedia}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* For Gents */}
      <View style={links.userSection}>
        <Text style={links.userText}>For Gents</Text>
        <TouchableOpacity onPress={() => openLink("https://wa.me/923008440979")}>
          <FontAwesome
            name="whatsapp"
            size={40}
            color="#25D366"
            style={links.iconSpacing}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Links;
