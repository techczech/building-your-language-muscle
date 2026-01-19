import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Download, Link as LinkIcon, Check, Share2, Loader2 } from 'lucide-react';

interface ShareModalProps {
  text: string;
  sectionTitle: string;
  url: string;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ text, sectionTitle, url, onClose }) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateImage();
  }, [text, sectionTitle, url]);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Config
      const width = 1080;
      const height = 1080; // Square for social media
      const padding = 80;
      canvas.width = width;
      canvas.height = height;

      // 2. Background Gradient (Emerald Theme)
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#065f46'); // emerald-800
      gradient.addColorStop(1, '#047857'); // emerald-700
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Decorative elements
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      ctx.arc(width, 0, 400, 0, Math.PI * 2);
      ctx.fill();
      
      // 4. Title
      ctx.fillStyle = '#6ee7b7'; // emerald-300
      ctx.font = 'bold 32px serif'; // Using system serif which usually maps to Times or similar, close to Merriweather
      ctx.fillText('BUILDING YOUR LANGUAGE MUSCLE', padding, padding + 20);

      // 5. Main Text Wrapping
      ctx.fillStyle = '#ffffff';
      ctx.font = 'italic 48px serif'; 
      const words = text.split(' ');
      let line = '';
      let y = 250;
      const lineHeight = 70;
      const maxLines = 8; // Prevent overflow
      let lineCount = 0;

      // Add opening quote
      ctx.font = 'bold 80px serif';
      ctx.fillStyle = '#34d399'; // emerald-400
      ctx.fillText('“', padding - 30, y - 20);
      
      // Reset font for text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'italic 48px serif';

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > width - (padding * 2) && i > 0) {
          ctx.fillText(line, padding, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
          if (lineCount >= maxLines) {
            line = line.trim() + '...';
            break;
          }
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, padding, y);

      // 6. Source
      y += lineHeight + 40;
      ctx.fillStyle = '#a7f3d0'; // emerald-200
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText(`— ${sectionTitle}`, padding, y);

      // 7. QR Code
      const qrSize = 200;
      const qrY = height - qrSize - padding;
      const qrX = width - qrSize - padding;
      
      // White bg for QR
      ctx.fillStyle = 'white';
      ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);
      
      const qrUrl = await QRCode.toDataURL(url, { margin: 0, width: qrSize });
      const qrImg = new Image();
      qrImg.src = qrUrl;
      await new Promise(resolve => qrImg.onload = resolve);
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      // 8. Footer Text
      ctx.fillStyle = '#a7f3d0';
      ctx.font = '24px sans-serif';
      ctx.fillText('Read more at Language Muscle', padding, height - padding - 20);

      setImageData(canvas.toDataURL('image/png'));
    } catch (e) {
      console.error("Failed to generate image", e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!imageData) return;
    const link = document.createElement('a');
    link.download = `language-muscle-quote-${Date.now()}.png`;
    link.href = imageData;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Preview Section */}
        <div className="flex-1 bg-slate-100 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 relative min-h-[300px]">
          {isGenerating ? (
            <div className="flex flex-col items-center text-emerald-600">
              <Loader2 className="animate-spin mb-2" size={32} />
              <p className="font-bold">Generating Preview...</p>
            </div>
          ) : (
            imageData && (
              <img 
                src={imageData} 
                alt="Share Preview" 
                className="max-w-full max-h-[60vh] shadow-lg rounded-lg transform transition-transform hover:scale-[1.02]" 
              />
            )
          )}
        </div>

        {/* Controls Section */}
        <div className="w-full md:w-96 p-8 flex flex-col bg-white">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-2">
              <Share2 className="text-emerald-600" /> Share Quote
            </h2>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full text-slate-500">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6 flex-1">
             <div>
               <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Deep Link</label>
               <div className="flex gap-2">
                 <input 
                   type="text" 
                   readOnly 
                   value={url} 
                   className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none"
                 />
                 <button 
                   onClick={handleCopyLink}
                   className={`p-2 rounded-lg border transition-colors ${copied ? 'bg-green-50 border-green-200 text-green-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                   title="Copy Link"
                 >
                   {copied ? <Check size={20} /> : <LinkIcon size={20} />}
                 </button>
               </div>
               <p className="text-xs text-slate-400 mt-1">
                 This link will scroll directly to the highlighted text.
               </p>
             </div>

             <div className="border-t border-slate-100 pt-6">
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Share Image</label>
                <p className="text-sm text-slate-600 mb-4">
                  Download a beautiful image card with your selected quote and a QR code linking back to this exact spot.
                </p>
                <button
                  onClick={handleDownload}
                  disabled={isGenerating || !imageData}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-50"
                >
                  <Download size={20} /> Download Image
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};