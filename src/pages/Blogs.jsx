import BlogList from "../components/Blogs/BlogList";
import HeroSection from "../components/HeroSection";

// image, title, ngo, description

const blogPosts = [
    {
        image: 'https://img.freepik.com/free-photo/beautiful-bison-wild-sunny-day_23-2151689032.jpg?t=st=1722407091~exp=1722410691~hmac=f3fd770f71c6eaca5d7485f2d093a582fe5a56738d9c062fc3c858a153ce1c72&w=1380',
        title: 'The Importance of Biodiversity in Our Ecosystems',
        ngo: 'Green Horizons',
        description: "At Green Horizons, we believe that biodiversity is the backbone of a healthy ecosystem. Every species, no matter how small, plays a crucial role in maintaining the balance of our environment. From pollinators like bees to apex predators like wolves, each organism contributes to the intricate web of life. Unfortunately, human activities such as deforestation, pollution, and climate change are threatening this delicate balance. In our latest initiative, we are working to restore native habitats and promote sustainable practices that protect our planet's biodiversity. Join us in our mission to safeguard the future of our ecosystems for generations to come!",
    },
    {
        image: 'https://img.freepik.com/free-photo/side-view-doctor-patient-wearing-masks_23-2149726939.jpg?t=st=1722407177~exp=1722410777~hmac=5ade1728105adb541f18e4c38d11a8eb4fb50bbbf24766cd56f2f573ad71d419&w=1060',
        title: 'Bridging the Gap in Healthcare Access',
        ngo: 'Health for All',
        description: "Access to quality healthcare is a fundamental human right, yet millions around the world still lack basic medical services. At Health for All, we are committed to bridging this gap by providing mobile clinics and telehealth services to underserved communities. Our recent outreach program in rural areas has successfully connected hundreds of individuals with essential healthcare services, including vaccinations, screenings, and health education. We believe that everyone deserves the right to live a healthy life, and we are dedicated to making healthcare accessible to all. Together, we can create a healthier future!"
    },
    {
        image: 'https://img.freepik.com/free-photo/kids-being-part-sunday-school_23-2149582869.jpg?t=st=1722407262~exp=1722410862~hmac=a0c8a5dcb35d80d8f1f2d99cb1f403e461c7ece79c429a468d9f1fc68787bb88&w=1060',
        title: 'The Power of Education in Breaking the Cycle of Poverty',
        ngo: 'EmpowerED',
        description: "Education is a powerful tool for change, and at EmpowerED, we are passionate about providing educational opportunities to those in need. Our recent scholarship program has enabled dozens of students from low-income families to pursue higher education. By investing in their futures, we are not only helping individuals but also uplifting entire communities. Education empowers people to break the cycle of poverty, gain employment, and contribute positively to society. Join us in our mission to ensure that every child has access to quality education and the chance to achieve their dreams!"
    },
    {
        image: 'https://img.freepik.com/free-photo/young-child-getting-physical-abuse-from-parent_23-2150248248.jpg?t=st=1722407306~exp=1722410906~hmac=83fc00ffcb11259a05101adf0c557cbfc6cbd9bb29a8623433702be04d14ad0c&w=1060',
        title: 'Creating Safe Spaces for Survivors of Domestic Violence',
        ngo: 'Safe Haven',
        description: "At Safe Haven, we understand that leaving an abusive relationship is often the most dangerous time for survivors. That’s why we are dedicated to providing safe spaces and comprehensive support services for those in need. Our shelter offers not only a safe haven but also counseling, legal assistance, and job training programs to help survivors rebuild their lives. Recently, we launched a community awareness campaign to educate the public about the signs of domestic violence and how to help those affected. Together, we can create a society where everyone feels safe and supported."
    },
    {
        image: 'https://img.freepik.com/free-photo/paper-style-earth-globe-with-hands_23-2149377741.jpg?t=st=1722407345~exp=1722410945~hmac=f7270f61fe50d14390964854f4c4f64d0ff9d91ab3c207e6fef61f10c66a50b6&w=1060',
        title: 'Standing Up for Human Rights in a Changing World',
        ngo: 'Global Voices',
        description: "In a world where human rights are increasingly under threat, Global Voices is committed to advocating for justice and equality. Our recent campaign focused on raising awareness about the plight of refugees and displaced persons. Through storytelling and community engagement, we aim to humanize the statistics and highlight the resilience of those affected. We believe that every voice matters, and by amplifying the stories of marginalized communities, we can drive meaningful change. Join us in our fight for human rights and help us ensure that everyone’s voice is heard!"
    },
  ];

function Blog() {
    return (
        <>
         <HeroSection img="https://img.freepik.com/free-photo/high-angle-laptop-books-arrangement_23-2149765845.jpg?t=st=1722261058~exp=1722264658~hmac=d7bd06bad318f62b2fd2d45b4c619dd8a64250d1835ac68c211fa0eeba8d3b17&w=900" title="Blog" />
         <BlogList blogPosts={blogPosts} />
        </>
    )
}

export default Blog