import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName:{
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    textAlign: 'center'
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 20
  },
  listEmptyTextOne: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  listEmptyTextTwo: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center'
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%'
  },
  textResultsLeft: {
    fontSize: 12,
    color: '#4EA8DE'
  },
  textResultsRight: {
    fontSize: 12,
    color: '#8284FA'
  },
  listEmpty:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%'
  }
});