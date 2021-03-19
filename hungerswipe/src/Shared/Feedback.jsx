import React, { Component } from 'react';

import '../Main.css'

class Feedback extends Component {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
		  status: ""
		};
	 }

	render() {
		const { status } = this.state;
		return (
			<div className="bg-center bg-cover h-screen gradient-mobile">
				<div className="text-center">
					<h1 className="w-full my-2 md:text-5xl text-2xl font-bold md:pt-12 md:pb-8 pt-8 text-center text-800 text-white">
						We'd love to hear from you!
					</h1>
					<p className="mx-2 md:w-full md:text-3xl text-xl text-center text-800 text-white">
						If you have any questions or feedback, feel free to reach out to us through this form.
					</p>
				</div>

				<div className="lg:w-1/3 md:w-1/2 mx-auto">
					<form className="mt-8 space-y-6" action="https://formspree.io/f/xoqpgbkb" method="POST" onSubmit={this.submitForm}>
						<input type="hidden" name="remember" value="true"/>
						<div className="rounded-md shadow-sm -space-y-px">
							<div className="m-4">
								<label for="Name" class="sr-only">Name</label>
								<input id="name" name="name" type="text" autocomplete="name" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
							</div>
							<div className="m-4">
								<label for="Email" class="sr-only">Email</label>
								<input id="email" name="email" type="email" autocomplete="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
							</div>
							<div className="p-4">
								<textarea name="Message" className="appearance-none rounded relative block w-full h-40 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Message" />
							</div>
						</div>
						<div className="flex justify-center">
							{status === "SUCCESS" ? <p>Thanks!</p> : <button className="mx-auto text-HS-pink lg:mx-0 hover:underline rounded bg-white font-bold my-6 py-4 px-16 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Submit</button>}
							{status === "ERROR" && <p>Ooops! There was an error.</p>}
						</div>
					</form>
				</div>
      	</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
		  if (xhr.readyState !== XMLHttpRequest.DONE) return;
		  if (xhr.status === 200) {
			 form.reset();
			 this.setState({ status: "SUCCESS" });
		  } else {
			 this.setState({ status: "ERROR" });
		  }
		};
		xhr.send(data);
	 }
}

export default Feedback;