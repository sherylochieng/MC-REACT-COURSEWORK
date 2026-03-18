// function Products(){
//     return(
//         <div>
//             <h1>products</h1>
//         </div>
//     )
// }
// export default Products

import { useParams } from "react-router";

function Products(){
    const {id} = useParams()
    return(
        <div>
            <h1>products</h1>
            <p>Product ID: {id}</p>
        </div>
    )

}
export default Products