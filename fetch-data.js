document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Initialize the Async Function
    async function fetchUserData() {
        // Step 2: Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Step 3: Select the Data Container Element
        const dataContainer = document.getElementById('api-data');

        try {
            // Step 4: Fetch Data Using try-catch
            const response = await fetch(apiUrl);
            const users = await response.json(); // Convert the response to JSON

            // Step 5: Clear the Loading Message
            dataContainer.innerHTML = '';

            // Step 6: Create and Append User List
            const userList = document.createElement('ul'); // Create a <ul> element

            users.forEach(user => {
                const listItem = document.createElement('li'); // Create a <li> element
                listItem.textContent = user.name; // Set the text content to the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            dataContainer.appendChild(userList); // Append the <ul> to the data container
        } catch (error) {
            // Step 7: Error Handling
            dataContainer.innerHTML = ''; // Clear existing content
            dataContainer.textContent = 'Failed to load user data.'; // Show error message
        }
    }

    // Step 8: Invoke fetchUserData on DOMContentLoaded
    fetchUserData(); // Run the function after the DOM is fully loaded
});
