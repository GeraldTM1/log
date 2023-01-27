function logIP() {
    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        var userip = data.ip;
        var city = data.city;
        var region = data.region;
        var postal = data.postal;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "logger.php?ip=" + userip + "&city=" + city + "&region=" + region + "&postal=" + postal, true);
        xhr.send();
    });
}
