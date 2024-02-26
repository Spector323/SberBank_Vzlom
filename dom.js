
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerHTML = document.querySelector('.card-number-input').value;
}
console.log();
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerHTML = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerHTML = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerHTML = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerHTML = document.querySelector('.cvv-input').value;
}


document.querySelector('.card-number-input').addEventListener('input', function() {
        let cardNumber = this.value.replace(/\s/g, ''); // Удаляем все пробелы из введенного номера карты
        let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ').trim(); // Добавляем пробелы после каждых четырех символов
        this.value = formattedCardNumber; // Обновляем значение поля ввода
    });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const table = document.getElementById('dataTable');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardNumber = document.querySelector('.card-number-input').value;
        const cardHolder = document.querySelector('.card-holder-input').value;
        const month = document.querySelector('.month-input').value;
        const year = document.querySelector('.year-input').value;
        const cvv = document.querySelector('.cvv-input').value;

        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.textContent = cardNumber;
        cell2.textContent = cardHolder;
        cell3.textContent = month + '/' + year;
        cell4.textContent = cvv;

        form.reset();
    });
});
