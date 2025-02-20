import { useEffect } from "react";

export function MiroApp(){
    useEffect(() => {
      if (new URLSearchParams(window.location.search).has("panel")) return;
      window.miro.board.ui.on("icon:click", async () => {
        window.miro.board.ui.openPanel({
          url: `/?panel=1`,
        });
      });
    }, []);
  }