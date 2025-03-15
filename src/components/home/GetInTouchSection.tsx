
import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GetInTouchSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-primary rounded-full opacity-20"></div>
        <div className="absolute bottom-12 left-1/4 w-16 h-16 border border-accent/50 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-codec">
            Have a project in mind?
          </h2>
          
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-xl font-inter">
            We're here to assist! Drop us a message or schedule a call with us, and let's create something exceptional together.
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 font-codec">Get in touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <a 
                  href="tel:+6584992759" 
                  className="text-lg hover:text-primary transition-colors font-inter"
                >
                  +65 84992759
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <a 
                  href="mailto:nihao.codenest@gmail.com" 
                  className="text-lg hover:text-primary transition-colors font-inter"
                >
                  nihao.codenest@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-lg font-inter">or</span>
              </div>
              
              <div className="pt-2">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-12 py-6 text-base h-auto border-gray-300 hover:bg-gray-50 font-inter"
                  onClick={() => window.open('https://calendly.com/buildlearning', '_blank')}
                >
                  Book an online call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
