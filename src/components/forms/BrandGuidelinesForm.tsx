import { Palette, Upload, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface BrandGuidelinesFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function BrandGuidelinesForm({ onBack, onSave }: BrandGuidelinesFormProps) {
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');
  const [accentColor, setAccentColor] = useState('#10B981');

  const handleColorChange = (setter: (color: string) => void, value: string) => {
    // Validate hex color
    if (value.startsWith('#') && (value.length === 4 || value.length === 7)) {
      setter(value.toUpperCase());
    } else if (!value.startsWith('#') && (value.length === 3 || value.length === 6)) {
      setter('#' + value.toUpperCase());
    } else {
      setter(value);
    }
  };

  const getLighterShade = (hex: string) => {
    // Convert hex to RGB and darken slightly for gradient effect
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const darker = (val: number) => Math.max(0, val - 30);
    return `#${darker(r).toString(16).padStart(2, '0')}${darker(g).toString(16).padStart(2, '0')}${darker(b).toString(16).padStart(2, '0')}`;
  };

  const getRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
            linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#3AB8FF]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#3AB8FF] hover:text-[#5DAEFF] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Page Header - Homepage Style */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Brand Guidelines
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Define your brand identity and visual style
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#EC4899]/5"></div>

          <form className="relative space-y-6">
            {/* Logo Upload */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Logo Upload *
              </label>
              <div className="border-2 border-dashed border-[#293038] rounded-xl p-8 text-center hover:border-[#8B5CF6]/50 transition-colors cursor-pointer bg-[#0D1114]/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/0 group-hover:from-[#8B5CF6]/5 to-transparent transition-all"></div>
                <div className="relative">
                  <Upload className="w-8 h-8 text-[#8B5CF6] mx-auto mb-2" />
                  <p className="text-[#E8F1FF] mb-1">Click to upload or drag and drop</p>
                  <p className="text-[#94A3B8] text-sm">PNG, JPG, or SVG (max. 5MB)</p>
                </div>
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Brand Colors
              </label>
              <p className="text-[#94A3B8] text-sm mb-3">Enter hex color codes for your brand</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Primary Color */}
                <div>
                  <label className="block text-[#94A3B8] text-sm mb-3">Primary Color</label>
                  <div className="flex items-center gap-3">
                    {/* Glossy Color Swatch */}
                    <div className="relative group">
                      <input
                        type="color"
                        className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value.toUpperCase())}
                        id="primary-color"
                      />
                      <label 
                        htmlFor="primary-color"
                        className="block w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${getLighterShade(primaryColor)} 100%)`,
                          boxShadow: `
                            0 0 0 1px ${getRgba(primaryColor, 0.3)},
                            0 4px 12px ${getRgba(primaryColor, 0.4)},
                            0 0 20px ${getRgba(primaryColor, 0.2)},
                            inset 0 1px 1px rgba(255, 255, 255, 0.15)
                          `
                        }}
                      >
                        {/* Glass highlight effect */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                          }}
                        ></div>
                        {/* Gradient stroke */}
                        <div 
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            padding: '1px'
                          }}
                        ></div>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="#3B82F6"
                      value={primaryColor}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                      onChange={(e) => handleColorChange(setPrimaryColor, e.target.value)}
                    />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label className="block text-[#94A3B8] text-sm mb-3">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    {/* Glossy Color Swatch */}
                    <div className="relative group">
                      <input
                        type="color"
                        className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value.toUpperCase())}
                        id="secondary-color"
                      />
                      <label 
                        htmlFor="secondary-color"
                        className="block w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${secondaryColor} 0%, ${getLighterShade(secondaryColor)} 100%)`,
                          boxShadow: `
                            0 0 0 1px ${getRgba(secondaryColor, 0.3)},
                            0 4px 12px ${getRgba(secondaryColor, 0.4)},
                            0 0 20px ${getRgba(secondaryColor, 0.2)},
                            inset 0 1px 1px rgba(255, 255, 255, 0.15)
                          `
                        }}
                      >
                        {/* Glass highlight effect */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                          }}
                        ></div>
                        {/* Gradient stroke */}
                        <div 
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            padding: '1px'
                          }}
                        ></div>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="#8B5CF6"
                      value={secondaryColor}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                      onChange={(e) => handleColorChange(setSecondaryColor, e.target.value)}
                    />
                  </div>
                </div>

                {/* Accent Color */}
                <div>
                  <label className="block text-[#94A3B8] text-sm mb-3">Accent Color</label>
                  <div className="flex items-center gap-3">
                    {/* Glossy Color Swatch */}
                    <div className="relative group">
                      <input
                        type="color"
                        className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value.toUpperCase())}
                        id="accent-color"
                      />
                      <label 
                        htmlFor="accent-color"
                        className="block w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor} 0%, ${getLighterShade(accentColor)} 100%)`,
                          boxShadow: `
                            0 0 0 1px ${getRgba(accentColor, 0.3)},
                            0 4px 12px ${getRgba(accentColor, 0.4)},
                            0 0 20px ${getRgba(accentColor, 0.2)},
                            inset 0 1px 1px rgba(255, 255, 255, 0.15)
                          `
                        }}
                      >
                        {/* Glass highlight effect */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                          }}
                        ></div>
                        {/* Gradient stroke */}
                        <div 
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            padding: '1px'
                          }}
                        ></div>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="#10B981"
                      value={accentColor}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
                      onChange={(e) => handleColorChange(setAccentColor, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Photos */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Business Photos
              </label>
              <p className="text-[#94A3B8] text-sm mb-3">Upload photos of your work, team, or facilities</p>
              <div className="border-2 border-dashed border-[#293038] rounded-xl p-8 text-center hover:border-[#8B5CF6]/50 transition-colors cursor-pointer bg-[#0D1114]/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/0 group-hover:from-[#8B5CF6]/5 to-transparent transition-all"></div>
                <div className="relative">
                  <Upload className="w-8 h-8 text-[#8B5CF6] mx-auto mb-2" />
                  <p className="text-[#E8F1FF] mb-1">Click to upload or drag and drop</p>
                  <p className="text-[#94A3B8] text-sm">PNG or JPG (max. 5MB each, up to 10 photos)</p>
                </div>
              </div>
            </div>

            {/* Typography Preferences */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Typography Preferences
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94A3B8] text-sm mb-2">Heading Font</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all">
                    <option value="">Select Font</option>
                    <option value="inter">Inter (Modern & Clean)</option>
                    <option value="poppins">Poppins (Friendly & Rounded)</option>
                    <option value="montserrat">Montserrat (Bold & Strong)</option>
                    <option value="playfair">Playfair Display (Elegant)</option>
                    <option value="roboto">Roboto (Professional)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#94A3B8] text-sm mb-2">Body Font</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all">
                    <option value="">Select Font</option>
                    <option value="inter">Inter (Modern & Clean)</option>
                    <option value="opensans">Open Sans (Readable)</option>
                    <option value="lato">Lato (Friendly)</option>
                    <option value="roboto">Roboto (Professional)</option>
                    <option value="sourcesans">Source Sans Pro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Branding Assets */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Additional Branding Assets
              </label>
              <p className="text-[#94A3B8] text-sm mb-3">Upload any style guides, brand books, or reference materials</p>
              <div className="border-2 border-dashed border-[#293038] rounded-xl p-8 text-center hover:border-[#8B5CF6]/50 transition-colors cursor-pointer bg-[#0D1114]/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/0 group-hover:from-[#8B5CF6]/5 to-transparent transition-all"></div>
                <div className="relative">
                  <Upload className="w-8 h-8 text-[#8B5CF6] mx-auto mb-2" />
                  <p className="text-[#E8F1FF] mb-1">Click to upload or drag and drop</p>
                  <p className="text-[#94A3B8] text-sm">PDF, DOC, or ZIP files (max. 10MB)</p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#293038] to-transparent absolute left-0 right-0"></div>
              <button
                type="button"
                onClick={onSave}
                className="flex-1 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#8B5CF6]/40 transition-all shadow-lg shadow-[#8B5CF6]/30 mt-6"
              >
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}