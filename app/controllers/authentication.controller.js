import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "$2a$05$CESKeBLSbvFJOGhkhtb1NuYgvhWmVji1fDV.cbT7YP4dLpPZth4rW"

}]

async function reserva(req,res) {
    console.log(req.body);
    const user = req.body.user;
    const sexo = req.body.sexo;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const fecha = req.body.fecha;

    if (!user || !sexo || !telefono || !email || !fecha) {
        return res.status(400).send({status:"Error",message:"los campos estan incompletos"})  
    }  
    const usuarioRevisar = usuarios.find(usuario => usuario.user === user);
    if (!usuarioRevisar) {
        return res.status(400).send({status:"Error",message:"error en el login"})
    }
    const token = jsonwebtoken.sign(
        {user:usuarioRevisar.user},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRATION});

    const cookieOption = {
        expires: process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        path: "/reserva"
    };   
    res.cookie('jwt', token, cookieOption);
    res.send({ status: "ok", message: "Reserva hecha",redirect:"/admin" });
}


async function login(req,res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if (!user || !password) {
        return res.status(400).send({status:"Error",message:"los campos estan incompletos"})  
    }  
    const usuarioRevisar = usuarios.find(usuario => usuario.user === user);
    if (!usuarioRevisar) {
        return res.status(400).send({status:"Error",message:"error en el login"})
    }
    const loginCorrecto = await bcryptjs.compare(password,usuarioRevisar.password);
    if (!loginCorrecto) {
        return res.status(400).send({status:"Error",message:"error en el login"})
    }
    const token = jsonwebtoken.sign(
        {user:usuarioRevisar.user},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRATION});

    const cookieOption = {
        expires: process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        path: "/"
    };   
    res.cookie('jwt', token, cookieOption);
    res.send({ status: "ok", message: "Usuario Logueado",redirect:"/admin" });
}

async function registrar(req,res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email; 
    if (!user || !password || !email) {
        return res.status(400).send({status:"Error",message:"los campos estan incompletos"})
        
    }  
    const usuarioRevisar = usuarios.find(usuario => usuario.user === user);
    if (usuarioRevisar) {
        return res.status(400).send({status:"Error",message:"este usuario ya existe"})
    }

    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password, salt);
    
    const nuevoUsuario ={
        user, 
        email, 
        password: hashPassword
    };
    
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
    return res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.user} agregado`,redirect:"/" });
    
}

export const methods = {
    login,
    registrar,
    reserva
}