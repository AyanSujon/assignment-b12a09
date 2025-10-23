import React from 'react';

const OurVision = () => {
    return (
        <>
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-2xl font-bold text-primary">Why We Built GameHub</h4>
          <p className="text-gray-300 mt-4">
            As gamers and builders, we found discovery fragmented and noisy. Stores
            were crowded with ads, and many indie games never reached the audience
            they deserved. GameHub was created to provide a clean, fair stage for
            games — where quality and creativity are the focus.
          </p>
          <p className="text-gray-300 mt-3">
            We focus on clear information, honest reviews, and quick access so players
            can decide what to try next — and developers can be found.
          </p>
        </div>

        <div>
          <div className="bg-gray-800 rounded-2xl p-6">
            <h5 className="font-semibold text-white">Quick FAQ</h5>
            <ul className="mt-3 text-gray-300 space-y-2 text-sm">
              <li><strong>Q:</strong> Can I submit my game? <br/><strong>A:</strong> Yes — reach out via Contact.</li>
              <li><strong>Q:</strong> Is GameHub free to use? <br/><strong>A:</strong> Absolutely, browsing is free.</li>
              <li><strong>Q:</strong> Do you host downloads? <br/><strong>A:</strong> We link to official download pages or stores.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>



    {/* Our Vision  */}
     <section className="py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-2xl font-bold text-primary">Our Vision</h4>
        <p className="text-gray-300 mt-4">
          We imagine a world where every creative game finds its audience — where
          players have a trusted place to discover meaningful play and developers
          can grow sustainably. GameHub will keep evolving to support that future.
        </p>
      </div>
    </section>
        
        
        
        
        
        
        
        
        </>
    );
};

export default OurVision;