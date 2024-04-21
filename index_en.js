function toggleIframe() {
    iframe = document.getElementsByName("myiFrame")[0];
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("formBtn").textContent = "Close the form"
    } else {
        iframe.style.display = "none";
        document.getElementById("formBtn").textContent = "Click here to sign up for class"

    }
}

function toggleSchedule() {
    iframe = document.getElementById("schedule");
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("scheduleBtn").textContent = "Hide the schedule"
    } else {
        iframe.style.display = "none";
        document.getElementById("scheduleBtn").textContent = "Click here to see the schedule"

    }
}