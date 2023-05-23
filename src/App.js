import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import axios from 'axios';
import MyButton from './UI/MyButton/MyButton';
import MyModal from './UI/MyModal/MyModal';
import MyNumberInput from './UI/MyNumberInput/MyNumberInput';

function App() {
  const [pressure, setPressure] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pressureData, setPressureData] = useState({'top':'', 'bot':'', 'pulse':''})
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    try{
      const response = await axios.get("https://test-my-api.onrender.com/pressure");
      setPressure(response.data);
    }catch (e){
      setPressure(e.message);
    }
    
  }

  async function addData(data){
    try{
      setPressureData({'top':'', 'bot':'', 'pulse':''})
      const response = await axios.post("https://test-my-api.onrender.com/pressure/", data)
      console.log(response)
      fetchData()
    }
    catch (e){
      console.log(e)
    }
  }

  return (
    <div className="App">
      <MyButton style={{width:"100%" , marginBottom:10}} onClick={() => {setVisible(true)}}>Добавить</MyButton>
      <Table data={pressure}></Table>
      <MyModal visible={visible} setVisible={setVisible}>
        <MyNumberInput 
        placeholder="Верхний показатель" 
        onChange={e=>setPressureData({...pressureData, 'top':e.target.value})}
        value={pressureData['top']}
        ></MyNumberInput>
        <MyNumberInput 
        placeholder="Нижний показатель" 
        onChange={e=>setPressureData({...pressureData, 'bot':e.target.value})}
        value={pressureData['bot']}
        ></MyNumberInput>
        <MyNumberInput 
        placeholder="Пульс" 
        onChange={e=>setPressureData({...pressureData, 'pulse':e.target.value})}
        value={pressureData['pulse']}
        ></MyNumberInput>
        <MyButton onClick={() => {addData(pressureData)}}>Записать</MyButton>
      </MyModal>
    </div>
  );
}

export default App;
