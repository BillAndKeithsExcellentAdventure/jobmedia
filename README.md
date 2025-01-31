# My NPM Package

This package provides a set of asynchronous methods for retrieving albums based on asset count criteria from a media library.

## Installation

To install the package, use npm:

```
npm install my-npm-package
```

## Usage

After installing, you can import the package and use the provided methods to interact with albums.

```typescript
import { getAlbumsByAssetCount, getAlbumsByAssetCountGreaterThan, ... } from 'my-npm-package';
```

### Available Methods

- `getAlbumsByAssetCount(count: number)`: Retrieves albums with an exact asset count.
- `getAlbumsByAssetCountGreaterThan(count: number)`: Retrieves albums with an asset count greater than the specified count.
- `getAlbumsByAssetCountLessThan(count: number)`: Retrieves albums with an asset count less than the specified count.
- `getAlbumsByAssetCountBetween(min: number, max: number)`: Retrieves albums with an asset count between the specified minimum and maximum.
- `getAlbumsByAssetCountGreaterThanEqual(count: number)`: Retrieves albums with an asset count greater than or equal to the specified count.
- `getAlbumsByAssetCountLessThanEqual(count: number)`: Retrieves albums with an asset count less than or equal to the specified count.

## License

This project is licensed under the MIT License. See the LICENSE file for details.