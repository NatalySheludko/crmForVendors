'use client';

import React from 'react';
import Button from '@/app/components/button';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>{`Something globally went wrong. ${error.message}`}</p>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
