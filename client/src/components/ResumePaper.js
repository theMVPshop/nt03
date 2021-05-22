import React from 'react';
import ResumeHeaderP from './ResumeHeaderP';
import ResumeProfessionalP from './ResumeProfessionalP';
import ResumeEducationP from './ResumeEducationP';
import ResumeAdditionalSkillsP from './ResumeAdditionalSkillsP';

function ResumePaper() {
  return (
    <div className=''>
      <div size='A4' className='page'>
        <ResumeHeaderP />
        <ResumeProfessionalP />
        <ResumeEducationP />
        <ResumeAdditionalSkillsP />
      </div>
    </div>
  );
}

export default ResumePaper;
