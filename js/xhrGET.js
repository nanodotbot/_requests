let xhrGetFeedback = document.getElementById('xhr-get-feedback');
const sendXhrGet = document.getElementById('xhr-get-send');

const xhrGET = () => {
    const xhr = new XMLHttpRequest();
    // const url = './js/text.json';
    const url = './php/get.php';

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let response = xhr.response;
            // console.log(response);
            xhrGetFeedback.innerHTML = '';
            for (obj in response) {
                xhrGetFeedback.innerHTML += response[obj].user + " is " + response[obj].hobbies + "<br>";
            }
        }
    }
    
    xhr.open('GET', url);
    xhr.send();
};

sendXhrGet.onclick = xhrGET;

// btn.onclick = e => {
//     e.preventDefault();
//     const data = xhrGET();
//     console.log(data);
// }