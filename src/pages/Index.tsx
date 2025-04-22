
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingBag, Code, Zap, LineChart, Rocket, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs-custom";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import TestimonialCard from "@/components/TestimonialCard";
import TechStack from "@/components/TechStack";
import PricingCard from "@/components/PricingCard";

export default function Index() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-nextdot-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-28 bg-grid relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2/3 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container max-w-7xl mx-auto px-4 pt-20 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="py-2 px-4 rounded-full bg-nextdot-900 border border-nextdot-800 text-accent mb-8 inline-flex items-center gap-2">
              <span className="bg-accent/20 rounded-full w-2 h-2 animate-pulse"></span>
              Websites that convert visitors into customers
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight tracking-tight">
              Custom <span className="text-gradient">WordPress</span> & <span className="text-gradient">Shopify</span> Development for Global Startups
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              We build fast, responsive, SEO-friendly, and scalable websites tailored for your product or MVP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-nextdot-700 hover:bg-nextdot-900">
                <a href="#services">View Services</a>
              </Button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-24 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { number: "50+", label: "Startups Served" },
              { number: "97%", label: "Client Satisfaction" },
              { number: "200+", label: "Projects Completed" },
              { number: "15+", label: "Countries Worldwide" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-nextdot-900/50 backdrop-blur-sm border border-nextdot-800 rounded-lg text-center"
                variants={fadeIn}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-accent">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn}>
              <span className="text-accent font-medium mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for <span className="text-gradient">startups</span>, built for <span className="text-gradient">growth</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand the unique challenges facing startups today. Our team of experienced developers and designers combine creativity with technical expertise to deliver websites that not only look great but also drive business results.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "Performance-Focused", desc: "Blazing fast websites that rank higher in search engines" },
                  { title: "Built for Conversion", desc: "Strategic UX/UI that guides visitors toward taking action" },
                  { title: "Scalable Solutions", desc: "Systems that grow with your business, not hold you back" },
                  { title: "Personal Approach", desc: "Dedicated team that understands your business goals" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1">
                      <div className="bg-accent/20 p-1 rounded-full">
                        <div className="bg-accent rounded-full w-2 h-2"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative">
              <div className="rounded-xl overflow-hidden border border-nextdot-800 shadow-xl shadow-accent/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                  alt="Team at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-nextdot-900/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored solutions for your digital needs
            </h2>
            <p className="text-muted-foreground">
              We specialize in creating custom WordPress and Shopify solutions that perfectly align with your business goals and user expectations.
            </p>
          </motion.div>
          
          <div className="mb-12">
            <Tabs defaultValue="wordpress" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                  <TabsTrigger value="shopify">Shopify</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="wordpress">
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="Custom WordPress Development"
                      description="Tailored WordPress solutions designed specifically for your business requirements."
                      icon={<Globe className="h-6 w-6" />}
                      features={[
                        "Custom theme development",
                        "Plugin customization",
                        "Advanced functionality",
                        "Performance optimization",
                        "SEO-friendly architecture"
                      ]}
                      highlight={true}
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="WooCommerce Solutions"
                      description="Robust e-commerce experiences built on WordPress's most popular platform."
                      icon={<ShoppingBag className="h-6 w-6" />}
                      features={[
                        "Custom product displays",
                        "Payment gateway integration",
                        "Inventory management",
                        "Custom checkout flows",
                        "Order process automation"
                      ]}
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="WordPress Maintenance"
                      description="Keep your WordPress site secure, updated, and performing at its best."
                      icon={<Zap className="h-6 w-6" />}
                      features={[
                        "Regular updates & backups",
                        "Security monitoring",
                        "Performance optimization",
                        "Bug fixes & troubleshooting",
                        "Technical support"
                      ]}
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="shopify">
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="Custom Shopify Stores"
                      description="Beautiful, conversion-focused Shopify stores tailored to your brand."
                      icon={<ShoppingBag className="h-6 w-6" />}
                      features={[
                        "Custom theme development",
                        "Unique product showcasing",
                        "Mobile-first design",
                        "Conversion rate optimization",
                        "Multi-currency support"
                      ]}
                      highlight={true}
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="Shopify App Development"
                      description="Custom Shopify apps to extend your store's functionality."
                      icon={<Code className="h-6 w-6" />}
                      features={[
                        "Custom app development",
                        "Third-party integrations",
                        "API development",
                        "Automation solutions",
                        "Data synchronization"
                      ]}
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <ServiceCard
                      title="Shopify Plus Solutions"
                      description="Enterprise-level e-commerce solutions for high-growth businesses."
                      icon={<Rocket className="h-6 w-6" />}
                      features={[
                        "High-volume scaling",
                        "Custom checkout experiences",
                        "Advanced automation",
                        "Wholesale channel setup",
                        "Multi-store management"
                      ]}
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-nextdot-700 hover:bg-nextdot-900">
              <a href="#contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium mb-2 block">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success stories that drive results
            </h2>
            <p className="text-muted-foreground">
              Browse our portfolio of hand-crafted websites that have helped startups and businesses achieve their goals.
            </p>
          </motion.div>
          
          <div className="mb-12">
            <Tabs defaultValue="wordpress-projects" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="wordpress-projects">WordPress Projects</TabsTrigger>
                  <TabsTrigger value="shopify-projects">Shopify Projects</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="wordpress-projects">
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="HealthTech Platform"
                      description="Custom WordPress solution for a healthcare startup with appointment scheduling and telemedicine."
                      imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                      category="WordPress"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="Venture Capital Firm"
                      description="Modern, responsive WordPress site for a VC firm with custom portfolio management."
                      imageUrl="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80"
                      category="WordPress"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="SaaS Marketing Site"
                      description="High-converting WordPress website for a SaaS startup with membership integration."
                      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                      category="WordPress"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="shopify-projects">
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="Sustainable Fashion Brand"
                      description="Custom Shopify store with advanced product filtering and sustainability metrics."
                      imageUrl="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80"
                      category="Shopify"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="Specialty Coffee Roaster"
                      description="Subscription-based Shopify store with custom coffee quiz and delivery scheduling."
                      imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                      category="Shopify"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn}>
                    <WorkCard 
                      title="Premium Skincare Line"
                      description="High-end Shopify Plus implementation with custom product builder and quiz."
                      imageUrl="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80"
                      category="Shopify Plus"
                    />
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-nextdot-700 hover:bg-nextdot-900">
              <a href="#">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 bg-nextdot-900/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium mb-2 block">Our Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by modern technology
            </h2>
            <p className="text-muted-foreground">
              We leverage the latest technologies to build fast, responsive, and scalable websites.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TechStack />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium mb-2 block">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What our clients say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="NextDot delivered exactly what we needed for our startup. Fast, responsive, and they really understood our business goals. The WordPress site they built has been instrumental in our growth."
                name="Michael Ross"
                role="Founder"
                company="HealthTech Solutions"
                avatar="/placeholder.svg"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="Working with NextDot was seamless. They transformed our Shopify store into something that not only looks amazing but converts at a much higher rate. Highly recommend their team."
                name="Sarah Johnson"
                role="Marketing Director"
                company="EcoGoods"
                avatar="/placeholder.svg"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="As a non-technical founder, I needed a team that could handle everything. NextDot guided me through the entire process and delivered a WordPress site that exceeded my expectations."
                name="David Chen"
                role="CEO"
                company="InvestNow"
                avatar="/placeholder.svg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-nextdot-900/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent pricing plans
            </h2>
            <p className="text-muted-foreground">
              Choose from our standard packages or get in touch for a custom quote tailored to your specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn}>
              <PricingCard
                title="Starter"
                price="$3,499"
                description="Perfect for small businesses just getting started online."
                features={[
                  "Responsive WordPress/Shopify site",
                  "Up to 5 custom pages",
                  "Basic SEO setup",
                  "Contact form integration",
                  "Mobile optimization",
                  "1 month of support"
                ]}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <PricingCard
                title="Business"
                price="$7,999"
                description="Ideal for growing businesses requiring more advanced features."
                features={[
                  "Everything in Starter",
                  "Up to 10 custom pages",
                  "E-commerce functionality",
                  "Custom design elements",
                  "Advanced SEO setup",
                  "Performance optimization",
                  "3 months of support"
                ]}
                highlighted={true}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="For established businesses with complex requirements."
                features={[
                  "Everything in Business",
                  "Unlimited custom pages",
                  "Custom functionality",
                  "Advanced integrations",
                  "Multilingual support",
                  "Dedicated project manager",
                  "6 months of support"
                ]}
                cta="Contact Us"
              />
            </motion.div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              All plans include free hosting setup, SSL certificate, and basic analytics integration.
            </p>
            <Button asChild variant="outline" className="border-nextdot-700 hover:bg-nextdot-900">
              <a href="#contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium mb-2 block">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours to discuss your project in detail.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Global Services</h3>
                    <p className="text-sm text-muted-foreground">We work with clients worldwide, with a focus on US startups.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Quick Turnaround</h3>
                    <p className="text-sm text-muted-foreground">Most projects completed in 3-6 weeks depending on complexity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <LineChart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Results-Driven</h3>
                    <p className="text-sm text-muted-foreground">We focus on creating websites that drive real business results.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-nextdot-900/50 backdrop-blur-sm border border-nextdot-800 rounded-xl p-6 md:p-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Tell us about your project</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
