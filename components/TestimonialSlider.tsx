import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const TestimonialSlider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
        >
            <ClientReview
                image="/images/aashif.png"
                name="Mohd Aashif"
                role="Java Developer"
                text="Dedicated MERN stack developer with a passion for crafting scalable and efficient web solutions, consistently striving for excellence in coding practices and project delivery.
                Proven ability to collaborate within agile teams, adept at problem-solving and leveraging the latest technologies to build robust full-stack applications.
                Committed to continuous learning and staying updated with industry trends, eager to mentor junior developers and contribute to the success of dynamic development projects."
            />
            <ClientReview
                image="/images/aaquib.png"
                name="Aaquib Ahmed"
                role="Web Developer"
                text="As a MERN stack developer, you’ve shown impressive dedication and a keen willingness to learn. Your ability to 
                grasp new concepts and apply them in projects has already made a noticeable impact. Keep pushing your boundaries; your potential is evident. Your enthusiasm for collaboration and feedback is a great asset to the team."
            />
            <ClientReview
                image="/images/c1.jpg"
                name="Abul Hasan"
                role="Graphic Designer"
                text="As you embark on your journey as a MERN stack developer, your enthusiasm and adaptability shine through. You've already contributed meaningful insights, showing a great foundation in the technologies. Stay focused on continuous 
                learning and building your skills; the sky's the limit. Your proactive approach is a breath of fresh air for the team."
            />
        </Carousel>
    )
}

export default TestimonialSlider
