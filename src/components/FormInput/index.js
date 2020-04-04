import React from 'react';

import * as S from './styled';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<S.InputBlock>
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
						} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	</S.InputBlock>
);

export default FormInput;
