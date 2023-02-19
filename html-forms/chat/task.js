const chatButton = document.querySelector('.chat-widget')
const chatInput = document.getElementById('chat-widget__input')
const messages = document.getElementById('chat-widget__messages')

chatButton.onclick = () => chatButton.classList.add('chat-widget_active')

chatInput.addEventListener('keydown', (event) => {
    
    if (event.key === 'Backspace') {
        chatInput.value.slice(0, -1);
        return;
    }
    
    if (event.code === 'Enter' && chatInput.value.trim() !== '' || event.code === 'NumpadEnter' && chatInput.value.trim() !== '' ) {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">` + getTime() + `</div>
        <div class="message__text">`+ chatInput.value + `</div>
        </div>
        `
        chatInput.value = ''
        botAnswer();
        messages.lastElementChild.scrollIntoView()
    } else if (event.key.length > 1) {
        return;
    } else {
        chatInput.textContent += event.key; 
    }

})

function botAnswer() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">` + getTime() + `</div>
      <div class="message__text">
        ` + getMessage() + `
      </div>
    </div>
  `;
}

function getTime() {
    let a = new Date().getHours();
    let b = new Date().getMinutes();
    return String(a) + ':' + String(b)
}

const botMessages = [
    'Вы не купили ни одного товара для того, чтоб так со мной разговаривать!',
    'Уходите',
    'Где ваша совесть!?',
    'Добрый день! До свидания',
    'Ми ничего не будем вам продавать!',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше',
    'Кто тут?',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
]

function getMessage() {
    let index = Math.round(Math.random() * (botMessages.length - 1))
    return botMessages[index]
}