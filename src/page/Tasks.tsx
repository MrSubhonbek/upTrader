import { FC } from "react";
import { useParams } from "react-router";

import { Dashboard } from "../components/Dashboard/Dashboard";

export const Tasks: FC = () => {
  const params = useParams();
  return (
    <div>
      <Dashboard
        LocalStorageKeyName={params.id?.toString() || "0"}
        projectName={params.id}
      />
    </div>
  );
};
