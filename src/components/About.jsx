import aboutSvg from '../assets/woman.png';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-4'>
        <img src={aboutSvg} className='w-64 h-64 ml-16' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-4  leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
