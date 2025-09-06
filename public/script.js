const notesContainer = document.getElementById('notes-container');
const noteForm = document.getElementById('note-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

async function fetchNotes() {
  const res = await fetch('/api/notes');
  const notes = await res.json();
  const notesDiv = document.getElementById('notes');
  notesDiv.innerHTML = '';
  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `
      <strong>${note.title || 'No Title'}</strong>
      <p>${note.content || ''}</p>
      <button onclick="deleteNote(${note.id})">Delete</button>
    `;
    notesDiv.appendChild(div);
  });
}

async function addNote(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });
  document.getElementById('noteForm').reset();
  fetchNotes();
}

async function deleteNote(id) {
  await fetch(`/api/notes/${id}`, { method: 'DELETE' });
  fetchNotes();
}

noteForm.addEventListener('submit', addNote);
window.onload = fetchNotes;