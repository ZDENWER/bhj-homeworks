const questionTitle = document.getElementById('poll__title');
const pollAnswers = document.querySelector('.poll__answers')

let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.response)
        setQuestion(xhr.response.data.title)
    }
}

function setQuestion(question) {
    questionTitle.textContent = question;
    const answers = xhr.response.data.answers;
    for (let number in answers) {
        console.log(answers[number])

        let button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answers[number];
        pollAnswers.appendChild(button);

        button.addEventListener('click', () => {
            alert('«Спасибо, ваш голос засчитан!»')
        })
    }
}

