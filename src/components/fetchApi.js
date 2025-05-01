const API = `http://localhost:3000/`;

const fetchData = async () => {
  const response = await fetch(`${API}`);
  const json = await response.json();
  return json;
};

const fetchEvents = async () => {
  const response = await fetch(`${API}/events`);
  const json = await response.json();
  return json;
};

const fetchEvent = async () => {
  const response = await fetch(`${API}/events/:id`);
  const json = await response.json();
  return json;
};
