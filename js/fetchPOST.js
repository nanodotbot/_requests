const fetchPostInput = document.getElementById('fetch-post-input');
let fetchPostFeedback = document.getElementById('fetch-post-feedback');
const sendFetchPost = document.getElementById('fetch-post-send');

const fetchPOST = () => {
    const url = './php/post.php';
    const data = 'data=' + fetchPostInput.value;

    // console.log(data);

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    })
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
        fetchPostFeedback.innerHTML = '';
        for (obj in response) {
            fetchPostFeedback.innerHTML += response[obj].data + '<br>';
        }
});
};

sendFetchPost.onclick = fetchPOST;
