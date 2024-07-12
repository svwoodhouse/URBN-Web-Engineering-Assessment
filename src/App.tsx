import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";
import ReactDOM from "react-dom/client";
import './styles/global.css'
import CheckOut from "./components/CheckOut";
import { Provider } from "react-redux";
import { store } from './state';

export default function App(){
  return (
    <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/product/:productId' element={<ProductDetail/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
          </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)