const enButton = document.getElementById('en');
const arButton = document.getElementById('ar');
const logo = document.getElementById('logo');
const aboutText = document.getElementById('aboutText');
const ferrous = document.getElementById('ferrous');
const ferrousText = document.getElementById('ferrousText');
const nonferrous = document.getElementById('nonferrous');
const nonferrousText = document.getElementById('nonferrousText');
const steelProcess = document.getElementById('steelProcess');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const emailAddress = document.getElementById('emailAddress');
const website = document.getElementById('website');

const englishContent = {
         logo: 'images/recycle.png',
         aboutText: 'Your factory description in English',
         ferrous: 'Ferrous Steel',
         ferrousText: 'Ferrous steel description',
         nonferrous: 'Non-Ferrous Steel',
         nonferrousText: 'Non-Ferrous steel description',
         steelProcess: 'Explain the steel Recycling process.',
         address: 'Address: Your Address',
         phone: 'Phone: Your Phone',
         emailAddress: 'Email: Your Email',
         website: 'Your Website'
};

const arabicContent = {
         logo: 'images/recycle.png',
         aboutText: 'وصف المصنع باللغة العربية',
         ferrous: 'الفولاذ الحديدي',
         ferrousText: 'وصف الفولاذ الحديدي',
         nonferrous: 'الفولاذ غير الحديدي',
         nonferrousText: 'وصف الفولاذ غير الحديدي',
         steelProcess: 'شرح عملية إعادة تدوير الفولاذ.',
         address: 'العنوان: عنوانك',
         phone: 'الهاتف: هاتفك',
         emailAddress: 'البريد الإلكتروني: بريدك الإلكتروني',
         website: 'موقعك الإلكتروني'
};

enButton.addEventListener('click', () => {
         updateContent(englishContent);
         document.documentElement.lang = 'en';
});

arButton.addEventListener('click', () => {
         updateContent(arabicContent);
         document.documentElement.lang = 'ar';
});

function updateContent(content) {
         logo.src = content.logo;
         aboutText.textContent = content.aboutText;
         ferrous.textContent = content.ferrous;
         ferrousText.textContent = content.ferrousText;
         nonferrous.textContent = content.nonferrous;
         nonferrousText.textContent = content.nonferrousText;
         steelProcess.textContent = content.steelProcess;
         address.textContent = content.address;
         phone.textContent = content.phone;
         emailAddress.textContent = content.emailAddress;
         website.textContent = content.website;
}

// Initial content load (English by default)
updateContent(englishContent);
document.documentElement.lang = 'en';

// Example form submission handling (you can add more robust validation)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
         event.preventDefault(); // Prevent default form submission
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const message = document.getElementById('message').value;

         // Here you can add code to send the form data to your server
         console.log('Form submitted:', { name, email, message });

         // Optionally, you can clear the form fields
         document.getElementById('name').value = '';
         document.getElementById('email').value = '';
         document.getElementById('message').value = '';
});

// Example map integration (replace with your Google Maps API key and coordinates)
function initMap() {
         const map = new google.maps.Map(document.getElementById('map'), {
                  center: { lat: 37.7749, lng: -122.4194 }, // Replace with your factory's coordinates
                  zoom: 12
         });
         // Add a marker to the map
         const marker = new google.maps.Marker({
                  position: { lat: 37.7749, lng: -122.4194 }, // Replace with your factory's coordinates
                  map: map,
                  title: 'Your Factory'
         });
}

// Load Google Maps API asynchronously
function loadGoogleMaps() {
         const script = document.createElement('script');
         script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`; // Replace YOUR_API_KEY
         script.async = true;
         document.body.appendChild(script);
}

// Call loadGoogleMaps when the page loads
window.onload = loadGoogleMaps;