import express from "express";
import { createProjectRoute } from "./features/project/projectRoutes.js";
import { createProjectController } from "./features/project/projectController.js";

const projectController = createProjectController();
const projectRoutes = createProjectRoute(projectController);

const app = express();

app.use("/api/v1/projects", projectRoutes);

app.get("/", (req, res) => {
    res.send("Hello backend");
});

app.listen(3000, () => console.log("Listening to port 3000"));