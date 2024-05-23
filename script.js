document.addEventListener("DOMContentLoaded", function() {
    const updateDateElement = document.getElementById("update-date");

    // Задание начальной даты
    const initialDate = new Date(2024, 4, 22); // Месяцы в JavaScript считаются с 0, поэтому май - это 4

    function getNextUpdateDate(startDate) {
        const nextUpdateDate = new Date(startDate);
        nextUpdateDate.setDate(startDate.getDate() + 6); // Обновляем каждые 5 дней
        return nextUpdateDate;
    }

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    function updateDate() {
        const today = new Date();
        let lastUpdatedDate = new Date(initialDate);

        // Найти последнюю дату обновления, которая была раньше или равна сегодняшней дате
        while ((today - lastUpdatedDate) >= 5 * 24 * 60 * 60 * 1000) {
            lastUpdatedDate = getNextUpdateDate(lastUpdatedDate);
        }

        updateDateElement.textContent = `Updated: ${formatDate(lastUpdatedDate)}`;
    }

    updateDate();
});
