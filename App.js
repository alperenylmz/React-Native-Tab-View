import * as React from 'react';
import { Image, View, useWindowDimensions, ScrollView, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const DATA1 = [
  {
    id: '0',
    title: "First Item",
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'matematik'
  },
  {
    id: '1',
    title: "Second Item",
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'fizik'
  },
  {
    id: '2',
    title: "Third Item",
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'tarih'
  }
];

const DATA2 = [
  {
    id: '3',
    title: '4th Item',
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'kimya'
  },
  {
    id: '4',
    title: '5th Item',
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'biyoloji'
  },
  {
    id: '5',
    title: '6th Item',
    image: require('./assets/Boy-Emoji-Avatar-PNG.png'),
    lesson: 'cografya'
  }
];

const Item = ({title, image, lesson})=> (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.avatar}/>
    </View>
    <Text style={styles.textStyle}>{title}</Text>
    <Text style={styles.textStyle}>{lesson}</Text>
  </View>
);

const itemSeperator = () => {
  return <View style={styles.seperator} />
}

const FirstRoute = () => (
  <SafeAreaView style={{flex:1}}>
    <FlatList
      data={DATA1}
      renderItem={({item})=><Item title={item.title} image={item.image} lesson={item.lesson}/>}
      ItemSeparatorComponent = {itemSeperator}
      keyExtractor={item=>item.id}
    />
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView style={{flex:1}}>
    <FlatList
      data={DATA2}
      renderItem={({item})=> <Item title={item.title} image={item.image} lesson={item.lesson}/>}
      ItemSeparatorComponent={itemSeperator}
      keyExtractor={item=>item.id}
    />
  </SafeAreaView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles=StyleSheet.create({
  textStyle: {
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 70
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13
  },
  imageContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height:89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: 55,
    width: 55
  },
  seperator: {
    height:1,
    width: '100%',
    backgroundColor: '#CCC'
  }
})