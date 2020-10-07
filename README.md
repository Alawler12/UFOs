# The Truth About UFOs… 
## Now with search filters

### Project Overview
The purpose of this analysis was to provide a visualization of a very large dataset on UFO sightings across the world.  We wanted to allow users to interact with the data and filter the sightings to find the specific sightings they were looking for.  We created a web-based interface with filters that the user could customize to find exactly what they were looking for from the data.

### Results
A user will open the page, and immediately be introduced to the premise of the page with an introductory explanation.  They are then invited to explore the data.  They have the option of scrolling through the whole set, or to filter it using a combination of five criteria.  

**A user is given the option to filter the results by Date, City, State, Country, and Shape of the sighting.  The unfiltered data is pictured below:**

![unfilteredData.PNG](https://github.com/Alawler12/UFOs/blob/main/static/images/screenshots/unfilteredData.PNG)

**When a user filters by Date, they are shown all results for that date, regardless of location of the sighting:**

![dateFilter.PNG](https://github.com/Alawler12/UFOs/blob/main/static/images/screenshots/dateFilter.PNG)

**A user can specify further by combining filters. For example - Date and State:**

![dateState.PNG](https://github.com/Alawler12/UFOs/blob/main/static/images/screenshots/dateState.PNG)

**Or Shape and State:**

![lightState.PNG](https://github.com/Alawler12/UFOs/blob/main/static/images/screenshots/lightState.PNG)

**Any combination of filters can be applied to the dataset to allow great specificity of search results.**

### Summary
One drawback of this design is that to clear results and start the search over, a user must either navigate back to the top of the page and click the “UFO Sightings” label, or delete their entries and press enter.  Neither of these directions are provided to the user, and people less familiar with web-use may be confused and become stuck.  I would recommend adding a button to clear the results and set the data back to unfiltered.  

I would also recommend making the table itself more filterable, by adding dynamic capabilities to each column that would allow for the data to be set chronologically or grouped by location/shape.  This would allow a user to view all of the data, rather than have it returned in specifically searched-for chunks of information.  
