
import { useState } from 'react';
import { generateNames } from '@/utils/nameGenerator';
import { getMultipleRandomImages } from '@/utils/imageService';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Flame, RotateCw, Download } from 'lucide-react';

interface NameResult {
  name: string;
  type: "male" | "female" | "virtue" | "sin" | "descriptive" | "infernal";
  meaning?: string;
  image?: string;
}

const NameGenerator = () => {
  const [count, setCount] = useState(5);
  const [gender, setGender] = useState<"male" | "female" | "any">("any");
  const [includeImages, setIncludeImages] = useState(false);
  const [generatedNames, setGeneratedNames] = useState<NameResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      // Generate names
      const names = generateNames(count, gender);
      
      // Generate images if option is selected
      let results: NameResult[] = [...names];
      
      if (includeImages) {
        const images = await getMultipleRandomImages(count);
        results = names.map((name, index) => ({
          ...name,
          image: images[index]
        }));
      }
      
      setGeneratedNames(results);
    } catch (error) {
      console.error("Error generating names:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadResults = () => {
    // Create text to download
    const text = generatedNames.map((result, index) => {
      return `${index + 1}. ${result.name} (${result.type})\n${result.meaning}\n`;
    }).join('\n');
    
    // Create download link
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "tiefling-names.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-secondary/40 rounded-lg p-6 shadow-lg backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-gothic mb-3 text-center text-infernal-800">Generate Your Tiefling Names</h2>
        <p className="text-center text-gray-600">Craft the perfect name for your infernal-touched character</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">How many names?</label>
          <div className="flex items-center gap-4">
            <Slider
              value={[count]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setCount(value[0])}
              className="flex-grow"
            />
            <span className="w-8 text-center font-gothic text-lg">{count}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Gender</label>
          <Select
            value={gender}
            onValueChange={(value: "male" | "female" | "any") => setGender(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="any">Any</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="includeImages" 
              checked={includeImages}
              onCheckedChange={(checked) => setIncludeImages(checked === true)}
            />
            <label
              htmlFor="includeImages"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include character images
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-infernal-700 hover:bg-infernal-800 text-white px-6 py-2 rounded-md flex items-center gap-2"
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
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedNames.map((result, index) => (
              <Card key={index} className="overflow-hidden border border-infernal-200 hover:shadow-md transition-shadow">
                {result.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={result.image} 
                      alt={`Character visualization for ${result.name}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-black/50 text-xs text-white px-2 py-1">
                      {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                    </div>
                  </div>
                )}
                <CardContent className={result.image ? "pt-4" : "pt-6"}>
                  <h3 className="text-xl font-gothic text-infernal-800">{result.name}</h3>
                  {result.meaning && (
                    <p className="text-sm text-gray-600 mt-2 italic">{result.meaning}</p>
                  )}
                  {!result.image && (
                    <div className="text-xs text-gray-500 mt-2">
                      Type: {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={downloadResults}
              className="bg-infernal-600 hover:bg-infernal-700 text-white flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Names
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NameGenerator;
