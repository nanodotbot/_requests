let asyncGetFeedback = document.getElementById('async-get-feedback');
const asyncGetSend = document.getElementById('async-get-send');

const asyncGet = async () => {
    try {
        const response = await fetch('./php/get.php');
        if (response.ok) {
            const jsonResponse = await response.json();
            asyncGetFeedback.innerHTML = '';
            for (obj in jsonResponse) {
                asyncGetFeedback.innerHTML += jsonResponse[obj].user + " is " + jsonResponse[obj].hobbies + "<br>";
            }
        }
        // throw new Error('Request failed!')
    }
    catch (error) {
        console.log(error);
    }
}

asyncGetSend.onclick = asyncGet;