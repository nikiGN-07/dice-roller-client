async function checkServerAvailability() {
    try {
        const response = await fetch('https://dice-roller-node-g4c6aaa3etdvbmex.eastus-01.azurewebsites.net/'); // Adjust the URL as needed
        if (response.ok) {
            // Server is available, show the button
            document.getElementById('fetchButton').style.display = 'block';
        } else {
            throw new Error('Server is not available');
        }
    } catch (error) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `Error: ${error.message}`;
    }
}

async function rollDice() {
    try {
        const response = await fetch('https://dice-roller-node-g4c6aaa3etdvbmex.eastus-01.azurewebsites.net/roll-dice');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Display the results on the webpage
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `Rolls: ${data.result}`; // Assuming the response has a 'result' field
    } catch (error) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `Error: ${error.message}`;
    }
}

window.onload = checkServerAvailability;
