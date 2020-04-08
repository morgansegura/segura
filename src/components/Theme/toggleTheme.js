import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { WiMoonAltFirstQuarter } from "react-icons/wi";
import './styled'

const ToggleTheme = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<button onClick={toggleTheme} >
			<WiMoonAltFirstQuarter />
		</button>
	);
};

ToggleTheme.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default ToggleTheme;