import React from "react";
import Table from "../components/table";
const page = () => {
  return (
    <div className="container">
      <div className="justify-center flex flex-col  items-center">
        <div className="mb-2 mt-4 justify-center flex">
          <h2 className="text-center text-lime-600 text-3xl">
            Bienvenue dans l'application de gestion des taches
          </h2>
        </div>
        <br />
        <div className="mb-2">
          <p className="text-xl text-blue-600  text-center">
            Prenez le controle de vos taches avec precisions
          </p>
        </div>
      </div>
       <Table/>
    </div>
  );
};

export default page;
