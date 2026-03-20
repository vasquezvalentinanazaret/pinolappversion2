const { MongoClient } = require('mongodb');

// 🔥 TU CONEXIÓN REAL (ya sin <db_password>)
const uri = "mongodb+srv://Valentina:l7SsC8iCTq1jLzUW@cluster0.y3mdon3.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");

    // Crear o usar base de datos
    const db = client.db("miBase");
    const collection = db.collection("usuarios");

    // Insertar prueba
    const result = await collection.insertOne({
      nombre: "Valentina",
      edad: 20
    });

    console.log("📦 Documento insertado:", result.insertedId);

    // Leer datos
    const data = await collection.find().toArray();
    console.log("📄 Datos:", data);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

run();
