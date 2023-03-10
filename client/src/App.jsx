import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, Detail, CreateVideogame } from "./views";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pixelverse-pi-videogames-production.up.railway.app";

const App = () => {
	return (
		<div className='App'>
			{useLocation().pathname !== "/" && <Navbar />}
			<Routes>
				<Route exact path='/' element={<Landing />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/detail/:id' element={<Detail />}></Route>
				<Route path='/create' element={<CreateVideogame />}></Route>
				{/* <Route path='/favorites' element={<Favorites />}></Route> */}
			</Routes>
		</div>
	);
};

export default App;
