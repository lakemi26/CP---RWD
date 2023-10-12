import React, { Component } from 'react';
import '../../App.css';
import Banner from '../Banner';
import axios from 'axios';
import Servicos from '../Servicos';

class Home extends Component {
    state = {
      servicos: [],
    }
  
    async componentDidMount(){
      try{
        const{data : servicos} = await axios.get("/api/servicos.json");
        this.setState({servicos})
      }catch(error){
        console.log(error);
        document
          .querySelectorAll(".erro")[0]
          .insertAdjacentHTML(
            "beforeend",
            "<p>Erro ao carregar arquivo</p>"
          )
      }
    }
  render(){
    return (
      <>
        <Banner />
        <Servicos servico={this.state.servicos}/>
      </>
    );
  }
}

export default Home;
