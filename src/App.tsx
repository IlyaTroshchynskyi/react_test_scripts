import './App.css'
import {Route, Routes} from "react-router";
import HomeFeedScreen from "./components/compound_component1/HomeFeedScreen.tsx";

function App() {

    return (
            <Routes>
                <Route element={<HomeFeedScreen/>} path={'/compound1'}/>
            </Routes>
    )
}

export default App
