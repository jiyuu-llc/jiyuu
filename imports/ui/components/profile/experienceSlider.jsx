import React, {Component} from "react";



class ExperienceSlider extends Component{

    constructor(props) {
        super(props);
        this.state =  {experiences: this.props.media, position: 0}
    }

    moveForward() {
        var next = this.state.position + 1;
        this.setState({position: next});
    }

    render(){
        const {media} = this.state.media;
        return(
            <div onClick={this.moveForward} className="experienceSlider">
                <img src={media[this.state.position].url}/>
            </div>
        )
    }

    componentDidMount(){
    }

}


export default ExperienceSlider;