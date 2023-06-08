import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Filmes from "../../components/atoms/Filmes/Filmes";
import guibli from "../../../assets/totoro.png";

export const Index = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://studio-ghibli-films-api.herokuapp.com/api"
      );

      setDados(Object.values(res.data));
    }
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
        
        {
            //                      //
            //NAO TIRAR O MEU WIDTH //
            // SE TIRAR JA SABE NE? //
            //    👊🤛🤜😡😵👙   //
            //                      //
        }
      
      <View style={{display: "flex", width: "100%", alignItems: "center"}}>
        <Image source={guibli} style={styles.logo} />
      </View>
      {dados.map((dado, index) => (
        <Filmes
          key={index}
          title={dado.title}
          genre={dado.genre}
          director={dado.director}
          release={dado.release}
          poster={dado.poster}
          synopsis={dado.synopsis}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71ADDC",
    paddingTop: 50,
  },
  logo: {
    height: 160,
    width: 180,
  },
});

export default Index;
