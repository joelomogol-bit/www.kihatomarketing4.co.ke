'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Eyebrow } from './LayoutBlocks';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    
    const { error } = await supabase
      .from('leads')
      .insert([{ email, source: 'lead_magnet' }]);
      
    setLoading(false);
    if (!error) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="border border-brand-mutedDark p-8 md:p-12 rounded-2xl bg-brand-charcoal max-w-2xl mx-auto text-center">
      <Eyebrow text="FREE RESOURCE" />
      <h3 className="font-serif text-3xl md:text-4xl mb-4 text-brand-cream tracking-tight">
        The complete performance toolkit.
      </h3>
      <p className="text-brand-mutedLight text-sm md:text-base mb-8 max-w-md mx-auto">
        Gain access to custom high-retention short form assets, copywriting files, and tech stack boilerplate scripts.
      </p>
      
      {submitted ? (
        <div className="text-brand-orange font-medium py-4 animate-pulse">
          ✓ Access link dispatched to email. Welcome aboard.
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your professional email" 
            className="w-full bg-transparent border border-brand-mutedDark rounded-xl px-4 py-3.5 text-brand-cream focus:outline-none focus:border-brand-orange text-sm transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-orange text-brand-cream py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition text-sm tracking-wide"
          >
            {loading ? 'Securing Access...' : 'Get the free guides'}
          </button>
          <p className="text-xs text-brand-mutedLight italic pt-2">
            No spam. Just highly tactical resources that directly scale digital workflows.
          </p>
        </form>
      )}
    </div>
  );
}
