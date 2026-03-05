import express from 'express';
const app = express();

const PORT = process.env.PORT || 5050;

console.log("port", PORT);

app.get('/', (_req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.get('/test', (req, res)=>{
    res.send('This route works');
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});