document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A' && event.target.href.includes('download')) {
    console.log("content.js BRUH");
  }
}, true);
