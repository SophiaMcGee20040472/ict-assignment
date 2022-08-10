import React from 'react';
import { Users } from '../users';
import { useState } from 'react';

const SearchBox = (props) => {
	const [query, setQuery] = useState("");
	console.log(query)
	return (
		<div >
			<input
				type= "text"
				placeholder='Type to search...'
				className='search' 
				onChange={(e)=> setQuery(e.target.value)}/>
				<ul className="list">
					{Users.map((user)=>(<li key={user.id} className='="listItem'>{user.name}</li>))}
					</ul>
		</div>
	);
};

export default SearchBox;