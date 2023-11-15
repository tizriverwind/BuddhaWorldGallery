# BuddhaWorldGallery

BuddhaWorldGallery is an online website for art lovers to be able to browse, filter, and upload buddha artifacts across the world. Users will be able to filter artifacts based on the dynasty they like, upload new artifacts to our database, and leave comments about their favorite artifacts.

## Authors

Huiqin Hu & Xiaolin Liu

## Project links

Please refer to the links below for more details on the project
Deployed Site:
Walkthrough Video:
Slides: https://docs.google.com/presentation/d/e/2PACX-1vSb4RggmRkXw76P1Rx_Kq70ptaCaZxrPqxt4rqLPdXJSP0fls_F35BlBvAqJqE51zVl9NtKloT6a_yX/pub?start=false&loop=false&delayms=3000
Design Document: (./design_document.md)
Class Link: https://johnguerra.co/classes/webDevelopment_fall_2023/

## Disclaimer

Some data in this project are synthetic fictitious data and for educational and demonstration purposes only

## Functionalities / How to Use

###

- CRUD Operations on Gallery:
  - Shows all the artifacts in our dataset. Navigation bar creates option to read up about us or contact us
- Create an Artifact
  - User is able to upload information on new artifacts

## Backend installation

To set up BuddhaWorldGallery, you will need the following:
Clone the repository and then do below to run backend server:
```
npm install
npm install nodemon
npm start
```
Which will start the backend server, running on http://localhost:3000.

## Databse

This assumes that you have a Mongo server running on localhost: 27017, or configured in the `MONGOMONGODB_URI` environment variable.
Enter below string to import our database:
```
mongoimport --db buddhaWorld --collection ListedArtifacts --file db/ListedArtifacts.json --jsonArray
```

## Frontend installation
The "front" folder contains a vite react server. If you are in the root folder BuddhaWorldGallery, use ``` cd front ``` to enter our frontend folder. Enter below command to run our frontend server:
```
npm run dev
```
Which will start the frontend server, running on http://localhost:5174.


