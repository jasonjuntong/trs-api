import { Router } from "express";
import { ProjectController } from "./projectController.js";

export function createProjectRoute(controller: ProjectController) {
    const router = Router();

    router.get("/", async (req, res) => {
        const result = await controller.getAll();
        res.json(result)
    });

    router.post("/", (req, res) => {
        
    });

    return router;
}