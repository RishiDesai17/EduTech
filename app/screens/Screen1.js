import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Button ,Content, Input, Item, Form, Radio, ListItem, Picker, Icon, Left, Right } from 'native-base';

const Screen1 = (props) => {
    const [selected, setSelected] = useState();
    const [radio,setRadio] = useState("Yes");
    const onValueChange = (value) => {
        setSelected(value)
    }

    return(
        <Container style={styles.container}>
          <Content>
            <Text style={styles.title}>Tell us about Yourself</Text>
            <Form>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>NAME</Text>
                    <Item style={styles.inputBox} regular>
                        <Input />
                    </Item>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{...styles.labels}}>EMAIL</Text>
                    <Item style={styles.inputBox} regular>
                        <Input />
                    </Item>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}>AGE</Text>
                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                selectedValue={selected}
                                onValueChange={onValueChange.bind(this)}
                            >
                                {/* {Array(20).fill().map((_, i) => (<Picker.Item label={i.toString()} value={i} />))} */}
                            <Picker.Item label="10" value={10} />
                            <Picker.Item label="20" value={20} />
                            <Picker.Item label="30" value={30} />
                            <Picker.Item label="40" value={40} />
                            <Picker.Item label="50" value={50} />
                            </Picker>
                        </View>
                        <View style={styles.text}>
                            <Text style={{fontSize: 13, color: '#a9a9a9'}}>Your Age helps us understand and recommend a risk profile</Text>
                        </View>
                    </View>
                </View>
                <View style={{...styles.inputContainer, marginTop: 15}}>
                    <Text style={{fontSize: 16}}>Are you a single household earner?</Text>
                    <ListItem style={{width: 60}} onPress={()=>setRadio("Yes")}>
                        <Radio selected={radio==="Yes"} onPress={()=>setRadio("Yes")} />
                        <Text style={{marginLeft: 10}}>Yes</Text>
                    </ListItem>
                    <ListItem style={{width: 60}} onPress={()=>setRadio("No")}>
                        <Radio selected={radio==="No"} onPress={()=>setRadio("No")} />
                        <Text style={{marginLeft: 10}}>No</Text>
                    </ListItem>
                </View>
                <Button style={styles.button} onPress={()=>{
                    props.navigation.navigate('Screen2')
                }} dark><Text style={styles.buttonText}>CONTINUE</Text></Button>
            </Form>
          </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title:{
        textAlign:'center',
        fontWeight: 'bold' , 
        fontSize: 20, 
        marginVertical: 35
    },
    inputContainer:{
        width: '75%',
        alignSelf:'center',
        borderRadius: 5,
        marginBottom: 13
    },
    inputBox: {
        alignSelf:'center',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#F0F0F0',
        borderWidth: 0,
    },
    labels:{
        marginVertical: 5,
        fontWeight: 'bold'
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
        justifyContent:'center'
    },
    text: {
        paddingLeft: 10,
        width: '71%', 
        justifyContent:'center'
    }
});

export default Screen1;