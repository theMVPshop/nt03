import React, { useState } from 'react';
import ResumePaper from './ResumePaper';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from '@material-ui/core';

function ResumePreview() {
  return (
    <div className='right'>
      <div>
        <Link href='#'>
          <Tooltip title='Delete All Data' placement='right'>
            <Avatar>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
      <ResumePaper />
    </div>
  );
}

export default ResumePreview;
