const progress = document.getElementById('progress');
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    let data = new FormData(form);
    let request = new XMLHttpRequest();

    request.upload.onprogress = function(file){
        progress.value = (file.loaded / file.total).toFixed(2);
    }

    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    request.send(data);
    event.preventDefault();
})