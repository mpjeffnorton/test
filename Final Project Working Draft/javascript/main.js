window.onload = function() {
    var date = new Date();
    var hours = date.getHours();
    document.getElementById("homepageheader").innerHTML = getGreeting(hours);
};

function getGreeting(hours) {
    var greetingText;
    if (hours >=6 && hours < 12) {
        greetingText = "Good morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good afternoon!";
    } else if (hours >= 17 && hours < 23) {
        greetingText = "Good Evening!";
    }
    return '<b>' + greetingText + '</b> Digital Literacy Homepage';
}

