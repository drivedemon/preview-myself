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

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
