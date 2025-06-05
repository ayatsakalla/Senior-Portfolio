document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const customCarousel = document.getElementById('customCarousel');
    // Add rounded-4 class to the carousel element
    customCarousel.classList.add('rounded-4');
    const siteModal = new bootstrap.Modal(document.getElementById('siteModal'));

    // Sample data for your slides
    const slidesData = [
        {
            image: 'images/carousel/cones-crepes.png',
            title: 'Cones and Crepes',
            buttonText: 'Learn More',
            modal: {
                title: 'Cones and Crepes',
                description: 'This was my first official client to have the privilege of building a website for. This client wanted a menu-style website for his local dessert business, and I was given the opportunity to make his dreams come to life for a website.',
                siteLink: 'https://ayatsakalla.github.io/Cones-Crepes/',
                siteImage: 'images/carousel/cones-crepes.png',
            }
        },
        {
            image: 'images/carousel/little-bird-toy-company.png',
            title: 'Little Toy Bird Company',
            buttonText: 'Learn More',
            modal: {
                title: 'Little Toy Bird Company',
                description: 'Working with another classmate and I, we were given the task of creating a website for a fake company that sells wooden toys with all of the coding knowledge that we had learned from that year.',
                siteLink: 'https://ayatsakalla.github.io/Little-Bird-Toy-Company/',
                siteImage: 'images/carousel/little-bird-toy-company.png',
            }
        },
        {
            image: 'images/carousel/coco-chanel.png',
            title: "Look Ma I'm Famous",
            buttonText: 'Learn More',
            modal: {
                title: "Look Ma I'm Famous",
                description: 'My goal was to pick a famous artist, and create a website for them to describe their lifestyle from their childhood and their rise to success. I chose to do my project on Coco Chanel, an extremely successful designer. ',
                siteLink: 'https://ayatsakalla.github.io/Look-Ma--I-m-Famous/',
                siteImage: 'images/carousel/coco-chanel.png',
            }
        },
        {
            image: 'images/carousel/web-design.png',
            title: 'Web Design Pathway Program',
            buttonText: 'Learn More',
            modal: {
                title: 'Web Design Pathway Program',
                description: 'A group of students and I created a website to represent the Web Design Program that our school offers, and it was to simulate a client experience outside of the classroom, and our client was the teacher who ran this program.',
                siteLink: 'https://zlevin1228.github.io/WebDesign/',
                siteImage: 'images/carousel/web-design.png',
            }
        },
        {
            image: 'images/carousel/trunk-or-treat.png',
            title: 'Trunk or Treat',
            buttonText: 'Learn More',
            modal: {
                title: 'Trunk or Treat',
                description: 'The Peer Leaders, a club in my school, was running their annual Trunk-Or-Treat in the high school, and needed a website to advertise and let others know about the spooky event.',
                siteLink: 'https://ayatsakalla.github.io/Trunk-Or-Treat/',
                siteImage: 'images/carousel/trunk-or-treat.png',
            }
        },
        {
            image: 'images/carousel/woodworking-ornaments.png',
            title: 'Woodworking Ornaments',
            buttonText: 'Learn More',
            modal: {
                title: 'Woodworking Ornaments',
                description: 'The woodworking class annually sells custom made wooden ornaments to sell during the Christmas seasons, and I helped make a website for the class to post out to families interested in purchasing a unique ornament for the winter holidays.',
                siteLink: 'https://ayatsakalla.github.io/Woodworking-Ornaments/',
                siteImage: 'images/carousel/woodworking-ornaments.png',
            }
        }
    ];

    // Function to populate carousel
    function populateCarousel() {
        slidesData.forEach((slide, index) => {
            // Create Carousel Item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', 'rounded-4', 'bord');
            if (index === 0) {
                carouselItem.classList.add('active');
            }
            carouselItem.style.backgroundImage = `url(${slide.image})`;

            // Create Bottom-Center Title and Button
            const bottomCenterOverlay = document.createElement('div');
            bottomCenterOverlay.classList.add('carousel-caption-bottom-center');
            bottomCenterOverlay.innerHTML = `<h5 class="shalma">${slide.title}</h5>`;

            const modalTriggerButton = document.createElement('button');
            modalTriggerButton.classList.add('btn', 'mt-2', 'thornrock', 'text-white');
            modalTriggerButton.style.backgroundColor = '#bf94e4';
            modalTriggerButton.setAttribute('data-bs-toggle', 'modal');
            modalTriggerButton.setAttribute('data-bs-target', '#siteModal');
            modalTriggerButton.textContent = slide.buttonText;

            // Store slide data as a property of the button for easy access
            modalTriggerButton.slideData = slide;

            modalTriggerButton.addEventListener('click', function () {
                // Populate modal content using the stored slide data
                const modalData = this.slideData.modal;

                console.log('Populating modal with:', modalData); // Debug log

                document.getElementById('siteModalLabel').textContent = modalData.title;
                document.getElementById('modalSiteTitle').textContent = modalData.title;
                document.getElementById('modalSiteDescription').textContent = modalData.description;

                // Set the href attribute and add click event for extra safety
                const visitLink = document.getElementById('modalSiteLink');
                visitLink.href = modalData.siteLink;
                visitLink.onclick = function (e) {
                    // Ensure the link works even if href fails
                    e.preventDefault();
                    window.open(modalData.siteLink, '_blank');
                    return false;
                };

                document.getElementById('modalSiteImage').src = modalData.siteImage;
                document.getElementById('modalSiteImage').alt = modalData.title + ' Screenshot';

                console.log('Visit link href set to:', modalData.siteLink); // Debug log
            });

            bottomCenterOverlay.appendChild(modalTriggerButton);
            carouselItem.appendChild(bottomCenterOverlay);
            carouselInner.appendChild(carouselItem);

            // Create Carousel Indicator
            const indicatorButton = document.createElement('button');
            indicatorButton.setAttribute('type', 'button');
            indicatorButton.setAttribute('data-bs-target', '#customCarousel');
            indicatorButton.setAttribute('data-bs-slide-to', index);
            if (index === 0) {
                indicatorButton.classList.add('active');
                indicatorButton.setAttribute('aria-current', 'true');
            }
            indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
            carouselIndicators.appendChild(indicatorButton);
        });
    }

    populateCarousel();

    // Alternative approach: Add a global click handler for the visit button
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'modalSiteLink') {
            const href = e.target.getAttribute('href');
            if (href && href !== '#') {
                console.log('Visit button clicked, opening:', href); // Debug log
                // Let the default behavior work, but this is a backup
            } else {
                console.log('Visit button has no valid href'); // Debug log
                e.preventDefault();
            }
        }
    });

    // Autoplay control: Pause on hover, resume on mouse leave
    const carouselInstance = bootstrap.Carousel.getInstance(customCarousel) || new bootstrap.Carousel(customCarousel);

    customCarousel.addEventListener('mouseenter', () => {
        carouselInstance.pause();
    });

    customCarousel.addEventListener('mouseleave', () => {
        carouselInstance.cycle();
    });

    // Pause carousel when modal is shown, resume when hidden
    document.getElementById('siteModal').addEventListener('show.bs.modal', function () {
        carouselInstance.pause();
    });

    document.getElementById('siteModal').addEventListener('hidden.bs.modal', function () {
        carouselInstance.cycle();
    });
});