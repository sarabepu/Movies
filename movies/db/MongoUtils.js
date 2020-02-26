const MongoClient = require('mongodb').MongoClient;
const fs = require("fs");
const credenciales = fs.readFileSync("./credenciales.json")
const jsonContent = JSON.parse(credenciales);
function MongoUtils() {
    const uri = `mongodb+srv://${jsonContent.usuario}:${jsonContent.clave}@cluster0-h9ykn.mongodb.net/MoviesReviews?retryWrites=true&w=majority`;
    console.log(uri,'URL')
    
    

    function getMovies(cbk) {
        let client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("MoviesReviews").collection("Movies");
            collection.find({}).toArray((err,list)=>{
                if (err) throw err;
                cbk(list);
                client.close();
            });
            
        });
    }

    let mu={};
    mu.getMovies=getMovies;
    return mu;
}
module.exports = MongoUtils()  