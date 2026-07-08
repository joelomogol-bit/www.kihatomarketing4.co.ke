'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ContactForm() {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', project_type: 'Web Development' });
  const [status, setStatus] = useState<{ success?: boolean; msg?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from('contact_submissions')
      .insert([formData]);
      
    setLoading(false);
    if (error) {
      setStatus({ success: false, msg: 'Submission encountered an error. Please contact directly.' });
    } else {
      setStatus({ success: true, msg: 'Message synchronized successfully. Anticipate correspondence within 24 hours.' });
      setFormData({ name: '', email: '', message: '', project_type: 'Web Development' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto md:mx-0">
      <div>
        <label className="block text-xs uppercase tracking-wider text-brand-mutedLight mb-2">Name</label>
        <input 
          type="text" 
          required
          className="w-full bg-brand-charcoal/50 border border-brand-mutedDark rounded-xl px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-orange text-sm"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-brand-mutedLight mb-2">Email Address</label>
        <input 
          type="email" 
          required
          className="w-full bg-brand-charcoal/50 border border-brand-mutedDark rounded-xl px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-orange text-sm"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-brand-mutedLight mb-2">Strategic Initiative</label>
        <select 
          className="w-full bg-brand-charcoal border border-brand-mutedDark rounded-xl px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-orange text-sm appearance-none"
          value={formData.project_type}
          onChange={e => setFormData({...formData, project_type: e.target.value})}
        >
          <option>Social Media Marketing</option>
          <option>Web Development</option>
          <option>Video Editing</option>
          <option>Script Writing</option>
          <option>Email Marketing</option>
          <option>VSL Writing</option>
        </select>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-brand-mutedLight mb-2">Brief / Vision</label>
        <textarea 
          rows={5}
          required
          className="w-full bg-brand-charcoal/50 border border-brand-mutedDark rounded-xl px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-orange text-sm resize-none"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-brand-orange text-brand-cream py-3.5 rounded-xl font-medium tracking-wide transition hover:bg-opacity-90 text-sm"
      >
        {loading ? 'Transmitting...' : 'Initiate Briefing'}
      </button>

      {status.msg && (
        <p className={`text-sm text-center font-medium mt-4 ${status.success ? 'text-green-400' : 'text-brand-orange'}`}>
          {status.msg}
        </p>
      )}
    </form>
  );
}
