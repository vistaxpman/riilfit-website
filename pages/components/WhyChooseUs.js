import React from 'react';
import styled from 'styled-components';
import StarIcon from 'mdi-react/StarIcon';
import CheckIcon from 'mdi-react/CheckIcon';

export default function WhyChooseUs() {
	return (
		<section className="py-16 px-20 bg-custom-103 flex justify-center rounded-tr-6xl sm:flex-col">
			<div className="w-2/5 relative h-80 mr-16 flex justify-end sm:w-full sm:justify-center sm:mr-0 sm:mb-32">
				<img
					src="/assets/homepage/row2-banner.svg"
					className="rounded-t-2xl rounded-br-2xl rounded-bl-10xl sm:rounded-bl-20xl sm:w-3/5 sm:h-96 sm:object-contain"
				/>
			</div>
			<div className="w-1/2 flex flex-col sm:w-full">
				<div className="flex items-center mb-4 sm:w-4/5 sm:mx-auto">
					<span className="h-0.5 w-12 bg-custom-109 rounded-10xl mr-4 bg-opacity-50"></span>
					<span className="text-sm italic text-custom-109 font-bold opacity-50">Why Choose Us</span>
				</div>
				<span className="text-lg font-medium leading-6 mb-10 sm:w-4/5 sm:mx-auto">
					Here is some reason why you <br /> should choose us
				</span>
				<div className="flex sm:flex-col sm:items-center">
					<div className="w-2/5 flex flex-col h-64 rounded-md shadow-md py-6 px-4 bg-white mr-8 sm:mr-0 sm:w-4/5 lg:h-72">
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
					<div className="w-2/5 flex flex-col h-64 rounded-md shadow-md py-6 px-4 bg-white mt-20 sm:w-4/5 lg:h-72">
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
