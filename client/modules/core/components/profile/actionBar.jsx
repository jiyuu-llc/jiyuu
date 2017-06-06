import React, {Component} from "react";
import { Slider, Slides, Dots, PrevArrow, NextArrow } from 'better-react-flex-slick'



class ActionBar extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {user} = this.props;
        return(
            <div className="action-bar box-shadow">
                <a className="action-button" href="">Connect</a>
                <div className="action-bar-divider"></div>
                <a className="action-button" href="">Message</a>
                <div className="action-bar-divider hidden-sm-up"></div>
                <a className="action-button hidden-sm-up" href={"/profile/" + user.username + "/experiences"}>Experiences</a>
                <div className="action-bar-divider hidden-sm-up"></div>
                <a className="action-button hidden-sm-up" href={"/profile/" + user.username + "/media"}>Media</a>
            </div>
        )
    }

    componentDidMount(){
    }

}


export default ActionBar;