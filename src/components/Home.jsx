import { useState, useEffect } from 'react'

function SingleMenuComponent(props) {
	console.log('props ->', props)
	return (
		<div className='menu-item'>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	)
}


// removed menu items
export default function Home() {
	const [menuItems, setMenuItems] = useState() // = [stateVar, setter]

	useEffect(() => {
		fetch('https://codice-boca.web.app/menu')
			.then(res => res.json()) // contacting the API
			.then(data => setMenuItems(data)) // get clean data form res
			.catch(x => console.error(x))
	}, [])

	// 1. fetch data - DONE
	// 2. get array of objects - DONE

	// 3. render each object
	// 3.1 create a state variable - DONE
	// 3.2 put inside state variable the array of objects - DONE
	// 3.3 display each item in dom
	// 3.3.1 Map over the array of objects
	// 3.3.2 return each item so that it displays on the browser

	const handleBtnClick = () => {
	}

	return (
		<section className='menu-items'>
			{!menuItems
					// if no menu items, show loading
					? <h3>Loading...</h3>
					// otherwise show menu items
					: menuItems.map(singleItem => {
							return (
									<SingleMenuComponent
										title={singleItem.title}
										description={singleItem.description} />
							)
						})
			}
		</section>
	)
}