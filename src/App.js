import './App.css';
import axios from 'axios';
//import react from 'react'
import dotenv from 'dotenv'
import {useEffect,useState} from 'react'
import DataDisplay from './components/dataDisplay'
import {Navbar,Nav,NavLink} from 'react-bootstrap'
import OxygenDisplay from './components/oygenDisplay'
import logo from './assests/img/logo.png'
import HomePage from './components/homePage'
import About from './components/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

dotenv.config()

function App() {
  var isototal=0,o2total=0,icutotal=0,color=""
  const [hdata,setHdata] = useState([])
  const [cData,setCdata] =useState([])
  const [oData,setOdata] = useState([])
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
        "x-rapidapi-key":process.env.REACT_APP_API_KEY,
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

useEffect(()=>{
  const fetchO2data = async ()=> {await axios.get("https://covid-resource-tracker-server.herokuapp.com/api")
      .then(function(r){
        setOdata(r.data.oxygen_left_for)
      })
      .catch(function(e){
        console.log(e)
      })
    }
    fetchO2data()
},[])

return (
    <div className="App">
    <Router>
      <div>
        <Navbar>
          <Navbar.Brand href="/"><img src={logo} width="60" height="60" className="d-inline-block align-top"  alt="Covid Resource Tracker  logo"/></Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink  as={Link} to="/">Home</NavLink>
            <NavLink  as={Link} to="/isolation">Isolation Beds</NavLink>
            <NavLink  as={Link} to="/icu">ICU Beds</NavLink>
            <NavLink  as={Link} to="/o2">Oxygen Beds</NavLink>
            <NavLink  as={Link} to="/about">About Us</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/isolation">
            <div>
              <h1>Isolation Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.filter((a)=>{
                if(a.general.available!==undefined) 
                  return a
              })
              .sort(function(a,b){
                return parseInt(b.general.available,10)-parseInt(a.general.available,10)
              })
              .map((h)=>{
                if(!isNaN(parseInt(h.general.available,10))){
                  isototal+=parseInt(h.general.available,10)
                }
                if(parseInt(h.general.available,10)>0)
                {
                  color="green"
                }
                if(parseInt(h.general.available,10)===0)
                {
                  color="red"
                }
              return <DataDisplay key={h.name} class={color} data={h} total={h.general.total} occupied={h.general.occupied} vacant={h.general.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/icu">
            <div>
              <h1>ICU Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.filter((a)=>{
                if(a.icu.available!==undefined) 
                  return a
              }).sort(function(a,b){
                return b.icu.available-a.icu.available
              }).map((h)=>{
                if(!isNaN(parseInt(h.icu.available,10))){
                  icutotal+=parseInt(h.icu.available,10)
                }
                if(parseInt(h.icu.available,10)>0)
                {
                  color="green"
                }
                if(parseInt(h.icu.available,10)===0)
                {
                  color="red"
                }
              return <DataDisplay key={h.name} data={h} class={color} total={h.icu.total} occupied={h.icu.occupied} vacant={h.icu.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/o2">
          <div>
              <h1>Oxygen Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.filter((a)=>{
                if(a.o2.available!==undefined) 
                  return a
              })
              .sort(function(a,b){
                return parseInt(b.o2.available,10)-parseInt(a.o2.available,10)
              })
              .map((h)=>{
                if(!isNaN(parseInt(h.o2.available,10))){
                  o2total+=parseInt(h.o2.available,10)
                }
                if(parseInt(h.o2.available,10)>0)
                {
                  color="green"
                }
                if(parseInt(h.o2.available,10)===0)
                {
                  color="red"
                }
              return <OxygenDisplay key={h.name} class={color} data={h} total={h.o2.total} occupied={h.o2.occupied} vacant={h.o2.available} left={oData}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/about">
            <About/>
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
