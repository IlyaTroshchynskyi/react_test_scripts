import {Footer, Profile, Sidebar} from './Components'

export default function Dashboard() {
	return (
		<div className='flex-row justify-center'>
			<Sidebar />
			<Profile />
			<Footer />
		</div>
	)
}
