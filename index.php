<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nanodots</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300&family=Mulish:wght@200&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/general.css">
    <link rel="stylesheet" href="./css/articles.css">
    <script src="./js/textarea.js" defer></script>
    <script src="./js/xhrGET.js" defer></script>
    <script src="./js/xhrPOST.js" defer></script>
    <script src="./js/fetchGET.js" defer></script>
    <script src="./js/fetchPOST.js" defer></script>
    <script src="./js/asyncGET.js" defer></script>
    <script src="./js/asyncPOST.js" defer></script>
    <script src="./js/asyncJSON.js" defer></script>
</head>
<body>

    <main>
        <section>
            <article>
                <h1>XHR get JSON from PHP</h1>
                <button id="xhr-get-send">get</button>
                <p id="xhr-get-feedback"></p>
            </article>
            <img src="/img/XHR GET transparent.svg" alt="xhr get diagram">
            <article>
                <h1>XHR post URL to PHP get JSON</h1>
                <textarea name="xhr-post-input" id="xhr-post-input" rows="1"></textarea>
                <button id="xhr-post-send">post</button>
                <p id="xhr-post-feedback"></p>
            </article>
            <img src="/img/XHR POST transparent.svg" alt="xhr post diagram">
            <article>
                <h1>fetch() get JSON from PHP</h1>
                <button id="fetch-get-send">get</button>
                <p id="fetch-get-feedback"></p>
            </article>
            <img src="/img/fetch GET transparent.svg" alt="fetch get diagram">
            <article>
                <h1>fetch() post URL to PHP get JSON</h1>
                <textarea name="fetch-post-input" id="fetch-post-input" rows="1"></textarea>
                <button id="fetch-post-send">post</button>
                <p id="fetch-post-feedback"></p>
            </article>
            <img src="/img/fetch POST transparent.svg" alt="fetch post diagram">
            <article>
                <h1>async() get JSON from PHP</h1>
                <button id="async-get-send">get</button>
                <p id="async-get-feedback"></p>
            </article>
            <img src="/img/async await GET transparent.svg" alt="async get diagram">
            <article>
                <h1>async() post URL to PHP get JSON</h1>
                <textarea name="async-post-input" id="async-post-input" rows="1"></textarea>
                <button id="async-post-send">post</button>
                <p id="async-post-feedback"></p>
            </article>
            <img src="/img/async await POST transparent.svg" alt="async post diagram">
            <article>
                <h1>async() JSON</h1>
                <textarea name="async-json-input" id="async-json-input" rows="1"></textarea>
                <button id="async-json-send">post</button>
                <p id="async-json-feedback"></p>
            </article>
        </section>
    </main>

    <footer>
        <a href="#">just a link</a>
    </footer>

</body>
</html>