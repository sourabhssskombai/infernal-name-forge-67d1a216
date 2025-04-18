import { useState } from 'react';
import { generateNames } from '@/utils/nameGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Flame, RotateCw, Download } from 'lucide-react';

interface NameResult {
  name: string;
  type: "male" | "female" | "virtue" | "sin" | "descriptive" | "infernal";
  meaning?: string;
}

const vibrantBg = "bg-[linear-gradient(111.4deg,_rgba(238,113,113,1)_1%,_rgba(246,215,148,1)_58%)]";
const vibrantDropdown =
  "from-pink-500 via-orange-400 to-yellow-400 bg-gradient-to-r !border-pink-400 focus:!ring-pink-300 text-white shadow-lg drop-shadow-lg";

const NameGenerator = () => {
  const [count, setCount] = useState(5);
  const [gender, setGender] = useState<"male" | "female" | "any">("any");
  const [generatedNames, setGeneratedNames] = useState<NameResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Only generate names now, no image logic
      const names = generateNames(count, gender);
      setGeneratedNames(names);
    } catch (error) {
      console.error("Error generating names:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadResults = () => {
    const text = generatedNames.map((result, index) => {
      return `${index + 1}. ${result.name} (${result.type})\n${result.meaning}\n`;
    }).join('\n');
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "tiefling-names.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className={`relative p-8 md:p-10 rounded-2xl shadow-xl ${vibrantBg} bg-blend-screen overflow-hidden animate-fade-in`}
      style={{
        boxShadow: "0 6px 48px 0 rgba(246, 76, 114, 0.16), 0 1.5px 10px rgba(249, 183, 70, 0.10)",
        border: "1.5px solid rgba(246,113,113,0.09)",
        backdropFilter: "blur(1px)",
      }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-gothic mb-2 text-white drop-shadow-[0_3px_10px_rgba(246,76,114,0.51)] animate-fade-in tracking-wider">
          Generate Your Tiefling Names
        </h2>
        <p className="text-lg text-neutral-900 font-serif opacity-90 mb-2 animate-fade-in">
          Craft the perfect name for your infernal-touched character
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="space-y-3">
          <label className="text-base font-bold text-white drop-shadow-sm">How many names?</label>
          <div className="flex items-center gap-4">
            <Slider
              value={[count]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setCount(value[0])}
              className="flex-grow accent-[--accent-bright] animate-fade-in"
            />
            <span className="w-8 text-center font-gothic text-xl text-white">{count}</span>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-base font-bold text-white drop-shadow-sm">Gender</label>
          <Select
            value={gender}
            onValueChange={(value: "male" | "female" | "any") => setGender(value)}
          >
            <SelectTrigger
              className={`w-full text-lg border-2 px-4 py-2 font-gothic rounded-lg ${vibrantDropdown}`}
              style={{
                backgroundImage:
                  "linear-gradient(111.4deg, rgba(238,113,113,1) 10%, rgba(246,215,148,1) 90%)",
                color: "#fff",
                border: "2px solid #fb7185",
                boxShadow: "0 0 0 3px rgba(255,191,89,0.13)",
              }}
            >
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent
              className="z-50 bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-300 text-white shadow-xl border-2 border-pink-400"
              style={{
                background:
                  "linear-gradient(120deg, rgba(238,113,113,0.97) 0%, rgba(246,215,148,0.98) 100%)",
                color: "#fff",
                border: "2px solid #fb7185",
              }}
            >
              <SelectItem value="male" className="!text-white hover:bg-white/10">Male</SelectItem>
              <SelectItem value="female" className="!text-white hover:bg-white/10">Female</SelectItem>
              <SelectItem value="any" className="!text-white hover:bg-white/10">Any</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center mb-8 animate-scale-in">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-500 text-white px-8 py-3 text-lg rounded-xl shadow-lg font-gothic transition-all duration-200 hover:scale-105 drop-shadow-md"
          size="lg"
        >
          <Flame className="h-5 w-5" />
          {isGenerating ? (
            <>
              <RotateCw className="h-4 w-4 animate-spin" />
              Summoning names...
            </>
          ) : (
            "Generate Names"
          )}
        </Button>
      </div>

      {generatedNames.length > 0 && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedNames.map((result, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-xl hover:scale-105 transition-transform duration-200 border-2 border-pink-200 shadow-sm bg-white/90 backdrop-blur animate-scale-in"
              >
                <CardContent className="pt-6 pb-4 px-6">
                  <h3 className="text-xl font-gothic font-extrabold text-pink-600 drop-shadow-md mb-2 text-center tracking-wide">
                    {result.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    {result.meaning && (
                      <p className="text-sm text-gray-700 mt-2 italic text-center max-w-xs mx-auto">
                        {result.meaning}
                      </p>
                    )}
                    <div className="text-xs text-orange-500 font-bold mt-3 uppercase tracking-wide px-3 py-1 rounded bg-orange-100">
                      {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={downloadResults}
              className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:from-orange-500 hover:via-pink-600 hover:to-purple-600 text-white px-6 py-3 text-lg rounded-xl shadow-md font-gothic transition-all duration-200 hover:scale-105"
            >
              <Download className="h-5 w-5" />
              Download Names
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NameGenerator;
