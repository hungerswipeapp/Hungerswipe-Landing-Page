import React, { Component } from 'react'

import notifications from '../Assets/i-notification.png';
import superLike from '../Assets/i-superlike.png';
import customize from '../Assets/i-customize.png';
 import restuarant from '../Assets/restuarant.png';
import filterIcon from '../Assets/i-filter.png';

import '../Main.css';

export default class Features extends Component {
	render() {
		return (
			<section id="features" className="bg-white border-b py-8">
				<div className="container mx-auto flex flex-wrap pt-4 pb-12">
					<h1 className="w-full my-2 text-2xl md:text-4xl font-medium leading-tight text-center import HW-dark-blue">
						WHY USE HUNGERSWIPE
						<p className="font-bold text-2xl md:text-4xl HW-dark-blue mt-8 md:w-1/2 mx-auto">
						Other available features for that perfect date night
						</p>
					</h1>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<div className="grid lg:grid-cols-3 md:grid-cols-3">

						<div className="col-span-1">
							<div className="w-full p-6 text-center">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
									<div className="flex flex-wrap no-underline hover:no-underline">
										<p className="w-full text-gray-600 text-xs md:text-sm px-6">
											<img
												class="object-none m-6 mx-auto"
												src={customize}
												alt="User Friendly"
											/>
										</p>
										<h3 className="mx-auto text-3xl text-blue-800 font-bold leading-none mb-3">
											Easy To Customize
										</h3>
										<p className="text-gray-800 text-base px-6 mb-5">
											Customize the way you want to use HungerSwipe by using our
											filters. Pick and choose the cuisine, price range,
											allergies and more before you start swiping!
										</p>
									</div>
								</div>
							</div>
							<div className="w-full p-6 flex flex-col flex-grow flex-shrink text-center">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
									<div className="flex flex-wrap no-underline hover:no-underline">
										<p className="w-full text-gray-600 text-xs md:text-sm px-6">
											<img
												class="object-none m-6 mx-auto"
												src={notifications}
												alt="User Friendly"
											/>
										</p>
										<h3 className="mx-auto text-3xl text-blue-800 font-bold leading-none mb-3">
											Your Notifications
										</h3>
										<p className="text-gray-800 text-base px-6 mb-5">
											Receive notifications related to your account or other
											HungerSwipe announcements to stay up to date on what the
											nights plans are.
										</p>
									</div>
								</div>
							</div>
						</div>


						<div className="col-span-1">
							<div>
								<img src={restuarant} alt="profile" className=""></img>
								{/* <iframe
									title="HungerSwipe Prototype" 
									style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
									width="400" 
									height="650" 
									src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzkDE0eEBDlgPfbn4KMjzBq%2FHungerswipe%3Fnode-id%3D1443%253A3421%26scaling%3Dscale-down" 
									allowfullscreen>
								</iframe> */}
							</div>
						</div>


						<div className="col-span-1">
							<div className="w-full p-6 flex flex-col flex-grow flex-shrink text-center">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
									<div className="flex flex-wrap no-underline hover:no-underline">
										<p className="w-full text-gray-600 text-xs md:text-sm px-6">
											<img
												class="object-none m-6 mx-auto"
												src={filterIcon}
												alt="User Friendly"
											/>
										</p>
										<h3 className="mx-auto text-3xl text-blue-800 font-bold leading-none mb-3">
											Filter
										</h3>
										<p className="text-gray-800 text-base px-6 mb-5">
											Use our seamless filters to help find restaurants that best satisfy you. 
											Want to find Japanese restaurants near you, use the filter feature to 
											only see your most desirable restaurants.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full p-6 flex flex-col flex-grow flex-shrink text-center">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
									<div className="flex flex-wrap no-underline hover:no-underline">
										<p className="w-full text-gray-600 text-xs md:text-sm px-6">
											<img
												class="object-none m-6 mx-auto"
												src={superLike}
												alt="Super Like"
											/>
										</p>
										<h3 className="mx-auto text-3xl text-blue-800 font-bold leading-none mb-3">
											SuperLike
										</h3>
										<p className="text-gray-800 text-base px-6 mb-5">
											Want to let your friends know you really like a restaurant?
											Use our HungerSwipe SuperLike feature to show your
											favorite restaurant while swiping.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
