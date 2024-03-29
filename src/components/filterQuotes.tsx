'use client'
import { refresh } from '@/app/actions'
import { useState, useEffect } from 'react'

export default function Filter() {
	const [filterPreference, setFilterPreference] = useState('')

	useEffect(() => {
		const storedFilterPreference = localStorage.getItem('filterPreference')
		if (storedFilterPreference) {
			setFilterPreference(storedFilterPreference)
		}
		handleFilter()
	}, [])

	useEffect(() => {
		handleFilter()
	}, [filterPreference])

	const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterPreference(event.target.value)
	}

	const handleFilter = () => {
		localStorage.setItem('filterPreference', filterPreference)
		refresh()
	}

	return (
		<div className="sm:col-span-2">
			<label
				htmlFor="filter"
				className="px-1.5 py-1 sm:py-0.5 text-white rounded-md bg-gray-700 text-sm shadow-sm"
			>
				Filter by
			</label>
			<select
				id="filter"
				name="filter"
				value={filterPreference}
				onChange={handleFilterChange}
				className="bg-slate-700 mt-1.5 block w-full sm:w-40 rounded-md border-0 py-1.5 sm:py-1 px-0.5 ring-1 ring-inset outline-none focus:ring-2 ring-slate-500 focus:ring-indigo-600 sm:text-sm sm:leading-6"
			>
				<option value="">Default</option>
				<option value="likes">Likes</option>
				<option value="dislikes">Dislikes</option>
			</select>
		</div>
	)
}
