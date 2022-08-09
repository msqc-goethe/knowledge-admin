import { NbIconLibraries, NbSvgIcon } from '@nebular/theme';
interface NbOriginalEvaIcon {
    toSvg(options: NbEvaIconOptions): any;
}
export interface NbEvaIconOptions {
    width: string;
    height: string;
    fill: string;
    animation: {
        type: string;
        hover: boolean;
        infinite: boolean;
    };
}
export declare class NbEvaSvgIcon extends NbSvgIcon {
    protected name: any;
    protected content: NbOriginalEvaIcon;
    constructor(name: any, content: NbOriginalEvaIcon);
    getContent(options: any): string;
}
export declare class NbEvaIconsModule {
    private NAME;
    constructor(iconLibrary: NbIconLibraries);
    private createIcons;
}
export {};
