import React, { useState } from 'react';
import { Mail, Globe, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { Button, Card } from '../ui';
import { FadeInUp } from '../motion';
import { siteConfig } from '../../config/site.config';

export const ContactSection: React.FC = () => {
  const { contact } = siteConfig;
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    org: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ fullName: '', email: '', org: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSubmitting(false);
        alert("Sorry, there was a problem submitting your form.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section bg-surface">
      <div className="container">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {contact.sectionTitle}
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              {contact.sectionDescription}
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <FadeInUp delay={0.2}>
            <Card variant="elevated" padding="lg" className="bg-white">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-foreground-secondary">
                    {contact.form.successMessage}
                  </p>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleChange}
                      placeholder={contact.form.namePlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={contact.form.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="org"
                      value={formState.org}
                      onChange={handleChange}
                      placeholder={contact.form.organizationPlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={contact.form.messagePlaceholder}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    icon="Send"
                    loading={isSubmitting}
                  >
                    {contact.form.submitLabel}
                  </Button>
                </form>
              )}
            </Card>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.3}>
            <div className="space-y-6">
              {/* Email */}
              <Card variant="bordered" padding="md" className="bg-white group">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={22} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Email</p>
                    <p className="font-semibold text-foreground">{contact.email}</p>
                  </div>
                </a>
              </Card>

              {/* Website */}
              <Card variant="bordered" padding="md" className="bg-white group">
                <a 
                  href={`https://${contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Globe size={22} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Website</p>
                    <p className="font-semibold text-foreground">{contact.website}</p>
                  </div>
                </a>
              </Card>

              {/* Social Links */}
              <Card variant="bordered" padding="md" className="bg-white">
                <p className="text-sm text-foreground-muted mb-3">Connect with us</p>
                <div className="flex gap-3">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                  >
                    <Linkedin size={22} className="text-primary group-hover:text-white" />
                  </a>
                  <a
                    href={`https://twitter.com/${contact.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                  >
                    <Twitter size={22} className="text-primary group-hover:text-white" />
                  </a>
                </div>
              </Card>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
