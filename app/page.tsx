'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { TrendingUp, Star, Calendar, Award, ArrowUpRight, BookOpen } from 'lucide-react';

// Add type definitions
type Industry = 'Tech' | 'Healthcare' | 'Finance' | 'Manufacturing';

interface Skill {
  name: string;
  growth: string;
  demand: string;
  timeToMaster: string;
  salary: string;
}

interface IndustryData {
  topSkills: Skill[];
  emergingRoles: string[];
  industryOutlook: string;
}

interface IndustryTrends {
  Tech: IndustryData;
  Healthcare: IndustryData;
  Finance: IndustryData;
  Manufacturing: IndustryData;
}

const SkillTrendsDashboard = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('Tech');
  const [careerStage, setCareerStage] = useState('Mid-Career');
  
  // Add type annotation to industryTrends
  const industryTrends: IndustryTrends = {
    Tech: {
      topSkills: [
        { name: 'AI/ML Engineering', growth: '+82%', demand: 'Very High', timeToMaster: '6-8 months', salary: '$8-12k' },
        { name: 'Cloud Architecture', growth: '+65%', demand: 'High', timeToMaster: '4-6 months', salary: '$7-10k' },
        { name: 'DevOps', growth: '+45%', demand: 'High', timeToMaster: '3-5 months', salary: '$6-9k' }
      ],
      emergingRoles: [
        'ML Operations Engineer',
        'Cloud Security Architect',
        'Data Ethics Officer'
      ],
      industryOutlook: 'Strong growth expected in AI and cloud services over next 5 years'
    },
    Healthcare: {
      topSkills: [
        { name: 'Healthcare Analytics', growth: '+55%', demand: 'High', timeToMaster: '4-6 months', salary: '$6-9k' },
        { name: 'Clinical Data Management', growth: '+48%', demand: 'High', timeToMaster: '3-5 months', salary: '$5-7k' },
        { name: 'Healthcare Informatics', growth: '+42%', demand: 'Medium', timeToMaster: '5-7 months', salary: '$6-8k' }
      ],
      emergingRoles: [
        'Digital Health Consultant',
        'Healthcare Data Scientist',
        'Remote Care Coordinator'
      ],
      industryOutlook: 'Digital transformation driving demand for tech-savvy healthcare professionals'
    },
    Finance: {
      topSkills: [
        { name: 'Financial Analytics', growth: '+58%', demand: 'High', timeToMaster: '5-7 months', salary: '$7-10k' },
        { name: 'Risk Management', growth: '+52%', demand: 'High', timeToMaster: '4-6 months', salary: '$6-9k' },
        { name: 'FinTech Development', growth: '+48%', demand: 'Very High', timeToMaster: '6-8 months', salary: '$8-11k' }
      ],
      emergingRoles: [
        'Digital Banking Specialist',
        'Cryptocurrency Analyst',
        'RegTech Consultant'
      ],
      industryOutlook: 'FinTech and digital banking creating new opportunities'
    },
    Manufacturing: {
      topSkills: [
        { name: 'Industry 4.0', growth: '+62%', demand: 'High', timeToMaster: '5-7 months', salary: '$6-8k' },
        { name: 'Smart Manufacturing', growth: '+55%', demand: 'High', timeToMaster: '4-6 months', salary: '$5-7k' },
        { name: 'Supply Chain Analytics', growth: '+45%', demand: 'Medium', timeToMaster: '3-5 months', salary: '$5-8k' }
      ],
      emergingRoles: [
        'Digital Factory Manager',
        'IoT Systems Specialist',
        'Advanced Manufacturing Engineer'
      ],
      industryOutlook: 'Digital transformation and automation driving industry changes'
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Strategic Skills Radar</h1>
          <p className="text-gray-600">Focus your learning on high-impact skills</p>
        </div>
        <div className="flex gap-4 items-center">
          <select 
            className="p-2 border rounded-lg"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value as Industry)}
          >
            {Object.keys(industryTrends).map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          <select 
            className="p-2 border rounded-lg"
            value={careerStage}
            onChange={(e) => setCareerStage(e.target.value)}
          >
            <option value="Early-Career">Early Career (0-3 years)</option>
            <option value="Mid-Career">Mid Career (4-10 years)</option>
            <option value="Senior">Senior (10+ years)</option>
          </select>
          <span className="text-sm text-gray-500">Last updated: Today</span>
        </div>
      </div>

      {/* Industry Outlook Banner */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Industry Outlook</h2>
        <p className="text-gray-700">{industryTrends[selectedIndustry].industryOutlook}</p>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trending Skills Card */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <CardTitle>Top Growing Skills</CardTitle>
            </div>
            <CardDescription>Based on job market demand</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industryTrends[selectedIndustry].topSkills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-green-600 flex items-center gap-1">
                      {skill.growth} <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="mt-2 flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> {skill.demand}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {skill.timeToMaster}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emerging Roles Card */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              <CardTitle>Emerging Roles</CardTitle>
            </div>
            <CardDescription>Roles with growing demand</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industryTrends[selectedIndustry].emergingRoles.map((role, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{role}</h3>
                    <button className="text-blue-600 flex items-center gap-1 text-sm">
                      <BookOpen className="w-4 h-4" /> View Learning Path
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personalized Insights Card - Spans full width */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <CardTitle>Personalized Recommendations</CardTitle>
            </div>
            <CardDescription>Based on your profile and industry trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Next Best Action</h3>
                <p className="text-sm text-gray-600">Start with &quot;Introduction to Machine Learning&quot; to build foundation for AI/ML Engineering path</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Skill Gap Alert</h3>
                <p className="text-sm text-gray-600">Cloud Security knowledge will complement your current DevOps skills</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Learning Opportunity</h3>
                <p className="text-sm text-gray-600">New AWS Certification course aligns with your career goals</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillTrendsDashboard;