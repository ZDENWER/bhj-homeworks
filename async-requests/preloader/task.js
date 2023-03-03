const loaderImg = document.querySelector('.loader')
const items = document.getElementById('items')

const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send(); 
xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE){
        loader.className = 'loader';
        let valuteArr = xhr.response.response.Valute;
        for (let request in valuteArr) {
            let item = document.createElement('div');
            item.className = 'item';
        
            let code = document.createElement('div');
            code.className = 'item__code'
            code.textContent = valuteArr[request].CharCode;
            item.appendChild(code);
        
            let value = document.createElement('div');
            value.className = 'item__value'
            value.textContent = valuteArr[request].Value;
            item.appendChild(value);
        
            let currency = document.createElement('div');
            currency.className = 'item__currency';
            currency.textContent = 'руб.';
            item.appendChild(currency);
        
            items.appendChild(item);    
        }  
    }
}