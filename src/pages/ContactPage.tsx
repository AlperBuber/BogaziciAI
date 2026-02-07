import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site.config';
import { Container, Card, Button } from '@/components/ui';
import { FadeInUp } from '@/components/motion';
import { Mail, Globe, Linkedin, Twitter, CheckCircle } from 'lucide-react';

// Form alanları için tip tanımı
interface FormState {
  fullName: string;
  email: string;
  org: string;
  message: string;
}

// Form verilerini URL-encoded formatına çeviren yardımcı fonksiyon
const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function ContactPage() {
  const { contactPage } = siteConfig;
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    org: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Başarı mesajını 5 saniye sonra gizle
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formState,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Formu temizle
        setFormState({
          fullName: '',
          email: '',
          org: '',
          message: '',
        });
      } else {
        throw new Error('Form gönderilemedi');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-light via-white to-accent/5">
        <Container>
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {contactPage.hero.title}
              </h1>
              <p className="text-xl text-foreground-secondary">
                {contactPage.hero.description}
              </p>
            </div>
          </FadeInUp>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-background">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <FadeInUp>
              <div className="space-y-8 text-center lg:text-left">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-foreground-secondary mb-8">
                    Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 w-full">
                  {contactPage.contactInfo.email && (
                    <div className="flex items-center lg:items-start gap-3 lg:gap-4 flex-col lg:flex-row text-center lg:text-left">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm lg:text-base">Email</h3>
                        <a
                          href={`mailto:${contactPage.contactInfo.email}`}
                          className="text-sm text-foreground-secondary hover:text-primary transition-colors break-all lg:break-normal"
                        >
                          {contactPage.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {contactPage.contactInfo.website && (
                    <div className="flex items-center lg:items-start gap-3 lg:gap-4 flex-col lg:flex-row text-center lg:text-left">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm lg:text-base">Website</h3>
                        <a
                          href={`https://${contactPage.contactInfo.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground-secondary hover:text-primary transition-colors break-all lg:break-normal"
                        >
                          {contactPage.contactInfo.website}
                        </a>
                      </div>
                    </div>
                  )}

                  {contactPage.contactInfo.linkedin && (
                    <div className="flex items-center lg:items-start gap-3 lg:gap-4 flex-col lg:flex-row text-center lg:text-left">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                        <Linkedin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm lg:text-base">LinkedIn</h3>
                        <a
                          href={contactPage.contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                        >
                          Boğaziçi AI
                        </a>
                      </div>
                    </div>
                  )}

                  {contactPage.contactInfo.twitter && (
                    <div className="flex items-center lg:items-start gap-3 lg:gap-4 flex-col lg:flex-row text-center lg:text-left">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                        <Twitter size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm lg:text-base">Twitter</h3>
                        <a
                          href={contactPage.contactInfo.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                        >
                          @bogaziciai
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeInUp>

            {/* Form */}
            <FadeInUp delay={0.2} className="lg:col-span-2">
              <Card variant="bordered" padding="lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-secondary/20 flex items-center justify-center">
                      <CheckCircle size={32} className="text-accent-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-foreground-secondary">
                      {contactPage.form.successMessage}
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Netlify için gizli alanlar */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Bot alanı: <input name="bot-field" />
                      </label>
                    </p>

                    {/* Hata mesajı */}
                    {error && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formState.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="org"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="org"
                        name="org"
                        value={formState.org}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary/50"
                        placeholder="Your organization"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none hover:border-primary/50"
                        placeholder="Tell us about your AI transformation goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isLoading}
                      icon="Send"
                    >
                      {contactPage.form.submitLabel}
                    </Button>
                  </form>
                )}
              </Card>
            </FadeInUp>
          </div>
        </Container>
      </section>
    </>
  );
}
