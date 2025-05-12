import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipecomp, Sidebar } from "./Home";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Recipes()
{
    return (
      <>
        <Header />
        <Sidebar pathname="/recpies/" />
        <Footer />
      </>
    );
}


