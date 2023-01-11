const searchByImage = ( info, tab ) => {
	const url = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent( info.srcUrl )}`;
	browser.tabs.create({ url, active : true });
};


browser.contextMenus.create({
	id: 'gsbi-search-by-image',
	title: browser.i18n.getMessage( 'searchByImageContextMenuLabel' ),
	contexts: [ 'image' ],
	onclick: searchByImage,
	icons: {
		16: 'img/google-logo.svg',
		32: 'img/google-logo.svg',
	},
	targetUrlPatterns: [
		'*://*/*',
	],
});
