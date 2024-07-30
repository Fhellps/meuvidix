// Configurar título da página
document.getElementById('pageTitle').innerText = 'Vidix Studio';

// Incorporar vídeo
const videoIframe = document.createElement('iframe');
videoIframe.width = '1280';
videoIframe.height = '720';
videoIframe.frameBorder = '0';
videoIframe.src = 'https://player.vimeo.com/video/992152069?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479';
videoIframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write';
videoIframe.title = 'O Colégio Deusa _ Filme de Comédia_ Completo em Português HD(720P_HD)';
document.getElementById('videoPlaceholder').appendChild(videoIframe);
