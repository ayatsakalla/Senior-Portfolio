document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const customCarousel = document.getElementById('customCarousel');
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
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }
            carouselItem.style.backgroundImage = `url(${slide.image})`;

            // Create Bottom-Center Title and Button
            const bottomCenterOverlay = document.createElement('div');
            bottomCenterOverlay.classList.add('carousel-caption-bottom-center');
            bottomCenterOverlay.innerHTML = `<h5 class="shalma">${slide.title}</h5>`;

            const modalTriggerButton = document.createElement('button');
            modalTriggerButton.classList.add('btn', 'mt-2', 'thornrock', 'text-white'); // Added text-white
            modalTriggerButton.style.backgroundColor = '#bf94e4'; // Added background-color
            modalTriggerButton.setAttribute('data-bs-toggle', 'modal');
            modalTriggerButton.setAttribute('data-bs-target', '#siteModal');
            modalTriggerButton.textContent = slide.buttonText;
            modalTriggerButton.addEventListener('click', function () {
                // Populate modal content
                document.getElementById('siteModalLabel').textContent = slide.modal.title;
                document.getElementById('modalSiteTitle').textContent = slide.modal.title;
                document.getElementById('modalSiteDescription').textContent = slide.modal.description;
                document.getElementById('modalSiteLink').href = slide.modal.siteLink;
                document.getElementById('modalSiteImage').src = slide.modal.siteImage;
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