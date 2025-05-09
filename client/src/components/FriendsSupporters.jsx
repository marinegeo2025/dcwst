import React from "react";

export default function FriendsSupporters() {
  const trackClick = (label) => {
    window.gtag && window.gtag("event", "partner_logo_click", {
      event_category: "External Link",
      event_label: label,
    });
  };

  return (
    <section className="bg-[#F7F6F6] py-20" aria-label="Friends and Supporters Logos">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">Top Supporters</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center mb-20">
          <a href="http://www.nolimitwetsuits.co.uk/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("No Limit Wetsuits")}> <img src="/logos/nolimit.png" alt="No Limit Wetsuits" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.lostshore.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Lost Shore Surf Resort")}> <img src="/logos/lostshore.png" alt="Lost Shore Surf Resort" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.facebook.com/PegSurfCoaching/?locale=en_GB" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Pegleg Surf Coaching")}> <img src="/logos/pegleg.png" alt="Pegleg Surf Coaching" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://srhclothing.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("SRHproductions")}> <img src="/logos/srh.png" alt="SRHproductions" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
        </div>

        <h3 className="text-3xl font-semibold mb-12 text-gray-700 tracking-tight">Brands We Like & Work With</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-center">
          <a href="https://www.outdoorswimmingsociety.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Outdoor Swimming Society")}> <img src="/logos/swimsoc.png" alt="Outdoor Swimming Society" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.paddlescotland.org.uk/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Scottish Canoe Association")}> <img src="/logos/paddlescotland.png" alt="Scottish Canoe Association" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://thessf.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Scottish Surfing Federation")}> <img src="/logos/ssf.png" alt="Scottish Surfing Federation" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.facebook.com/StornowayKarateClub/?locale=en_GB" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Stornoway Karate Club")}> <img src="/logos/skc.png" alt="Stornoway Karate Club" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.sas.org.uk/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Surfers Against Sewage")}> <img src="/logos/sas.png" alt="Surfers Against Sewage" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://www.surfrider.org/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Surfrider Foundation")}> <img src="/logos/surfrider.png" alt="Surfrider Foundation" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
          <a href="https://porpoise.org/" target="_blank" rel="noopener noreferrer" onClick={() => trackClick("Porpoise Conservation Society")}> <img src="/logos/porpoise.png" alt="Porpoise Conservation Society" className="h-36 max-w-[160px] p-4 mx-auto grayscale hover:grayscale-0 hover:scale-105 transform transition duration-300" /> </a>
        </div>
      </div>
    </section>
  );
}
