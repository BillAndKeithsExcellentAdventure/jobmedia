import * as MediaLibrary from "expo-media-library";
export declare class Albums {
    getAlbums(): Promise<MediaLibrary.Album[]>;
    getAlbumsByTitle(title: string): Promise<MediaLibrary.Album | undefined>;
    getAlbumsByType(type: string): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCount(count: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCountGreaterThan(count: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCountLessThan(count: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCountBetween(min: number, max: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCountGreaterThanEqual(count: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByAssetCountLessThanEqual(count: number): Promise<MediaLibrary.Album[]>;
    getAlbumsByTypeAndTitle(type: string, title: string): Promise<MediaLibrary.Album[]>;
    getAlbumsByTypeAndAssetCount(type: string, count: number): Promise<MediaLibrary.Album[]>;
}
