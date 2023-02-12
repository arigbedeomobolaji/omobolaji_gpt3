// jshint ignore:start

import React from 'react';
import './feature.css';

const Feature = ({ title, text, column }) => {
	return (
		<div
			className={`gpt3__features-container__feature ${
				column && 'gpt3__features-container__feature-column'
			}`}
		>
			<div className='gpt3__features-container__feature-title'>
				<div />
				<h1>{title}</h1>
			</div>
			<div className='gpt3__features-container__feature-text'>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Feature;
