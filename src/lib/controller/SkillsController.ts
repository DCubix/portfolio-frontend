export type Skill = {
    id: number;
    name: string;
    experienceyears: number;
    active: boolean;
};

export class SkillController {

    public static async fetch(): Promise<Skill[]> {
        let res = await fetch('https://dcubix.up.railway.app/skills');
        if (res.ok) {
            let data = await res.json();
            return data as Skill[];
        }
        return [];
    }

}
