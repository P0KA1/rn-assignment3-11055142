import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/Exercise.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/study.jpg') },
  { id: '3', name: 'Code', tasks: 5, image: require('./assets/code.jpg') },
  { id: '4', name: 'Cook', tasks: 6, image: require('./assets/cook.jpg') },
  { id: '5', name: 'Read', tasks: 5, image: require('./assets/read.jpg') },
  { id: '6', name: 'Write', tasks: 3, image: require('./assets/write.jpeg') },
  { id: '7', name: 'Travel', tasks: 8, image: require('./assets/travel.jpeg') },
  { id: '8', name: 'Clean', tasks:18, image: require('./assets/clean.jpeg') },
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'Complete UX Design Draft' },
  { id: '5', name: 'Backend Integration' },
  { id: '6', name: 'Frontend Development' },
  { id: '7', name: 'Code Review' },
  { id: '8', name: 'Prepare Healthy Meal' },
  { id: '9', name: 'Update Project Documentation' },
  { id: '10', name: 'Deployment' },
  { id: '11', name: 'API Development' },
  { id: '12', name: 'Security Assessment' },
  { id: '13', name: 'Performance Optimization' },
  { id: '14', name: 'Organize Workspace' },
  { id: '15', name: 'JavaScript Learning Module' },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs<br/><Text style={styles.taskCount}>14 tasks today</Text></Text>
        <Image style={styles.profileIcon} source={require('/assets/profile.png')} />
      </View>
      <View style={styles.searchContainer}> <Image
    style={styles.searchIcon}
    source={require('./assets/search.png')}
  />
        <TextInput style={styles.searchInput} placeholder="Search" />
       <View style={styles.sliderContainer}>
        <Image style={styles.sliderIcon} source={require('./assets/slider.png')} />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
  <FlatList
    data={categories}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <View style={styles.categoryCard}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
      </View>
    )}
  />
</View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#777',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 100,
    backgroundColor:'white'

  },

  sliderIcon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: { marginRight:50,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#777',
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 80,
    marginBottom: 10,
    alignItems: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  taskName: {
    fontSize: 16,
  },
  sliderContainer: {
    alignItems: 'center',
    backgroundColor: '#f0522f',
    borderRadius:'20%',
    padding:'0.5%',
  },
});
export default App
