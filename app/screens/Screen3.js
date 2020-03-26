import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { HeaderBackButton } from "react-navigation-stack";
import {Container,Content, Button, Grid, Col} from 'native-base';

const Screen3 = (props) => {
    const [select, setSelection] = useState(true)
    const [grad, setGrad] = useState(false)
    return(
        <Container>
            <Content>
                <View style={{marginTop: 10}}>
                    <HeaderBackButton onPress={()=>props.navigation.goBack()} />
                </View>
                <Grid style={styles.introContainer}>
                    <Col style={{width: '60%'}}>
                        <Text><Text style={styles.bold}>Seema</Text> is most likely to start</Text>
                        <Text>by<Text style={styles.bold}> 2031</Text></Text>
                    </Col>
                    <Col>
                        <View style={styles.segmentContainer}>
                            <View style={{width: '30%'}}>
                            {grad?
                                <Button style={styles.leftSelector} dark onPress={()=>setGrad(true)}><Text style={{color:'white',fontWeight: 'bold'}}>UG</Text></Button> 
                                : <Button style={{...styles.leftSelector, backgroundColor:'#F0F0F0'}} onPress={()=>setGrad(true)}><Text style={{fontWeight: 'bold'}}>UG</Text></Button> 
                            }
                            </View>
                            <View style={{width: '30%'}}>
                            {!grad?
                                <Button style={styles.rightSelector} dark onPress={()=>setGrad(false)}><Text style={{color:'white',fontWeight: 'bold'}}>PG</Text></Button> 
                                : <Button style={{...styles.rightSelector, backgroundColor:'#F0F0F0'}} onPress={()=>setGrad(false)}><Text style={{fontWeight: 'bold'}}>PG</Text></Button> 
                            }
                            </View>
                        </View>
                    </Col>
                </Grid>
            
                <View style={styles.segmentContainer}>
                    <View style={{width: '42%'}}>
                    {select?
                        <Button style={styles.leftSelector} dark onPress={()=>setSelection(true)}><Text style={{...styles.bold, color:'white'}}>Invest now</Text></Button> 
                        : <Button style={{...styles.leftSelector, backgroundColor:'#F0F0F0'}} onPress={()=>setSelection(true)}><Text style={{...styles.bold}}>Invest now</Text></Button> 
                    }
                    </View>
                    <View style={{width: '42%'}}>
                    {!select?
                        <Button style={styles.rightSelector} dark onPress={()=>setSelection(false)}><Text style={{...styles.bold, color:'white'}}>Invest after 1 year</Text></Button> 
                        : <Button style={{...styles.rightSelector, backgroundColor:'#F0F0F0'}} onPress={()=>setSelection(false)}><Text style={styles.bold}>Invest after 1 year</Text></Button> 
                    }
                    </View>
                </View>
            
                <Grid style={styles.priceContainer}>
                    <Col style={{marginRight: 15}}>
                        <Text style={styles.saveAndInvest}>
                            YOU WILL INVEST
                        </Text>
                        <Text></Text>
                        <Text style={styles.price}>
                            Rs. 25,000/Mo
                        </Text>
                        <Text style={styles.priceDetails}>
                            An Average PG Degree in the US will cost Rs. 4cr in 2031
                        </Text>
                    </Col>

                    <View style={styles.verticalDivider}/>

                    <Col style={{marginLeft: 15}}>
                        <Text style={styles.saveAndInvest}>
                            YOU WILL SAVE
                        </Text>
                        <Text></Text>
                        <Text style={styles.price}>
                            Rs. 50L*
                        </Text>
                        <Text style={styles.priceDetails}>
                            *Compared to direct payment of tuition fees and living cost
                        </Text>
                    </Col>
                </Grid>
                <Button style={styles.button} onPress={()=>{
                    //props.navigation.navigate('Screen3')
                }} dark><Text style={styles.buttonText}>Take your first step</Text></Button>
                <Text style={styles.or}>or</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.details}>Thinking of sending her to something specific like Harvard or a college in New York?</Text>
                    <Button style={{...styles.button, backgroundColor:'white'}} onPress={()=>{
                    //props.navigation.navigate('Screen3')
                }} ><Text style={styles.bold}>Customise your goal</Text></Button>
                </View>
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
    segmentContainer:{
        flex: 1, 
        flexDirection:'row', 
        alignSelf:'center'
    },
    introContainer: {
        marginTop: 15, 
        marginBottom: 35, 
        width: '85%', 
        alignSelf:'center'
    },
    button: {
        width: '75%',
        alignSelf:'center',
        justifyContent:'center', 
        borderRadius: 5,
        marginTop: 15
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    leftSelector: {
        height: 35, 
        justifyContent:'center',
        borderBottomLeftRadius: 10, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius:0, 
        borderBottomRightRadius:0
    },
    rightSelector: {
        height: 35, 
        justifyContent:'center',
        borderBottomLeftRadius: 0, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius:10, 
        borderBottomRightRadius:10
    },
    priceContainer: {
        alignItems:'center', 
        width: '88%',
        alignSelf:'center', 
        marginVertical: 30
    },
    saveAndInvest:{
        alignSelf:'center', 
        fontWeight: 'bold', 
        fontSize: 12
    },
    price: {
        alignSelf:'center',
        fontWeight: 'bold', 
        fontSize: 21, 
        marginBottom: 8
    },
    priceDetails:{
        textAlign:'center',
        alignSelf:'center',
        fontSize: 13, 
        color:'#a9a9a9'
    },
    verticalDivider: {
        height: 120,
        borderLeftWidth: 2,
        borderColor: '#ccc'
    },
    or: {
        alignSelf:'center', 
        color:'#a9a9a9', 
        marginVertical: 15
    },
    detailsContainer: {
        height: 200, 
        backgroundColor: '#ccc', 
        width: '85%', 
        alignSelf:'center', 
        borderRadius: 5
    },
    details:{
        textAlign:'center',
        fontWeight: 'bold', 
        fontSize: 15, 
        marginVertical: 25
    },
});

export default Screen3