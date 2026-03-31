import { useNavigate } from "react-router";

function HomeButton(){
    const navigate = useNavigate()
    // const goHome = () => {
    //     navigate('/')
    function goHome(){
        navigate('/')
    }
    return(
        <button onClick={goHome}>Go Home</button>
    )
}
export default HomeButton


// // . Always wrap your app with BrowserRouter
    
// 2. Use Routes and Route to define pages
    
// 3. Use Link instead of `<a>`
    
// 4. Use useParams for dynamic URLs
    
// 5. Use useNavigate for redirects
    
// 6. Always include a 404 route