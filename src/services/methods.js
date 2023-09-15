export function createId() {
    return new Date().getTime().toString(); // Маленькая 'g' в методе 'getTime'
}

export function formatDate(date) {
    const options = {
        year: 'numeric',
    };
    return date.toLocaleDateString(undefined, options); // Метод 'toLocaleDateString' и исправлен вызов 'date'
}
