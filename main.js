var affirmationRadioButton = document.querySelector("#affirmation-button")
var mantraRadioButton = document.querySelector("#mantra-button")
var getMessageButton = document.querySelector("#get-message")
var clearMessageButton = document.querySelector("#clear-message")
var takeMeBackButton = document.querySelector("#take-me-back")

var openFormButton = document.querySelector("#open-form")
var closeFormButton = document.querySelector("#close-form")
var userAffirmationRadioButton = document.querySelector("#user-affirmation-button")
var userMantraRadioButton = document.querySelector("#user-mantra-button")
var submitUserMessageButton = document.querySelector("#submit-form")
var cancelFormButton = document.querySelector("#cancel-form")

var favoriteButton = document.querySelector("#favorite-button")
var hideButton = document.querySelector("#hide-button")
var viewFavoritesButton = document.querySelector("#view-favorites")

var meditateIcon = document.querySelector("#medIcon")
var topBoxContent = document.querySelector("#top-box")
var bottomBoxContent = document.querySelector("#bottom-box")

getMessageButton.addEventListener("click", getMessageType)
favoriteButton.addEventListener("click", addToFavorites)
hideButton.addEventListener("click", hideMessage)
clearMessageButton.addEventListener("click", resetForm)
openFormButton.addEventListener("click", openUserMessageForm)
submitUserMessageButton.addEventListener("click", submitUserMessage)
cancelFormButton.addEventListener("click", closeUserMessageForm)
viewFavoritesButton.addEventListener("click", showFavoriteMessages)
takeMeBackButton.addEventListener("click", goToMain)

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
var favoriteMessages = [
  "the best message"
]

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
}

function displayMessage(showThisMessage) {
  meditateIcon.classList.toggle("hidden")
  bottomBoxContent.classList.add("message-text")
  bottomBoxContent.innerHTML = showThisMessage
  clearMessageButton.classList.add("clear-message-text")
  // how to make clickable area only on the button
  // even though the button doesn't exist until i put it in here
  clearMessageButton.innerHTML = `<button type="button" id="reset-button">Reset</button>`
  clearMessageButton.classList.remove("hidden")
  favoriteButton.classList.remove("hidden")
  hideButton.classList.remove("hidden")
  getMessageButton.classList.add("disabled")
  getMessageButton.disabled = true
  mantraRadioButton.disabled = true
  affirmationRadioButton.disabled = true
}

function showFavoriteMessages() {
  document.querySelector("#favorites-list").classList.remove("hidden")
  document.querySelector("#top-half").classList.add("hidden")
  document.querySelector("#bottom-half").classList.add("hidden")
  viewFavoritesButton.classList.add("hidden")
  document.querySelector("#user-mantra-button").checked = false
  document.querySelector("#user-affirmation-button").checked = false
  // add a back to main button
}

function addToFavorites(showThisMessage) {
  favoriteMessages.push(showThisMessage)
  document.querySelector("#favorites-list").innerText = `${favoriteMessages}`
  resetForm()
  hideButton.classList.add("hidden")
  favoriteButton.classList.add("hidden")
}

function hideMessage(currentMessage) {
  currentMessage.hide = true
  resetForm()
  hideButton.classList.add("hidden")
  favoriteButton.classList.add("hidden")
}

function submitUserMessage() {
  var userMessage = document.querySelector("#user-message-input").value
  var isUserMantraChecked = document.querySelector("#user-mantra-button").checked;
  var isUserAffirmChecked = document.querySelector("#user-affirmation-button").checked;
  if (isUserAffirmChecked) {
    userAffText.push(userMessage)
  } else if (isUserMantraChecked) {
    userManText.push(userMessage)
  } else {
    alert("Please choose a message type.")
    return
  }
  if (!userMessage) {
    alert("Please enter message text.")
    return
  }
  document.querySelector("#user-message-form").classList.add("hidden")
  document.querySelector("#top-half").classList.remove("hidden")
  document.querySelector("#bottom-half").classList.remove("hidden")
  displayMessage(userMessage)
}

function openUserMessageForm() {
  document.querySelector("#user-message-form").classList.remove("hidden")
  document.querySelector("#top-half").classList.add("hidden")
  document.querySelector("#bottom-half").classList.add("hidden")
  openFormButton.classList.add("hidden")
  document.querySelector("#user-message-input").value = ""
  document.querySelector("#user-mantra-button").checked = false
  document.querySelector("#user-affirmation-button").checked = false
  // hide favorites-list
}

function closeUserMessageForm() {
  document.querySelector("#user-message-form").classList.add("hidden")
  document.querySelector("#top-half").classList.remove("hidden")
  document.querySelector("#bottom-half").classList.remove("hidden")
}

function goToMain() {
  // hide favorites-popup
  // display top-half
  // display bottom-half
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessageButton.classList.add("hidden")
  getMessageButton.classList.remove("disabled")
  getMessageButton.disabled = false
  affirmationRadioButton.disabled = false
  mantraRadioButton.disabled = false
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