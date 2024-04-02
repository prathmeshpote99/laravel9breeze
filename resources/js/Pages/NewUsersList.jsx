import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function NewUsersList() {
    const [data, setData] = useState([]);

    function fetchUsersData() {
        axios
            .get("/findall")
            .then((res) => {
                setData(res.data.users);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <div className="container">
            <div className="p-md-5 rounded shadow-sm table-responsive">
                <table className="table table-dark table-hover table-bordered">
                    <thead>
                        <tr>
                            <th className="col-1 text-center">No</th>
                            <th className="col-4 text-center">Full Name</th>
                            <th className="col-3 text-center">Email</th>
                            <th className="col-1 text-center">Age</th>
                            {/* <th className="col-1 text-center">Edit</th>
                            <th className="col-1 text-center">View</th>
                            <th className="col-1 text-center">Delete</th> */}
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
                                            {user.first_name} {user.last_name}
                                        </td>
                                        <td className="col-4">{user.email}</td>
                                        <td className="col-1 text-center">
                                            {user.age}
                                        </td>
                                        {/* <td className="col-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pencil-fill"
                                                viewBox="0 0 16 16"
                                                cursor="pointer"
                                                style={{
                                                    marginLeft: "35%",
                                                }}
                                            >
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                            </svg>
                                        </td>
                                        <td className="col-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-eye-fill"
                                                viewBox="0 0 16 16"
                                                cursor="pointer"
                                                style={{
                                                    marginLeft: "35%",
                                                }}
                                            >
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg>
                                        </td>
                                        <td className="col-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-trash-fill"
                                                viewBox="0 0 16 16"
                                                color="red"
                                                cursor="pointer"
                                                style={{
                                                    marginLeft: "35%",
                                                }}
                                            >
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </td> */}
                                    </tr>
                                </tbody>
                            </>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}
