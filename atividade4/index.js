const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.dividir(parseFloat(req.params.a), parseFloat(req.params.b));
        res.send(resultado.toString());
    } catch (error) {
        res.status(400).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
