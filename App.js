/**
 * Author: Leonardo Morini
 * Github: http://github.com/leommh
 * Project: Serjao Chatbot 
_    ___    ___    ___    ___            
_`| / __`| / __`| / __`| / .-^  ___       
---/ /----/ /----/ /----/ /--=^^   ^^=,   
--/ /----/ /----/ /----/ /---=__   __='  
|._/   |._/   |._/   |._/       ^^^   
 */

//Importações
import React, { Component } from 'react';

//Importação do componente personalizado que criamos
import Chatbot from './src/components/chatbot';

export default class App extends Component {
  render() {
    return (
      //Exportação do componente
      <Chatbot />
    );
  }
}


