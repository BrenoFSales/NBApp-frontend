import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, ScrollView } from "react-native";
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
      const [year, month, day] = dateGame.split('-').map(Number);
      const currentDate = new Date(year, month - 1, day); // isso usa o fuso local por isso é diferente
    
      currentDate.setDate(currentDate.getDate() - 1);
      const newYear = currentDate.getFullYear();
      const newMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
      const newDay = String(currentDate.getDate()).padStart(2, '0');
    
      setDateGame(`${newYear}-${newMonth}-${newDay}`);
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

    const formatStatus = (status: string) => {
      // Tenta interpretar como uma data
      const date = new Date(status);
      if (!isNaN(date.getTime())) {
        // É uma data válida, formata para mostrar só a hora
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      } else {
        // Não é uma data, retorna o texto normal
        return status;
      }
    };

    const renderItem = ({ item }: {item: any}) => (
        <View style={styles.gameItem}>
          <View style={styles.gameCard}>
            <View>
              <Image source={{ uri: `http://192.168.100.98:8080/team-logo/${item.home_team.id}` }} style={styles.teamLogo} />
              <Text style={styles.nameTeam}>{item.home_team.name}</Text>
              <Text style={styles.score}>{item.home_team_score}</Text>
            </View>
            <Text style={styles.textVersus}>  VS  </Text>
            <View>
            <Image source={{ uri: `http://192.168.100.98:8080/team-logo/${item.visitor_team.id}` }} style={styles.teamLogo} />
              <Text style={styles.nameTeam}>{item.visitor_team.name}</Text>
              <Text style={styles.score}>{item.visitor_team_score}</Text>
            </View>
          </View>
          <Text style={styles.textGameStatus}>Status: {formatStatus(item.status)}</Text>
        </View>
    );

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#F88158" />
          <Text style={styles.textBtn} >Loading game scores...</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
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
          <View style={styles.dateGame}>
            <Text style={styles.textGameStatus}>{dateGame}</Text>
          </View>
          <FlatList 
              data={games}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
          />
      </ScrollView>
    )
}