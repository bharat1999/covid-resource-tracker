import './App.css';
import axios from 'axios';
//import react from 'react'
import {useEffect,useState} from 'react'
import DataDisplay from './components/dataDisplay'
import {Navbar,Nav,NavLink} from 'react-bootstrap'
//import OxygenData from './components/oygenDisplay'
import logo from './assests/img/logo.png'
import HomePage from './components/homePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  var isototal=0,o2total=0,icutotal=0
  const [hdata,setHdata] = useState([])
  const [cData,setCdata] =useState([])
  //const [odata,setOdata] = useState([])
  useEffect(()=>{
    const fetchBedData =  async ()=> {await axios.get("https://api.npoint.io/4d61424b0910b4a2b692")
      .then(function(res){
        setHdata(res.data.hospitals)
      })  
      .catch(function(e){
        console.log(e)
      })
    }
    fetchBedData()
    const fetchCaseData = async()=> {await axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
      headers: {
        "x-rapidapi-key":"b57e88c3f1mshd7550c30f51c786p15c223jsnf6fc27943a95",
	      "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com"
      }
    })

    .then(function(res){
      setCdata(res.data.total_values)
    })
    .catch(function(err){
      console.log(err)
    })
  }
  fetchCaseData()
},[])

// useEffect(()=>{
//   const fetchO2data = async ()=> {await axios.get("https://coronabeds.jantasamvad.org/covid-info.js",{headers:{
//     "Access-Control-Allow-Origin":true,
//     "Access-Control-Allow-Methods": "GET",
//     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
//   }
// }
// )
//       .then(function(r){
//         setOdata(JSON.parse(r.data.substring(22).slice(0,-1)))
//         console.log(odata)
//       })
//       .catch(function(e){
//         console.log(e)
//       })
//     }
//     fetchO2data()
// },[])

return (
    <div className="App">
    <Router>
      <div>
        <Navbar>
          <Navbar.Brand href="/"><img src={logo} width="60" height="60" className="d-inline-block align-top"  alt="Covid Resource Tracker  logo"/></Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/isolation">Isolation Beds</NavLink>
            <NavLink as={Link} to="/icu">ICU Beds</NavLink>
            <NavLink as={Link} to="/o2">Oxygen Beds</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/isolation">
            <div>
              <h1>Isolation Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
                if(!isNaN(parseInt(h.general.available,10))){
                  isototal+=parseInt(h.general.available,10)
                }
              return <DataDisplay key={h.name} data={h} total={h.general.occupied} occupied={h.general.occupied} vacant={h.general.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/icu">
            <div>
              <h1>ICU Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
                if(!isNaN(parseInt(h.icu.available,10))){
                  icutotal+=parseInt(h.icu.available,10)
                }
              return <DataDisplay key={h.name} data={h} total={h.icu.occupied} occupied={h.icu.occupied} vacant={h.icu.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/o2">
          <div>
              <h1>Oxygen Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
                if(!isNaN(parseInt(h.o2.available,10))){
                  o2total+=parseInt(h.o2.available,10)
                }
              return <DataDisplay key={h.name} data={h} total={h.o2.occupied} occupied={h.o2.occupied} vacant={h.o2.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/">
            <HomePage data={cData} isototal={isototal} icutotal={icutotal} o2total={o2total}/>
          </Route>
        </Switch>
      </div>
    </Router>
      
      
    </div>
  );
}

export default App;
