import { Building2, ChevronLeft, Check, ChevronDown, ChevronUp, Trash2, Plus, User } from 'lucide-react';
import { useState } from 'react';

interface BusinessInformationFormProps {
  onBack: () => void;
  onSave: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  isExpanded: boolean;
}

export function BusinessInformationForm({ onBack, onSave }: BusinessInformationFormProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: '',
      role: '',
      isExpanded: true,
    };
    setTeamMembers([...teamMembers, newMember]);
    
    // Smooth scroll to bottom after a brief delay
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const toggleExpanded = (id: string) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id ? { ...member, isExpanded: !member.isExpanded } : member
    ));
  };

  const updateTeamMember = (id: string, field: 'name' | 'role', value: string) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
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

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Business Information
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Help us set up your booking system and service operations
              </p>
            </div>
          </div>
        </div>

        {/* What We'll Set Up For You Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>
          
          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {[
                  'Services & pricing',
                  'Service areas',
                  'Automated reminders',
                  'Website booking button',
                  'Fieldd optimization'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#3AB8FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#3AB8FF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Booking flow',
                  'Schedule & availability',
                  'Staff accounts',
                  'Calendar + notifications'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#3AB8FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#3AB8FF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form className="relative space-y-6">
            {/* Business Name */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Business Name *
              </label>
              <input
                type="text"
                placeholder="Your Business Name"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Business Address */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Business Address *
              </label>
              <input
                type="text"
                placeholder="123 Main Street, City, State 12345"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Services + Pricing */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Services + Pricing *
              </label>
              <textarea
                placeholder="List your services and prices (e.g., Interior Detail - $150, Exterior Detail - $100)"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Service Areas */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Service Areas *
              </label>
              <textarea
                placeholder="Enter cities or ZIP codes you serve (e.g., Atlanta, GA; 30301, 30302)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Hours of Operation */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Hours of Operation *
              </label>
              <input
                type="text"
                placeholder="Mon-Fri: 8am-6pm, Sat: 9am-3pm"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Website URL (Optional) */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Website URL <span className="text-[#64748B]">(Optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://www.yourbusiness.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Team Size */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                How many people are on your team? <span className="text-[#64748B]">(Optional)</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 2, 5, 12…"
                min="1"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Team Members & Roles */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Team Members & Roles <span className="text-[#64748B]">(Optional)</span>
              </label>
              
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="bg-[#0D1114] border border-[#293038] rounded-xl overflow-hidden transition-all hover:border-[#3AB8FF]/30"
                  >
                    {/* Collapsed State */}
                    <div 
                      onClick={() => toggleExpanded(member.id)}
                      className="flex items-center gap-3 p-4 cursor-pointer group"
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3AB8FF]/20 to-[#8B5CF6]/20 flex items-center justify-center border border-[#3AB8FF]/30 flex-shrink-0">
                        <User className="w-5 h-5 text-[#3AB8FF]" />
                      </div>
                      
                      {/* Name/Placeholder */}
                      <div className="flex-1">
                        <div className="text-[#E8F1FF] font-medium">
                          {member.name || 'New team member'}
                        </div>
                        {member.role && (
                          <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#3AB8FF]/10 text-[#3AB8FF] text-xs mt-1 border border-[#3AB8FF]/20">
                            {member.role}
                          </div>
                        )}
                      </div>

                      {/* Chevron */}
                      <div className="text-[#64748B] group-hover:text-[#3AB8FF] transition-colors">
                        {member.isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Expanded State */}
                    {member.isExpanded && (
                      <div className="px-4 pb-4 space-y-4 border-t border-[#293038] pt-4 animate-[slideDown_200ms_ease-out]">
                        {/* Name Input */}
                        <div>
                          <label className="text-[#94A3B8] text-xs mb-2 block">Team Member Name</label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-3 py-2 rounded-lg bg-[#1A1D23] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-1 focus:ring-[#3AB8FF]/20 transition-all text-sm"
                          />
                        </div>

                        {/* Role Dropdown */}
                        <div>
                          <label className="text-[#94A3B8] text-xs mb-2 block">Role</label>
                          <select
                            value={member.role}
                            onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-[#1A1D23] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-1 focus:ring-[#3AB8FF]/20 transition-all text-sm"
                          >
                            <option value="">Select role</option>
                            <option value="Worker">Worker</option>
                            <option value="Sales Rep">Sales Rep</option>
                            <option value="Owner">Owner</option>
                          </select>
                        </div>

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeTeamMember(member.id);
                          }}
                          className="flex items-center gap-2 text-[#EF4444] hover:text-[#DC2626] text-sm transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove team member
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add Team Member Button */}
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-[#293038] text-[#3AB8FF] hover:border-[#3AB8FF] hover:bg-[#3AB8FF]/5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#3AB8FF]/30 transition-all">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Add Team Member</span>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="flex-1 bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium"
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
