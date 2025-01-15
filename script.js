// script.js
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value;

    const params = new URLSearchParams({
        name: name,
        phone: phone,
        attendance: attendance,
        message: message
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://script.google.com/macros/s/AKfycbw6KghHySEAFRL9bBF-fSfW3HNwmbo5fBzYuEcfptv40wmoJOYkQAXZIv3LYD5fvDBUoQ/exec?${params.toString()}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Dữ liệu đã được lưu thành công!');
            document.getElementById('rsvpForm').reset();
            loadMessages();
        } else if (xhr.readyState === 4) {
            alert('Đã xảy ra lỗi khi lưu dữ liệu.');
        }
    };
    xhr.send();
});

function loadMessages() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://script.google.com/macros/s/AKfycbw6KghHySEAFRL9bBF-fSfW3HNwmbo5fBzYuEcfptv40wmoJOYkQAXZIv3LYD5fvDBUoQ/exec', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const messagesList = document.getElementById('messagesList');
            messagesList.innerHTML = '';
            data.messages.forEach(message => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${message.name}</span><p>${message.message}</p>`;
                // li.textContent = `${message.name}: ${message.message}`;
                messagesList.appendChild(li);
            });
        }
    };
    xhr.send();
}

//?n=<name>&r=<relationship>&l=<0-nhà trai||1-nhà gái>
// function GetParameter(){
//     var querystr = url ? url.split('?')[1] : window.location.search.slice(1);

// }

function Countdown(){
    var WDsec = (new Date(2025, 1, 9)).getTime();
    var td = new Date();
    var tdSec = td.getTime();
    var secs = Math.floor((-tdSec + WDsec) / 1000);

    // var timeleft = "";
    if(secs<0){
        return;
    }
    var dhm = Math.floor(secs / 86400);
    secs %= 86400;
    document.getElementById("lngay").innerText = dhm < 10 ? ("0" + dhm) : dhm;
    dhm = Math.floor(secs / 3600);
    secs %= 3600;
    document.getElementById("lgio").innerText = dhm < 10 ? ("0" + dhm) : dhm;
    dhm=Math.floor(secs / 60);
    document.getElementById("lphut").innerText = dhm < 10 ? ("0" + dhm) : dhm;
    secs %= 60;
    document.getElementById("lgiay").innerText = secs < 10 ? ("0" + secs) : secs;
}


document.addEventListener('DOMContentLoaded', loadMessages);

Countdown();
setInterval(Countdown, 1000);



