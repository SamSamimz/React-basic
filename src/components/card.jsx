import React, { useEffect, useState } from "react";
export function Card({ name, desc }) {
  const [IsPending, setIsPending] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    //___Just for testing purpose
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Invalid url request, please check the url first!");
          }
          console.log(res);
          res.json();
        })
        .then((data) => {
          console.log(data);
          setIsPending(false);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  });

  return (
    <div className="text-center">
      {IsPending && <h2>Loading Data....</h2>}
      {Error && <h2>Error Defined....</h2>}
      <div className="col-3 card p-3">
        <h4 className="text-center">{name}</h4>
        <p className="text-secondary">{desc}</p>
        <button className="btn btn-danger">Click Me</button>
      </div>
    </div>
  );
}
