// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');

// const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";

// Function to fetch word definition from an API
const fetchDefinition = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (response.ok) {
            displayResult(data[0]); // Passing the first entry of the response
        } else {
            document.getElementById('result').innerHTML = `<p>No definition found for ${word}. Please try another word.</p>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>There was an error fetching the data. Please try again later.</p>`;
    }
};

// Function to display the result in the result div
const displayResult = (data) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Word: ${data.word}</h2>
        <p><strong>Definition:</strong> ${data.meanings[0].definitions[0].definition}</p>
        <p><strong>Part of Speech:</strong> ${data.meanings[0].partOfSpeech}</p>
        <p><strong>Example:</strong> ${data.meanings[0].definitions[0].example || "No example available"}</p>
    `;
};

// Adding event listener for the Search button
document.getElementById('btn').addEventListener('click', () => {
    const word = document.getElementById('input').value.trim();
    if (word) {
        fetchDefinition(word);
    } else {
        document.getElementById('result').innerHTML = '<p>Please enter a word to search.</p>';
    }
});

// Optional: Trigger search on Enter key press
document.getElementById('input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const word = document.getElementById('input').value.trim();
        if (word) {
            fetchDefinition(word);
        }
    }
});