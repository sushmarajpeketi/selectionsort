const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {

    //for loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {

        // To generate random values from 1 to 100

        var value = Number(prompt("Enter a Value"))
        while (value === "" || isNaN(value)) {

            value = prompt("Enter a valid input ")
        }

        // if(value === ""){
        //     value = prompt("Enter a valid input ")
        // }
        // else if(isNaN(value)){
        //     value = prompt("Enter a valid input ")
        // }



        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/ClassList     
        // bar aney div element ki class add chesthunnam ....!!!!

        // Provide height to the bar
        bar.style.height = `${value * 3}px`;
        // to assign values inside string

        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;
        //translateX mean translate along X axis.... 

        // To create element "label"
        const barLabel = document.createElement("label");
        //label element is assigned to barlabel constant

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");
        // bar_id class is assigned to barlabel element

        // Assign value to "label"
        barLabel.innerHTML = value;



        // Append "Label" to "div"
        bar.appendChild(barLabel);
        // barlabel label is added to bar div ....so bar is the parent of label

        // Append "div" to "data-container div"
        container.appendChild(bar);
        // bar div is added to container section...so section is the parent of div

    }
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// asynchronous function to perform "Selection Sort"

async function SelectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {

        // Assign i to min_idx
        min_idx = i;

        // Provide darkblue color to the ith bar
        bars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < bars.length; j += 1) {

            // Pr ovide red color to the jth bar
            bars[j].style.backgroundColor = "red";

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // To store the integer value of jth bar to var1
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);

            // To store the integer value of (min_idx)th bar to var2
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            // Compare val1 & val2
            if (val1 < val2) {
                if (min_idx !== i) {

                    // Provide skyblue color to the (min-idx)th bar
                    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {

                // Provide skyblue color to the jth bar
                bars[j].style.backgroundColor = " rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }



    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();


// function to disable the button
function disable() {

    // To disable the button "Selection Sort"
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
