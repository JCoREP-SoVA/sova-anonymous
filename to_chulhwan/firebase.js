var firebaseConfig = {
  apiKey: "AIzaSyDzItsp73dPYabJoihOt3BFtiHjS_sJiT4",
  authDomain: "sova-anonymous-1e5d8.firebaseapp.com",
  databaseURL: "https://sova-anonymous-1e5d8-default-rtdb.firebaseio.com",
  projectId: "sova-anonymous-1e5d8",
  storageBucket: "sova-anonymous-1e5d8.appspot.com",
  messagingSenderId: "101152517586",
  appId: "1:101152517586:web:436857a2f5878186906c0b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("anonymous");
const show = document.querySelector("#show-list");

function sendMsg() {
  let text = document.querySelector("#input-box").value;
  if (text != "") {
    db.push({
      content: text,
    });
    showMsg();
    document.querySelector("#input-box").value = "";
  }
}

function showMsg() {
  db.on("child_added", (snapshot) => {
    const data = snapshot.val();

    let wrapper = document.createElement("div");
    let newDiv = document.createElement("div");
    let icon = document.createElement("i");
    let newLi = document.createElement("li");

    let newText = document.createTextNode(data.content);

    icon.setAttribute("class", "far fa-user");
    newDiv.appendChild(icon);

    newDiv.setAttribute("class", "user-icon");
    wrapper.appendChild(newDiv);

    newLi.setAttribute("class", "msg-item");
    newLi.appendChild(newText);

    wrapper.setAttribute("class", "wrapper");

    wrapper.appendChild(newLi);
    show.removeChild();
    show.appendChild(wrapper);
  });
}

function init() {
  db.on("child_added", (snapshot) => {
    const data = snapshot.val();

    let wrapper = document.createElement("div");
    let newDiv = document.createElement("div");
    let icon = document.createElement("i");
    let newLi = document.createElement("li");

    let newText = document.createTextNode(data.content);

    icon.setAttribute("class", "far fa-user");
    newDiv.appendChild(icon);

    newDiv.setAttribute("class", "user-icon");
    wrapper.appendChild(newDiv);

    newLi.setAttribute("class", "msg-item");
    newLi.appendChild(newText);

    wrapper.setAttribute("class", "wrapper");

    wrapper.appendChild(newLi);
    show.appendChild(wrapper);
  });
}

init();
