import './App.css';
import Home from './components/Home';
// import Footer from './components/Footer';
import {
  Routes,
  Route
} from "react-router-dom";
import Step1 from './components/stepbystep/Step1'
import Step2 from './components/stepbystep/Step2';
import Step3 from './components/stepbystep/Step3';
import Step4 from './components/stepbystep/Step4';
import FinalStep from './components/stepbystep/FinalStep';




function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/step1" element={<Step1/> } /> 
        <Route exact path="/step2" element={<Step2/> } />
        <Route exact path="/step3" element={<Step3/> } />
        <Route exact path="/step4" element={<Step4/> } />
        <Route exact path="/FinalStep" element={<FinalStep/> } />

      </Routes>
    </>
  );
}

export default App;
