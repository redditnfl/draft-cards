function luma(r, g, b, a) {
	if (arguments.length === 1) {
		var match;
		var colorString = String(r);
		var hexRegex = /^\#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
		var rgbRegex = /^rgb\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3})\)$/;
		var rgbaRegex = /^rgba\(([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1,3}),[ +]?([0-9]{1}|(?:[0-9]{1})?\.[0-9]+)\)$/;
		if (match = colorString.match(hexRegex)) {
			var hex = match[1];
			if (hex.length === 3) {
				// Convert to 6
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
			}
			var rgb = parseInt(hex, 16); // convert rrggbb to decimal
			r = rgb >> 16 & 0xff; // extract red
			g = rgb >> 8 & 0xff; // extract green
			b = rgb >> 0 & 0xff; // extract blue
		} else if (match = colorString.match(rgbRegex)) {
			r = parseFloat(match[1]);
			g = parseFloat(match[2]);
			b = parseFloat(match[3]);
		} else if (match = colorString.match(rgbaRegex)) {
			r = parseFloat(match[1]);
			g = parseFloat(match[2]);
			b = parseFloat(match[3]);
		}
	} else {
		r = parseFloat(r) || 0;
		g = parseFloat(g) || 0;
		b = parseFloat(b) || 0;
	}
	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	return luma;
}