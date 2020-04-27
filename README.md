# Table of Contents
* [About BudgetBuddy](#about-budgetbuddy)
*/ * [User Guide](#user-guide) /*
* [Development History](#development-history)
    * [Milestone 1: (01/14/2020 - 01/29/2020)](#milestone-1)
    * [Milestone 2: (02/04/2020 - 02/23/2020)](#milestone-2)
    * [Milestone 3: (02/25/2020 - 03/15/2020)](#milestone-3)
    * [Milestone 4: (03/16/2020 - 04/12/2020)](#milestone-4)
    * [Milestone 5: (04/02/2020 - 04/26/2020)](#milestone-5)
* [Developer Guide](#developer-guide)
  * [Installation](#installation)

# About BudgetBuddy
The BudgetBuddy meteor application will allow individuals to track their online purchases and find the total amount of money they spend overtime 

# Development History

# Milestone 1
## Team Discussions
- Discussed with group and created an informational paper on what our project will be about.
- Created Github repository
- Began creating HTML files to start creating the base design of the web application

## Initializaton 
### Completed by: Leah-Mei Villanueva
- Created Github Repository
- Created initial setup for code (ESlint, html files)

## Mockup Development 
- Created html mockup
<img src="images/home-page-mockup.png" width="600" height="350">

- About page mockup
<img src="images/about-page-mockup.png" width="600" height="350">

# Milestone 2 
### Completed by Leah-Mei Villanueva
- Setup Semantic UI React
- Converted to react with new design
<img src="images/home-page-react.png" width="600" height="350">
- Converted to react with new design
<img src="images/about-page-react.png" width="600" height="350">

# Milestone 3 
## Functional Implementation
### Completed by: Levy Jean Matsuda
- created react design for sign in
<img src="images/login-page-react.png" width="600" height="350">

- created react design for registration page
<img src="images/reg-page-react.png" width="600" height="350">

### Initialize Database and Backend Dependencies
- installed MongoDB, Express, Bycryptjs, jsonwebtoken, passport, validator, is-empty

### Build Server
- created server.js file to create and build express app
- configured databases
  - expense API
  - users API
- Created login and registration function
- Created functions to add, delete, and get expenses

### Fuzz Testing
- Tested register functions
- Tested login functions
- Tested expense functions (add, delete, get)

# Milestone 4 
### Completed By: Leisha Soberano-Keawemauhili

#### Components
- Converted the TopMenu and FooterMenu into components for pages

#### App
- Implemented routing between pages through the navigation bar

# Milestone 5 
### Completed By: Leisha Soberano-Keawemauhili

#### Expenses
- Created UI of add-budget.js for user to insert spending data
  - Implemented Date Picker for date selection
- Created UI expense.js as template for viewing spending data

## Pending Progress:
#### Leah-Mei Villanueva
###### Date: (02/04/2020 - 02/23/2020)
- React setup for Sign up (completed 04/02/2020 LM)
- React setup for Sign in (completed 04/02/2020 LM)
- React setup for About page (completed 03/07/2020 LV)
- React setup for Home page (completed 03/07/2020 LV)

###### Date: (02/24/2020 - 03/08/2020)
#### Login Page
- Edit Sign in page/links and link to account (add error if no account)

#### Sign Up Page
- Edit sign up page/links and make it functional

#### Other
- Specific route to different pages
- Route links to pages
- Run app as regular website

#### Levy Jean Matsuda
###### Date: (02/04/2020 - 02/23/2020)
- About page with React set-up (completed 03/07/2020 LV)

###### Date: (04/13/2020 - 04/26/2020)
### Configuration
- configure front-end and back-end connection
- Configure user with their logged expenses

### Client-end tasks
- Add mask to password input field
- React component for expense list
- Configure protected routes


#### Sollie Garcia
###### Date: (02/04/2020 - 02/23/2020)
###### (02/24/2020 - 03/08/2020)

#### Leisha Soberano-Keawemauhili
###### Date: (02/04/2020 - 02/23/2020)
###### Date: (02/24/2020 - 03/15/2020)
- Implement routing
- Convert/move HTML code from home and about files to component files for the navigation bar and footer menu
###### Date: (04/13/2020 - 04/26/2020)
- Front-end Expense input and viewing


# Developer Guide
### Want to join forces? Here's how!

#### Installation
First, [install meteor](https://www.meteor.com/install)

Second, [Fork us on github!](https://github.com/leahmeiv/BudgetBuddy) and clone the repo to your favorite laptop.

Once in the main directory simply...

```asp
cd app
```
After which you will need to install the required node libraries...
```asp
meteor npm intall
```
...as well as the following for the confirm box module...
```
npm install react-confirm-alert --save
```
```asp
npm install semantic-ui-react semantic-ui-css --save

```
The first time starting the app intializes some default data.  The output should look something like this...
```asp
meteor npm run start

> app@ start /Users/admin/github/budgetbuddy/budgetbuddy/app
> meteor run

[[[[[ ~/github/budgetbuddy/budgetbuddy/app ]]]]]    

=> Started proxy.                             
=> Started MongoDB.          
=> Started your app.
```

**That's it!**
You are now ready to start contributing to BudgetBuddy!

#### The color scheme used for BudgetBuddy is [Serio Verify](https://www.awwwards.com/sites/serio-verify)

- ![#17252a](https://placehold.it/15/17252a/000000?text=+) `#17252a`
- ![#2b7a78](https://placehold.it/15/2b7a78/000000?text=+) `#2b7a78`
- ![#3aafa9](https://placehold.it/15/3aafa9/000000?text=+) `#3aafa9`
- ![#def2f1](https://placehold.it/15/def2f1/000000?text=+) `#def2f1`
- ![#feffff](https://placehold.it/15/feffff/000000?text=+) `#feffff`
