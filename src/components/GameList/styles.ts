import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  dateGame:{
    flexDirection: 'row-reverse',
    marginEnd: 15,
  },
  handleDates: {
    
  },
  textBtn: {
    color: '#f5f5f5',
    fontSize: 16,
    marginTop: 10
  },
  gameItem: {
    backgroundColor: '#373d45',
    padding: 16,
    marginBottom: 8,
    margin: 12,
    borderRadius: 5,

      // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  gameCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textGameStatus: {
    color: '#f5f5f5',
    textAlign: 'center'
  },
  nameTeam: {
    fontSize: 16,
    color: '#f5f5f5',
  },
  score: {
    fontSize: 25,
    color: '#f5f5f5',
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold' 
  },
  textVersus: {
    fontSize: 25,
    color: '#F88158',
    alignContent: 'center',
    fontWeight: 'bold'
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginBottom: 10
  }
}) 