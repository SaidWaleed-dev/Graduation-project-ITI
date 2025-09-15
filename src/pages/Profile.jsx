    import axios from "axios";
    import {  useEffect, useState } from "react";

    function Profile() {
    let [user, setUser] = useState(null);
    useEffect(() => {
        const getData = async () => {
        let { data } = await axios.get("https://dummyjson.com/auth/me", {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setUser(data);
        };
        getData();
    }, []);
    return (
        <>
        <div className="container">
            <h1 className="text-primary text-center my-4 ">Uoure Profile</h1>
            {user && (
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                className="card-img-top"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                />
                <div className="card-body">
                <h5 className="card-title">
                    {user.firstName} {user.lastName}
                </h5>
                <p className="card-text">{user.email}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Username: {user.username}</li>
                <li className="list-group-item">Gender: {user.gender}</li>
                <li className="list-group-item">Age: {user.age}</li>
                </ul>
            </div>
            )}
        </div>
        </>
    );
    }
    export default Profile;
