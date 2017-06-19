import React from 'react';

const LightBox = ({props}) => (
    <div className="backdrop">
        <div className="popupLightBox">
            <img src={props.data}/>
        </div>
    </div>
);

export default LightBox;