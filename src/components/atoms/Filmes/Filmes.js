import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

export const Filmes = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            
            <Text style={styles.director}>{props.director}</Text>
            <Text style={styles.release}>{props.release}</Text>

            <Image style={styles.poster} source={{ uri: props.poster }}/>
            <Text style={styles.genre}>{props.genre}</Text>
            <Text style={styles.synopsis}>{props.synopsis}</Text>
        </View>
    )
}

export default Filmes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3dcf0',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title:{
    color: "#0b1e2d",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 2
  },
  director:{
    color: "#0b1e2d",
    fontWeight: "200",
    fontSize: 15,
    marginBottom: 2
  },
  release:{
    color: "#0b1e2d",
    fontSize: 10,
    marginBottom: 5
  },
  poster:{
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  genre:{
    color: "#0b1e2d",
    fontSize: 10,
    marginBottom: 5
  },
  synopsis: {
    color: "#0b1e2d",
    fontSize: 15
  }
})