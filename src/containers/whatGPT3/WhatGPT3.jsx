// jshint ignore:start

import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
	return (
		<div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
			<div className='gpt3__whatgpt3-feature'>
				<Feature
					title='What is GPT-3'
					text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, sed quos unde atque doloribus molestiae. Alias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!'
				/>
			</div>
			<div className='gpt3__whatgpt3-heading'>
				<h1 className='gradient__text'>
					The Possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</div>
			<div className='gpt3__whatgpt3-container'>
				<Feature
					title='Chatbots'
					text='lias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!'
					column
				/>
				<Feature
					title='Knowledgebase'
					text='lias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!'
					column
				/>
				<Feature
					title='Education'
					text='lias sunt reprehenderit explicabo deleniti illum numquam ut itaque eius doloribus? Veniam iste incidunt ad!'
					column
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;
