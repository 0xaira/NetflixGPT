import { useState } from 'react';
import { Link } from 'react-router-dom';
const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className='bg-[#2d2d2d] mb-[15px]'>
      <div
        className='p-[20px] text-white text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-[2000] cursor-pointer faq'
        onClick={toggleAccordion}
      >
        <h3>{question}</h3>
        <span className='absolute right-[20px] top-[15px]'>{isOpen ? 'x' : '+'}</span>
      </div>

      <div className={`text-white text-[20px] overflow-hidden transition-all duration-900 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-[0px] opacity-0'}`}>
        <div style={{ opacity: isOpen ? 1 : 0, maxHeight: isOpen ? '1000px' : '0' }} className='overflow-hidden'>
          {answer}
        </div>
      </div>
    </div>
  );
};

const MainSection5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]'>
      <div className='max-w-[1170px] mx-auto px-[15px]'>
        <h2 className='sm:text-[50px] text-[40px] font-bold text-white text-center'>Frequently Asked Questions</h2>
        <div className='py-[30px]'>
          <FAQItem
            index={0}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='What is Netflix?'
            answer={
              <>
                <div className='ps-6'>
                  <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p><br />
                  <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                </div>
              </>
            }
          />
          <FAQItem
            index={1}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='How much does Netflix cost?'
            answer={
              <>
                <div className='ps-6'>
                  <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                </div>
              </>
            }
          />
          <FAQItem
            index={2}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='Where can I watch?'
            answer={
              <>
                <div className='ps-6'>
                  <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><br />
                  <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                </div>
              </>
            }
          />
          <FAQItem
            index={3}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='How do I cancel?'
            answer={
              <>
                <div className='ps-6'>
                  <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                </div>
              </>
            }
          />
          <FAQItem
            index={4}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='What can I watch on Netflix?'
            answer={
              <>
                <div className='ps-6'>
                  <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>
              </>
            }
          />
          <FAQItem
            index={5}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            question='Is Netflix good for kids?'
            answer={
              <>
                <div className='ps-6'>
                  <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p><br />
                  <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                </div>
              </>
            }
          />
          {/* Add more FAQ items similarly */}
        </div>
      </div>

      <div className='flex flex-col sm:flex-col items-start sm:items-center gap-10'>
  <div>
    <h5 className='text-[25px] text-white'>Ready to watch? Enter your email to create or restart your membership.</h5>
  </div>

  <div className='mt-3 sm:mt-0 sm:ml-5'>
  <Link to="/login">
    <button className="bg-red-600 p-3 rounded font-bold w-60 max-[960px]:w-40 max-[480px]:mt-[30px] text-white">
      <p className="mx-auto text-2xl max-[960px]:text-xl">Get Started {'>'}</p>
    </button>
    </Link>
  </div>
</div>


    </section>
  );
};

export default MainSection5;
