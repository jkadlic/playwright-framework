
export interface IPage {
    waitFor(): Promise<void>;
}

export interface IRoutablePage extends IPage {
    goTo(): Promise<void>;
}