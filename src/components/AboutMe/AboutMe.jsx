import React from 'react';
import '../AboutMe/AboutMe.css';
import Title from '../Titles/Title';
import ProfileImg from '../../images/profile-images/profile.jpg';

const AboutMe = () => {
  return (
    <section className='section about' id='about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={ProfileImg} className='about-img' alt='about img' />
        </article>

        <article className='about-info'>
          <Title smallTitle='About' bigTitle='Get To Know Me' />

          <p>
            Hello, I’m <strong>Kevin Ochieng</strong>, experienced Web
            Developer, with 4 years experience, tuned in all stages of advanced
            web development.
          </p>
          <p>
            I’m knowledgeable in user interface, testing, and debugging
            processes. Bringing forth expertise in design, installation, testing
            and maintenance of web systems.
          </p>
          <p>
            Equipped with a diverse and promising skill-set. Proficient in an
            assortment of technologies, from front-end(HTML5, CSS3, React js and
            Javascript) to back-end(Node js, Express js and PostgreSQL). Able to
            effectively self-manage during independent projects, as well as
            collaborate in a team setting.
          </p>
          <p>
            I'm extremely passionate in helping small businesses and
            institutions improve their online presence. For instance, I
            converted
            <a href='https://nurupalacehotel.com'>
              <span>this</span>
            </a>
            outdated, unresponsive and visually not appealing website, to
            <a href='https://nurupalacehotel.netlify.com/'>
              <span>this</span>
            </a>
            modern, professional and user friendly to their customers.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
