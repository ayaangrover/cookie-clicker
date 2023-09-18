const showWebsiteButton = document.getElementById('showWebsiteButton');
const websiteContainer = document.getElementById('websiteContainer');

const websites = [
    'https://ayaangrover.github.io',
    'https://ayaangrover.github.io/longon_capital_partners',
    'https://ayaangrover.github.io/age-calculator',
    'https://ayaangrover.github.io/hello-world',
    'https://ayaangrover.github.io/store-demo',
    'https://ayaangrover.github.io/school-lunch',
    'https://ayaangrover.github.io/lintoncs',
    'https://ayaangrover.github.io/effects',
    'https://ayaangrover.github.io/background-video',
    'https://ayaangrover.github.io/login-demo',
    'https://ayaangrover.github.io/space-player',
    'https://ayaangrover.github.io/cube-animation',
    'https://ayaangrover.github.io/infinite_stairs',
    'https://ayaangrover.github.io/neumorphic-login',
];

let currentWebsiteIndex = 0;

showWebsiteButton.addEventListener('click', () => {
    if (currentWebsiteIndex < websites.length) {
        websiteContainer.style.display = 'block';

        // Create an iframe element and set its attributes
        const iframe = document.createElement('iframe');
        iframe.src = websites[currentWebsiteIndex];
        iframe.width = '100%';
        iframe.height = '500px';
        iframe.frameBorder = '0';

        // Clear the websiteContainer and append the iframe
        websiteContainer.innerHTML = '';
        websiteContainer.appendChild(iframe);

        currentWebsiteIndex++;
    } else {
        alert('No more websites to display.');
    }
});
