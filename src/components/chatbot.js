import React, { Component } from 'react';
import Bot from 'react-native-chatbot';

//Instruções que o chatbot irá seguir:
const steps = [
  {
    id: '1',
    message: 'Olá, eu sou o Serjão, qual é o seu nome?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'ola',
  },
  {
    id: 'ola',
    message: 'Olá {previousValue}',
    trigger: '3',
  },
  {
    id: '3',
    message: 'O que você quer saber de mim?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Quantas onças você matou?', trigger: '5' },
      { value: 2, label: 'Esta história é realmente verdade?', trigger: '6' },
      { value: 3, label: 'Qual o som que a onça faz?', trigger: '7' },
      { value: 4, label: 'Quero nada não, tchau', trigger: '8' },
    ],
  },
  {
    id: '5',
    message: 'Matei uma que valeu por duas ou mais!',
    trigger: '3',
  },
  {
    id: '6',
    message: 'É verdade, não minto!',
    trigger: '3',
  },
  {
    id: '7',
    message: 'Ela faz assim: NiaurrrrrAurrrrr.',
    trigger: '3',
  },
  {
    id: '8',
    message: 'Até mais',
    end: true,
  },
];


export default class ChatBot extends Component {
  render() {
    return (
      <Bot 
        steps={steps} 
        // Avatar do Bot e do usuário //
        botAvatar='https://i.imgur.com/uVRn78V.png'
        userAvatar='https://i.imgur.com/6sm2DYv.png'

        // Cores dos diálogos //
        botFontColor={ '#FFFDF8' } 
        userFontColor={ '#FFFDF8' }
        botBubbleColor={ '#E89984' } 
        userBubbleColor={ '#FFC286' }

        // Cores do fundo do chat //
        style={{ backgroundColor: '#FFFDF8', marginTop: 2 }}
        contentStyle={{ backgroundColor: '#FFFDF8' }}

        // Estilo do Rodapé (Footer) //
        footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
        submitButtonStyle={{ backgroundColor: '#E89984', borderRadius: 4, width: 63, margin: 2 }}
      />
    );
  }
}

