import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import {
  getDatabase,
  ref,
  push,
  onValue
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
  const snapshotValues = snapshot.val()
  const leads = Object.values(snapshotValues)
  render(leads)
})

deleteBtn.addEventListener("dblclick", function () {

})

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value)
  inputEl.value = ""
})