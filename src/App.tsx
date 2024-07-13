import './App.css'
import {Route, Routes} from "react-router";
import HomeFeedScreen from "./components/compound_component1/HomeFeedScreen.tsx";
import MainContextExample from "./components/useContext_example/mainContextExample.tsx";
import NotRenderingContext from "./components/useContextNotRerendering/NotRenderingContext.tsx";
import MainComponentCompound2 from "./components/compound_component2/MainComponentCompound2.tsx";

function App() {

    return (
            <Routes>
                <Route element={<HomeFeedScreen/>} path={'/compound1'}/>
                 <Route element={<MainComponentCompound2/>} path={'/compound2'}/>
                <Route element={<MainContextExample/>} path={'/useContext'}/>
                <Route element={<NotRenderingContext/>} path={'/NotRenderingContext'}/>
            </Routes>
    )
}

export default App
