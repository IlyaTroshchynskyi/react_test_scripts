import './App.scss'
import {Route, Routes} from 'react-router'
import HomeFeedScreen from './components/compound_component1/HomeFeedScreen.tsx'
import MainContextExample from './components/useContext_example/mainContextExample.tsx'
import NotRenderingContext from './components/useContextNotRerendering/NotRenderingContext.tsx'
import MainComponentCompound2 from './components/compound_component2/MainComponentCompound2.tsx'
import BigHeader from './components/app/BigHeader.tsx'
import Home from './components/Home.tsx'

function App() {
	return (
		<Routes>
			<Route element={<Home />} path={'/'} />
			<Route element={<HomeFeedScreen />} path={'/compound1'} />
			<Route element={<MainComponentCompound2 />} path={'/compound2'} />
			<Route element={<MainContextExample />} path={'/useContext'} />
			<Route element={<NotRenderingContext />} path={'/NotRenderingContext'} />
			<Route element={<BigHeader />} path={'/site'} />
		</Routes>
	)
}

export default App
