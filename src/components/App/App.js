import Header from '../Header/Header'
import ControlBar from '../ControlBar/ControlBar'
import InfoBox from '../InfoBox/InfoBox'
import './App.css';
import data from '../data'

function App(props) {
  const {id, name, city, country, employer, title, favoriteMovies} = data
  const [ident, setIdent] = useState('');
  const [fullName, setFullName] = useState([]);
  const [from, setFrom] = useState('');
  const [job, setJob] = useState('');
  const [employedBy, setEmployedBy] = useState('');
  const [favMovies, setFavMovies] = useState([]);

  createCard (arr, num){
    
  }
  
  return (
    <div className="App">
     <Header />
     <InfoBox  fullName={fullName} from/>
     <ControlBar />
    </div>
  );
}

export default App;
