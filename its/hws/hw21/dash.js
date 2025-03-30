const data = {
    "tasks": [
        {"id": 1, "title": "Задача 1", "status": "resolved", "date": "2025-03-30"},
        {"id": 2, "title": "Задача 2", "status": "open", "date": "2025-03-30"},
        {"id": 3, "title": "Задача 3", "status": "resolved", "date": "2025-03-30"},
        {"id": 4, "title": "Задача 4", "status": "open", "date": "2025-03-30"},
        {"id": 5, "title": "Задача 5", "status": "resolved", "date": "2025-03-30"},
        {"id": 6, "title": "Задача 6", "status": "open", "date": "2025-03-31"},
        {"id": 7, "title": "Задача 7", "status": "resolved", "date": "2025-03-31"},
    ]
};

// Chart.js
const UI = {
    COLOR_RESOLVED: 'lightseagreen',
    COLOR_UNRESOLVED: 'lightsalmon'
}
const ctx = document.getElementById('taskChart').getContext('2d');
const taskChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Решенные задачи', 'Нерешенные задачи'],
        datasets: [{
            label: `Количество задач: ${data.tasks.length}`,
            data: [data.tasks.filter(task => task.status === 'resolved').length,
                    data.tasks.filter(task => task.status === 'open').length],
            backgroundColor: [UI.COLOR_RESOLVED, UI.COLOR_UNRESOLVED],
            borderColor: [UI.COLOR_RESOLVED, UI.COLOR_UNRESOLVED],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// FullCalendar
$('#calendar').fullCalendar({
    locale: 'ru',
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultView: 'month',
    navLinks: true,
    eventLimit: true,
    events: data.tasks.map(task => ({
        title: task.title,
        start: task.date,
        color: task.status === 'resolved' ? UI.COLOR_RESOLVED : UI.COLOR_UNRESOLVED
    }))
});