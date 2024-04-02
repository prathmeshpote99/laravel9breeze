import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const NewShowProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios
            .get("/finduser")
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data.first_name);
                setFirstName(res.data.last_name);
                setFirstName(res.data.email);
                setFirstName(res.data.age);
                setFirstName(res.data.password);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const data = {
    //         first_name: firstName,
    //         last_name: lastName,
    //         email,
    //         password,
    //         age,
    //     };

    //     axios
    //         .post("/register", data)
    //         .then((res) => {
    //             console.log(res.data);
    //             toast.success(res.data.message);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             toast.error("Something went wrong");
    //         });
    //     setFirstName("");
    //     setLastName("");
    //     setAge("");
    //     setEmail("");
    //     setPassword("");
    // }

    return (
        <>
            <div className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                            <div className="bg-white p-4 p-md-5 rounded shadow-lg">
                                <form
                                    className="row g-3 needs-validation was-validated"
                                    novalidate=""
                                    // onSubmit={handleSubmit}
                                >
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-6">
                                            <label
                                                for="validationCustom01"
                                                className="form-label"
                                            >
                                                First Name{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-person-vcard"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstName"
                                                    id="firstName"
                                                    required
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={firstName}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label
                                                for="lastName"
                                                className="form-label"
                                            >
                                                Last Name{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-card-checklist"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                                    </svg>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastName"
                                                    id="lastName"
                                                    required
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={lastName}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                for="age"
                                                className="form-label"
                                            >
                                                Age{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-123"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="age"
                                                    id="age"
                                                    required
                                                    onChange={(e) =>
                                                        setAge(e.target.value)
                                                    }
                                                    value={age}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                for="validationCustomUsername"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-envelope"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend"
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label
                                                for="password"
                                                className="form-label"
                                            >
                                                Password{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-key"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    required
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={password}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                >
                                                    Update Profile
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-grid">
                                                <button
                                                    className="btn btn-danger btn-lg"
                                                    type="submit"
                                                >
                                                    Delete Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewShowProfile;
