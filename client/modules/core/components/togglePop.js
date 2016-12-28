const togglePop = () =>{

    console.log("Suhhh dude");


    var popStatus = Session.get("popStatus");

    var popObject = Session.get("popStatus").status == 'true' ? {
        status: true,
    } : {
        status: false,
    };

    Session.set("popStatus", popObject);
};

export default togglePop;
