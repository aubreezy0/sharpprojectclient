The Sharp Project Client Application

Repo Links:
API:  https://github.com/aubreezy0/sharp-project
Client: https://github.com/aubreezy0/sharpprojectclient

Deployed Sites:
API: https://pacific-reaches-33989.herokuapp.com/projects
Client: https://aubreezy0.github.io/sharpprojectclient/

The Sharp Project is a crowd-sourced tool for browsing and contributing glass project ideas, including a difficulty level for ease of project choice. Sharp Project users will be able to browse all of the projects entered, can add their own project idea, which they can then edit and update (or delete) as needed.

The ERD for the show project represents a one to many relationship, with users being able to view all projects, and add many projects, but each of those projects has just one owner who can modify the projects.

I was very methodical in my planning for this project. My wireframes demonstrate an evolution of thinking on the scope of the project, and ends with the one drawn with my instructor which is a much simpler format to meet MVP.

Another thing I did this time that was different was that I did a full user flow. This helped me think through the messages I would need (and when) and also prep for Adding/Removing classes for hiding certain elements.

This is a project that could go in many directions. I would like this to be even more informative. In future versions, this could have an inventory of supplies recommended for the projects, or the ability to pin some to your own account always ready for reference.

Unsolved problem: Because this uses the OpenRead Controller, a "show all" Get results in a list of all of the projects entered (which is good). Unfortunately, they all have a remove button, which is confusing for the user; if they click the "remove" for a project they don't own, they get an error. This needs to be fixed in handlebars so that in the full list only projects that are tied to that users ID have a remove button.

My original draft and the draft of the user flow after our one on ones are here:
https://docs.google.com/document/d/1Bvbzw3f0osK4DnHlwUgG3kAVOVbXYfZQI23kc5luGsc/edit#

Wireframes are here:
https://imgur.com/a/xvJI4sZ

Technologies Used:

HTML
CSS/SCSS
JavaScript
jQuery
Handlebars
