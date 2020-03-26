import React, { useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button, Segment, Icon, Left, Right, Body, Container, Content, Input, Item, Picker, DeckSwiper, Card, CardItem, Image, Thumbnail} from 'native-base';

const Screen2 = (props) => {
  const [selected, setSelected] = useState();
  const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../images/swiper-1.jpg'),
    },
    {
      text: 'Card Two',
      name: 'Two',
      image: require('../images/swiper-2.jpg'),
    },
    {
      text: 'Card Three',
      name: 'Three',
      image: require('../images/swiper-3.jpg'),
    },
  ]

  const onValueChange = (value) => {
    setSelected(value)
}
    return(
        <Container>
          <Content>
            <Text style={styles.title}>Tell us about your Child</Text>
            <View style={{...styles.pickerContainer, maxWidth: '70%'}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{fontSize:23, textAlign:'center'}}>My child, {" "}
              <View style={styles.blanksContainer}>
                <Item style={styles.inputBox} regular>
                  <Input style={{...styles.bold, fontSize:17}}/>
                </Item>
              </View> 
                {" "}  is  {" "}
               currently studying in {" "} 
               <View style={styles.blanksContainer}>
                <Item style={styles.inputBox} regular>
                  <Input style={{...styles.bold, fontSize:17}}/>
                </Item>
              </View>  {" "}
              and aspires to be {" "}
              <View style={styles.blanksContainer}>
                <Item style={styles.inputBox} regular>
                  <Input style={{...styles.bold, fontSize:17}}/>
                </Item>
              </View> {" "}
              in {" "}
              </Text>
              </View>
            </View>
              <View style={styles.pickerContainer}>
                  <View style={styles.picker}>
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        selectedValue={selected}
                        onValueChange={onValueChange.bind(this)}
                      >
                      <Picker.Item label="US" value={"US"} />
                      <Picker.Item label="CAN" value={"CAN"} />
                      <Picker.Item label="UK" value={"UK"} />
                      <Picker.Item label="AUS" value={"AUS"} />
                      <Picker.Item label="NZ" value={"NZ"} />
                    </Picker>
                  </View>
                </View>
                
                {/* <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          /> */}
            <Button style={styles.button} onPress={()=>{
                    props.navigation.navigate('Screen3')
                }} dark><Text style={styles.buttonText}>CONTINUE</Text></Button>
          </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    bold: {
      fontWeight: 'bold'
    },
    title: {
      textAlign:'center',
      fontWeight: 'bold' , 
      fontSize: 20, 
      marginVertical: 35
    },
    blanksContainer: {
      height: 20,
      width: 100,
      justifyContent:'center', 
      margin: 20, 
    },
    blanks:{

    },
    inputBox: {
      alignSelf:'center',
      borderRadius: 5,
      height: 25,
      backgroundColor: '#F0F0F0',
      borderWidth: 0,
      width: 100
  },
  pickerContainer: {
    flex: 1, 
    flexDirection:'row', 
    alignSelf:'center'
  },
  picker: {
    width: '29%', 
    backgroundColor:'#F0F0F0',
    borderRadius: 5, 
    height: 42, 
    justifyContent:'center',
    marginTop: 15
  },
  button: {
    width: '75%',
    alignSelf:'center',
    justifyContent:'center', 
    borderRadius: 5,
    marginVertical: 30
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Screen2;