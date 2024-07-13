import {useState} from 'react'

import {DashboardContext} from './context.ts'
import Dashboard from './Dashbord.tsx'

export interface User {
	isSubscribed: boolean
	name: string
}

export default function MainContextExample() {
	const [user] = useState<User>({
		isSubscribed: true,
		name: 'Ilya1',
	})

	return (
		<div>
			<DashboardContext.Provider value={user}>
				<Dashboard />
			</DashboardContext.Provider>
		</div>
	)
}
