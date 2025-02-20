import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


const designs = [
  {
    img: 'https://cache.careers360.mobi/media/presets/860X430/article_images/2020/4/6/B.tech-in-_architecture-engineering.jpg',
    link: 'https://www.behance.net/gallery/185999823/Branding-Design-for-Cafe',
    title: 'Bachelor in Architecture (B.Arch)'
  },
  {
    img: 'https://babafaridgroup.edu.in/assets/img/bfgi/bsc-mls.jpg',
    link: 'https://www.behance.net/gallery/185999055/Logo-Design-for-Restaurant',
    title: 'B.Sc(MLS)'
  },
  {
    img: 'https://imgs.search.brave.com/6bhgCo8GXvAcjwzrGnDK7Q1etLJ_WQ8Qg2Y-NzkQ5T0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym11LmVkdS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/OS9MYXctQ291cnNl/cy1hbmQtTExCLVN5/bGxhYnVzLndlYnA',
    link: 'https://www.behance.net/gallery/185998567/Website-Design-for-Tech-Company',
    title: 'B.A. LLB'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o0fMftldN5FkTT10ZkawWLEmMa4S25__z6HBm-dvAs0DJ_Kl7D4bY6i3qTltPU4WgXE&usqp=CAU',
    link: 'https://www.behance.net/gallery/185997789/Mobile-App-UI-Design',
    title: 'B.Com. LLB'
  },
  {
    img: 'https://srmap.edu.in/wp-content/uploads/2023/10/cse-blog.jpg',
    link: 'https://www.behance.net/gallery/185997123/E-commerce-Website-Design',
    title: 'B.TECH-ECE/CSE(IKGPTU)'
  },
  {
    img: 'https://www.iimtindia.net/iimt-college-engineering/images/btech%20ME%201920x926-01.jpg',
    link: 'https://www.behance.net/gallery/185996445/Social-Media-Campaign',
    title: 'B.TECH-CE/ME(IKGPTU)'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8FdF2zJvLoKGPWSykMD0-jrEwpy4Puk6QQ&s',
    link: 'https://www.behance.net/gallery/185995789/Product-Packaging-Design',
    title: 'B.TECH (LEET)'
  },
  {
    img: 'https://dutchuncles.in/wp-content/uploads/2021/03/What-are-the-new-products-and-services-in-Travel-and-Hospitality-01.jpg',
    link: 'https://www.behance.net/gallery/185995123/Brand-Identity-Design',
    title: 'B.Sc HHA'
  }
];

const sliderImages = [
  { 
    image: 'https://img.freepik.com/free-vector/technology-linkedin-banner-template_742173-30387.jpg?semt=ais_hybrid',
    alt: "Landscape Image 1",
  },
  { 
    image: 'https://media.istockphoto.com/id/1208439697/vector/education-and-contract-set.jpg?s=612x612&w=0&k=20&c=jSfJgyTVsJjW0T7Akop1bRsmIX7jDf_PBQjp7HuSSuI=',
    alt: "Landscape Image 2",
  },
  { 
    image: 'https://media.istockphoto.com/id/1281806437/vector/school-student-taking-writing-exam-teacher-watching-him.jpg?s=612x612&w=0&k=20&c=QibFDTjBLM-Y2d_mQd_47Pko5qnB4VfHJV_e0rd9evQ=',
    alt: "Landscape Image 3",
  },
  { 
    image: 'https://media.istockphoto.com/id/1208437788/vector/business-and-education-set.jpg?s=612x612&w=0&k=20&c=F-itMWt_aEm_4labOLQnwg174ChqIl-puZRhu8U7t5o=',
    alt: "Landscape Image 4",
  },
];

const Designs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-[#105750] font-poppins text-4xl sm:text-5xl lg:text-[60px] font-bold mb-4 sm:mb-6 lg:mb-8">
          Our Courses
        </h1>
        <p className="text-[#105750] font-poppins text-lg sm:text-xl lg:text-[22px] max-w-7xl mx-auto leading-tight px-2 sm:px-4">
        At CT Group of Institutions, we are committed to excellence in education, innovation, and career development. As a NAAC-accredited institution, we take pride in offering diverse courses across multiple disciplines, designed to equip students with the skills and knowledge they need to succeed in today’s competitive world.
        </p>
      </div>

      {/* Sliding Cards Container */}
      <div className="relative px-4 sm:px-8 lg:px-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: { 
              slidesPerView: 1,
              spaceBetween: 20 
            },
            640: { 
              slidesPerView: 2,
              spaceBetween: 20 
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 25 
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 25 
            },
            1280: { 
              slidesPerView: 4,
              spaceBetween: 20 
            }
          }}
          className="py-4"
        >
          {designs.map((design, index) => (
            <SwiperSlide key={index}>
              <div className="w-[240px] h-[360px] rounded-[21px] bg-[#105750] overflow-hidden shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105">
                {/* Image Container (80%) */}
                <div className="h-[80%] w-full">
                  <img
                    src={design.img}
                    alt={design.title}
                    className="w-full h-full object-cover rounded-t-[21px]"
                    loading="lazy"
                  />
                </div>
                {/* Link Container (20%) */}
                <div className="h-[20%] flex items-center justify-center bg-[#105750]">
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-poppins text-base sm:text-lg hover:underline transition-all duration-300 px-2 text-center"
                  >
                    {design.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Auto-playing Landscape Slider */}
      <div className="mt-16 flex justify-center">
        <div className="w-[1220px] h-[330px] bg-[#105750] rounded-[21px] shadow-lg overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full"
          >
            {sliderImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Designs;