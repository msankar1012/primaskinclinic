import './App.css';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from 'react-router-dom'
import {Homepage} from "./Pages/Homepage/Homepage";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <HelmetProvider>
                <BrowserRouter>
                    <Header />
                    <Homepage />
                    <Footer />
                </BrowserRouter>
            </HelmetProvider>

        </div>
    );
}

export default App;
