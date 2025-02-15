// Генерация массива оценок
const grades = Array.from({length: 12}, 
    () => Math.floor(Math.random() * 100) + 1);

// Расчет среднего балла
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Поиск экстремальных значений
const maxGrade = Math.max(...grades);
const minGrade = Math.min(...grades);

// Подсчет положительных и отрицательных оценок
const positiveGrades = grades.filter(grade => grade >= 60).length;
const negativeGrades = grades.filter(grade => grade < 60).length;

// Преобразование в буквенную систему

function checkGradeLetter(grade) {
    switch(true) {
        case grade >= 80:
            return 'A';
        case grade >= 60:
            return 'B';
        case grade >= 40:
            return 'C';
        case grade >= 20:
            return 'D';
        default:
            return 'E';
        }
};

const letterGrades = grades.map(checkGradeLetter);

// Формирование вывода
const resultsDiv = document.getElementById('results');

const output = `
    <div class="result-section">
        <h2>Сгенерированные оценки:</h2>
        <p>${grades.join(', ')}</p>
    </div>
    
    <div class="result-section">
        <h2>Базовая статистика</h2>
        <p>Средний балл: ${average.toFixed(2)}</p>
        <p>Максимальный балл: ${maxGrade}</p>
        <p>Минимальный балл: ${minGrade}</p>
    </div>
    
    <div class="result-section">
        <h2>Распределение оценок</h2>
        <p>Успевающие студенты: ${positiveGrades}</p>
        <p>Неуспевающие студенты: ${negativeGrades}</p>
    </div>
    
    <div class="result-section">
        <h2>Буквенные оценки</h2>
        <p>${letterGrades.join(', ')}</p>
    </div>
`;

resultsDiv.innerHTML = output;