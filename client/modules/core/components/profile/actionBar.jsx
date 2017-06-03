import React, {Component} from "react";
import Slider from "react-slick";



class ActionBar extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {user} = this.props;
        var settings = {
            dots: false,
            arrow:false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            touchMove: true
        };


        return(
            <Slider className="action-bar" {...settings}>
                <a className="action-button" href="">Connect</a>
                <a className="action-button" href="">Message</a>
                <a className="action-button hidden-sm-up" href={"/profile/" + user.username + "/experiences"}>Experiences</a>
                <div className="action-bar-divider hidden-sm-up"></div>
                <a className="action-button hidden-sm-up" href={"/profile/" + user.username + "/media"}>Media</a>
            </Slider>
        )
    }

    componentDidMount(){
    }

}


export default ActionBar;