import React, { Component } from 'react'
import {Text, TextInput, View, StyleSheet, Button, FlatList} from 'react-native'
import Nav from './Nav'
import Numero from './Numero'

export default class Mega extends Component{

    state = {
        qtdNumeros: this.props.qtdNumeros || 6,
        numeros: []
    }

    alterarQtdNumeros = (qtd) => {
        this.setState({ qtdNumeros: +qtd })
    }

    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt((Math.random() * 60) + 1)
        return nums.includes(novo) 
                ? this.gerarNumeroNaoContido(nums)
                : novo
    }

    gerarNumeros = () => {

        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        return this.state.numeros.map(num => {
            return <Numero key={num} num={num}/>
        })
    }

    render(){

        return(
            <View>
                <Nav title="Mega-sena" />
                 <View style={styles.container}>
                    <TextInput
                        style={styles.inputQtd}
                        keyboardType="numeric"
                        placeholder="Quantos Numeros?"
                        onChangeText={this.alterarQtdNumeros}
                    />
                    <Button 
                        title="Gerar" 
                        color="#ff9800"
                        onPress={this.gerarNumeros}
                    />
                    <View style={styles.line}>
                    </View>
                    
                    <View style={styles.boxNums}>
                        {this.exibirNumeros()}
                    </View>
                    
                 </View>
            </View>
         )
        
    }
    
}

const styles = StyleSheet.create({
    container:{ 
        padding: 20,

    },
    inputQtd:{
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 25,
    },
    btn:{
        width: '100%',
        height: 50,
        backgroundColor: '#74C6A0',
    },
    txtBtn:{
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 50
    },
    line:{
        marginVertical: 20,
        backgroundColor: "#aaa",
        height: 1,
    },
    boxNums:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    limite:{
        color: 'red',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10
    }
})