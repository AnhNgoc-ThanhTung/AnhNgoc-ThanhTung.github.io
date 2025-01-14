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
                li.textContent = `${message.name}: ${message.message}`;
                messagesList.appendChild(li);
            });
        }
    };
    xhr.send();
}

document.addEventListener('DOMContentLoaded', loadMessages);





// // script.js
// document.getElementById('rsvpForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const attendance = document.getElementById('attendance').value;
//     const message = document.getElementById('message').value;

//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://script.google.com/macros/s/AKfycbw6KghHySEAFRL9bBF-fSfW3HNwmbo5fBzYuEcfptv40wmoJOYkQAXZIv3LYD5fvDBUoQ/exec', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             alert('Dữ liệu đã được lưu thành công!');
//             document.getElementById('rsvpForm').reset();
//             loadMessages();
//         } else if (xhr.readyState === 4) {
//             alert('Đã xảy ra lỗi khi lưu dữ liệu.');
//         }
//     };
//     xhr.send(JSON.stringify({ name, phone, attendance, message }));
//     console.log(JSON.stringify({ name, phone, attendance, message }));
// });

// function loadMessages() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://script.google.com/macros/s/AKfycbw6KghHySEAFRL9bBF-fSfW3HNwmbo5fBzYuEcfptv40wmoJOYkQAXZIv3LYD5fvDBUoQ/exec', true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             const messagesList = document.getElementById('messagesList');
//             messagesList.innerHTML = '';
//             data.messages.forEach(message => {
//                 const li = document.createElement('li');
//                 li.textContent = `${message.name}: ${message.message}`;
//                 messagesList.appendChild(li);
//             });
//         }
//     };
//     xhr.send();
// }

// document.addEventListener('DOMContentLoaded', loadMessages);
