const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const NOTES_FILE = path.join(__dirname, '../notes.json');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// قراءة الملاحظات
function readNotes() {
  if (!fs.existsSync(NOTES_FILE)) return [];
  return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8') || '[]');
}

// كتابة الملاحظات
function writeNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

// جلب كل الملاحظات
app.get('/api/notes', (req, res) => {
  res.json(readNotes());
});

// إضافة ملاحظة
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
  const notes = readNotes();
  const newNote = { id: Date.now(), title, content };
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

// حذف ملاحظة
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  let notes = readNotes();
  notes = notes.filter(note => note.id !== id);
  writeNotes(notes);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});