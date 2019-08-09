import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext()

const getData = async (endpoint, callBack, embeded = false) => {
	const keyword = endpoint.charAt(0).toUpperCase() + endpoint.slice(1)
	const localData = sessionStorage.getItem(`local${keyword}`)

	if (localData) {
		callBack(JSON.parse(localData))
	} else {
		try {
			const resp = await axios.get(
				`https://wp.bewinestudio.com/wp-json/wp/v2/${endpoint}${embeded ? '?_embed' : ''}`
			)
			const { data } = await resp

			sessionStorage.setItem(`local${keyword}`, JSON.stringify(data))
			callBack(data)
		} catch (error) {
			console.error(error)
		}
	}
}

const Provider = ({ children }) => {
	const [categories, setCategories] = useState([])
	const [projects, setProjects] = useState([])
	const [team, setTeam] = useState([])

	useEffect(() => {
		getData('projects', setProjects)
		getData('categories', setCategories)
		getData('team', setTeam, true)
	}, [])

	console.log('ctx')

	return <Context.Provider value={{ categories, projects, team }}>{children}</Context.Provider>
}

export default Provider
