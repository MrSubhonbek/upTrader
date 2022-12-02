import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { IProject } from "../interface/interfaces";

import { Projects } from "../page/Projects";
import { Tasks } from "../page/Tasks";

interface IProps {
  projects: IProject[];
  setProjects: (project: IProject[]) => void;
}

export const RoutesApp: FC<IProps> = ({ projects, setProjects }) => {
  return (
    <Routes>
      <Route
        index
        element={<Projects projects={projects} setProjects={setProjects} />}
      />
      <Route path="/:id" element={<Tasks />} />
    </Routes>
  );
};
