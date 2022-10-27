let fetchGetFeedback = document.getElementById('fetch-get-feedback');
const sendFetchGet = document.getElementById('fetch-get-send');

const fetchGET = () => {
    // console.log('here i am');
    fetch('./php/get.php')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    }, networkError => {
        console.log(networkError.message)
    }
    )
    .then(jsonResponse => {
        let response = jsonResponse;
        // console.log(response);
        fetchGetFeedback.innerHTML = '';
        for (obj in response) {
            fetchGetFeedback.innerHTML += response[obj].user + " is " + response[obj].hobbies + "<br>";
        }
    });
};

sendFetchGet.onclick = fetchGET;