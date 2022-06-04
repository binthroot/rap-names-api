const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'The Streets',
  },

  'lil poppa': {
    age: 31,
    birthName: 'Joseph Joseph',
    birthLocation: 'West Baltimore',
  },
  '8 six five': {
    age: 22,
    birthName: 'Chivey Chivey',
    birthLocation: 'DouglasVille, GA',
  },
  unknown: {
    age: 'unknown',
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
};

//GET request
//request and response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();

  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  }
  res.json(rappers['unknown']);
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
