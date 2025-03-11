class Transport {
    constructor({ type, brand, price, image }) {
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.image = image;
    }

    getInfo() {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }

    getPrice() {
        return this.price.toLocaleString() + ' RUB';
    }
}

class Car extends Transport {
    constructor({ type, brand, price, image, doors }) {
        super({ type, brand, price, image });
        this.doors = doors;
    }

    getDetails() {
        return this.getDoorsCount()
    }

    getDoorsCount() {
        return 'Doors:' + this.doors;
    }
}

class Bike extends Transport {
    constructor({ type, brand, price, image, maxSpeed }) {
        super({ type, brand, price, image });
        this.maxSpeed = maxSpeed;
    }

    getDetails() {
        return this.getMaxSpeed()
    }

    getMaxSpeed() {
        return this.maxSpeed + ' km/h';
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

function renderTransport() {
    const container = document.getElementById('transportContainer');
    
    data.forEach(item => {
        let transport;

        switch(item.type) {
            case 'car':
                transport = new Car(item);
                break;
            case 'bike':
                transport = new Bike(item);
                break;
            default:
                transport = new Transport(item);
        }

        const card = document.createElement('div');
        card.className = 'transport-card';
        card.innerHTML = `
            <img src="${item.image}" class="transport-image" alt="${transport.brand}">
            <div class="transport-info">
                <h2>${transport.brand}</h2>
                <div class="transport-price">${transport.getPrice()}</div>
                <div class="transport-details">
                    <p>Type: ${transport.type}</p>
                    <p>${transport.getDetails()}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
        });
        }

        // TODO: Добавить две вспомогательные функции: createTransportBy(type) и createTransportCard(transport)

        // Инициализация при загрузке страницы
window.onload = renderTransport;