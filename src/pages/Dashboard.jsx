import api from "../api/axios";

const Dashboard = () => <h1>Dashboard</h1>;

    const response = api.get("auth/Profile");
    console.log(response);

export default Dashboard;