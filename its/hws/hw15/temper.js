// Массив городов
const cities_all = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Казань'];

function showTemperature(cities=cities_all) {
    const temperatures = [];

    const weatherInfo = document.getElementById('weatherInfo');
    const list = document.createElement('ul');

    for(const city of cities) {
        let temp;
        while(true) {
            temp = prompt(`Введите температуру для ${city}:`);
            if(!isNaN(temp) && temp !== null && temp.trim() !== '') {
                temperatures.push(Number(temp));
                break;
            }
            alert('Пожалуйста, введите число!');
        }
        const item = document.createElement('li');
        item.textContent = `${city}: ${temp}°C`;
        list.appendChild(item);
    }

    // cities.forEach((city, index) => {
        // const item = document.createElement('li');
        // item.textContent = `${city}: ${temperatures[index]}°C`;
        // list.appendChild(item);
    // });
    weatherInfo.appendChild(list);

    // Поиск max-min
    let maxTemp = temperatures[0];
    let minTemp = temperatures[0];

    for (const temp of temperatures) {
        if(temp > maxTemp) maxTemp = temp;
        if(temp < minTemp) minTemp = temp;
    }

    // Вывод max-min
    const maxDiv = document.createElement('div');
    maxDiv.className = 'extremum';
    maxDiv.textContent = `Максимальная температура: ${maxTemp}°C`;

    const minDiv = document.createElement('div');
    minDiv.className = 'extremum';
    minDiv.textContent = `Минимальная температура: ${minTemp}°C`;

    weatherInfo.appendChild(maxDiv);
    weatherInfo.appendChild(minDiv);
}

showTemperature();