
import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
// import short from 'short-uuid'
import {encode} from 'entities'

const app = express()
const port = 3000
const __dirname = import.meta.dirname;
const DIAGRAMS_DIR = path.join(__dirname, '../public/diagrams/')
// const UPLOADS_DIR = path.join(__dirname, '../public/uploads/')
const template = fs.readFileSync(path.join(__dirname, "./template.html"),'utf8').split("\n---\n")
const notFound = encode(fs.readFileSync(path.join(DIAGRAMS_DIR, "404.seqcode"),'utf8'))
const example = encode(fs.readFileSync(path.join(DIAGRAMS_DIR, "example.seqcode"),'utf8'))

app.use(express.text());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(template[0] + example + template[1]);
})

app.get('/diagrams/:id', function (req, res, next) {
  try {
    const diagram = fs.readFileSync(path.join(DIAGRAMS_DIR, req.params.id + '.seqcode'),'utf8')
    res.send(template[0] + encode(diagram) + template[1]);
  } catch (e) {
    res.send(template[0] + notFound + template[1]);
  }
});

// app.get('/uploads/:id', function (req, res, next) {
//   try {
//     const diagram = fs.readFileSync(path.join(UPLOADS_DIR, req.params.id + '.seqcode'),'utf8')
//     res.send(template[0] + encode(diagram) + template[1]);
//   } catch (e) {
//     res.send(template[0] + notFound + template[1]);
//   }
// });

// app.post('/uploads', (req, res) => {
//   for (let i=0 ; i<5 ; i++) {
//     const id = short.generate()+".seqcode"
//     const p = path.join(UPLOADS_DIR,id)
//     if (fs.existsSync(p)) continue
//     fs.writeFileSync(p, req.body);
//     res.send(id)
//   }
//   res.status(500).send('Something broke!')
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
