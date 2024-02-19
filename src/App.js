import './App.css';
import {Homepage} from "./Pages/Homepage/Homepage";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;
