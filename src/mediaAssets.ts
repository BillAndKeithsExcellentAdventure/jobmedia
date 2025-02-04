import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect } from "react";
import { ImageManipulator } from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { Stack } from "./stack";

export class MediaAssets {
    private _hasNextPage = true;
    private _after: string | undefined = undefined;
    private _pageSize: number = 0;
    private _stack: Stack<string | undefined>;

    constructor() {
        console.log("MediaAssets constructor");

        this._pageSize = 10;
        this._hasNextPage = true;
        this._after = undefined;
        this._stack = new Stack<string>();

        this.getFirstAssetPage = this.getFirstAssetPage.bind(this);
        this.getNextAssetPage = this.getNextAssetPage.bind(this);

        console.log("MediaAssets ended constructor");
    }

    public setPageSize(pageSize: number) {
        this._pageSize = pageSize;
    }

    public async getFirstAssetPage(pageSize: number): Promise<MediaLibrary.Asset[]> {
        this._pageSize = pageSize;
        this._hasNextPage = true;
        this._after = undefined;

        const result = await this.getNextAssetPage();
        console.log("Got first page of assets with size: " + result?.length);
        return result ? result : [];
    }

    public async getNextAssetPage(): Promise<MediaLibrary.Asset[] | null> {
        this._stack.push(this._after);

        console.log("Getting next assets with page size: " + this._pageSize);
        console.log("  HasNextPage: " + this._hasNextPage);

        console.log(`  stack size: ${this._stack.size()}`);
        for (let i = 0; i < this._stack.size(); i++) {
            console.log(`  stack[${i}]: ${this._stack.get(i)}`);
        }

        if (this._hasNextPage) {
            const result = await this.getAssetPage(this._pageSize, this._after);
            this._hasNextPage = result.hasNextPage;
            this._after = result.endCursor;

            return result.assets;
        }

        return [];
    }

    public async getPreviousAssetPage(): Promise<MediaLibrary.Asset[] | undefined> {
        if (this._stack.isEmpty()) {
            return undefined;
        }

        this._stack.pop();
        let prev = this._stack.peek();

        console.log("Getting previous assets with page size: " + this._pageSize);
        console.log(`  stack size: ${this._stack.size()}`);
        for (let i = 0; i < this._stack.size(); i++) {
            console.log(`  stack[${i}]: ${this._stack.get(i)}`);
        }

        console.log("  cursor length: " + prev?.length);
        if (this._stack.size() > 0) {
            this._after = prev?.length === undefined ? undefined : prev;
            console.log("  this._after: " + this._after);
            return (await this.getAssetPage(this._pageSize, this._after)).assets;
        }

        return undefined;
    }

    private async getAssetPage(
        pageSize: number,
        pageCursor: string | undefined
    ): Promise<MediaLibrary.PagedInfo<MediaLibrary.Asset>> {
        console.log("getAssetPage: page size: " + pageSize);
        console.log("getAssetPage: page cursor: " + pageCursor);

        try {
            const result = await MediaLibrary.getAssetsAsync({
                first: pageSize,
                after: pageCursor,
            });

            return result;
        } catch (error) {
            console.error(`Error fetching asset page: ${error}`);
            throw error;
        }
    }

    public async getAssetById(assetId: string, albumId: string): Promise<MediaLibrary.Asset | null> {
        try {
            const asset = await MediaLibrary.getAssetInfoAsync(assetId);
            if (asset && asset.albumId === albumId) {
                return asset;
            }
            return null;
        } catch (error) {
            console.error(`Error fetching asset by ID: ${error}`);
            return null;
        }
    }

    async getAllAssets(): Promise<MediaLibrary.Asset[]> {
        let assets: MediaLibrary.Asset[] = [];
        let hasNextPage = true;
        let after: string | undefined = undefined;

        while (hasNextPage) {
            const result = await MediaLibrary.getAssetsAsync({
                first: 100, // Adjust the number as needed
                after: after,
            });
            assets = assets.concat(result.assets);
            hasNextPage = result.hasNextPage;
            after = result.endCursor;
        }

        return assets;
    }

    async createThumbnail(uri: string, jobName: string, width: number, height: number): Promise<string | undefined> {
        let thumbnailUrlInBase64: string | undefined = undefined;

        try {
            let thumbnailUri: string | undefined = undefined;

            // Copy the original image
            thumbnailUri = `${FileSystem.documentDirectory}Thumbnail_${jobName}.jpg`;
            console.log(`Creating thumbnail for ${uri}...`);
            console.log(`   by copying file to for ${thumbnailUri}...`);

            await FileSystem.copyAsync({
                from: uri,
                to: thumbnailUri,
            });

            // Manipulate the copied image to create a thumbnail
            const manipContext = await ImageManipulator.manipulate(thumbnailUri);

            manipContext.resize({ width: width, height: height });

            thumbnailUrlInBase64 = await FileSystem.readAsStringAsync(thumbnailUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            if (thumbnailUrlInBase64) {
                await FileSystem.deleteAsync(thumbnailUri);
            }
        } catch (error) {
            console.error(`Error creating thumbnail: ${error}`);
            thumbnailUrlInBase64 = undefined;
        }

        return thumbnailUrlInBase64;
    }
}
