import { FC } from "react";
import { useParams } from "react-router";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { IProject } from "../interface/interfaces";
interface IProps {}
export const Tasks: FC<IProps> = ({}) => {
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
