import React from 'react';

import * as S from './styled';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<S.InputBlock>
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`form-input-label ${
						otherProps.value.length ? 'shrink' : ''
						}`}
				>
					{label}
				</label>
			) : null}
		</div>
	</S.InputBlock>
);

export default FormInput;
