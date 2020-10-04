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
}