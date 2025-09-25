// Builder.io component registration
import { Builder } from '@builder.io/react';
import Hero from '@/components/hero/Hero';
import WidgetCard from '@/components/WidgetCard';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import CTASection from '@/components/sections/CTASection';
import LogosStrip from '@/components/sections/LogosStrip';
import GradientDivider from '@/components/sections/GradientDivider';
import StatsStrip from '@/components/sections/StatsStrip';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

// Register Hero for drag-and-drop use. Current Hero is a fixed design block.
Builder.registerComponent(Hero as any, {
  name: 'Hero',
  description: 'Site hero with animated image and heading',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Charminar Predicts' },
    { name: 'subtitle', type: 'longText', defaultValue: "Choose your sport and take a quick 10-question pulse. We'll analyze your answers and reveal your fan profile." },
    { name: 'imageSrc', type: 'string', defaultValue: '/hero/user-hero.png' },
  ],
});

// Register WidgetCard with customizable props
Builder.registerComponent(WidgetCard as any, {
  name: 'WidgetCard',
  inputs: [
    { name: 'to', type: 'string', defaultValue: '/quiz/football' },
    { name: 'title', type: 'string', defaultValue: 'Card Title' },
    { name: 'description', type: 'string', defaultValue: 'Short description' },
    { name: 'accentClass', type: 'string', defaultValue: 'bg-emerald-200/60 text-emerald-600' },
  ],
});

// Register FeaturesGrid
Builder.registerComponent(FeaturesGrid as any, {
  name: 'FeaturesGrid',
  inputs: [
    { name: 'heading', type: 'string', defaultValue: 'Why Charminar Predicts' },
    { name: 'subheading', type: 'string', defaultValue: 'Fast, clear and beautiful predictions.' },
    {
      name: 'features',
      type: 'list',
      subFields: [
        { name: 'icon', type: 'string', defaultValue: '⚡' },
        { name: 'title', type: 'string', defaultValue: 'Fast' },
        { name: 'description', type: 'string', defaultValue: 'Instant rankings with clean explanations.' },
      ],
    },
  ],
});

// Register CTASection
Builder.registerComponent(CTASection as any, {
  name: 'CTASection',
  inputs: [
    { name: 'eyebrow', type: 'string', defaultValue: 'Get started' },
    { name: 'title', type: 'string', defaultValue: 'Predict smarter, celebrate louder.' },
    { name: 'subtitle', type: 'string', defaultValue: 'Join Charminar Predicts and experience premium, data-driven sports predictions.' },
    { name: 'buttonText', type: 'string', defaultValue: 'Start a Quiz' },
    { name: 'buttonHref', type: 'string', defaultValue: '/quiz/football' },
  ],
});

// Register LogosStrip
Builder.registerComponent(LogosStrip as any, {
  name: 'LogosStrip',
  inputs: [
    { name: 'logos', type: 'list', subFields: [{ name: 'item', type: 'string' }] },
  ],
});

// Register GradientDivider
Builder.registerComponent(GradientDivider as any, {
  name: 'GradientDivider',
  inputs: [
    { name: 'height', type: 'number', defaultValue: 64 },
    { name: 'from', type: 'string', defaultValue: '#a5b4fc' },
    { name: 'to', type: 'string', defaultValue: '#fbcfe8' },
  ],
});

// Register StatsStrip
Builder.registerComponent(StatsStrip as any, {
  name: 'StatsStrip',
  inputs: [
    { name: 'stats', type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'number' },
      { name: 'suffix', type: 'string' },
    ]},
  ],
});

// Register TestimonialsCarousel
Builder.registerComponent(TestimonialsCarousel as any, {
  name: 'TestimonialsCarousel',
  inputs: [
    { name: 'testimonials', type: 'list', subFields: [
      { name: 'quote', type: 'longText' },
      { name: 'author', type: 'string' },
      { name: 'role', type: 'string' },
      { name: 'avatar', type: 'string' },
    ]},
  ],
});
