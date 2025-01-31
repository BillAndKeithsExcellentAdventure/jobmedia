import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect } from "react";

export class Albums {
    async getAlbums() {
        const albums = await MediaLibrary.getAlbumsAsync();
        return albums;
    }

    async getAlbumsByTitle(title: string) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.find((album) => album.title === title);
        return album;
    }

    async getAlbumsByType(type: string) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type);
        return album;
    }

    async getAlbumsByAssetCount(count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount === count);
        return album;
    }

    async getAlbumsByAssetCountGreaterThan(count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount > count);
        return album;
    }

    async getAlbumsByAssetCountLessThan(count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount < count);
        return album;
    }

    async getAlbumsByAssetCountBetween(min: number, max: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount > min && album.assetCount < max);
        return album;
    }

    async getAlbumsByAssetCountGreaterThanEqual(count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount >= count);
        return album;
    }

    async getAlbumsByAssetCountLessThanEqual(count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.assetCount <= count);
        return album;
    }

    async getAlbumsByTypeAndTitle(type: string, title: string) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type && album.title === title);
        return album;
    }

    async getAlbumsByTypeAndAssetCount(type: string, count: number) {
        const albums = await MediaLibrary.getAlbumsAsync();
        const album = albums.filter((album) => album.type === type && album.assetCount === count);
        return album;
    }
}
