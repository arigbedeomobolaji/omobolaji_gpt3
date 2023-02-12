// jshint ignore:start

import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
	return (
		<div className='gpt3__possibility section__padding' id='possibility'>
			<div className='gpt3__possibility-image'>
				<img src={possibilityImage} alt='posImage' />
			</div>
			<div className='gpt3__possibility-content'>
				<h4>Request Early Access to Get Started </h4>
				<h1 className='gradient__text'>
					The possibilities are beyond your imagination
				</h1>
				<p>
					This HTML file is a template.If you open it directly in the
					browser, you will see an empty page. The build step will
					place the bundled scripts into the.
				</p>
				<h4>Request Early Access to Get Started </h4>
			</div>
		</div>
	);
};

export default Possibility;
