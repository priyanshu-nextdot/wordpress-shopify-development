
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    loading: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thanks for reaching out! We'll be in touch soon.");
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        loading: false
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            name="name"
            className="bg-nextdot-900 border-nextdot-800 focus:border-accent/50" 
            placeholder="John Doe" 
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            className="bg-nextdot-900 border-nextdot-800 focus:border-accent/50" 
            placeholder="hello@example.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input 
          id="company" 
          name="company"
          className="bg-nextdot-900 border-nextdot-800 focus:border-accent/50" 
          placeholder="Your Startup"
          value={formState.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea 
          id="message" 
          name="message"
          className="bg-nextdot-900 border-nextdot-800 focus:border-accent/50 min-h-[140px]" 
          placeholder="Tell us about your project and requirements..."
          value={formState.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white font-medium"
          disabled={formState.loading}
        >
          {formState.loading ? "Sending..." : "Get in Touch"}
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        Or schedule a call directly via{" "}
        <a href="#" className="text-accent hover:underline">Calendly</a>
      </p>
    </form>
  );
}
