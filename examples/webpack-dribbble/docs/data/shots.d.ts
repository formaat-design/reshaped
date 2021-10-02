export declare type Shot = {
    title: string;
    id: string;
    imgUrl: string;
    likesCount: number;
    viewsCount: number;
    user: {
        name: string;
        location: string;
        logoUrl: string;
        accountType?: "Pro" | "Team";
    };
};
declare const shots: Shot[];
export default shots;
