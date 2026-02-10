import { SQL } from "bun";

const sql = new SQL("mysql://root:@localhost:3306/trs");

const getProjects = async () => {
    return await sql`SELECT * FROM projects`;
}

export {
    getProjects
}