# Assignment: First Web Server - Super Sprinter 3000

### In the project directory, you can run:
### `node server.js`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Story
"Stories are the building blocks of communication between developers and those who use their work." – Jeff Patton

In this assignment, you'll build a web application, where you and your team can track your progress during a project. You'll learn about agile development later, but here is a quick excerpt from Wikipedia: "... a user story is an informal, natural language description of one or more features of a software system. User stories are often written from the perspective of an end user or user of a system."

There are some new expressions you'll meet in this project:

* User story description :
  * a natural language description/story from the perspective of a perna.
  * Example template: "As , I want <what?> so that <why?>"
* Acceptance Criteria :
  * "Acceptance Criteria are a set of statements, each with a clear pass/fail result, that specify both functional and non-functional requirements" – Leading Agile: Acceptance   Criteria
* Business value : a numerical value to represent the importance of the User Story for the so called business (actually the customer).
* Estimation : Summary of the expected amount of work in all tasks collected to achieve User Story
* Status : Current state of the User Story's development cycle.

To give a proper example, we formatted the requirements for this project also in user stories.

## Requirements

![Super Sprinter 3000 - Requirements](docs/super-sprinter-3000-requirements.png)

For the sake of make this assignment easier to understand, each User Story represents a page in the web application:

## List all User Stories [ / and /list ]
* It should have an HTML <table> containing all the data.
* Add the column titles as proper table headers.
* Add an "Add a new User Story" link to the top of the page. It should redirect to the (Add new User Stories) /story page.
* Recreate the following ugly design:

![Super Sprinter 3000 - List](docs/super-sprinter-3000-list.png)

## Add new User Stories [ /story ]
* Empty form (there is no data in the inputs)
* Form validation rules:
  * Story Title:
    * single line text input
    * required
    * minimum length: 5 character
  * User Story:
    * multi-line text input
    * required
  * Acceptance Criteria:
    * multi-line text input
    * required
  * Business value
    * single line number input
    * minimum value: 100
    * maximum value: 1500
    * allow values only dividable by 100
  * Estimation
    * single line number input
    * minimum value: 0.5
    * maximum value: 40
    * allow values only dividable by 0.5
* When the user clicks the "Add new User Story" button, the form should submit it's data
* ... and the server should add these data to the csv storage.

![Super Sprinter 3000 - Add](docs/super-sprinter-3000-add.png)

## Update existing User Stories [ /story/]
* The same form as the add page, but filled in with data of the given User Story.
* This data should be read from the csv file.
* An additional dropdown should be visible with the following validation rules:
  * dropdown value list
  * values:
    * planning
    * todo
    * in progress
    * review
    * done
  * The current status of the User Story should be selected by default
* The title of the submit button should be "Update User Story"
* The "Update User Story" button should update the existing entry, not create a new entry.

![Super Sprinter 3000 - Update](docs/super-sprinter-3000-update.png)
