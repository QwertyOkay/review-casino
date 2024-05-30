document.addEventListener("DOMContentLoaded", function() {
    const updateDateElement = document.getElementById("update-date");

    // Установка начальной даты
    const initialDate = new Date(2024, 4, 20); // Месяцы в JavaScript считаются с 0, поэтому май - это 4

    // Логика для добавления 5 дней к заданной дате
    const getNextUpdateDate = (startDate) => {
        const nextUpdateDate = new Date(startDate);
        nextUpdateDate.setDate(startDate.getDate() + 5); // Обновляем каждые 5 дней
        return nextUpdateDate;
    };

    const updateDate = () => {
        const today = new Date();
        let lastUpdatedDate = new Date(initialDate);

        // Найти последнюю дату обновления, которая была раньше или равна сегодняшней дате
        while (lastUpdatedDate <= today) {
            lastUpdatedDate = getNextUpdateDate(lastUpdatedDate);
        }

        // Назначаем предыдущую дату обновления, которая будет меньше или равна сегодняшней
        lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 5);

        updateDateElement.textContent = `Updated: ${formatDate(lastUpdatedDate)}`;
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    // Устанавливаем дату 25.05.2024 для отображения
    const displayDate = new Date(2024, 4, 25); // Месяцы в JavaScript считаются с 0, поэтому май - это 4
    updateDateElement.textContent = `Updated: ${formatDate(displayDate)}`;

    // Проверка обновления каждые час
    setInterval(updateDate, 60 * 60 * 1000);
});
