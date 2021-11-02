import Header from "./component/Header";
import ProfileCard from "./component/ProfileCard";
export default function ProfilePage({users}){
    return (
       <>
            <Header text="Profile Page"/>
            {/* <ProfileCard user={users[0]}/> */}
            {users.map((user) => (
                <ProfileCard key={user.id} user={user}/>))}
       </>
    );
}