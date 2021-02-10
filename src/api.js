export default {
    search: (query) =>
      fetch(`http://localhost:3001/api/search?q=${query}`)
        .then((res) => res.json()),
        
    fetch: (id) =>
      fetch(`http://localhost:3001/items/${id}`).then((res) => res.json())
  };