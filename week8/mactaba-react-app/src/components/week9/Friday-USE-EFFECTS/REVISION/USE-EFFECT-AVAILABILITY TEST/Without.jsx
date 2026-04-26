// function ProductList() {
//   const [products, setProducts] = useState([])

//   // ❌ Fetching directly in render
//   fetch('api.example.com/products')
//     .then(res => res.json())
//     .then(data => setProducts(data)) // updates state
//   // state update → re-render → fetch again → state update → re-render → INFINITE LOOP 💥

//   return <ul>...</ul>
// }