
import './App.css';
import ButtonLanguage from './components/ButtonLanguage';
import { useTranslation } from 'react-i18next';
import Carrousel from './components/Carrousel'
import BeginCssEffect from './components/BeginCssEffect';
import Answer from './components/Answer';
import InputFizzBuzzNumber from './components/InputFizzBuzzNumber';


function App() {
  const { t } = useTranslation('global');
  return (
    <div className="App">

      <BeginCssEffect />

      <ButtonLanguage />

      <Answer />

      <InputFizzBuzzNumber />

      <h2>{t('app.p5')}</h2>

      <Carrousel />

    </div>
  );
}

export default App;
