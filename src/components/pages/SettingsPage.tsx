import { User, Bell, Lock, CreditCard, Save, X, ChevronRight, Mail, Phone, Building, Shield, Smartphone, FileText, Receipt, Wallet, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../PageHero';

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Settings"
        subtitle="Manage your account and preferences"
        icon={<User className="w-8 h-8 text-white" />}
        iconGradient="from-[#3AB8FF] to-[#00CFFF]"
      />

      {/* Profile Settings - Ice Blue */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{
                boxShadow: '0 20px 60px -10px #3AB8FF60, 0 0 40px #3AB8FF20',
              }}
            >
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl mb-1">Profile Settings</h3>
              <p className="text-[#94A3B8] text-sm">Update your personal information and preferences</p>
            </div>
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                <Building className="w-4 h-4" />
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company Inc."
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications - Purple */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{
                boxShadow: '0 20px 60px -10px #8B5CF660, 0 0 40px #8B5CF620',
              }}
            >
              <Bell className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl mb-1">Notifications</h3>
              <p className="text-[#94A3B8] text-sm">Manage your notification preferences</p>
            </div>
          </div>

          {/* Toggle Settings */}
          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#8B5CF6]/30 transition-all">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8B5CF6]" />
                <div>
                  <p className="text-[#E8F1FF] font-medium">Email Notifications</p>
                  <p className="text-[#94A3B8] text-sm">Receive updates via email</p>
                </div>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  emailNotifications ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]' : 'bg-[#293038]'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${
                    emailNotifications ? 'translate-x-7' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>

            {/* SMS Alerts */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#8B5CF6]/30 transition-all">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#8B5CF6]" />
                <div>
                  <p className="text-[#E8F1FF] font-medium">SMS Alerts</p>
                  <p className="text-[#94A3B8] text-sm">Get important alerts via text</p>
                </div>
              </div>
              <button
                onClick={() => setSmsAlerts(!smsAlerts)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  smsAlerts ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]' : 'bg-[#293038]'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${
                    smsAlerts ? 'translate-x-7' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>

            {/* Weekly Reports */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#8B5CF6]/30 transition-all">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#8B5CF6]" />
                <div>
                  <p className="text-[#E8F1FF] font-medium">Weekly Reports</p>
                  <p className="text-[#94A3B8] text-sm">Weekly performance summaries</p>
                </div>
              </div>
              <button
                onClick={() => setWeeklyReports(!weeklyReports)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  weeklyReports ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]' : 'bg-[#293038]'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${
                    weeklyReports ? 'translate-x-7' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Security - Green */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{
                boxShadow: '0 20px 60px -10px #10B98160, 0 0 40px #10B98120',
              }}
            >
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl mb-1">Security</h3>
              <p className="text-[#94A3B8] text-sm">Password and security settings</p>
            </div>
          </div>

          {/* Security Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Change Password */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#10B981]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 group-hover:from-[#10B981]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Lock className="w-5 h-5 text-[#10B981]" />
                <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Change Password</p>
              <p className="relative text-[#94A3B8] text-sm">Update your password</p>
            </button>

            {/* Two-Factor Auth */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#10B981]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 group-hover:from-[#10B981]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Shield className="w-5 h-5 text-[#10B981]" />
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">Active</span>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Two-Factor Auth</p>
              <p className="relative text-[#94A3B8] text-sm">Extra layer of security</p>
            </button>

            {/* Active Sessions */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#10B981]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 group-hover:from-[#10B981]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Smartphone className="w-5 h-5 text-[#10B981]" />
                <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Active Sessions</p>
              <p className="relative text-[#94A3B8] text-sm">Manage your devices</p>
            </button>
          </div>
        </div>
      </div>

      {/* Billing - Orange/Red */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
              style={{
                boxShadow: '0 20px 60px -10px #F9731660, 0 0 40px #F9731620',
              }}
            >
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl mb-1">Billing & Subscription</h3>
              <p className="text-[#94A3B8] text-sm">Manage your payment methods and subscription</p>
            </div>
          </div>

          {/* Current Subscription Card */}
          <div className="mb-6 p-6 rounded-xl bg-[#0D1114] border border-[#F97316]/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#94A3B8] text-sm mb-1">Current Plan</p>
                <p className="text-[#E8F1FF] text-2xl">Pro Plan</p>
              </div>
              <div className="text-right">
                <p className="text-[#94A3B8] text-sm mb-1">Next Billing Date</p>
                <p className="text-[#E8F1FF]">Jan 15, 2026</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#293038]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#94A3B8] text-sm">Auto-renewal enabled</span>
              </div>
              <span className="text-[#E8F1FF] text-xl">$99/mo</span>
            </div>
          </div>

          {/* Billing Mini-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Payment Methods */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Wallet className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Payment Methods</p>
              <p className="relative text-[#94A3B8] text-sm">Manage cards & payments</p>
            </button>

            {/* Billing History */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Billing History</p>
              <p className="relative text-[#94A3B8] text-sm">View past transactions</p>
            </button>

            {/* Invoices */}
            <button className="group relative p-5 rounded-xl bg-[#0D1114] border border-[#293038] hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Receipt className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] font-medium mb-1">Invoices</p>
              <p className="relative text-[#94A3B8] text-sm">Download invoices</p>
            </button>
          </div>

          {/* Update Payment Button */}
          <button
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all font-medium"
            style={{
              boxShadow: '0 10px 30px -5px #F9731640',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px -5px #F9731660';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px -5px #F9731640';
            }}
          >
            <CreditCard className="w-5 h-5" />
            <span>Update Payment Method</span>
          </button>
        </div>
      </div>

      {/* Account Actions - Divider + Buttons */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/3 to-transparent pointer-events-none"></div>
        
        <div className="relative">
          <h3 className="text-[#E8F1FF] text-xl mb-6">Account Actions</h3>
          
          {/* Subtle Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#293038] to-transparent mb-6"></div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Save Changes Button */}
            <button
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3AB8FF] to-[#00CFFF] text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all font-medium"
              style={{
                boxShadow: '0 10px 30px -5px #3AB8FF40',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 50px -5px #3AB8FF60';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px -5px #3AB8FF40';
              }}
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>

            {/* Cancel Button */}
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#1A1D23] text-[#E8F1FF] border-2 border-[#293038] hover:border-[#3AB8FF]/50 hover:bg-[#21262D] transition-all font-medium">
              <X className="w-5 h-5" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}