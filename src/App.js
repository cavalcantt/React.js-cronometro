import React,{Component} from "react";
import'./estilo.css'

class App extends Component{
 constructor (props){
   super (props);
   this.state = {
     numero: 0,
     botao: 'Vai'
   };

     this.tempo = null;
     this.vai = this.vai.bind(this)
     this.limpar = this.limpar.bind(this)
 }

vai(){
  let state = this.state;

 if(this.tempo!== null){
    clearInterval(this.tempo);
    this.tempo = null;
    state.botao = 'VAI';
 }

 else{

    this.tempo = setInterval(()=>{
    let state = this.state;
    state.numero += 0.1;
    this.setState(state);
   } ,100);
    state.botao= 'PAUSAR';
  }

    this.setState(state);
}

limpar(){

  if(this.tempo !== null){
     clearInterval(this.tempo);
     this.tempo = null;
  }

     let state = this.state;
     state.numero= 0;
     state.botao = 'VAI';
     this.setState(state);

}

  render(){
    return(
      <div className="container">
       <img src ={require('./assents/cronometro.png')}className="img"/>
       <a className="tempo">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
         <a className="botao" onClick={this.vai}>{this.state.botao}</a>
         <a className="botao"onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
     );

    }
  }
   
  export default App;















