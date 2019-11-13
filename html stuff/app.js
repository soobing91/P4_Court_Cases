var courtData = data;

var tbody = d3.select('tbody');

function createTable() {
    tbody.html('');
    courtData.forEach((case) => {
        var row = tbody.append('tr');
        Object.entries(case).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}

createTable();