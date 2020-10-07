// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (d3 is a javascript library for html graphics)
var tbody = d3.select("tbody");

//Function to build ufo data table
function buildTable(data) {
    //tells JS to use ad empty string when creating the table, ie a blank canvas
    //if we didn't clear the data first the data users search will already be filtered when they search again.
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
    // tells JS to find the <tbody> tag in the html and add a table row <tr>
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    // our data file is an array(list) of objects(dictionaries) object.values tells JS to reference once object and for the values to go into the dataRow
    // forEach((val) specifies one object per row.
    // aka put each ufo sighting into its own row in the table
    // the val argument represents each item in the object - location, shape, duration, etc, and each value will be appended to a cell in the table
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}


// create new function to filter by date when user clicks button
function handleClick(){
    //.select will select the first element that matches out selector string of #datetime
    // By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, 
    // but to actually grab that information and hold it in the "date" variable.
    let date = d3.select("#datetime").property("value");

    // set a default filter and save it to a new variable
    // by setting the filteres data to our raw data, we're using it as a blank slate
    // if no date is entered as a filter, all of the data will be returned when someone clicks the button
    let filteredData = tableData;

    // if statement to check if a date is entered and to match the entered date to the #datetime value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

//event listener to know WHEN a button is clicked.  handleClick tells what to do when it's clicked, this alerts that a click has happened
// and telling it to execute the handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// code to make sure the table loads as soon as the page does
buildTable(tableData);