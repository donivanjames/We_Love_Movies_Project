<h1>We Love Movies</h1>
<p>This project includes all the code needed to set up a Database, an API, and server routing using PostgreSQL, Express.js and Knex.js.</p>

<p>The project uses information about movies, movie theaters, movie critics, and movie reviews to populate a database from which information can be retrieved and formatted into a RESTful API. The API can then be accessed by a front-end application to allow end-users to interact with the information in a more natural way.</p>

<h2>Installation:</h2>
<p>If you would like to set up this server on your PC, you will need to set up a PostgreSQL database and then fork and clone this repository. Once you have cloned the repository, open your CLI and run the below command:</p>

```javascript
npm install
```

<p>You will need to create a ".env" file in the project directory. Inside of this file inculde the variable "DATABASE_URL" and set it's value to your database url. Inside knexfile.js you will see that "DATABASE_URL" is what is used to connect to your database.</p>

<p>Once you have your server configured, it is time to create the tables and seed them. To do this, you must run TWO commands one after the other, they are:</p>

```javascript
npx knex migrate:latest
```

```javascript
npx knex seed:run
```

<p>Your database should now contain five tables and data in each table.</p>

<p>Now you can run your server by executing the following command:</p>

```javascript
npm run start:dev
```

<p>This is will run the server continuously on port 5000. If you would like to view the API you can open you browser and naviagate to</p>

```javascript
localhost:5000
```
