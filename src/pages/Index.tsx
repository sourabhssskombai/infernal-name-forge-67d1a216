
import Layout from '@/components/layout/Layout';
import NameGenerator from '@/components/generator/NameGenerator';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Flame, BookOpen, Lightbulb, HelpCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Generator */}
      <section className="bg-gradient-to-b from-infernal-950 to-infernal-900 text-white py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[url('/tiefling-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-gothic leading-tight">
                D&D <span className="text-infernal-300">Tiefling</span> Name Generator
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                Create authentic and compelling names for your Tiefling characters with our specialized generator. Inspired by D&D lore and infernal heritage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#how-it-works" className="inline-flex items-center gap-2 bg-transparent border border-infernal-400 hover:bg-infernal-900 text-infernal-100 px-6 py-3 rounded-md transition-colors">
                  <BookOpen className="h-5 w-5" />
                  How It Works
                </a>
                <Link to="/about" className="inline-flex items-center gap-2 bg-transparent border border-infernal-400/50 hover:bg-infernal-900/50 text-infernal-200 px-6 py-3 rounded-md transition-colors">
                  <Lightbulb className="h-5 w-5" />
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-infernal-600/20 to-infernal-800/20 rounded-xl blur-xl"></div>
              <div className="relative z-10">
                <NameGenerator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-gothic text-infernal-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our DnD Tiefling Name Generator creates authentic and lore-appropriate names for your role-playing character in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-gothic text-xl">1</span>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-3">Select Options</h3>
              <p className="text-gray-600">
                Choose how many names you want to generate, their gender preference, and whether to include character images.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-gothic text-xl">2</span>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-3">Generate Names</h3>
              <p className="text-gray-600">
                Click the generate button and watch as we create unique, lore-friendly Tiefling names with meanings and optional images.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-infernal-100 text-infernal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-gothic text-xl">3</span>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-3">Use or Save</h3>
              <p className="text-gray-600">
                Choose your favorite name for your character and download the results for future reference in your campaign.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-infernal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-gothic text-infernal-800 mb-4">Features & Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Tiefling name generator provides everything you need to create the perfect character name for your next D&D adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-infernal-700" />
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Lore-Accurate Names</h3>
              <p className="text-gray-600">
                All names are crafted based on D&D lore and tiefling naming conventions, ensuring authenticity for your character.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-infernal-700" />
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Name Meanings</h3>
              <p className="text-gray-600">
                Each generated name comes with a possible meaning, adding depth and story potential to your character creation.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-infernal-700" />
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Multiple Options</h3>
              <p className="text-gray-600">
                Generate multiple names at once to find the perfect match for your character concept and campaign setting.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Character Images</h3>
              <p className="text-gray-600">
                Optionally include character images to help visualize your Tiefling and inspire your role-playing.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Diverse Name Types</h3>
              <p className="text-gray-600">
                Choose from traditional naming styles, virtue/sin concepts, descriptive names, or authentic infernal options.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-infernal-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="text-xl font-gothic text-infernal-800 mb-2">Easy Download</h3>
              <p className="text-gray-600">
                Save your generated names in a simple text format to reference during character creation and gameplay.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Tieflings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-gothic text-infernal-800 mb-4">Understanding Tieflings in D&D</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tieflings are one of the most fascinating races in Dungeons & Dragons, known for their infernal heritage and distinctive appearance. Born with the blood of devils or demons in their veins, tieflings bear the mark of their supernatural ancestry in their horns, tails, and often reddish skin.
                </p>
                <p>
                  Names are particularly important in tiefling culture. Many tieflings use names that reflect their infernal heritage, often adopting words that embody virtues or sins. Others choose names from the languages of their ancestors, creating striking, otherworldly identifiers that set them apart in any setting.
                </p>
                <p>
                  Our Tiefling Name Generator draws inspiration from official D&D lore, infernal languages, and established naming conventions to create authentic names that fit perfectly within the fantasy world of your campaign.
                </p>
                <div className="pt-4">
                  <Link to="/about" className="inline-flex items-center gap-2 bg-infernal-700 hover:bg-infernal-800 text-white px-6 py-3 rounded-md transition-colors">
                    <BookOpen className="h-5 w-5" />
                    Learn More About Tieflings
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-infernal-50 p-8 rounded-lg border border-infernal-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-4">Common Tiefling Traits</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-infernal-700" />
                  </div>
                  <div>
                    <span className="font-medium">Supernatural Heritage:</span> Descended from fiends, often with a history tied to ancient pacts
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-infernal-700" />
                  </div>
                  <div>
                    <span className="font-medium">Distinctive Appearance:</span> Horns, tails, solid-colored eyes, and unusual skin tones
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-infernal-700" />
                  </div>
                  <div>
                    <span className="font-medium">Resistance to Fire:</span> Natural resilience against flame and heat
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-infernal-700" />
                  </div>
                  <div>
                    <span className="font-medium">Darkvision:</span> Ability to see in darkness up to 60 feet
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-infernal-700" />
                  </div>
                  <div>
                    <span className="font-medium">Innate Spellcasting:</span> Thaumaturgy cantrip and other infernal abilities
                  </div>
                </li>
              </ul>
              
              <Separator className="my-6 bg-infernal-200" />
              
              <div>
                <h3 className="text-xl font-gothic text-infernal-800 mb-4">Naming Conventions</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-infernal-700" />
                    </div>
                    <div>
                      <span className="font-medium">Virtue Names:</span> Hope, Mercy, Glory, Temperance
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-infernal-700" />
                    </div>
                    <div>
                      <span className="font-medium">Sin Names:</span> Wrath, Pride, Torment, Malice
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-infernal-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-infernal-700" />
                    </div>
                    <div>
                      <span className="font-medium">Infernal Names:</span> Drawn from demonic languages and ancient tomes
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-gothic text-infernal-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our Tiefling Name Generator and creating characters for your D&D campaign.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                What is a Tiefling?
              </h3>
              <p className="text-gray-700">
                Tieflings are a playable race in Dungeons & Dragons with infernal heritage. They are humanoids with demonic or devilish ancestry, typically characterized by horns, tails, unusual skin colors, and other fiendish features. Despite their supernatural lineage, tieflings have free will and can be of any alignment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                How are Tiefling names typically chosen?
              </h3>
              <p className="text-gray-700">
                Tiefling naming conventions vary widely. Many adopt names reflecting virtues or sins, helping them forge their own identity. Others use infernal-sounding names from fiendish languages, or names from the cultures they were raised in. Our generator creates all these types, giving you plenty of options for your character.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                Are the generated names official D&D content?
              </h3>
              <p className="text-gray-700">
                The names created by our generator are inspired by official D&D lore and naming conventions for Tieflings, but they are procedurally generated. This means they're unique creations based on established patterns, perfect for creating original characters that still feel authentic within the D&D universe.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                Can I use the generated images for my character?
              </h3>
              <p className="text-gray-700">
                Yes! The character images provided are free to use for your personal character sheets, campaign notes, or as inspiration for commissioned artwork. These images are sourced from freely available repositories and are meant to help you visualize your character concept.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                Are Tieflings always evil?
              </h3>
              <p className="text-gray-700">
                No, Tieflings can be of any alignment. While they have fiendish ancestry, they possess free will and can choose their own moral path. Many Tieflings actively reject their infernal heritage and strive to be forces for good. This struggle between heritage and personal choice makes them fascinating characters to role-play.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-gothic text-infernal-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-infernal-600" />
                How can I create a compelling Tiefling character?
              </h3>
              <p className="text-gray-700">
                A compelling Tiefling character often grapples with their heritage, facing prejudice from others while determining their own path. Consider how your character relates to their infernal ancestry—do they embrace it, reject it, or somewhere in between? Their name can reflect this internal conflict, perhaps being a virtue they aspire to or a reminder of their heritage.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-infernal-700 hover:bg-infernal-800 text-white px-6 py-5 rounded-md">
              <a href="#top" className="inline-flex items-center gap-2">
                <Flame className="h-5 w-5" />
                Generate Your Tiefling Name Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
