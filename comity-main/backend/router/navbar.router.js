import { Router } from "express";
import { requireUser } from "../../backend/middleware/requireUser.middleware.js";
import { createNavRoute, updateNavRoute, getAllNavRoutes, getAllShowNavRoutes } from "../../backend/controller/navbar.controller.js";

const router = Router();

router.get('/', getAllShowNavRoutes);
router.get('/all', requireUser, getAllNavRoutes);
router.post('/create', requireUser, createNavRoute);
router.put('/update', requireUser, updateNavRoute);

export {router as navRouter }