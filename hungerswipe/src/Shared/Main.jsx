import React, { useState } from 'react';
import Modal from './Modal';

import appPreview from '../Assets/preview.png';
import userFriendlyIcon from '../Assets/i-user-friendly.png';
import manageMatches from '../Assets/i-match.png';
import swiping from '../Assets/i-swipe.png';
import logo from '../Assets/LogoWhiteBig.png';

import landingMeal from '../Assets/landingMeal.png';
import About from './About';

import '../Main.css';
import ResAppBar from './ResAppBar';

function Main() {

	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	}

	return (
		<body className="leading-normal tracking-normal">
			<div className="gradient">
				<ResAppBar />
				<section>
					<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
						<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">

							<img className="hide" src={logo} alt="Logo"></img>
							<h1 id="top" className="HS-outline margin-center md:my-4 mt-48 text-5xl font-black md:font-light leading-tight">
								Swipe Right
							</h1>
							<p className="HS-outline leading-normal text-2xl md:mb-8 mb-48 font-black md:font-medium">
								to your next restaurant destination!
							</p>	
							<p className="hide">
							 Match on restaurants with your friends, Family or even that one special person in your life.
							</p>
							<div className="margin-center">
								<Modal 
									count={count}
									incrementCount={incrementCount}
								/>
							</div>
						</div>

						<div className="hide w-full md:w-3/5 py-6 text-center">
							<img
								className="w-full md:w-4/5 z-50"
								src={landingMeal}
								alt="scroll threw application"
							/>
						</div>
					</div>
				</section>
			</div>
			
			<section id="features" className="bg-white border-b py-8">
				<div className="container max-w-5xl mx-auto m-8">
					<h1 className="w-full my-2 text-2xl md:text-4xl font-medium leading-tight text-center HW-dark-blue">
						WHAT'S INSIDE
						<p className="font-bold text-2xl md:text-4xl HW-dark-blue mt-8 md:w-2/3 mx-auto">
							Go to restaurants you like with the right match on HungerSwipe
						</p>
					</h1>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full sm:w-1/3 p-6 mt-6 text-center">
							<img
								class="object-none m-6 mx-auto"
								src={userFriendlyIcon}
								alt="User Friendly"
							/>
							<h3 className="text-3xl text-blue-800 font-bold leading-none mb-3">
								User Friendly
							</h3>
							<p className="text-gray-600 mb-8">
								With a modern user interface and easy user experience, it will
								be fun and easy to navigate your way through the app.
								<br />
								<br />
							</p>
						</div>
						<div className="w-full sm:w-1/3 p-6 mt-6 text-center">
							<div className="align-middle">
								<img
									class="object-none m-6 mx-auto"
									src={swiping}
									alt="User Friendly"
								/>
								<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
									Swiping Left & Right
								</h3>
								<p className="text-gray-600 mb-8">
									Swipe left and right for an easy way of finding your favorite
									restaurants! It’s fun, easy, and ejoyable to do with your
									friends.
									<br />
									<br />
								</p>
							</div>
						</div>
						<div className="w-full sm:w-1/3 p-6 mt-6 text-center">
							<div className="align-middle">
								<img
									class="object-none m-6 mx-auto"
									src={manageMatches}
									alt="Managing Matches"
								/>
								<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
									Managing Matches
								</h3>
								<p className="text-gray-600 mb-8">
									Swipe until you and your friends match on a restaurant. This
									will occur after everyone in the group has swiped right on the
									same restaurant or bar.
									<br />
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<About />

			<div className="">
				<section className="container mx-auto text-center py-6 mb-12 ">
					<h1 className="w-full my-2 text-2xl md:text-4xl font-medium leading-tight text-center HW-dark-blue">
						WHY USE HUNGERSWIPE
						<p className="font-bold text-2xl md:text-4xl HW-dark-blue mt-8 md:w-2/3 mx-auto">
							The way to win someone's heart is through their appetite
						</p>
					</h1>
					<img src={appPreview} alt="App Preview"></img>
					<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
						<a href="#top">Scroll to top</a>
					</button>
				</section>
			</div>
		</body>
	);
}

export default Main;
