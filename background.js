chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "fetchPing") {
      fetch("https://localhost:8080/ping", {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => {
        console.log("BRUH", data);
        sendResponse({message: "Success", data: data});
      })
      .catch(error => {
        console.error("Error:", error);
        sendResponse({message: "Failure", error: error});
      });
  
      // Required to keep the message channel open until sendResponse is called
      return true;
    }
  });
  