import { Router } from "express";
import controllerDespesas from "./controllers/controller.despesas.js"
import controllerCategorias from "./controllers/controller.categoria.js"

const router = Router();

//Categorias
router.get("/categorias", controllerCategorias.Listar)


//Despesas
router.get("/despesas", controllerDespesas.Listar)

router.get("/despesas/:id", controllerDespesas.ListarId)

router.post("/despesas", controllerDespesas.Inserir)

router.put("/despesas/:id", controllerDespesas.Editar)

router.delete("/despesas/:id", controllerDespesas.Excluir)

export default router;
