import { Router } from "express";
import { borrarTarea, crearTarea, listarTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);
router.route("/tarea/:id").get(obtenerTarea).delete(borrarTarea)

export default router;
