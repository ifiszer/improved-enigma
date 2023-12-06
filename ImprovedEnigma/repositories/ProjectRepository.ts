// Define the Project interface
interface Project {
  name: string;
}

// Define the ProjectRepository class
class ProjectRepository {
  private static instance: ProjectRepository;
  private projects: Project[] = [];

  private constructor() {}

  static getInstance(): ProjectRepository {
    if (!ProjectRepository.instance) {
      ProjectRepository.instance = new ProjectRepository();
    }
    return ProjectRepository.instance;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  getProject(name: string): Project | undefined {
    return this.projects.find(project => project.name === name);
  }

  removeProject(name: string): void {
    this.projects = this.projects.filter(project => project.name !== name);
  }

  findProjects(name?: string): Project[] {
    if (name) {
      return this.projects.filter(project => project.name.includes(name));
    }
    return this.projects;
  }
}