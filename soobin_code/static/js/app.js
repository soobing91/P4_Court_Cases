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
            if (key != 'url') {
                cell.text(value);
            }
            else {
                cell.html('<a target="_blank" href=' + value + '>' + value + '</a>');
            }            
        });
    });
};

createTable();


// Store search inputs.
var searchInput= d3.select('#searchTerm')

// Listen events.
var button = d3.select('#searchBtn');

button.on('click', function() {
    var searchTerm = searchInput.property('value').toLowerCase();

    // Search the term within strings.
    var filteredCase = courtData.filter((courtCase) => courtCase['top_tfidf'].indexOf(searchTerm) > -1);

    tbody.html('');

    filteredCase.forEach((courtCase) => {
        var row = tbody.append('tr');
        Object.entries(courtCase).forEach(([key, value]) => {
            var cell = row.append('td');
            if (key != 'url') {
                cell.text(value);
            }
            else {
                cell.html('<a target="_blank" href=' + value + '>' + value + '</a>');
            }
        })
    });
});

// Reset the table.
var buttonR = d3.select('#resetBtn');

buttonR.on('click', function() {
    tbody.html('');
    createTable();
});