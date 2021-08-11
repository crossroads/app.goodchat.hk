import { useState } from "react";

let id = 1;

export const useUniqueId = () => {
  const [uid] = useState(id++);
  return [uid];
}
