import React from 'react';

const renderIfData = (data) => {
    switch (data.dataType) {
        case "image/gif":
        case "image/png":
        case "image/jpeg":
            return <img className="msg-pic" src={data.data}/>;
            break;
        case "application/zip":
        case "application/x-compressed":
            return <a href={data.data}>Zip file</a>;
            break;
        case "video/mp4":
            return <video controls>
                <source src={data.data} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>;
            break;
        case "video/quicktime":
            return <video controls>
                <source src={data.data} type="video/quicktime"/>
                        Your browser does not support the video tag.
            </video>;
            break;
        default:
           return false;
            break;
    }
};


const Render = ({data}) => ({
    render(){
        return(
            <div id={"render-" + data._id} className="render-c">
                {renderIfData(data)}
            </div>
        )
    }
});
export default Render;

