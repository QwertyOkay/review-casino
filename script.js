// document.addEventListener("DOMContentLoaded", function() {
//     const updateDateElement = document.getElementById("update-date");

//     function getStartOfWeek(date) {
//         const firstDayOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
//         firstDayOfWeek.setHours(0, 0, 0, 0);
//         return firstDayOfWeek;
//     }

//     function getNextUpdateDate(startDate) {
//         const nextUpdateDate = new Date(startDate);
//         nextUpdateDate.setDate(startDate.getDate() + 7);
//         return nextUpdateDate;
//     }

//     function formatDate(date) {
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}.${month}.${year}`;
//     }

//     function updateDate() {
//         const today = new Date();
//         const lastUpdatedDate = getStartOfWeek(today);
//         const nextUpdateDate = getNextUpdateDate(lastUpdatedDate);
        
//         updateDateElement.textContent = `Updated: ${formatDate(nextUpdateDate)}`;
//     }

//     updateDate();
// });


document.addEventListener("DOMContentLoaded", function() {
    const updateDateElement = document.getElementById("update-date");

    function getNextUpdateDate(startDate) {
        const nextUpdateDate = new Date(startDate);
        nextUpdateDate.setDate(startDate.getDate() + 7);
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
        const nextUpdateDate = getNextUpdateDate(today);
        
        updateDateElement.textContent = `Updated: ${formatDate(nextUpdateDate)}`;
    }

    updateDate();
});
