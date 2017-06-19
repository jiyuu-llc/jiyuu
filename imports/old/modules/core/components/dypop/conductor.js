import React from 'react';
import Modal from './modal';
import LightBox from './lightBox';


const Conductor = ({props}) => {
    console.log(props);
    switch (props.type) {
        case 'modal':
            return <Modal props={props} />;

        case 'lightbox':
            return <LightBox props={props}/>;

        default:
            return null;
    }
};

export default Conductor;