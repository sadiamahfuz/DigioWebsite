import React from 'react';

const pageTitleStyle = {
	fontWeight: 500
};

const PageTitle = (props) => {
	return (
		<div>
			<h1 style={pageTitleStyle}> {props.title} </h1>
		</div>
	);
};

export default PageTitle;