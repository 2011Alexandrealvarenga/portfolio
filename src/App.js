import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/pages/header';
import AppObjProfissional from './components/pages/obj-profissional';

function App() {
  return (
    <header id="header">
      <AppHeader/>
      <AppObjProfissional />
    </header>
  );
}

export default App;
