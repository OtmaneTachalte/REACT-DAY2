import React , {Component}  from 'react';
import {Total} from './To'

class Calc extends React.Component{
constructor(props) {
    super(props);
    this.state={
        montant:null,
        interets:null,
        duree:null,
        total:null,
        mensualite:null  
    };

}
/*
componentWillMount (){
    let montant = 0;
    let interets = 0;
    let duree = 0;
    let total = 0;
    this.setState({montant,interets,duree,total});
}
*/

getmontant=(event)=>{
    let interets=this.state.interets;
    this.setState({montant:parseFloat(event.target.value)})
    this.setState({total:((parseFloat(interets)/100)*parseFloat(event.target.value))+parseFloat(event.target.value)})
    if(event.target.value==""){
        let interets=this.state.interets;
        this.setState({total:0+parseFloat(interets)})
        this.setState({montant:0})
    }
    if(event.target.value=0){
        this.setState({total:parseFloat(this.state.interets)})
    }
}
getinterets=(event)=>{
    
    let montant=this.state.montant;
    this.setState({interets:parseFloat(event.target.value)})
    this.setState({total:((parseFloat(event.target.value)/100)*parseFloat(montant))+parseFloat(montant)})
    if(event.target.value==""){
        let montant=this.state.montant;
        this.setState({interets:0})
        this.setState({total:0+parseFloat(montant)})
    }
    if(montant=0){
        let montant=this.state.montant;
        this.setState({total:((parseFloat(event.target.value)/100)*parseFloat(montant))+parseFloat(montant)})
    }

}
getduree=(event)=>{
    this.setState({duree:event.target.value})
    let total = this.state.total;
    this.setState({mensualite:parseFloat(total)/parseFloat(event.target.value)})

}
ttotal=()=>{
    let montant=this.state.montant;
    let interets=this.state.interets;
    this.setState({total:parseFloat(montant)*parseFloat(interets)})
    
}
gettotal=(event)=>{
    this.setState({total:event.target.value})
}
/*-------------------------------------------*/


render(){
    return(
        <React.Fragment>
            <div style={{  }}>
                <input placeholder = "Saisir montant" type="number" value={this.state.montant} min={20000}onChange={this.getmontant}/>
                <input placeholder = "Interets (%)" type="number" value={this.state.interets} onChange={this.getinterets}/>
                <input placeholder = "Duree" type="number" value={this.state.duree} max={12}onChange={this.getduree}/>
            </div>
            <h5>Total crédit : <Total total={this.state.total} /></h5>
            <h6>Mensualité : <Total total={this.state.mensualite} /> / mois</h6>
        </React.Fragment>
        
    )
}
}
export default Calc;






















