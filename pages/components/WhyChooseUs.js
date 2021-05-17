import React from 'react';
import styled from 'styled-components';
import StarIcon from 'mdi-react/StarIcon';
import CheckIcon from 'mdi-react/CheckIcon';

export default function WhyChooseUs() {
	return (
		<section className="py-16 px-20 bg-custom-103 flex justify-center rounded-tr-6xl">
			<div className="w-2/5 relative h-80 mr-16 flex justify-end">
				<img src="/assets/homepage/row2-banner.svg" className="rounded-t-2xl rounded-br-2xl rounded-bl-10xl" />
			</div>
			<div className="w-1/2 flex flex-col">
				<div className="flex items-center mb-4">
					<span className="h-0.5 w-12 bg-custom-109 rounded-10xl mr-4 bg-opacity-50"></span>
					<span className="text-sm italic text-custom-109 font-bold opacity-50">Why Choose Us</span>
				</div>
				<span className="text-lg font-medium leading-6 mb-10">
					Here is some reason why you <br /> should choose us
				</span>
				<div className="flex">
					<div className="w-2/5 flex flex-col h-64 rounded-md shadow-md p-4 bg-white mr-8">
						<div className="mb-auto">
							<StarIcon className="text-custom-104 bg-custom-107 rounded-full h-8 w-8 p-1 flex items-center justify-center" />
						</div>
						<span className="font-bold mb-auto uppercase">EXCLUSIVE</span>
						<span className="text-sm">
							Our rigs are used by serious gyms for serious fitness. We take training to the next level
							with bespoke cooperative service, design and fit out to ensure your gym is filled with the
							best possible.
						</span>
					</div>
					<div className="w-2/5 flex flex-col h-64 rounded-md shadow-md p-4 bg-white mt-20">
						<div className="mb-auto">
							<CheckIcon className="text-custom-104 bg-custom-107 rounded-full h-8 w-8 p-1 flex items-center justify-center" />
						</div>
						<span className="font-bold mb-auto uppercase">Trusted</span>
						<span className="text-sm">
							Our rigs are used by serious gyms for serious fitness. We take training to the next level
							with bespoke cooperative service, design and fit out to ensure your gym is filled with the
							best possible.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
