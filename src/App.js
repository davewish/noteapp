import logo from './logo.svg';
import './App.css';
import Note from './components/note';
import { Profiler } from 'react';

const logProfile = (id, phase, actualTime, baseTime, startTime, commitTime, interactions) => {
  console.log(`--------- ${id}'s ${phase.toUpperCase()} phase: ---------`);
  console.log(`Time spent rendering ${actualTime} ms`); // Time spent rendering the Profiler and its descendants for the most recent "mount" or "update" render.
  console.log(`Base time: ${baseTime} ms`); // Duration of the most recent render time for each individual component within the Profiler tree.
  console.log(`React render start time (since component mounted): ${startTime} ms`); // When the Profiler began the recently committed render.
  console.log(`React render commit time (since component mounted): ${commitTime} ms`); // The time at which the current commit took place.
  console.log(interactions);
};
function App() {
  return (
    
<div className="App">
      <Note/>
    </div>
    
    
  );
}

export default App;
