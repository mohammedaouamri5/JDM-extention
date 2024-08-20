document.getElementById("myButton").addEventListener("click", () => {
    print("WOW")
    fetch("https://localhost:8080/ping", {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => console.log("BRUH", data))
      .catch(error => console.error("Error:", error));
}); 
