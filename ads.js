// Incorporar anúncio vertical
const adScript = document.createElement('script');
adScript.async = true;
adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7992396831352494';
adScript.crossOrigin = 'anonymous';
document.head.appendChild(adScript);

const adIns = document.createElement('ins');
adIns.className = 'adsbygoogle';
adIns.style.display = 'block';
adIns.dataset.adClient = 'ca-pub-7992396831352494';
adIns.dataset.adSlot = '6236011642';
adIns.dataset.adFormat = 'auto';
adIns.dataset.fullWidthResponsive = 'true';
document.getElementById('adPlaceholder').appendChild(adIns);

const adScript2 = document.createElement('script');
adScript2.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
document.getElementById('adPlaceholder').appendChild(adScript2);

// Incorporar anúncio horizontal
const horizontalAdIns = document.createElement('ins');
horizontalAdIns.className = 'adsbygoogle';
horizontalAdIns.style.display = 'block';
horizontalAdIns.dataset.adClient = 'ca-pub-7992396831352494';
horizontalAdIns.dataset.adSlot = '6236011642';
horizontalAdIns.dataset.adFormat = 'auto';
horizontalAdIns.dataset.fullWidthResponsive = 'true';
document.getElementById('horizontalAdPlaceholder').appendChild(horizontalAdIns);

const horizontalAdScript = document.createElement('script');
horizontalAdScript.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
document.getElementById('horizontalAdPlaceholder').appendChild(horizontalAdScript);
