import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderScript, j as renderComponent, k as renderHead } from '../chunks/astro/server_C0eg9gZe.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Note = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Note;
  const { note } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="note-card max-w-[600px] max-h-[300px] m-2 p-2 flex flex-col justify-between rounded-xl"${addAttribute(JSON.stringify(note), "data-note")} data-astro-cid-qg6lmfty> <div data-astro-cid-qg6lmfty> <h2 data-astro-cid-qg6lmfty>${note.date}</h2> </div> <div data-astro-cid-qg6lmfty> <p class="font-light" data-astro-cid-qg6lmfty>${note.thoughts.substring(0, 100)}...</p> </div> </div> `;
}, "/home/Adity/codes/projects/diary/src/components/Note.astro", void 0);

const $$Editor = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="editor-container h-[800px] m-2 p-2 flex flex-col items-end rounded-4xl" data-astro-cid-6tz4c7tr> <textarea class="editor-textarea grow w-full p-2 text-xl rounded-2xl" name="note" id="note" maxlength="2000" placeholder="Date: \n\nThoughts: " data-astro-cid-6tz4c7tr></textarea> <button id="save-btn" class="save-btn m-2 p-2 px-4 rounded-lg" data-astro-cid-6tz4c7tr>Save</button> </div>  ${renderScript($$result, "/home/Adity/codes/projects/diary/src/components/Editor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/Adity/codes/projects/diary/src/components/Editor.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let notes = [];
  try {
    const response = await fetch("http://localhost:4321/api/notes");
    if (response.ok) {
      notes = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Astro</title><script>\n      const theme = localStorage.getItem('theme') || 'light';\n      document.documentElement.setAttribute('data-theme', theme);\n    <\/script>", '</head> <body class="p-2" data-astro-cid-j7pv25f6> <div class="flex" data-astro-cid-j7pv25f6> <div class="grow mx-8" data-astro-cid-j7pv25f6> <div class="flex justify-between items-center" data-astro-cid-j7pv25f6> <h1 class="m-2 my-4 text-4xl font-bold" data-astro-cid-j7pv25f6>Dear Diary</h1> <button id="theme-toggle" class="theme-toggle p-2 px-4 rounded-lg" data-astro-cid-j7pv25f6>\nChange POV\n</button> </div> <div id="notes-container" data-astro-cid-j7pv25f6> ', ' </div> </div> <div class="grow mx-8" data-astro-cid-j7pv25f6> ', " </div> </div> ", "</body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), notes.map((note) => renderTemplate`${renderComponent($$result, "Note", $$Note, { "note": note, "data-astro-cid-j7pv25f6": true })}`), renderComponent($$result, "Editor", $$Editor, { "data-astro-cid-j7pv25f6": true }), renderScript($$result, "/home/Adity/codes/projects/diary/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "/home/Adity/codes/projects/diary/src/pages/index.astro", void 0);

const $$file = "/home/Adity/codes/projects/diary/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
