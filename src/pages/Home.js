import headshot from './headshot.jpg'

export default function Home() {
    return (
      <div className="home">
        <img className='item' src={headshot}/>
        <div className='info'>
        <h2>Matthew Sellers</h2>
        <h3>Web Developer</h3>

        
        <p>I have two years of dedicated experience in JavaScript, HTML, CSS, and React development, along with many other technologies. Following intensive training at DevMountain's coding bootcamp, I am eager to leverage the skills I've learned to transform your company's website into an efficient, seemless user experience.</p>
        <p>I've honed my expertise in front-end development, creating responsive and dynamic web applications. My hands-on experience with JavaScript frameworks like React enabled me to build user-friendly interfaces and integrate complex functionalities.
        </p>
        <p>I am confident that my technical skills coupled with my dedication to continuous learning and growth, make me a strong candidate for your team. I am eager to contribute to your company's projects and collaborate with your talented team members. Thank you for considering my application        .</p>
        </div>
      </div>
    )
  }