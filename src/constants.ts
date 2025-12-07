
export const BASE_URL: string = "https://automationexercise.com/";

export enum TimeoutTypes {
    LoadPage,
    LoadComponent,
    CheckState
}

export const Timeout: Record<string, number> = {
    [TimeoutTypes.LoadPage]: 10000,
    [TimeoutTypes.LoadComponent]: 5000,
    [TimeoutTypes.CheckState]: 3000,
} as const;
