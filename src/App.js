import './App.css';
import axios from 'axios';
import react from 'react'
import {useEffect,useState} from 'react'
import DataDisplay from './components/dataDisplay'
import {Navbar,Nav} from 'react-bootstrap'
import OxygenData from './components/oygenDisplay'
import logo from './assests/img/logo.png'
import HomePage from './components/homePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [hdata,setHdata] = useState([])
  const [odata,setOdata] = useState([])
  useEffect(()=>{
  const fetchData =  async ()=> {await axios.get("https://api.npoint.io/4d61424b0910b4a2b692")
    .then(function(res){
      setHdata(res.data.hospitals)
    })  
    .catch(function(e){
      console.log(e)
    })
  }
  fetchData()
  // const fetchO2data = async ()=> {await axios.get("https://coronabeds.jantasamvad.org/covid-info.js")
  //   .then(function(r){
  //     setOdata(JSON.parse(r.data.substring(22).slice(0,-1)))
  //     console.log(odata)
  //   })
  //   .catch(function(e){
  //     console.log(e)
  //   })
  // }
  // fetchO2data()
})
return (
    <div className="App">
    <Router>
      <div>
      <Navbar>
      <Navbar.Brand href="/"><img src={logo} width="60" height="60" className="d-inline-block align-top"  alt="Covid Resource Tracker  logo"/></Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
        <Link to="/isolation"><Nav.Link href="/isolation">Isolation Beds</Nav.Link></Link>
        <Link to="/icu"><Nav.Link href="/icu">ICU Beds</Nav.Link></Link>
        <Link to="/o2"><Nav.Link href="/o2">Oxygen Beds</Nav.Link></Link>
      </Nav>
      </Navbar>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/isolation">
            <div>
              <h1>Isolation Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
              return <DataDisplay data={h} total={h.general.occupied} occupied={h.general.occupied} vacant={h.general.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/icu">
            <div>
              <h1>ICU Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
              return <DataDisplay data={h} total={h.icu.occupied} occupied={h.icu.occupied} vacant={h.icu.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/o2">
          <div>
              <h1>Oxygen Beds</h1>
            </div>
            {hdata.length!==0?
              hdata.map((h)=>{
              return <DataDisplay data={h} total={h.o2.occupied} occupied={h.o2.occupied} vacant={h.o2.available}/>
              })  
            :<div>Loader</div>}
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
      
      
    </div>
  );
}

export default App;
