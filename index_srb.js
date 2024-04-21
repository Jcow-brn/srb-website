function toggleIframe() {
    iframe = document.getElementsByName("myiFrame")[0];
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("formBtn").textContent = "кликните овде да бисте затворили"
    } else {
        iframe.style.display = "none";
        document.getElementById("formBtn").textContent = "Кликните овде да се пријавите"

    }
}

function toggleSchedule() {
    iframe = document.getElementById("schedule");
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("scheduleBtn").textContent = "кликните овде да бисте затворили"
    } else {
        iframe.style.display = "none";
        document.getElementById("scheduleBtn").textContent = "Кликните да бисте приказали распоред"

    }
}