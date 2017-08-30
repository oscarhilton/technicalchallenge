# LW Technical Challenge
---

## Installing npm packages
### To install server packages:
From terminal/command line cd into **/server** and run __npm install__.
### To install client packages:
From terminal/command line cd into **/server/client** and run __npm install__.

## To connect to MongoDB
Make sure [MongoDB](https://www.mongodb.com/download-center#community) is installed in your local environment. Once installed run **mongod** from the terminal.

If you have a different setup from the default *"mongodb://localhost:27017"* or would like to use a hosted database such as [mLab](https://mlab.com/) you can change the address of the database the application connects to within **/server/config/constants.js**, changing the 'MONGO_URL' value.

## To start development environment
From terminal/command line cd into **/server** and run **npm run dev**.

This will start both your server and all the scripts inside Client for the React front-end. Included is Webpack which will compile the ES6/2017 code and also start LiveReload for quick development changes.

*Note: If you have problems where the use of ES2017 code is throwing errors you may need to upgrade your version of Node.*

## Server Technologies used
### Node & Express
The application runs in node using the Express framework.

### MongoDB & Mongoose

### CookieSession
CookieSession acts as the authorization cookie handler giving the User access for 30 days before expiration. On reflection, the use of Json Web Token (JWT) is possibly the preffered route for authorization when using Angular/React/Vue due to delivering a truly RESTful service.
### Bcrypt
With Bcyrpt no passwords are stored in plain text which is essential when securing any application. Inside **/server/models/User.js** there is the Mongoose User model which makes use of Bcrypt to encrypt the user's password before saving to the database and also compares the raw password sent to the form with the hashed password on the database. The amount of salt rounds the encryption uses can be changed using the SALT_ROUNDS variable at the top of the file.
### Passport
Middleware for hanlding client authentication. A large number of strategies are available including Google, Facebook and Github making client authentication very scalable.

Currently the Local Strategy is in place to deal with local authentication based on the local MongoDB server.

## Client Technologies used
### React
### Redux

## TODO / What I would have done to complete the technical
