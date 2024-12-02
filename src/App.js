import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css';
import './App.css';
import AppHeader from './components/pages/header';
import AppObjProfissional from './components/pages/obj-profissional';
import AppTecnologia from './components/pages/tecnologia';
import AppEscolaridade from './components/pages/escolaridade';
import AppEProfissional from './components/pages/exp-profissional';

function App() {
  return (
    <>
    <header id="header">
      <AppHeader/>
    </header>
    <main>
      <AppObjProfissional />
      <AppTecnologia />
      <AppEscolaridade />
      <AppEProfissional />
    </main>
    </>
  );
}

export default App;
