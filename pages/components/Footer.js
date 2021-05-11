import React from 'react';
import GooglePlayIcon from 'mdi-react/GooglePlayIcon';
import AppleIcon from 'mdi-react/AppleIcon';

export default function Footer() {
	return (
		<footer className="flex flex-col bg-white px-20 pt-16 pb-12">
			<div className="flex justify-between mb-12">
				<div className="flex flex-col w-3/10">
					<img className="w-48 h-20 object-contain mb-4" src="/assets/homepage/logo.svg" />
					<h4 className="font-medium mb-2">Your business partner solutions</h4>
					<span className="text-sm font-extralight mb-6 opacity-75">
						We make fitness fun, effective and simple. Our coaches lead the fitness industry when it comes
						to helping people get into the best shape.
					</span>
					<div className="flex items-center mb-2">
						<div className="h-10 w-10 rounded-full border-1 border-orange-300 flex items-center justify-center mr-4">
							<img src="/assets/homepage/address-icon.svg" className="h-4 w-4" />
						</div>
						<span className="block text-sm w-64 opacity-90">
							17A Hon. Temple Amadi Street GRA phase 2 Port Harcourt
						</span>
					</div>
					<div className="flex items-center">
						<div className="h-10 w-10 rounded-full border-1 border-orange-300 flex items-center justify-center mr-4">
							<img src="/assets/homepage/phone-icon.svg" className="h-4 w-4" />
						</div>
						<span className="block text-sm w-64 opacity-90">+2349022169861</span>
					</div>
				</div>
				<div className="flex flex-col w-1.5/12">
					<h2 className="flex items-center h-20 font-semibold">Quick Links</h2>
					<nav className="text-sm">
						<ul>
							<li className="mb-2">
								<a>About Riilfit</a>
							</li>
							<li className="mb-2">
								<a>Contact us</a>
							</li>
							<li className="mb-2">
								<a>Privacy Policy</a>
							</li>
							<li>
								<a>Legal Disclaimer</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex flex-col w-1/4">
					<span className="flex items-center h-20 text-custom-101 text-base font-medium">
						Join over 15,000+ trainers
					</span>
					<h4 className="text-3xl font-bold mb-4">Download Riilfiit today to get started</h4>
					<span className="text-sm mb-4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
					</span>
					<div className="flex justify-between items-center">
						<div className="flex items-center border-1 border-gray-200 rounded-md px-3 py-1 hover:opacity-80 cursor-pointer">
							<GooglePlayIcon className="text-custom-102 mr-4 h-6 w-6" />
							<div className="flex flex-col text-xs">
								<span>Get Riilfit on</span>
								<span className="font-semibold">Google Play</span>
							</div>
						</div>
						<div className="flex items-center border-1 border-gray-200 rounded-md px-3 py-1 hover:opacity-80 cursor-pointer">
							<AppleIcon className="text-custom-102 mr-4 h-6 w-6" />
							<div className="flex flex-col text-xs">
								<span>Get Riilfit on</span>
								<span className="font-semibold">App Store</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className="block text-center text-sm opacity-75">Riilfit.com - © 2021 All Rights Reserved</span>
		</footer>
	);
}
