// function ProductList() {
//   const [products, setProducts] = useState([])

//   // ✅ Fetching after render — controlled
//   useEffect(() => {
//     fetch('api.example.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//   }, []) // ← empty array = fetch ONCE only

//   return <ul>...</ul>
// }