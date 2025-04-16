
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Flame, BookOpen, Shield, Scroll, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-infernal-950 to-infernal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-gothic mb-6">About Our Tiefling Name Generator</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Learn about our mission to help D&D players create compelling and authentic Tiefling characters
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-gothic text-infernal-800 mb-4">Our Story</h2>
              <p className="text-gray-700">
                The DnD Tiefling Name Generator was born from a passion for rich character creation and immersive role-playing. As avid Dungeons & Dragons enthusiasts, we noticed that creating authentic-feeling Tiefling names was a challenge for many players. The unique nature of Tiefling nomenclature—drawing from virtues, sins, and infernal languages—makes it distinct from other fantasy naming conventions.
              </p>
              <p className="text-gray-700">
                We set out to create a tool that would help players quickly generate names that feel appropriate to the race's lore while providing enough variety and meaning to inspire character backgrounds and personalities. By combining linguistic patterns from canonical examples, infernal language structures, and the virtue/sin naming convention that makes Tieflings so unique, we developed an algorithm that produces names with the right feel for these infernal-touched beings.
              </p>
              <p className="text-gray-700">
                Our team consists of long-time D&D players, DMs, and fantasy writers who understand the importance of a good name in bringing a character to life. We've poured our knowledge of the game's lore and our passion for immersive storytelling into creating this resource for the D&D community.
              </p>

              <h2 className="text-3xl font-gothic text-infernal-800 mt-12 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                We believe that a great character starts with a great name. Our mission is to help Dungeons & Dragons players create more compelling and immersive characters by providing tools that spark creativity and remain true to the rich lore of the game world.
              </p>
              <p className="text-gray-700">
                Whether you're a veteran player looking for inspiration for your newest character or a DM creating NPCs to populate your world, our generator aims to save you time while delivering quality results that enhance your storytelling experience.
              </p>
              <p className="text-gray-700">
                Beyond just providing names, we strive to offer context and meaning that can help shape your character's background and personality. The meanings suggested for our generated names can serve as starting points for developing your character's motivations, fears, and aspirations.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/" className="inline-flex items-center gap-2 bg-infernal-700 hover:bg-infernal-800 text-white px-6 py-3 rounded-md transition-colors">
                  <Flame className="h-5 w-5" />
                  Try The Generator
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-transparent border border-infernal-700 text-infernal-700 hover:bg-infernal-50 px-6 py-3 rounded-md transition-colors">
                  <BookOpen className="h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <History className="h-5 w-5 text-infernal-700" />
                  Tiefling Lore
                </h3>
                <p className="text-gray-700 mb-4">
                  Tieflings are descendants of humans who made pacts with fiends, bearing the physical marks of this infernal heritage. Despite their appearance, tieflings have free will and can choose their own path.
                </p>
                <p className="text-gray-700">
                  Their names often reflect their dual nature—caught between the mortal and infernal worlds—and many choose names that represent their personal values or aspirations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <Shield className="h-5 w-5 text-infernal-700" />
                  Our Values
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-infernal-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-infernal-700"></div>
                    </div>
                    <span><strong>Accuracy:</strong> Names faithful to D&D lore and tiefling culture</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-infernal-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-infernal-700"></div>
                    </div>
                    <span><strong>Creativity:</strong> Unique names that inspire storytelling</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-infernal-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-infernal-700"></div>
                    </div>
                    <span><strong>Inclusivity:</strong> Supporting all players in their creative journey</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-infernal-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-infernal-700"></div>
                    </div>
                    <span><strong>Community:</strong> Enhancing the D&D experience for all</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <Scroll className="h-5 w-5 text-infernal-700" />
                  Resources
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="https://dnd.wizards.com/what-is-dnd" target="_blank" rel="noopener noreferrer" className="text-infernal-700 hover:text-infernal-900 underline">
                      Official D&D Website
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dndbeyond.com/races/7-tiefling" target="_blank" rel="noopener noreferrer" className="text-infernal-700 hover:text-infernal-900 underline">
                      Tiefling Race Guide
                    </a>
                  </li>
                  <li>
                    <Link to="/blog" className="text-infernal-700 hover:text-infernal-900 underline">
                      Our Blog Archive
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-infernal-700 hover:text-infernal-900 underline">
                      Name Generator Tool
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-gothic text-infernal-800 mb-8 text-center">Behind the Generator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Research</h3>
              <p className="text-gray-600">
                We studied official D&D sources and linguistic patterns to create authentic-sounding names.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Algorithm</h3>
              <p className="text-gray-600">
                Our name generation system uses advanced algorithms to create unique but lore-appropriate names.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Testing</h3>
              <p className="text-gray-600">
                We extensively tested our generator with D&D players to refine the quality and authenticity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Improvement</h3>
              <p className="text-gray-600">
                We continuously update our database and algorithms based on user feedback and D&D updates.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-gothic text-infernal-800 mb-6">Start Creating Your Tiefling Character</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to bring your infernal-touched character to life? Generate the perfect name and begin your adventure today.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-infernal-700 hover:bg-infernal-800 text-white px-8 py-4 rounded-md transition-colors text-lg">
            <Flame className="h-6 w-6" />
            Generate Tiefling Names
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
