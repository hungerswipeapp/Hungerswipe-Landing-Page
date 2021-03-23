import React from 'react'

export default function Counter(props) {

	const styles = {
		fontSize: '14px',
		fontWeight: '500',
		textAlign: 'center',
		width: '75%'
	}

	return (
		<div>
			<p style={styles} className="leading-normal text-pink-500 ml-10">You and <u>{props.count}</u> other people are waiting for HungerSwipe!</p>
		</div>
	)
}
