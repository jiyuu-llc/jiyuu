import React from 'react';


const Interests = () => ({


    interestsNext(){
        var data = $('input:checked').map(function(){
            return $(this).val();
        }).get();
        
        if(data){
            Session.set('interests', data);
            FlowRouter.go("/register/9");
        }else{
            alert("Please choose at least one interest.");
        }
    },

    render() {
        return (
            <div id="jiyuu">
                <h2 className="question">What are some of your interests?</h2>
                <div id="question-card" className="form-group">
                    <div className="col-sm-12" id="questionInputContain">

                        <div className="ctn-small">
                        <div className="form-group">
                            <div className="new-line">
                                <label htmlFor="news"><input type="checkbox" name="news" value="news"/>World News</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="science"> <input type="checkbox" name="science" value="science"/>Science</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="technology"><input type="checkbox" name="technology" value="technology"/>Technology</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="hippie"><input type="checkbox" name="hippie" value="hippie"/>Hippie Stuff</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="sports"><input type="checkbox" name="sports" value="sports"/>Sports</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="astrology"><input type="checkbox" name="astrology" value="astrology"/>Astrology</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="cooking"><input type="checkbox" name="cooking" value="cooking"/>Cooking</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="art"><input type="checkbox" name="art" value="art"/>Art</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="videoGames"><input type="checkbox" name="videoGames" value="videoGames"/>Video Games</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="randomFacts"><input type="checkbox" name="randomFacts" value="randomFacts"/>Random Facts</label>
                            </div>
                            <div className="new-line">
                                <label htmlFor="travel"><input type="checkbox" name="travel" value="travel"/>Travel</label>
                            </div>
                        </div>

                        </div>

                    </div>
                    <div className="qnext-bottom" onClick={this.interestsNext.bind(this)}>
                        <i className="fa fa-caret-right" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        );
    }
});

export default Interests;

