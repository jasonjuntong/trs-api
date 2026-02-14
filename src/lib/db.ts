import { SQL } from "bun";

const url = Bun.env.POSTGRES_URL;
if (!url) throw new Error("POSTGRES_URL is missing from .env");

const pg = new SQL(url);

export default pg;

