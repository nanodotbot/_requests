var textarea = document.querySelector('textarea');

textarea.oninput = () => {
	textarea.style.height = ''; // reset  height
    textarea.style.height = textarea.scrollHeight + "px";
};