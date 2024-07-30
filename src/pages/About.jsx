import ContentSection from "../components/About/ContentSection"
import HeroSection from "../components/About/HeroSection"
import SectionContentGenerator from "../components/About/SectionContentGenerator"

function About() {
    const ourStoryParagraphs = [
        "United for Humanity was founded in 2023 by a diverse group of passionate individuals who recognized the urgent need for collaboration among non-governmental organizations (NGOs) to address the pressing challenges of our time. Inspired by the vision of interconnectedness and collective action, we believe that sustainable development is not just a goal but a shared responsibility that transcends borders and sectors.",
        "Our journey began with the understanding that the complexities of social inequality, environmental degradation, and economic disparity cannot be tackled in isolation. We draw inspiration from thought leaders who emphasize that \"sustainability, social equity, and environmental stewardship are challenges that require a united front.\" We believe that no single organization can solve these issues alone; it is through collaboration and partnership that we can create meaningful change.",
        "The rapid advancements and opportunities of the 21st century have opened new avenues for NGOs to work together. As the world becomes increasingly interconnected, we have the chance to leverage our collective strengths, share resources, and amplify our impact. Our mission is to foster a network of NGOs that collaborate on innovative solutions, share best practices, and advocate for policies that promote sustainable development for all.",
        "At United for Humanity, we envision a future where every organization, regardless of size or focus, can contribute to a more equitable and sustainable world. We invite NGOs from all sectors to join us in this vital mission, as we work together to create a brighter future for humanity."
    ]

    const ourVisionParagraphs = [
        "At United for Humanity, we envision a world where collaboration among non-governmental organizations (NGOs) leads to transformative change, fostering a society that prioritizes equity, sustainability, and shared prosperity. Our vision is rooted in the belief that by uniting our efforts, we can address the most pressing challenges of our time and create a future where every individual has the opportunity to thrive.",
        "We aspire to build a global network of NGOs that transcends geographical and sectoral boundaries, working together to develop innovative solutions that tackle social inequality, environmental degradation, and economic disparity. Our vision is one of inclusivity, where diverse voices and perspectives are valued, and where every organization, regardless of its size or focus, plays a crucial role in shaping a better world.",
        "We see a future where sustainable development is not just an aspiration but a reality, achieved through collective action and shared responsibility. By harnessing the power of collaboration, we aim to create a ripple effect that inspires communities, governments, and businesses to join us in our mission for a more just and sustainable planet.",
        "Together, we can cultivate a culture of partnership and cooperation, where knowledge is shared, resources are pooled, and innovative ideas flourish. Our vision is to empower NGOs to become catalysts for change, advocating for policies that promote social equity and environmental stewardship, and ensuring that the benefits of development are accessible to all.",
        <div className="font-bold">Join us as we work towards this vision, united in our commitment to creating a brighter, more equitable future for humanity.</div>
    ]
 return (
    <>
    <HeroSection />
    <ContentSection title="Our Story">
        <SectionContentGenerator paragraphs={ourStoryParagraphs}/>
    </ContentSection>
    <ContentSection title="Our Vision">
        <SectionContentGenerator paragraphs={ourVisionParagraphs}/>
    </ContentSection>
    </>
 )
}

export default About