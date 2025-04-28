import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

import { styles } from "./styles";

const API_URL = "https://api.balldontlie.io/v1/games?dates[]";
const API_TOKEN = 'cad22ae7-0524-4ca9-89da-9a2bb998ecc2';

export default function GameList(){
    const [games, setGames] = useState([]);
    const [dateGame, setDateGame] = useState(() => { // Toda essa arrow function é somente para pegar o dia atual como default
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}=${dateGame}`, {
                  headers: {
                    'Authorization': `${API_TOKEN}`, // Inclui o token no header
                  },
                });
                setGames(response.data.data);
              } catch (err) {
                console.error('Erro na requisição:', err);
              } finally {
                setLoading(false);
              }
        };

        fetchGames();
    }, [dateGame]); // Executa novamente sempre que a data for alterada

    const handleYesterday = () => {
      const currentDate = new Date(dateGame);
      currentDate.setDate(currentDate.getDate() - 1);
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      setDateGame(`${year}-${month}-${day}`);
    };

    const handleToday = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      setDateGame(`${year}-${month}-${day}`);
    };
  
    const handleTomorrow = () => {
      const currentDate = new Date(dateGame);
      currentDate.setDate(currentDate.getDate() + 1);
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate() + 1).padStart(2, '0');
      setDateGame(`${year}-${month}-${day}`);
    };

    const renderItem = ({ item }: {item: any}) => (
        <View style={styles.gameItem}>
          <View style={styles.gameCard}>
            <View>
              <Text style={styles.nameTeam}>{item.home_team.name}</Text>
              <Text style={styles.score}>{item.home_team_score}</Text>
            </View>
            <Text style={styles.textVersus}>  VS  </Text>
            <View>
              <Text style={styles.nameTeam}>{item.visitor_team.name}</Text>
              <Text style={styles.score}>{item.visitor_team_score}</Text>
            </View>
          </View>
          <Text style={styles.textGame}>Status: {item.status}</Text>
        </View>
    );

    if (loading) {
        return <Text>Carregando os jogos...</Text>;
    }

    return (
      <View style={styles.container}>
          <View style={styles.dateNavigation}>
              <TouchableOpacity onPress={handleYesterday} style={styles.handleDates}>
                  <Text style={styles.textBtn}>Yesterday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleToday} style={styles.handleDates}>
                  <Text style={styles.textBtn}>Today</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleTomorrow} style={styles.handleDates}>
                  <Text style={styles.textBtn}>Upcoming</Text>
              </TouchableOpacity>
          </View>
          <FlatList 
              data={games}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
          />
      </View>
    )
}