// // Fetch and Store the Date
// function generate() {
//   const saveData = {
//     myFile: document.getElementById("myFile").value,
//     firstName: document.getElementById("firstName").value,
//     secondName: document.getElementById("secondName").value,
//     qualification: document.getElementById("qualification").value,
//     email: document.getElementById("email").value,
//     description: document.getElementById("description").value,
//   };
//   // Save into Local Storage
//   localStorage.setItem("userData", JSON.stringify(saveData));
//   // Navigate into Template Page
//   window.location.href = "Template/temp.html";
// }
// export { generate };
function generate() {
  const fileInput = document.getElementById("myFile");
  if (!fileInput.files[0]) {
    alert("Please upload an image!");
    return;
  }
  const reader = new FileReader();

  reader.onloadend = function () {
    const saveData = {
      myFile: reader.result, // Base64 image data
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
  };

  if (fileInput.files[0]) {
    reader.readAsDataURL(fileInput.files[0]); // Convert image to base64
  }
}
export { generate };
