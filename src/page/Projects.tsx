import { FC } from "react";
import { Trash } from "react-feather";
import { useNavigate } from "react-router";

import { CustomInput } from "../components/CustomInput/CustomInput";

import { IProject } from "../interface/interfaces";

import "./Project.scss";

interface IProps {
  projects: IProject[];
  setProjects: (project: IProject[]) => void;
}

export const Projects: FC<IProps> = ({ projects, setProjects }) => {
  const navigate = useNavigate();

  const removeProject = (projectId: number) => {
    const updateProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updateProjects);
  };

  const handleProjects = projects.map((project) => (
    <div
      key={project.id}
      onClick={() => {
        navigate(`/${project.name}`);
      }}
    >
      {project.name}
      <Trash
        onClick={(e) => {
          e.stopPropagation();
          removeProject(project.id);
        }}
      />
    </div>
  ));

  const addProject = (value: string) => {
    setProjects([...projects, { name: value, id: Math.random() }]);
  };

  return (
    <div className="project-container">
      <h1>Projects</h1>
      {handleProjects}
      <CustomInput text="Add Project" onSubmit={addProject} />
    </div>
  );
};
