// Fetch and Store the Date
function generate() {
  const saveData = {
    myFile: document.getElementById("myFile").value,
    firstName: document.getElementById("firstName").value,
    secondName: document.getElementById("secondName").value,
    qualification: document.getElementById("qualification").value,
    email: document.getElementById("email").value,
    description: document.getElementById("description").value,
  };
  // Save into Local Storage
  localStorage.setItem("userData", JSON.stringify(saveData));
  // Navigate into Template Page
  window.location.href = "Template/temp.html";
}
export { generate };
