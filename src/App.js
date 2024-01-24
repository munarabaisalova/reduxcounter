import { Provider } from 'react-redux';
import './App.css';
import  Hero  from './components/Hero';
import { createStore } from 'redux';
import { counterReducer } from './store/reducers';



const store =createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>
      <Hero/>
    </Provider>
  );
}

export default App;
