export type Project = {
    id: number;
    title: string;
    description: string;
    images: string[];
    active: boolean;
    url: string;
};

export class ProjectController {

    public static async fetch(): Promise<Project[]> {
        let res = await fetch('https://dcubix.up.railway.app/projects');
        if (res.ok) {
            let data = await res.json();
            return data as Project[];
        }
        return [];
    }

}
