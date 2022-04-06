const fetchDataGet = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
}

export default fetchDataGet
