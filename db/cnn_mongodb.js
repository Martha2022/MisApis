import mongoose from 'mongoose'

let isConected= false;

const conectarMongodb=async()=>{
    if(isConected){
        console.log('Conecatdo a la BDD'.green);
        return;
    }

    try {
    await mongoose.connect(process.env.MONGO_URL);
    isConected=true;
    console.log('Conectado a Mongo'.green);
    } catch (error) {
        console.log('Error al conectar a Mongo'.red);
    }

}

const db = mongoose.connection;

db.on('error',(error)=>{
isConected = false;
console.log('Error al conectar a MongoDB'.red);
});

db.once('open', ()=>{
isConected = true;
});

db.on('disconnected', ()=>{
isConected = false;
console.log('Desconectado de MongoDB'.yellow);
});

process.on('SIGINT', async ()=>{
await mongoose.connection.close();
console.log('MongoDB desconectado'.yellow);
process.exit(0);
});


export {conectarMongodb, isConected}