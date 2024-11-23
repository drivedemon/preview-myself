export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface IPersonalInformation {
    id: number;
    first_name: string;
    last_name: string;
    nick_name: string;
    job_position: string;
    github_url: string;
    mobile_phone: string;
    email: string;
    description: string;
}

export interface IEducation {
    id: number;
    university_name: string;
    grade: number;
    start_year: number;
    end_year: number;
    faculty_name: string;
    major_name: string;
}

export interface ISkill {
    id: number;
    title: string;
    skill_details: ISkillDetail[] | [];
}

export interface ISkillDetail {
    id: number;
    skill_id: number;
    name: string;
    level: string;
}

export interface IWorkExperience {
    id: number;
    company_name: string;
    job_position: string;
    start_date: string;
    end_date: string;
    project_name: string;
    description: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
