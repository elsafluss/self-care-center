var affirmationChoice = document.querySelector("#affirmation-button")
var mantraChoice = document.querySelector("#mantra-button")
var getMessage = document.querySelector("#get-message")
var clearMessage = document.querySelector("#clear-message")

var userMessageForm = document.querySelector("#user-message-form")
var userMessageInput = document.querySelector("#user-message-input")
var openForm = document.querySelector("#open-form")
var userFormAffirmation = document.querySelector("#user-affirmation-button")
var userFormMantra = document.querySelector("#user-mantra-button")
var userFormSubmit = document.querySelector("#submit-form")
var userFormCancel = document.querySelector("#cancel-form")

var messageType = document.querySelector("#message-type")
var meditateIcon = document.querySelector("#medIcon")
var topHalf = document.querySelector("#top-half")
var bottomHalf = document.querySelector("#bottom-half")
var bottomBoxContent = document.querySelector("#bottom-box")

getMessage.addEventListener("click", getMessageType)
clearMessage.addEventListener("click", resetForm)
openForm.addEventListener("click", openUserMessageForm)
userFormSubmit.addEventListener("click", submitUserMessage)
userFormCancel.addEventListener("click", closeUserMessageForm)

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
  "Breathing in , I send myself love.Breathing out, I send love to someone else who needs it.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

function takeMeBack() {
  favoritesList.classList.add("hidden")
  viewFavoritesButton.classList.remove("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openForm.classList.remove("hidden")
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessage.classList.add("hidden")
  getMessage.classList.remove("disabled")
  affirmationChoice.checked = false
  mantraChoice.checked = false
  getMessage.disabled = false
  affirmationChoice.disabled = false
  mantraChoice.disabled = false
}

function getMessageType() {
  var isAffirmChecked = affirmationChoice.checked;
  var isMantraChecked = mantraChoice.checked;
  if (isAffirmChecked) {
    var messageText = getRandomMessage(affirmations)
  } else if (isMantraChecked) {
    var messageText = getRandomMessage(mantras)
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
  clearMessage.classList.add("clear-message-text")
  clearMessage.innerHTML = `<button type="button" id="reset-button">Reset</button>`
  clearMessage.classList.remove("hidden")
  getMessage.classList.add("disabled")
  getMessage.disabled = true
  mantraChoice.disabled = true
  affirmationChoice.disabled = true
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
  userMessageForm.classList.add("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openForm.classList.remove("hidden")
  displayMessage(userMessage)
}

function openUserMessageForm() {
  userMessageForm.classList.remove("hidden")
  topHalf.classList.add("hidden")
  bottomHalf.classList.add("hidden")
  openForm.classList.add("hidden")
  userMessageInput.value = ""
  userFormMantra.checked = false
  userFormAffirmation.checked = false
}

function closeUserMessageForm() {
  userMessageForm.classList.add("hidden")
  topHalf.classList.remove("hidden")
  bottomHalf.classList.remove("hidden")
  openForm.classList.remove("hidden")
}

function resetForm(messageTypeForm) {
  var messageTypeForm = messageType
  messageTypeForm[0].checked = false
  messageTypeForm[1].checked = false
  bottomBoxContent.innerHTML = `<img src="./assets/meditate.svg" id="medIcon" alt="meditation icon"></img>`
  clearMessage.classList.add("hidden")
  getMessage.classList.remove("disabled")
  getMessage.disabled = false
  affirmationChoice.disabled = false
  mantraChoice.disabled = false
}