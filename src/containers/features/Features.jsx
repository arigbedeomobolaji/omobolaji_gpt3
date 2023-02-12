// jshint ignore:start

import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
	{
		title: 'Improving end distrusts instantly',
		text: 'Voluptate, sed quos unde atque doloribus molestiae. Alias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!',
	},
	{
		title: 'Become the tended active',
		text: 'Voluptate, sed quos unde atque doloribus molestiae. Alias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!',
	},
	{
		title: 'Message of an nothing',
		text: 'Voluptate, sed quos unde atque doloribus molestiae. Alias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!',
	},
	{
		title: 'Really boy law county',
		text: 'Voluptate, sed quos unde atque doloribus molestiae. Alias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!',
	},
];
const Features = () => {
	return (
		<div className='gpt3__features section__padding' id='features'>
			<div className='gpt3__features-heading'>
				<h1 className='gradient__text'>
					The Feature You Just Need to Realize It. Step into Future
					Today & Make it Happen
				</h1>
				<p>Request Early Access to Get Started.</p>
			</div>
			<div className='gpt3__features-container'>
				{featuresData.map(({ title, text }, index) => (
					<Feature title={title} text={text} key={title + index} />
				))}
			</div>
		</div>
	);
};

export default Features;
