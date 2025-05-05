import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
  databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
  }
  ulEl.innerHTML = listItems
}

// Render all items using onValue
onValue(referenceInDB, function (snapshot) {
  // only run the code below if a snapshot exists 
  const snapshotValues = snapshot.val()
  if (snapshotValues) {
    const leads = Object.values(snapshotValues)
    render(leads)
  } else {
    render([]) // No leads yet
  }
})
deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB)
  ulEl.innerHTML = ""  // clear all the leads from ulEl
})

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value)
  inputEl.value = ""
})