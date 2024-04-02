import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function NewUsersList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchUsersData() {
        axios
            .get("/findall")
            .then((res) => {
                setData(res.data.users);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <div className="container">
            <div className="p-md-5 rounded shadow-sm table-responsive">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                        <div
                            class="spinner-border text-secondary"
                            role="status"
                        ></div>
                    </div>
                ) : (
                    <table className="table table-dark table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="col-1 text-center">No</th>
                                <th className="col-4 text-center">Full Name</th>
                                <th className="col-3 text-center">Email</th>
                                <th className="col-1 text-center">Age</th>
                            </tr>
                        </thead>
                        {data?.map((user) => {
                            return (
                                <>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th className="col-1 text-center">
                                                {user.id}
                                            </th>
                                            <td className="col-3">
                                                {user.first_name}{" "}
                                                {user.last_name}
                                            </td>
                                            <td className="col-4">
                                                {user.email}
                                            </td>
                                            <td className="col-1 text-center">
                                                {user.age}
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })}
                    </table>
                )}
            </div>
        </div>
    );
}
