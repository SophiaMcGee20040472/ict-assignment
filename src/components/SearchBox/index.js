import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
                style = {{background: "#DAF7A6", color:"purple"}}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;