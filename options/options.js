document.addEventListener("DOMContentLoaded", function () {
  const serverAddress = document.getElementById("server-address");
  serverAddress.value = localStorage.getItem("server-address");

  const topic = document.getElementById("topic");
  topic.value = localStorage.getItem("topic");

  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", function () {
    localStorage.setItem("server-address", serverAddress.value);
    localStorage.setItem("topic", topic.value);
    console.log("Settings saved successfully!");
  });
});
