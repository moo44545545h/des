// جدول أسعار وهمي متحرك بصرياً
const rows = document.querySelectorAll('#crypto-table tbody tr');
setInterval(() => {
    rows.forEach(row => {
        const changeCell = row.cells[2];
        const random = (Math.random() * 2 - 1).toFixed(2);
        changeCell.textContent = (random > 0 ? '+' : '') + random + '%';
        changeCell.className = random >= 0 ? 'green' : 'red';
    });
}, 2000);