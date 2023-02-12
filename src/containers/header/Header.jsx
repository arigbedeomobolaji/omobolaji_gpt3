// jshint ignore:start

import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
	return (
		<div id='home' className='gpt3__header section__padding'>
			<div className='gpt3__header-content'>
				<h1 className='				gradient__text'>
					Let's Build Something Amazing with GPT-3 OPenAI
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Possimus incidunt nihil veritatis eveniet! Vero, laboriosam
					facilis dicta natus autem iure nisi eos obcaecati hic,
					facere cupiditate atque dolore blanditiis a!
				</p>
				<div className='gpt3__header-content__input'>
					<input type='email' placeholder='Enter your email' />
					<button type='button'>Get Started</button>
				</div>

				<div className='gpt3__header-content__people'>
					<img src={people} alt='users' />
					<p>
						1600+ people requested access to visit for the past 24
						hours
					</p>
				</div>
			</div>
			<div className='gpt3__header-image'>
				<img src={ai} alt='ai' />
			</div>
		</div>
	);
};

export default Header;
