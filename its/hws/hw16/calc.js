formElements = document.forms.calcForm.elements
const models = {
    'Reno': ['Logan', 'Sandero', 'Duster'],
    'Opel': ['Corsa', 'Astra', 'Insignia'],
    'Mazda': ['3', '6', 'CX-5'],
    'Jaguar': ['XE', 'XF', 'F-PACE']
};

const basePrices = {
    'Reno': 800000,
    'Opel': 1200000,
    'Mazda': 1500000,
    'Jaguar': 3500000
};

// Инициализация калькулятора
formElements.carMake.addEventListener('change', function() {
    const make = this.value;
    const modelSelect = formElements.carModel;
    
    modelSelect.innerHTML = '<option value="">Выберите модель</option>';
    if (models[make]) {
        models[make].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
        modelSelect.disabled = false;
    } else {
        modelSelect.disabled = true;
    }
    calculatePrice();
});

// Обработчики событий
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('change', calculatePrice);
});

formElements.engineVolume.addEventListener('input', calculatePrice);

// Показать-скрыть владельцев
document.querySelectorAll('input[name="condition"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.getElementById('ownersGroup').classList.toggle('hidden', 
            document.querySelector('input[name="condition"]:checked').value !== 'used');
    });
});

function calculatePrice() {
    try {
        const make = formElements.carMake.value;
        const model = formElements.carModel.value;
        const engineVolume = parseFloat(formElements.engineVolume.value);
        const condition = document.querySelector('input[name="condition"]:checked').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;
        
        // Валидация
        if (!make) throw new Error('Выберите марку автомобиля');
        if (!model) throw new Error('Выберите модель автомобиля');
        if (engineVolume < 1.1 || engineVolume > 3.5) throw new Error('Некорректный объем двигателя');

        let price = basePrices[make];

        // Дополнительные расчеты
        if (condition === 'used') {
            price *= 0.8; // Снижение цены для подержанных авто
        }

        if (engineVolume > 2.5) {
            price *= 1.2; // Увеличение цены для больших объемов двигателя
        }

        if (document.getElementById('insurance').checked) {
            price += 50000;
        }

        if (document.getElementById('winterTires').checked) {
            price += 20000;
        }

        // Отображение результата
        const totalPrice = document.getElementById('total-price')
        totalPrice.textContent = `Итоговая стоимость: ${price.toLocaleString()} руб.`;
        totalPrice.classList.add('highlight');
        setTimeout(() => totalPrice.classList.remove('highlight'), 1000);
        document.getElementById('error-message').textContent = '';

    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
        document.getElementById('total-price').textContent = '';
    }
}

function resetCalculator() {
    
    formElements.carMake.value = '';
    formElements.carModel.innerHTML = '<option value="">Выберите модель</option>';
    formElements.carModel.disabled = true;
    document.querySelector('input[name="fuel"][value="petrol"]').checked = true;
    document. formElements.engineVolume.value = 1.5;
    document.querySelector('input[name="condition"][value="new"]').checked = true;
    document.querySelector('input[name="payment"][value="card"]').checked = true;
    document.getElementById('insurance').checked = false;
    document.getElementById('winterTires').checked = false;
    document.getElementById('ownersGroup').classList.add('hidden');
    document.getElementById('total-price').textContent = '';
    document.getElementById('error-message').textContent = '';
}
