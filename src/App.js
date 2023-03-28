import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import UseEffect from './components/UseEffect/UseEffect';
import UseRef from './components/UseRef/UseRef';
import UseLayoutEffect from './components/UseLayoutEffect/UseLayoutEffect';
import UseImperativeHandle from './components/UseImperativeHandle/UseImperativeHandle'
import UseContext from './components/UseContext/UseContext';
import UseMemo from './components/UseMemo/UseMemo';
import UseCalback from './components/UseCalback/UseCalback';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Tutorial</h1>
      <fieldset>
        <legend>UseState</legend>
        <UseState/>
      </fieldset>
      
      <fieldset>
        <legend>UseReducer</legend>
        <UseReducer/>
      </fieldset>
      
      <fieldset>
        <legend>UseEffect</legend>
        <UseEffect/>
      </fieldset>
      
      <fieldset>
        <legend>UseRef</legend>
        <UseRef/>
      </fieldset>
      
      <fieldset>
      <legend>UseLayoutEffect</legend>
        <UseLayoutEffect/>
      </fieldset>

      <fieldset>
      <legend>UseImperativeHandle</legend>
        <UseImperativeHandle/>
      </fieldset>

      <fieldset>
      <legend>UseContext</legend>
        <UseContext/>
      </fieldset>

      <fieldset>
      <legend>UseMemo</legend>
        <UseMemo/>
      </fieldset>

      <fieldset>
      <legend>UseCalback</legend>
        <UseCalback/>
      </fieldset>

      
    </div>
  );
}

export default App;
