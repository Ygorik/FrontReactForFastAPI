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

  return (
    <div className="App">
      <MyButton style={{width:"100%" , marginBottom:10}} onClick={() => {setVisible(true)}}>Добавить</MyButton>
      <Table data={pressure}></Table>
      <MyModal visible={visible} setVisible={setVisible}>
        <MyNumberInput placeholder="Верхний показатель"></MyNumberInput>
        <MyNumberInput placeholder="Нижний показатель"></MyNumberInput>
        <MyNumberInput placeholder="Пульс"></MyNumberInput>
      </MyModal>
    </div>
  );
}

export default App;
