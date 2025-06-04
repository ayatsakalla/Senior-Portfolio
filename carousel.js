document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const customCarousel = document.getElementById('customCarousel');
    const siteModal = new bootstrap.Modal(document.getElementById('siteModal'));

    // Sample data for your slides
    const slidesData = [
        {
            image: 'https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Project+Alpha',
            title: 'Project Alpha',
            buttonText: 'View Details',
            modal: {
                title: 'Project Alpha Overview',
                description: 'This is a detailed description of Project Alpha. It focuses on innovative solutions in web development, showcasing cutting-edge technologies and user-centric design principles.',
                siteLink: 'https://www.example.com/projectalpha',
                siteImage: 'https://via.placeholder.com/800x450/FF5733/FFFFFF?text=Project+Alpha+Site',
            }
        },
        {
            image: 'https://via.placeholder.com/1200x600/33FF57/FFFFFF?text=EcoGarden+App',
            title: 'EcoGarden App',
            buttonText: 'Explore App',
            modal: {
                title: 'EcoGarden App Features',
                description: 'The EcoGarden App helps you manage your garden with smart watering schedules, plant care tips, and community features. A perfect blend of technology and nature.',
                siteLink: 'https://www.example.com/ecogarden',
                siteImage: 'https://via.placeholder.com/800x450/33FF57/FFFFFF?text=EcoGarden+App+Site',
            }
        },
        {
            image: 'https://via.placeholder.com/1200x600/3357FF/FFFFFF?text=Data+Analytics+Dashboard',
            title: 'Data Analytics Dashboard',
            buttonText: 'See Dashboard',
            modal: {
                title: 'Data Analytics Dashboard Deep Dive',
                description: 'Our data analytics dashboard provides real-time insights into your business metrics, empowering informed decision-making with interactive visualizations.',
                siteLink: 'https://www.example.com/dashboard',
                siteImage: 'https://via.placeholder.com/800x450/3357FF/FFFFFF?text=Data+Analytics+Dashboard+Site',
            }
        },
        {
            image: 'https://via.placeholder.com/1200x600/FF33CC/FFFFFF?text=Virtual+Reality+Experience',
            title: 'VR Experience',
            buttonText: 'Dive In',
            modal: {
                title: 'Virtual Reality Experience Showcase',
                description: 'Immerse yourself in breathtaking virtual reality worlds. This project showcases the capabilities of VR in education and entertainment.',
                siteLink: 'https://www.example.com/vr',
                siteImage: 'https://via.placeholder.com/800x450/FF33CC/FFFFFF?text=VR+Site',
            }
        },
        {
            image: 'https://via.placeholder.com/1200x600/FFFF33/333333?text=E-commerce+Platform',
            title: 'E-commerce Platform',
            buttonText: 'Shop Now',
            modal: {
                title: 'E-commerce Platform Overview',
                description: 'A robust and scalable e-commerce platform designed for seamless shopping experiences, featuring secure payments and intuitive navigation.',
                siteLink: 'https://www.example.com/ecommerce',
                siteImage: 'https://via.placeholder.com/800x450/FFFF33/333333?text=E-commerce+Site',
            }
        },
        {
            image: 'https://via.placeholder.com/1200x600/33FFFF/333333?text=Mobile+Game+Dev',
            title: 'Mobile Game Dev',
            buttonText: 'Play Game',
            modal: {
                title: 'Mobile Game Development Project',
                description: 'A fun and engaging mobile game developed with a focus on intuitive controls and captivating gameplay. Available on iOS and Android.',
                siteLink: 'https://www.example.com/mobilegame',
                siteImage: 'https://via.placeholder.com/800x450/33FFFF/333333?text=Mobile+Game+Site',
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
            bottomCenterOverlay.innerHTML = `<h5>${slide.title}</h5>`;

            const modalTriggerButton = document.createElement('button');
            modalTriggerButton.classList.add('btn', 'btn-primary', 'mt-2'); // Add mt-2 for spacing
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