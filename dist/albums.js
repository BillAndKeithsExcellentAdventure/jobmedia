import * as MediaLibrary from "expo-media-library";
export class Albums {
    async getAlbums() {
        const albums = await MediaLibrary.getAlbumsAsync();
        return albums;
    }
    async getAlbumsByTitle(title) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.find((album) => album.title === title);
        return album;
    }
    async getAlbumsByType(type) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type);
        return album;
    }
    async getAlbumsByAssetCount(count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount === count);
        return album;
    }
    async getAlbumsByAssetCountGreaterThan(count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount > count);
        return album;
    }
    async getAlbumsByAssetCountLessThan(count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount < count);
        return album;
    }
    async getAlbumsByAssetCountBetween(min, max) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount > min && album.assetCount < max);
        return album;
    }
    async getAlbumsByAssetCountGreaterThanEqual(count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount >= count);
        return album;
    }
    async getAlbumsByAssetCountLessThanEqual(count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount <= count);
        return album;
    }
    async getAlbumsByTypeAndTitle(type, title) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type && album.title === title);
        return album;
    }
    async getAlbumsByTypeAndAssetCount(type, count) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type && album.assetCount === count);
        return album;
    }
}
