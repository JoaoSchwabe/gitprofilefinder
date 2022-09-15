import { useState } from "react";
import { api } from "../../services/api";
import "./styles.css";

export default function Home() {
    const [nome, setNome] = useState("");
    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const [repos, setRepos] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        api.get(`${nome}`).then((res) => {
            setUser(res.data);
            setShow(true);
        });

        api.get(`${nome}/repos`).then((res) => {
            setRepos(res.data);
        });
    };

    return (
        <section className="container">
            <form className="form">
                <input
                    type="text"
                    className="input"
                    placeholder="Insira seu usuário do GitHub"
                    onChange={(e) => {
                        setNome(e.target.value);
                    }}
                />
                <input
                    type="submit"
                    value="Abrir"
                    className="button"
                    onClick={handleSubmit}
                />
            </form>
            <br />
            {show ? (
                <div className="res">
                    <div className="container-profile">
                        <img src={user.avatar_url} />
                        <div className="container-profile-info">
                            <p>{user.name}</p>
                            {user.email ? <p>Email: {user.email}</p> : null}
                            <p>Nome de usuário: <a href={user.html_url} target="_blank">{user.login}</a></p>
                            {user.bio ? <p>Bio: {user.bio}</p> : null}
                        </div>
                    </div>
                    <div className="repos">
                        <h2>Repositórios: </h2>
                        <ul>
                            {repos?.map((repo) => {
                                return (
                                    <div
                                        key={repo.full_name}
                                        className="repos-map"
                                    >
                                        <li>
                                            <p>- {repo.full_name}</p>
                                            <p>{repo.description}</p>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
