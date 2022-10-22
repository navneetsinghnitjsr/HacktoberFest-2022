
import './App.css';
import { Component } from 'react';
import React from 'react';
import CardList from './components/card-list/card-list component';
import SearchBox from './components/card-list/search-box/searchbox.components';
import  './components/card-list/search-box/search-box.styles.css';
import  './components/card-list/card-list.style.css';
import  './components/card-list/card.styles.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
     monster:[],
     searchField:''
    };
    
  }
  onSearch=(event)=>{
     
      const searchField=event.target.value.toLowerCase();//for case sensitive.
      
      this.setState(()=>{
        return {searchField};
      });
    };


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>
    response.json())
    .then((user)=>this.setState(()=>{
      return {monster:user};
    }
    // ()=>{
    //   console.log(this.state);
    // }
    ))

  }
  render(){
    const{monster,searchField}=this.state;
    const{onSearch}=this;
    const filteredMonster=monster.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    })
  return (
    <div className="App">

    <h1 className='app-title '>Monster Rolodex</h1>
    {/* <input className='search-box' type='text' placeholder='Monster' onChange={onSearch}/>
      */}
      <SearchBox onChangeHandler={onSearch}
       placeholder={'Search Monster'}
        className={'monster-search-box'}/>
     {/* {filteredMonster.map((monster)=>{
        return<div key={monster.id}><h1>{monster.name}</h1> </div>;
      }
      )
     } */}
     <CardList monster={filteredMonster}/>
    </div>
  );
}}

export default App;
