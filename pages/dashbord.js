import Head from "next/head";
import Markdown from "marked-react";
import SimpleLayout from "../components/layout/simple";
import { ENV_API } from "../utils/config";
import { useEffect, useState } from "react";

export default function Dashbord() {
  const [doc, setDoc] = useState(null);
  /*const getDoc = async () => {
    console.log(ENV_API.apiDocs + "/api/docs");
    const data = await fetch(ENV_API.apiDocs + "/api/docs", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5001/api/docs",
      },
    });
    console.log(await data.json());
  };*/

  const markdown = `
## Bienvenido a mi documentación
### Elemento 1
Texto de la documentación compilada en HTML
### Elemento 2
Más texto de la documentación
`;
  useEffect(() => setDoc(markdown), []);
  return (
    <SimpleLayout>
      {" "}
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Documentos MD</h1>
          <p className="lead text-muted border border-primary rounded-top">
            <Markdown>{doc}</Markdown>
          </p>
          <p className="lead text-muted">
            <Markdown>{doc}</Markdown>
          </p>
        </div>
      </section>
      <div className=" ">
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SimpleLayout>
  );
}
