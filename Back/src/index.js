
const { PORT } = require('./config/global');
const app = require('./server');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://gabrielcid77:<burbuja>@cluster0.eeiyg.mongodb.net/Hogartec-productos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  
  client.close();
})






app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

