# Getting Started with Eremit React App

This a web app for eremit system (Money Transfer)

## Guidelines for the project setup and structure

`clone the repository `
git clone https://github.com/ntwaliandy/eremit-web-app.git

`install node_modules`
npm install

## project structure
`All pages should be under components folder (create it under src folder)`

forexample :-
    -src/components:
        -home.js
        -about.js
        -contact.js
        -send.js

`All url endpoints should look dynamic such as `

    -home.js    => /
    -about.js   => /about-us
    -send.js    => /send-money

    etc............

`All the react routing should be registered in App.js such as`

    <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/about-us" element={<About />} >
        <Route path="/send-money" element={<Send />} >

        etc........
    </Routes>

` Create your branch under this repository called inno-web where you will be pushing your code`

your advised to push your codes randomly to keep track and of where you are and commits

## NB: Don't try to modify MASTER-BRANCH


## success and HAPPY CODING !!!!!!!!
