import React, { useState } from 'react';
import { Briefcase, GraduationCap, Code2, ArrowRight } from 'lucide-react';
import bgImage from '../bg.jpg';

// Categorized job roles for the dropdown
const JOB_ROLES = {
    'Software & Engineering': [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Mobile Developer (Android)',
        'Mobile Developer (iOS)',
        'Software Engineer',
        'DevOps Engineer',
        'Cloud Engineer',
        'Site Reliability Engineer (SRE)',
        'Embedded Systems Engineer',
        'QA / Test Engineer',
    ],
    'Data & AI': [
        'Data Analyst',
        'Data Scientist',
        'Machine Learning Engineer',
        'AI Engineer',
        'Data Engineer',
        'Business Intelligence Analyst',
    ],
    'Design & Product': [
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Product Designer',
        'Product Manager',
        'Product Owner',
    ],
    'Management & Leadership': [
        'Engineering Manager',
        'Project Manager',
        'Scrum Master',
        'Technical Lead',
        'Team Lead',
        'CTO / VP Engineering',
    ],
    'Security & Infrastructure': [
        'Cybersecurity Analyst',
        'Network Engineer',
        'System Administrator',
        'Security Engineer',
    ],
    'Business & Support': [
        'Business Analyst',
        'IT Support Specialist',
        'Technical Writer',
        'Sales Engineer',
        'HR Manager',
        'Recruiter',
        'Marketing Analyst',
        'Finance Analyst',
    ],
    'Other Fields': [
        'Nurse / Healthcare Professional',
        'Teacher / Instructor',
        'Civil Engineer',
        'Mechanical Engineer',
        'Electrical Engineer',
    ],
};

export default function SetupForm({ onStart }) {
    const [formData, setFormData] = useState({
        role: '',
        level: 'Junior',
        type: 'HR / Behavioral', // Default to HR so it's always valid
    });
    const [roleError, setRoleError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.role) {
            setRoleError('Please select a job role.');
            return;
        }
        onStart(formData);
    };

    // Determine available interview types based on the selected role category
    const getAvailableTypes = (role) => {
        if (!role) return ['Technical', 'HR / Behavioral', 'System Design', 'Managerial'];

        let category = '';
        for (const [cat, roles] of Object.entries(JOB_ROLES)) {
            if (roles.includes(role)) {
                category = cat;
                break;
            }
        }

        if (category === 'Design & Product') {
            return ['HR / Behavioral', 'Design Critique / Portfolio', 'Product Sense', 'Managerial'];
        }
        if (category === 'Management & Leadership') {
            return ['Managerial', 'HR / Behavioral', 'System Design'];
        }
        if (category === 'Business & Support' || category === 'Other Fields') {
            return ['HR / Behavioral', 'Case Study', 'Managerial'];
        }

        // Software & Engineering, Data & AI, Security & Infrastructure
        return ['Technical', 'HR / Behavioral', 'System Design', 'Managerial'];
    };

    const availableTypes = getAvailableTypes(formData.role);

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <Briefcase className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Setup Interview</h2>
                    <p className="text-gray-500 mt-2 text-base">Customize your practice session</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Job Role Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Target Job Role
                        </label>
                        <div className="relative">
                            <Briefcase className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                            <select
                                value={formData.role}
                                onChange={(e) => {
                                    const newRole = e.target.value;
                                    const newAvailableTypes = getAvailableTypes(newRole);
                                    let newType = formData.type;

                                    // If current type is not available for new role, reset to the first available type
                                    if (!newAvailableTypes.includes(newType)) {
                                        newType = newAvailableTypes[0];
                                    }

                                    setFormData({ ...formData, role: newRole, type: newType });
                                    setRoleError('');
                                }}
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border outline-none appearance-none bg-white transition-all
                                    ${roleError
                                        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                                        : formData.role
                                            ? 'border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-100'
                                            : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                                    }`}
                            >
                                <option value="">— Select a job role —</option>
                                {Object.entries(JOB_ROLES).map(([category, roles]) => (
                                    <optgroup key={category} label={category}>
                                        {roles.map(role => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>
                        {roleError && (
                            <p className="text-red-500 text-xs mt-1.5">{roleError}</p>
                        )}
                    </div>

                    {/* Experience Level */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Experience Level
                        </label>
                        <div className="relative">
                            <GraduationCap className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                            <select
                                value={formData.level}
                                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none appearance-none bg-white transition-all"
                            >
                                <option>Junior</option>
                                <option>Mid-Level</option>
                                <option>Senior</option>
                                <option>Lead/Manager</option>
                            </select>
                        </div>
                    </div>

                    {/* Interview Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Interview Type
                        </label>
                        <div className="relative">
                            <Code2 className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none appearance-none bg-white transition-all"
                            >
                                {availableTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200 mt-8"
                    >
                        Start Interview
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
