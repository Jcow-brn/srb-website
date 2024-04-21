function toggleIframe() {
    iframe = document.getElementsByName("myiFrame")[0];
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("formBtn").textContent = "Закрыть форму"
    } else {
        iframe.style.display = "none";
        document.getElementById("formBtn").textContent = "Нажмите чтобы записаться на занятия"

    }
}

function toggleSchedule() {
    iframe = document.getElementById("schedule");
    if (iframe.style.display != "block") {
        iframe.style.display = "block";
        document.getElementById("scheduleBtn").textContent = "Закрыть расписание"
    } else {
        iframe.style.display = "none";
        document.getElementById("scheduleBtn").textContent = "Нажмите чтобы показать расписание"

    }
}