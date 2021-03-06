module.exports = (vitreum) => {
    return `<!-- Doctype HTML5 -->
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>

	<link href='//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
	<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />

	<title>Farpoint</title>
	<link rel='icon' type='image/png' href='/assets/favicon.png' />
	${vitreum.head}
</head>
<body>
	<main id='reactRoot'  style='height:100%;'>${vitreum.body}</main>
</body>
	${vitreum.js}
</html>`;
};