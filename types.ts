import React from 'react';

export interface StatItem {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }
  
  export interface TimelineStep {
    period: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface SchoolTier {
    type: 'Dream' | 'Match' | 'Safety';
    label: string;
    color: string;
    schools: string[];
    description: string;
  }
  
  export interface ProfileDemo {
    id: string;
    name: string;
    gpa: string;
    toefl: string;
    gre: string;
    recommendations: SchoolTier[];
  }
  
  export interface Dimension {
    id: number;
    title: string;
    subtitle: string;
    details: string[];
    color: string;
  }
  
  export interface DocItem {
    id: string;
    title: string;
    enTitle: string;
    description: string;
  }

  export interface FAQItem {
    question: string;
    answer: React.ReactNode;
  }