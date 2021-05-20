import React from 'react';
import styled from 'styled-components';
import GooglePlayIcon from 'mdi-react/GooglePlayIcon';
import AppleIcon from 'mdi-react/AppleIcon';

export default function HowWeBuild() {
	return (
		<section className="flex flex-col pt-10 px-24 pb-24 items-center">
			<img src="/assets/homepage/row3-icon1.svg" className="h-8 w-8" />
			<span className="font-semibold text-3xl leading-10 text-center capitalize mb-20">
				Watch how we Build with Dreambodi
			</span>
			<div className="flex flex-wrap items-center justify-center">
				<img src="/assets/homepage/row3-img.svg" className="h-84 w-1/4 object-cover mr-10 sm:w-8/10 sm:mb-20 sm:mr-0" />
				<div className="flex flex-col w-1/3.5 sm:w-full">
					<span className="font-semibold text-md leading-4 text-custom-101 mb-4 sm:text-lg">
						Join over 15,000+ trainer to train from home
					</span>
					<span className="font-arial font-extrabold text-4xl leading-10 tracking-tight mb-6 text-110 opacity-90">
						Download Dreambodi today to get started
					</span>
					<span className="text-sm mb-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
					</span>
					<div className="flex items-center text-ft">
						<div className="flex items-center text-sm rounded-md border-1 border-custom-111 py-1 px-3 cursor-pointer mr-6">
							<GooglePlayIcon className="h-6 w-6 mr-4 text-custom-102" />
							<div className="flex flex-col text-sm">
								<span>Get Dreambodi</span>
								<span className="font-bold">Google Play</span>
							</div>
						</div>
						<div className="flex items-center text-sm rounded-md border-1 border-custom-111 py-1 px-3 cursor-pointer">
							<AppleIcon className="h-6 w-6 mr-4 text-custom-102" />
							<div className="flex flex-col text-sm">
								<span>Get Dreambodi</span>
								<span className="font-bold">App Store</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
