import * as MediaLibrary from "expo-media-library";
export declare class MediaAssets {
    private _hasNextPage;
    private _after;
    private _pageSize;
    private _stack;
    constructor();
    setPageSize(pageSize: number): void;
    getFirstAssetPage(pageSize: number): Promise<MediaLibrary.Asset[]>;
    getNextAssetPage(): Promise<MediaLibrary.Asset[]>;
    getPreviousAssetPage(): Promise<MediaLibrary.Asset[] | undefined>;
    private getAssetPage;
    getAllAssets(): Promise<MediaLibrary.Asset[]>;
    private getDistanceBetweenPoints;
    getAllAssetsNearLocation(longitude: number, latitude: number, distance: number, statusFunction?: (status: string) => void): Promise<MediaLibrary.Asset[]>;
    createThumbnail(uri: string, jobName: string, width: number, height: number): Promise<string | undefined>;
    getAssetLocation(assetId: string): Promise<{
        latitude: number;
        longitude: number;
    } | null>;
}
