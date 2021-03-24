import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { FdmLogo } from './FdmLogo';

export function FdmLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <div className="relative text-blue-400 flex items-center justify-center">
        <FdmLogo className="absolute" style={{ transform: 'scale(0.6)' }} />
        <LoadingOutlined className="text-6xl text-blue-400 border-blue-400" />
      </div>
      <div className="text-blue-400">Loading, please wait...</div>
    </div>
  )
}