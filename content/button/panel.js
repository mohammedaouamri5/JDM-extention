// const ping = document.getElementById("ping");
// ping.addEventListener("click", (event) => {
// 	fetch('http://localhost:8080/ping', {
// 		method: 'GET',
// 		mode: 'cors'
// 	})
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.error('There was a problem with the fetch operation:', error));
	

// });


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form values
    const name = document.getElementById("name").value;
    const path = document.getElementById("path").value;
    const url = document.getElementById("url").value;

    // Create the JSON object
    const data = {
        Name: name,
        Path: path,
        Url: url
    };
	console.log(data)

    // Send POST request
    fetch('http://localhost:8080/download', {
        method: 'POST',
		mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log("Server response:", result))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
});