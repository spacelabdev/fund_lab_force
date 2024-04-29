import './SmallCard.css'

export default function SmallCard({ name, title, content }) {
    switch(name) {
        case "VALUES":  
            title = "Values"
            content = `
                At the heart of our organization lies a deep appreciation of the awesome power of diversity in problem-solving. We firmly believe that when individuals from varied backgrounds come together, their collective wisdom and perspectives lead to innovative and impactful solutions that address the unique needs of all. Grounded in principles of equity, inclusion, and belonging, we strive to create an environment where every voice is not only heard but celebrated. Join us in our journey to champion diversity, equity, and inclusion in data science, technology, and STEM fields like astronomy, as we work tirelessly to create a brighter and more inclusive future.
            `
            break
        case "MISSION":
            title = "Mission"
            content = `
                At our core, we are driven by a steadfast commitment to empowering individuals from diverse and underrepresented communities to emerge as the leaders of tomorrow in data science, technology, and STEM fields like astronomy. Through initiatives such as paid fellowships, internships, scholarships, and debt relief, we provide essential support to cultivate talent and foster inclusive growth. We believe in the power of diversity and intersectionality, recognizing that by embracing the unique perspectives of women, LGBTQ+ individuals, and people of color, we unlock unparalleled innovation and progress. Join us in our mission to break barriers, amplify voices, and pave the way for a future where every individual has the opportunity to thrive and succeed.
            `
            break
        case "VISION":
            title = "Vision"
            content = `
                Our north star is to build a space where the people we serve hone their skills through a vast array of impactful, data-driven projects that can be directly leveraged for employment. By providing essential funding and dedicated mentorship, we strive to empower the next generation of leaders in data science and technology, fostering a momentum towards greater diversity and inclusion. Our aim is clear: to pave the path towards a future where women, people of color, and LGBTQ+ individuals occupy the forefront of innovation, leading the charge within the top echelons of corporate America. Join us in cultivating a world where every individual's potential is realized, and celebrated.
            `
            break
    }

    return (
        <div className="SmallCard">
            <p className="sc-title">{title}</p>
            <div className="sc-content">
                {content}
            </div>
        </div>
    )
}