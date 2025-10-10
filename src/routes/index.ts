import { Router } from "express";
import librosRoutes from './libros.routes'
import autoresRoutes from './autores.routes'
import categoriasRoutes from './categorias.routes'
import express from 'express';
import path from 'path';

const router = Router();

// router.use('/api/users', userRoutes);
router.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
router.use('/libros', librosRoutes)
router.use('/autores', autoresRoutes)
router.use('/categorias', categoriasRoutes)

export default router;

