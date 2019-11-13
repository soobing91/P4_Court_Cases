// Load data.
var courtData = data;

var tbody = d3.select('tbody');

// Initialize the main page.
function createTable() {
    tbody.html('');
    courtData.forEach((courtCase) => {
        var row = tbody.append('tr');
        Object.entries(courtCase).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

createTable();


// Store search inputs.
var searchTerm = d3.select('#searchTerm');
console.log(searchTerm);

// Listen events.
var button = d3.select('#searchBtn');

button.on('click', function() {
    var searchValue = searchTerm.property('value').toLowerCase();
    console.log(searchValue)

});
