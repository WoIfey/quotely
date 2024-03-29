'use client'
import { useState } from 'react'
import { removeAll } from '@/app/actions'
import Image from 'next/image'

export default function DeleteModal() {
	const [toggleModal, setToggleModal] = useState(false)
	const [deleteAllHover, setDeleteAllHover] = useState(false)
	const [password, setPassword] = useState('')
	const [text, setText] = useState('Yes, delete EVERYTHING!')

	const showModal = () => {
		setToggleModal(true)
	}

	const cancel = () => {
		setToggleModal(false)
	}

	const confirm = () => {
		if (
			password === 'wowyoufoundthepasswordnowyoucandeleteallthequotesthatsawesome!'
		) {
			setToggleModal(false)
			removeAll()
		} else {
			setText('Incorrect Password!')
			setTimeout(() => {
				setText('Yes, delete EVERYTHING!')
			}, 2000)
		}
	}
	return (
		<>
			<button
				onClick={showModal}
				onMouseEnter={() => setDeleteAllHover(true)}
				onMouseLeave={() => setDeleteAllHover(false)}
				className="flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
			>
				<Image
					src="/eraser.svg"
					alt="Delete All"
					width={32}
					height={32}
					className="p-1"
				/>
				<div className="relative group flex text-[10px] font-medium z-20">
					<span
						className={`pointer-events-none transition-opacity bg-gray-700 px-2 py-1 text-xs rounded-md absolute   
                            -translate-x-3/4 translate-y-2 ${
																													deleteAllHover ? 'opacity-100' : 'opacity-0'
																												} m-4 mx-auto top-1/2 left-1/2 min-w-max transform`}
					>
						Delete All
					</span>
				</div>
			</button>
			{toggleModal && (
				<>
					<div className="z-[100] fixed inset-0 bg-black opacity-90"></div>
					<div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] flex justify-center items-center w-full inset-0">
						<div className="relative p-4 w-full max-w-md max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
								<div className="p-4 md:p-5 text-center">
									<h3 className="mb-3 text-lg font-normal text-white">
										Do you really want to delete{' '}
										<span className="font-extrabold tracking-widest">ALL</span> quotes?
									</h3>
									<input
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										className="mb-4 outline-none block w-full rounded-md border-0 bg-white/10 p-2.5 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										placeholder="Enter secret password"
									/>
									<div className="flex justify-center items-center">
										<button
											onClick={confirm}
											type="button"
											className="h-10 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 me-2"
										>
											{text}
										</button>

										<button
											onClick={cancel}
											type="button"
											className="h-10 rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										>
											No, abort!
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
