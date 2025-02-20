import React from "react";

import { MiroApp } from "../src/initMiroApp";
import { BoardItems } from "../components/GenerateText";

export default function Main() {
  MiroApp();
  
  return ( 
    <div>
      <BoardItems />
    </div>
  );
}

