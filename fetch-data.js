// Initialize the Async Function
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the Data Container Element
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch Data Using try-catch
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    // Clear the Loading Message
    dataContainer.innerHTML = "";

    // Create and Append User List
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append userList to dataContainer
    dataContainer.appendChild(userList);
  } catch (error) {
    // Error Handling
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);