import './App.css';
import axios from 'axios';
import react from 'react'
import {useEffect,useState} from 'react'
import DataDisplay from './components/dataDisplay'



function App() {
  const [hdata,setHdata] = useState([])
  useEffect(()=>{
  const fetchData =  async ()=> {await axios.get("https://api.npoint.io/4d61424b0910b4a2b692")
    .then(function(res){
      setHdata(res.data.hospitals)
      console.log(hdata[0].phoneNumber)
    })  
    .catch(function(e){
      console.log(e)
    })
  }
fetchData()
})
return (
    <div className="App">
      <div>
        <h1>Isolation Beds</h1>
      </div>
      {hdata.length!==0?
        hdata.map((h)=>{
          return <DataDisplay name={h.name} add={h.location.formattedAddress} no={h.phoneNumber[0]}
            link={h.location.link} total={h.general.total} vacant={h.general.available} occupied={h.general.occupied}
          />
        })  
        :<div>Loader</div>}
    </div>
  );
}

export default App;
