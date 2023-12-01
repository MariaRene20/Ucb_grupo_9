import  express  from "express";

//Fix para __dirname
import path from 'path';

import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controller.js";

//server

const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("servidor corriendo en puerto",app.get("port"));

//configuracion

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use('/app/images', express.static('app/images'));
// Configuración de archivos estáticos
app.use('/app/images', express.static(path.join(__dirname, 'app/images')));
app.use('/app/pages', express.static(path.join(__dirname, 'app/pages')));
app.use(express.static(path.join(__dirname, 'public')));


//rutas

// Rutas
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "pages/login.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "app", "pages", "register.html")));
app.get("/admin", (req, res) => res.sendFile(path.join(__dirname, "pages/admin/admin.html")));
app.get("/reserva", (req, res) => res.sendFile(path.join(__dirname, "pages/reserva.html")));

app.post("/api/registrar",authentication.registrar);
app.post("/api/login",authentication.login);
app.post("/api/reserva",authentication.reserva);





