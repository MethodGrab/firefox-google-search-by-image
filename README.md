# Google Search By Image
> A Firefox extension that adds Google’s "search by image" search to the context menu shown when you right click on an image.

<p style="text-align: center">
	<img src="media/screenshot-1.png" alt="Extension screenshot">
</p>


## Pros
- Fast!
- No excessive permission requests


## Restrictions
- Only works with `http` & `https` URLs (not `file`, `ftp`, `data`, etc.)


## Development

1. `yarn install`
1. `yarn run start`


## Release Process

To publish a new version:

1. `yarn run test`
1. Bump the `version` in `src/manifest.json`
1. Commit the version change and tag the commit with the version number
1. `yarn run package` to bundle the `xpi` file
1. Upload the generated `xpi` to https://addons.mozilla.org/en-US/developers/addons
