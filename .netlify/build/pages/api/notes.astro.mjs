import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;

const notesFilePath = path.resolve(process.cwd(), "public/notes.json");

async function POST({ request }) {
  try {
    const newNote = await request.json();
    const notes = JSON.parse(await fs.readFile(notesFilePath, "utf-8"));
    notes.push(newNote);
    await fs.writeFile(notesFilePath, JSON.stringify(notes, null, 2));
    return new Response(JSON.stringify({ message: "Note saved successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error saving note", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function GET() {
  try {
    const notes = await fs.readFile(notesFilePath, "utf-8");
    return new Response(notes, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching notes", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
