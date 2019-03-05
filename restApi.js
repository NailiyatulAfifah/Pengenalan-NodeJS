const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.get('/siswa/:nama',(request,response)=>{
    let namaSiswa = request.params.nama;
    response.end("Menampilkan Nama Siswa : " + namaSiswa);
})

app.post('/siswa',(request,response)=>{
    let namaSiswa = request.body.name;
    let alamatSiswa = request.body.address;
    response.end("Menampilkan siswa baru bernama " + namaSiswa + " yang beralamat di " + alamatSiswa);
})

app.delete('/siswa/:id', (request,response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;
    response.end('id ' + id + ' telah dihapus, dengan nama ' +namaSiswa);
})

app.put('/siswa/:id', (request,response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;
    let alamat = request.body,address;
    response.end('Siswa dengan id ' + id + ' telah diupdate');
})

app.listen('1234',(e)=>{
    console.log(e)
});