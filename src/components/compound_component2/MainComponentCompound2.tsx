import {useCallback, useEffect, useState} from 'react'

import {getUsers} from './utils.ts'
import {TUser} from './types.ts'
import Popover from './Popover.tsx'
import '../../App.css'
function MainComponentCompound2() {
	const [data, setData] = useState<TUser[]>([])

	const applyData = useCallback(async () => {
		const data = await getUsers()
		setData(data)
	}, [])

	useEffect(() => {
		applyData()
	}, [applyData])

	return (
		<div>
			<Popover className='relative'>
				<Popover.Button>Popover!</Popover.Button>
				<Popover.List>
					{data.map((x) => (
						<Popover.ListItem key={x.firstname}>
							{x.firstname} {x.lastname}
						</Popover.ListItem>
					))}
				</Popover.List>
			</Popover>
		</div>
	)
}

export default MainComponentCompound2
