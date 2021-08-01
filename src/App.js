
import './App.css';
import ButtonLanguage from './components/ButtonLanguage';
import { useTranslation } from 'react-i18next';
import Carrousel from './components/Carrousel'
import BegginCssEffect from './components/BegginCssEffect';
import Answer from './components/Answer';

function App() {
  const { t } = useTranslation('global');
  return (
    <div className="App">

      <BegginCssEffect />

      <ButtonLanguage />

      <Answer />

      <h2>{t('app.p5')}</h2>

      <Carrousel />

    </div>
  );
}

export default App;
