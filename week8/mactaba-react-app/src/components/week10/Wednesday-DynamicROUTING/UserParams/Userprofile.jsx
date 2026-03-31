import { useParams } from "react-router";

function UserProfile(){
    const {userName} = useParams()
    return(
        <div>
            <h1>User Profile</h1>
            <p>Username: {userName}</p>
        </div>
    )
}
export default UserProfile
