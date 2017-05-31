import React from 'react';

const renderIfData = (data) => {
    switch (data.dataType) {
        case "image/gif":
        case "image/png":
        case "image/jpeg":
            return <img id={"img-" + data._id} className="msg-pic" src={data.data}/>;
            break;
        case "application/zip":
        case "application/x-compressed":
            return <a id={"zip-" + data._id} href={data.data}>Zip file</a>;
            break;
        case "video/mp4":
            return <video id={"vid-" + data._id} controls>
                <source src={data.data} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>;
            break;
        case "video/quicktime":
            return <video id={"vid-" + data._id} controls>
                <source src={data.data} type="video/quicktime"/>
                        Your browser does not support the video tag.
            </video>;
            break;
        default:
           return false;
            break;
    }
};


class Render extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {data} = this.props;
        return(
            <div id={"render-" + this.props.data._id} className="render-c">
                {renderIfData(data)}
            </div>
        )
    }
}

export default Render;

