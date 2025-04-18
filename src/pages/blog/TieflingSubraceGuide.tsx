import BlogPost from "@/components/blog/BlogPost";
import { Helmet } from "react-helmet";

export default function TieflingSubraceGuide() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://dndtieflingnamegenerator.com/blog/tiefling-subrace-guide" />
      </Helmet>
      <BlogPost
        title="The Complete Guide to Tiefling Subraces"
        date="April 2, 2024"
        readingTime="8 min read"
        description="Understand the different tiefling subraces, their lineages, and unique traits, from Asmodeus to Zariel and beyond."
        content={
          <>
            <h2>Tiefling Subraces: A Comprehensive Guide</h2>
            <p>
              Tieflings, with their infernal heritage, are a diverse group in D&D. This guide explores the main subraces and their unique traits.
            </p>

            <h3>Asmodeus Tieflings</h3>
            <p>
              The most common, Asmodeus Tieflings, gain +2 Charisma and +1 Intelligence. They have the <em>Infernal Legacy</em> trait, granting access to <em>Thaumaturgy</em>, <em>Hellish Rebuke</em>, and <em>Darkness</em> spells.
            </p>

            <h3>Baalzebul Tieflings</h3>
            <p>
              These tieflings, inheriting traits from Baalzebul, gain +2 Charisma and +1 Constitution. They get access to <em>Thaumaturgy</em>, <em>Enthrall</em>, and <em>Suggestion</em> spells through their <em>Legacy of Maladomini</em> trait.
            </p>

            <h3>Dispater Tieflings</h3>
            <p>
              Dispater Tieflings receive +2 Charisma and +1 Dexterity. Their <em>Legacy of Dis</em> trait provides <em>Thaumaturgy</em>, <em>Disguise Self</em>, and <em>Detect Thoughts</em> spells.
            </p>

            <h3>Fierna Tieflings</h3>
            <p>
              Fierna Tieflings gain +2 Charisma and +1 Wisdom. They can use <em>Friends</em>, <em>Charm Person</em>, and <em>Suggestion</em> spells, thanks to their <em>Legacy of Phlegethos</em>.
            </p>

            <h3>Glasya Tieflings</h3>
            <p>
              Glasya Tieflings get +2 Dexterity and +1 Charisma. Their <em>Legacy of Malbolge</em> allows them to cast <em>Minor Illusion</em>, <em>Disguise Self</em>, and <em>Invisibility</em>.
            </p>

            <h3>Levistus Tieflings</h3>
            <p>
              Levistus Tieflings gain +2 Constitution and +1 Charisma. They can use <em>Ray of Frost</em>, <em>Armor of Agathys</em>, and <em>Hold Person</em> spells through their <em>Legacy of Stygia</em>.
            </p>

            <h3>Mammon Tieflings</h3>
            <p>
              Mammon Tieflings receive +2 Intelligence and +1 Charisma. Their <em>Legacy of Minauros</em> grants access to <em>Mage Hand</em>, <em>Tenser's Floating Disk</em>, and <em>Arcane Lock</em> spells.
            </p>

            <h3>Mephistopheles Tieflings</h3>
            <p>
              Mephistopheles Tieflings gain +2 Intelligence and +1 Charisma. They can cast <em>Burning Hands</em>, <em>Flame Blade</em>, and <em>Fireball</em> spells, thanks to their <em>Legacy of Cania</em>.
            </p>

            <h3>Zariel Tieflings</h3>
            <p>
              Zariel Tieflings receive +2 Strength and +1 Charisma. Their <em>Legacy of Avernus</em> provides <em>Thaumaturgy</em> and <em>Searing Smite</em> spells, and at 5th level, <em>Branding Smite</em>.
            </p>

            <h3>Other Notable Tiefling Bloodlines</h3>
            <p>
              Besides the main nine, other tiefling bloodlines exist, each with unique abilities and appearances, influenced by their infernal ancestor.
            </p>
          </>
        }
      />
    </>
  );
}
