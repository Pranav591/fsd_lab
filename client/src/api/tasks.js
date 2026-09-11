// Thin fetch wrapper around the Express REST API (server/routes/tasks.js).
// Every function returns a Promise resolving to parsed JSON.

const BASE_URL = "/api/tasks";

async function handleResponse(res) {
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message = data?.error || `Request failed with status ${res.status}`;
    throw new Error(message);
  }
  return data;
}

export function getTasks() {
  return fetch(BASE_URL).then(handleResponse);
}

export function createTask(title) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  }).then(handleResponse);
}

export function updateTask(id, updates) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then(handleResponse);
}

export function deleteTask(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" }).then(handleResponse);
}
