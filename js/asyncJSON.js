const asyncJsonInput = document.getElementById('async-json-input');
let asyncJsonFeedback = document.getElementById('async-json-feedback');
const asyncJsonSend = document.getElementById('async-json-send');

const asyncJson = async () => {
    try {
        const input = asyncJsonInput.value;
        const data = JSON.stringify({data: input});
        const response = await fetch('./php/json.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            for (obj in jsonResponse) {
                asyncJsonFeedback.innerHTML += jsonResponse[obj].data + '<br>';
            }
        }
        // throw new Error('Request failed!')
    }
    catch (error) {
        console.log(error);
    }
}

asyncJsonSend.onclick = asyncJson;