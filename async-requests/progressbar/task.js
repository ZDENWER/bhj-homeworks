const progress = document.getElementById('progress');
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    let data = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(file){
        progress.value = (file.loaded / file.total).toFixed(2);
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(data);
    event.preventDefault();
})