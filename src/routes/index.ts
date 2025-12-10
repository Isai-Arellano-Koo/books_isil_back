import { Router } from "express";
import librosRoutes from './libros.routes'
import autoresRoutes from './autores.routes'
import categoriasRoutes from './categorias.routes'
import express from 'express';
import path from 'path';
import clientesRoutes from "./clientes.routes";

const router = Router();

// router.use('/api/users', userRoutes);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
router.use('/libros', librosRoutes)
router.use('/autores', autoresRoutes)
router.use('/categorias', categoriasRoutes)
router.use('/clientes', clientesRoutes)

export default router;

