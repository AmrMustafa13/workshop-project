import Users from "./Users";
import NavBar from "./NavBar";

const Home = ({ onLogged }) => {
    return (
        <div>
            <NavBar onLogged={onLogged} />
            <Users />
        </div>
    );
}

export default Home;