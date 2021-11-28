import React, {useEffect, useState} from "react";
import Header from '../Header/Header';
import ControlBar from '../ControlBar/ControlBar';
import InfoBox from '../InfoBox/InfoBox';
import './App.css';
import data from '../data';

function App() {

  let [num, setNum] = useState(0);

  const {id, name, city, country, employer, title, favoriteMovies} = {...data[num]};

  let fullName = `${name.first} ${name.last}`;
  let location = `${city}, ${country}`;
  let length = data.length;

 

  // const [ident, setIdent] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [from, setFrom] = useState('');
  // const [job, setJob] = useState('');
  // const [employedBy, setEmployedBy] = useState('');
  // const [favMovies, setFavMovies] = useState([]);
  // const [i, setI] = useState(0);

  function displayCard(type){
    if(type==='minus' && num>0){

      setNum(--num)

    }else if(type==='plus' && num<length-1){
      
      setNum(++num)
  }}console.log(num)
  

  // function createCard (num){
  //   let currentArr=data[num]
  //   setFullName(`${currentArr.first} ${currentArr.last}`);
  //   setIdent(currentArr.id);
  //   setFrom(`${currentArr.city}, ${currentArr.country}`);
  //   setJob(currentArr.title);
  //   setEmployedBy(currentArr.employer);
  //   setFavMovies(currentArr.favoriteMovies)
    
  // };

  
  return (
    <div className="App">
     <Header />
     <InfoBox length={length} fullName={fullName} ident={id} location={location} job={title} employedBy={employer} favMovies={favoriteMovies}/>
     <ControlBar displayCard={displayCard}/>
    </div>
  );
}

export default App;
