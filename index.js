const { MongoClient } = require('mongodb');

// 🔥 TU STRING (YA ARREGLADO)
const uri = "mongodb+srv://Valentina:l7SsC8iCTq1jLzUW@cluster0.y3mdon3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    // Conectar
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");

    // Base de datos
    const db = client.db("miBase");

    // Colección
    const collection = db.collection("usuarios");

    // Insertar dato
    const insertResult = await collection.insertOne({
      nombre: "Valentina",
      edad: 20,
      fecha: new Date()
    });

    console.log("📦 Insertado ID:", insertResult.insertedId);

    // Leer datos
    const usuarios = await collection.find().toArray();
    console.log("📄 Usuarios:", usuarios);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

run();
