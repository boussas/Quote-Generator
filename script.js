document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.querySelector(".quote");
    const authorElement = document.querySelector(".author");
    const newQuoteButton = document.querySelector(".new");
    const copy=document.querySelector(".copy")
    copy.addEventListener("click",()=>{
        navigator.clipboard.writeText(quoteElement.textContent)
    })
    async function getQuote() {
        try {
            const response = await fetch("https://api.quotable.io/quotes/random");
            const responseData = await response.json();
            
            console.log("Response from API:", responseData); 
            quoteElement.textContent = ` ${responseData[0].content} `;
            authorElement.textContent = `— ${responseData[0].author}`;
        } catch (error) {
            console.error("Error fetching quote:", error);
            quoteElement.textContent = "Error fetching quote.";
            authorElement.textContent = "";
        }
    }

    newQuoteButton.addEventListener("click", getQuote);
    getQuote();
});


