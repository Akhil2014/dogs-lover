import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState()
  const [data,setData] = useState([])

  const getData  = async  () => {

    try{
        const res = await fetch('https://dog.ceo/api/breed/labrador/images/random/2000')
        const data = await res.json()
        console.log(data.message)
        setData(data.message)
    }catch(err){
      console.log(err)
    }


  }

  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  return (
    <div className="App">
      {
        data.map((e) => {
          return <div><img src={e} /></div>
        })
      }
    </div>
  );
}

export default App;
