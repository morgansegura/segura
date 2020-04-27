import React from 'react';
import { Reacteroids } from './Reacteroids';

const WrapGameElement = ({ props }) => (
    <div style={{ height: '100vh', position: 'fixed', width: '100%' }}>
        <Reacteroids {...props} />
    </div>
);

export default WrapGameElement;
