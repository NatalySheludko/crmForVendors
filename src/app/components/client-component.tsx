'use client';

import React from 'react';
import ServerComponentCopy from './server-component-copy';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component');
  return (
    <div>
			<span>Client Component</span>
			<ServerComponentCopy/>
      {children}
    </div>
  );
}
