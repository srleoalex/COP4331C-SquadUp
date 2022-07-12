const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const math = require("mathjs")

const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);
client.connect();

app.post('/addGame', async (req, res, next) =>
{
  // incoming: discordID, gameID, name, level, rank, position
  // outgoing: game name, error
	
});

app.get('/viewProfile', async (req, res, next) =>
{
  let error = '';

  const { username, tag } = req.body;

  const db = client.db("");
  const results = await db.collection('Users').find({Username:username,Tag:tag}).toArray();

  // ...

});

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => 
 {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

//app.listen(5000); // start Node + Express server on port 5000
app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
router.get("/getFriends", (req, res) => {
    res.send("NO FRIENDS");
});

module.exports = router;
