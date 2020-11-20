var affirmationChoice = document.querySelector("#affirmation-button")
var mantraChoice = document.querySelector("#mantra-button")
var getMessage = document.querySelector(".get-message")
var clearMessageButton = document.querySelector(".clear-message")
var backToHomeButton = document.querySelector(".back-to-home")

var userMessageForm = document.querySelector("#user-message-form")
var userMessageInput = document.querySelector("#user-message-input")
var openForm = document.querySelector(".open-form")
var userFormAffirmation = document.querySelector("#user-affirmation-button")
var userFormMantra = document.querySelector("#user-mantra-button")
var userFormSubmit = document.querySelector("#submit-form")
var userFormCancel = document.querySelector("#cancel-form")
var viewFavoriteMessages = document.querySelector(".view-favorites")

var messageType = document.querySelector("#message-type")
var messageChoiceArea = document.querySelector(".message-choice")
var messageDisplayArea = document.querySelector(".display-message")

getMessage.addEventListener("click", getMessageType)
clearMessageButton.addEventListener("click", resetForm)
openForm.addEventListener("click", openUserMessageForm)
userFormSubmit.addEventListener("click", submitUserMessage)
userFormCancel.addEventListener("click", closeUserMessageForm)
viewFavoriteMessages.addEventListener("click", viewFavorites)
messageDisplayArea.addEventListener("click", makeFavorite)
backToHomeButton.addEventListener("click", goHome)

var favoriteMessages = []
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom and power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]
var mantras = [
  "I am enough.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "Don’t let yesterday take up too much of today.",
  "Breathing in , I send myself love.",
  "In the beginning, in the middle, and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

function showButton(button) {
  button.classList.remove("hidden")
}

function hideButton(button) {
  button.classList.add("hidden")
}

function changeRadioButton(button, newValue) {
  button.disabled = newValue
  button.checked = newValue
}

function goHome() {
  showButton(messageChoiceArea)
  showButton(messageDisplayArea)
  showButton(clearMessageButton)
  hideButton(backToHomeButton)
}

function makeFavorite(event) {
  var theHeart = document.querySelector("#the-heart")
  if (event.target.id === "the-heart") {
    theHeart.classList.add("turn-red")
    theHeart.classList.remove("unfavorited")
    theHeart.classList.add("disabled")
    favoriteMessages.push(document.querySelector(".message-text").innerText)
  }
}

function viewFavorites() {
  if (event.target.className === "view-favorites") {
    hideButton(messageChoiceArea)
    hideButton(openForm)
    hideButton(viewFavoriteMessages)
    document.querySelector("h2").classList.add("hidden")
    messageDisplayArea.classList.add("scroll")
    for (var i = 0; i < favoriteMessages.length; i++) {
      messageDisplayArea.innerHTML += `<p>${favoriteMessages[i]}</p>`
    }
  } else if (event.target.id === "back-to-home") {
    takeMeBack()
  }
}

function getMessageType() {
  var isAffirmChecked = affirmationChoice.checked;
  var isMantraChecked = mantraChoice.checked;
  if (isAffirmChecked) {
    var messageText = getRandomMessage(affirmations)
  } else if (isMantraChecked) {
    messageText = getRandomMessage(mantras)
  }
  if (!isMantraChecked && !isAffirmChecked) {
    alert("Please choose a message type.")
  }
}

function displayMessage(showThisMessage) {
  showButton(backToHomeButton)
  hideButton(messageChoiceArea)
  hideButton(getMessage)
  messageDisplayArea.classList.add("message-text")
  messageDisplayArea.innerHTML = showThisMessage
  messageDisplayArea.innerHTML += `<i class="fas fa-heart" id="the-heart"></i>`
}

function submitUserMessage() {
  var userMessage = userMessageInput.value
  if (userFormAffirmation.checked) {
    affirmations.push(userMessage)
  } else if (userFormMantra.checked) {
    mantras.push(userMessage)
  } else {
    alert("Please choose a message type.")
    return
  }
  if (!userMessage) {
    alert("Please enter message text.")
    return
  }
  showButton(messageChoiceArea)
  showButton(messageDisplayArea)
  showButton(openForm)
  hideButton(userMessageForm)
  displayMessage(userMessage)
}

function openUserMessageForm() {
  showButton(userMessageForm)
  hideButton(messageChoiceArea)
  hideButton(messageDisplayArea)
  hideButton(viewFavoriteMessages)
  hideButton(getMessage)
  hideButton(openForm)
  userMessageInput.value = ""
  userFormMantra.checked = false
  userFormAffirmation.checked = false
}

function closeUserMessageForm() {
  showButton(messageChoiceArea)
  showButton(messageDisplayArea)
  showButton(openForm)
  hideButton(userMessageForm)
}

function resetForm(messageTypeForm) {
  showButton(getMessage)
  hideButton(clearMessageButton)
  changeRadioButton(affirmationChoice, false)
  changeRadioButton(mantraChoice, false)
  messageDisplayArea.classList.remove("message-text")
  messageDisplayArea.innerText = ""
  // hide favorite button
}

function getRandomMessage(array) {
  var position = Math.floor(Math.random() * array.length);
  var showThisMessage = array[position]
  displayMessage(showThisMessage)
}

function takeMeBack() {
  showButton(viewFavoritesButton)
  showButton(messageChoiceArea)
  showButton(messageDisplayArea)
  showButton(openForm)
  hideButton(favoritesList)
  changeRadioButton(affirmationChoice, false)
  changeRadioButton(mantraChoice, false)
}