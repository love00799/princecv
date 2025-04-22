
// Redirect to /resume right away

import { useEffect } from "react";
export default function Index() {
  useEffect(() => {
    window.location.href = "/resume";
  }, []);
  return null;
}
