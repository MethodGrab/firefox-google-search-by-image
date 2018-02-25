# Google Search By Image
> A Firefox extension that adds Google’s "search by image" search to the context menu shown when you right click on an image.


## Development

1. `yarn install`
1. `yarn run start`


## Release Process

After making changes to the extension, do the following to publish a new version:

1. `yarn run test`
1. Bump the `version` in `src/manifest.json`
1. Commit the version change and tag the commit with the version number
1. `yarn run package` to bundle the `xpi` file
1. Upload the generated `xpi` to https://addons.mozilla.org/en-US/developers/addons
