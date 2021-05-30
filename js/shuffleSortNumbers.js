const numbers = [];

for (let i = 1; i <= 9; i++) {
    $('#grid').append('<div class="grid-item card-bgcolor' + i + '">' + i + '</div>');
    numbers.push(i);
}

suffleNumber = () => {
    let temp;
    let randomNumber;
    for (let i = numbers.length - 1; i > 0; i--) {
        temp = numbers[i];
        randomNumber = Math.floor(Math.random() * (1 + 1));
        numbers[i] = numbers[randomNumber];
        numbers[randomNumber] = temp;
    }
    appendNumbers(numbers);
};
sortNumber = () => {
    numbers.sort();
    appendNumbers(numbers);
}

document.getElementById("shuffle").addEventListener("click", suffleNumber);
document.getElementById("sort").addEventListener("click", sortNumber);

appendNumbers = (newNumbers) => {
    $('.grid-item').each(function(index) {
        this.classList.remove('card-bgcolor' + this.innerHTML)
        this.classList.add('card-bgcolor' + newNumbers[index]);
        this.innerHTML = newNumbers[index];
    })
}