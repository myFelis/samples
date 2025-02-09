function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    
    errorElement.style.display = 'none';
    resultElement.textContent = '';
    
    if (!birthdayInput.value) {
        errorElement.style.display = 'block';
        return;
    }
    
    // Получение выбранной даты
    const [year, month, day] = birthdayInput.value.split('-');
    const today = new Date();
    
    let nextBirthday = new Date(today.getFullYear(), month - 1, day);
    
    // Если день рождения уже прошел в этом году, берем следующий год
    if (nextBirthday < today) {
        nextBirthday = new Date(today.getFullYear() + 1, month - 1, day);
    }
    
    // Расчет разницы в днях
    const diffTime = nextBirthday - today;
    // const diffDays = new Date(diffTime).getDate()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Получение правильного склонения
    const daysWord = getDayChange(diffDays);
    
    // Вывод результата
    resultElement.textContent = `До вашего дня рождения осталось: ${diffDays} ${daysWord}`;
}

// Функция для склонения слова "день"
function getDayChange(days) {
    const exceptTwo = days % 100;
    if (exceptTwo >= 11 && exceptTwo <= 19) {
        return 'дней';
    }
    
    const lastOne = days % 10;
    switch(lastOne) {
        case 1: return 'день';
        case 2:
        case 3:
        case 4: return 'дня';
        default: return 'дней';
    }
}

// Скрываем ошибку при изменении даты
document.getElementById('birthday').addEventListener('input', function() {
    document.getElementById('error').style.display = 'none';
});