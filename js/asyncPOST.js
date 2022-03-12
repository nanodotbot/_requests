const asyncPostInput = document.getElementById('async-post-input');
let asyncPOSTFeedback = document.getElementById('async-post-feedback');
const asyncPOSTSend = document.getElementById('async-post-send');

const asyncPOST = async () => {
    try {
        const data = 'data=' + asyncPostInput.value;
        const response = await fetch('./php/post.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: data
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            asyncPOSTFeedback.innerHTML = '';
            for (obj in jsonResponse) {
                asyncPOSTFeedback.innerHTML += jsonResponse[obj].data + '<br>';
            }
        }
        // throw new Error('Request failed!')
    }
    catch (error) {
        console.log(error);
    }
}

asyncPOSTSend.onclick = asyncPOST;