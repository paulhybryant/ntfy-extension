const sendBtnId = document.getElementById("sendBtn");
if (sendBtnId) {
  sendBtnId.onclick = function () {
    var input = document.getElementById("messageInput");
    const serverAddress = localStorage.getItem("server-address") || "https://ntfy.sh";
    fetch(serverAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: localStorage.getItem("topic"),
        message: input.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
        input.value = "";
        /*
        if ("Notification" in window) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    const notification = new Notification("ntfy!", {
                        body: input.value,
                        icon: "icons/ntfy128.png
                    });
                }
            });
        }
        */
      })
      .catch((error) => {
        input.value = error;
        // Handle any errors that occur during the request
        console.error(error);
      });
  };
}
