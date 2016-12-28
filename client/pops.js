
import React from 'react';
import togglePop from './modules/core/components/togglePop';

const jPop = () => {

    var popStatus = Session.get("popStatus") ||  {
            status:false,
    };

        if(popStatus) {
            return <div onClick={togglePop} id="superPop">
                <h1>suhhh</h1>
            </div>;
        }else{
            return (
                <h1>No Pops</h1>
            );
        }

};

export default jPop;