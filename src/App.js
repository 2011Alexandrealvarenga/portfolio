import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css';
import './App.css';
import AppHeader from './components/pages/header';
import AppObjProfissional from './components/pages/obj-profissional';
import AppTecnologia from './components/pages/tecnologia';

function App() {
  return (
    <>
    <header id="header">
      <AppHeader/>
    </header>
    <main>
      <AppObjProfissional />
      <AppTecnologia />
    </main>
    </>
  );
}

export default App;
