import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/atoms/header/Header";

import React from "react";

export default function Login(){
    
    return (
        <div>
            <Header />
            <FontAwesomeIcon icon={faRocket} />
        </div>
        
    );
}