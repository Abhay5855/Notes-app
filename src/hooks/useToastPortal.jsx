import { useEffect, useState } from "react";

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${Date.now()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    div.style = "position:fixed;top : 5%; right : 3%;";
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    // clean up
    return () => document.getElementsByTagName("body")[0].removeChild(div);
  }, [portalId]);

  return { loaded, portalId };
};
