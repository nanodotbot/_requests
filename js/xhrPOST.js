const xhrPostInput = document.getElementById('xhr-post-input');
let xhrPostFeedback = document.getElementById('xhr-post-feedback');
const sendXhrPost = document.getElementById('xhr-post-send');

const xhrPOST = () => {    
    const xhr = new XMLHttpRequest();
    const url = './php/post.php';
    const data = 'data=' + xhrPostInput.value;

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const response = xhr.response;
            // console.log(response);
            xhrPostFeedback.innerHTML = '';
            for (obj in response) {
                xhrPostFeedback.innerHTML += response[obj].data + '<br>';
            }
        }
    }

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
};

sendXhrPost.onclick = xhrPOST;