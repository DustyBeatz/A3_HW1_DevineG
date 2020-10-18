(()=>{


let myReq = new XMLHttpRequest;

    // add an event handler so that we can track the stages of the request and respond accordingly
    myReq.addEventListener("readystatechange", handleRequest);

    // get the request ready to go / configure it with method and resource request
    myReq.open('GET', './data/classData.json');

    //send the request off to the server
    myReq.send();

    //this is a passive listener function - it gets invoked for every stage of the AJAX request. When the request is done and the data payload is returned from the server it passes that data to the handleDataSet function

    function handleRequest() {
        // debugger;
        if (myReq.readyState === XMLHttpRequest.DONE) {
            // debugger;
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                console.log(myReq);
                 handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }




    // //make an AJAX request using fetch API
    // fetch('./data/classData.json')
    //     .then(res => res.json())
    //     .then(handleDataSet => {
    //       //  debugger;
    //     // console.log(data);
    //     //handleData
    //     //here's where you would call the function that puts the pieces on the page.
    //     handleDataSet();
    // })
    // .catch((err) => {
    //     console.log(err);
    // })


    //This is where we populate the page with the json elements
    debugger;

    function handleDataSet(data) {

        let profData = JSON.parse(data),
        profSection = document.querySelector(".prof-section"),
        profTemplate = document.querySelector("#prof-template").content;

        currentProf = profTemplate.querySelector(".profUser").children

        currentProf[1].textContent.coursename;

        // for (let prof in profData) {
        //     debugger;


        //     // let currentProf = profTemplate.cloneNode(true),

        //     // currentProfText[2].textContent = profData[prof].courscode;
        //     // currentProfText[3].textContent = profData[prof].profname;
        //     // currentProfText[4].textContent = profData[prof].classtime;

        //     // profSection.appendChild(prof);
        //     console.log(currentProf);
        // }

        console.log(data);
    }
})();