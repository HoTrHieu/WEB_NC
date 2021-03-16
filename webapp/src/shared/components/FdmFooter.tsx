import moment from 'moment';
import React from 'react';

export function FdmFooter() {
  return (
    <div className="flex w-full justify-center border-t">
      <div className="container p-5 flex justify-center items-center text-blue-400">
        <b>{moment().year()} @ Fademy</b>
      </div>
    </div>
  )
}