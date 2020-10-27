var affirmationRadioButton = document.querySelector("#affirmation-button")
var mantraRadioButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")
var clearMessageButton = document.querySelector("#clear-message")
var takeMeBackButton = document.querySelector("#take-me-back")

var formPopup = document.querySelector(".form-popup")
var userMessageForm = document.querySelector("#user-message-form")
var userMessageInput = document.querySelector("#user-message-input")
var openFormButton = document.querySelector("#open-form")
var closeFormButton = document.querySelector("#close-form")
var userAffirmationRadioButton = document.querySelector("#user-affirmation-button")
var userMantraRadioButton = document.querySelector("#user-mantra-button")
var submitUserMessageButton = document.querySelector("#submit-form")
var cancelFormButton = document.querySelector("#cancel-form")

var meditateIcon = document.querySelector("#medIcon")
var topHalf = document.querySelector("#top-half")
var bottomHalf = document.querySelector("#bottom-half")
var bottomBoxContent = document.querySelector("#bottom-box")

getMessageButton.addEventListener("click", getMessageType)
clearMessageButton.addEventListener("click", resetForm)
openFormButton.addEventListener("click", openUserMessageForm)
submitUserMessageButton.addEventListener("click", submitUserMessage)
cancelFormButton.addEventListener("click", closeUserMessageForm)

var defaultAffs = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom and power to create the life I desire."
]
var userAffs = [
  "aff user message 1",
  "aff user message 2",
  "aff user message 3",
]
var defaultMantras = [
  "I am enough.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness."
]
var userMantras = [
  "man user message 1",
  "man user message 2",
  "man user message 3",
]

function takeMeBack() {
  favoritesList.classList.add("hidden")
  viewFavoritesButton.classList.remove("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openFormButton.classList.remove("hidden")
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessageButton.classList.add("hidden")
  getMessageButton.classList.remove("disabled")
  affirmationRadioButton.checked = false
  mantraRadioButton.checked = false
  getMessageButton.disabled = false
  affirmationRadioButton.disabled = false
  mantraRadioButton.disabled = false
}

function concatenateMessages(defaultMessages, userMessages) {
  return defaultMessages.concat(userMessages)
}

function getMessageType() {
  var isAffirmChecked = document.querySelector("#affirmation-button").checked;
  var isMantraChecked = document.querySelector("#mantra-button").checked;
  var combinedMessages = concatenateMessages(defaultAffs, userAffs)
  if (isAffirmChecked) {
    var messageText = getRandomMessage(combinedMessages)
  } else if (isMantraChecked) {
    var messageText = getRandomMessage(combinedMessages)
  }
  if (!isMantraChecked && !isAffirmChecked) {
    alert("Please choose a message type.")
  }
}

function getRandomMessage(array) {
  var position = Math.floor(Math.random() * array.length);
  var showThisMessage = array[position]
  displayMessage(showThisMessage)
  return array[position]
}

function displayMessage(showThisMessage) {
  meditateIcon.classList.toggle("hidden")
  bottomBoxContent.classList.add("message-text")
  bottomBoxContent.innerHTML = showThisMessage
  clearMessageButton.classList.add("clear-message-text")
  clearMessageButton.innerHTML = `<button type="button" id="reset-button">Reset</button>`
  clearMessageButton.classList.remove("hidden")
  getMessageButton.classList.add("disabled")
  getMessageButton.disabled = true
  mantraRadioButton.disabled = true
  affirmationRadioButton.disabled = true
}

function submitUserMessage() {
  var userMessage = document.querySelector("#user-message-input").value
  var isUserMantraChecked = document.querySelector("#user-mantra-button").checked;
  var isUserAffirmChecked = document.querySelector("#user-affirmation-button").checked;
  if (isUserAffirmChecked) {
    userAffs.push(userMessage)
  } else if (isUserMantraChecked) {
    userMantras.push(userMessage)
  } else {
    alert("Please choose a message type.")
    return
  }
  if (!userMessage) {
    alert("Please enter message text.")
    return
  }
  userMessageForm.classList.add("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openFormButton.classList.remove("hidden")
  displayMessage(userMessage)
}

function openUserMessageForm() {
  userMessageForm.classList.remove("hidden")
  topHalf.classList.add("hidden")
  bottomHalf.classList.add("hidden")
  openFormButton.classList.add("hidden")
  userMessageInput.value = ""
  userMantraRadioButton.checked = false
  userAffirmationRadioButton.checked = false
}

function closeUserMessageForm() {
  userMessageForm.classList.add("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openFormButton.classList.remove("hidden")
}

function resetForm(messageTypeForm) {
  var messageTypeForm = document.querySelector("#message-type")
  messageTypeForm[0].checked = false
  messageTypeForm[1].checked = false
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessageButton.classList.add("hidden")
  getMessageButton.classList.remove("disabled")
  getMessageButton.disabled = false
  affirmationRadioButton.disabled = false
  mantraRadioButton.disabled = false
}