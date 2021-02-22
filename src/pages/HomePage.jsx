import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import HobbyList from '../Components/Home/HobbyList'
import { addNewHobby, setActiveHobby } from '../actions/hobby'

const randomNumber = () => {
	return 1000 + Math.trunc((Math.random() * 9000))
}

function HomePage(props) {
	const hobbyList = useSelector( state => state.hobby.list)
	const activeId = useSelector( state => state.hobby.activeId)
	console.log(hobbyList);
	const dispatch = useDispatch()
	
	const handleAddHobbyList = () => {
		// random hobby : id + title
		const newId = randomNumber()
		const newHobby = {
			id: newId,
			title: `Hobby ${newId}`
		}
		console.log("click add");

		// dispatch action to add new hobby to redux store
		const action = addNewHobby(newHobby)
		dispatch(action)
	}

	const hanldeHobbyClick = (hobby) => {
		const action = setActiveHobby(hobby)
		dispatch(action)
	}

    return (
        <div className="home-page">
			<button onClick={handleAddHobbyList}>Add Hobby +</button>
			<HobbyList 
				hobbyList={hobbyList} 
				activeId={activeId}
				onHobbyClick={hanldeHobbyClick}
			/>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage

