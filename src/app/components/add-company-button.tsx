'use client';

import React from 'react';
//import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  //const [show, setShow] = useState(false);

  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    // <>
    //   <Button onClick={() => setShow(true)}>Add company</Button>
    //   <CompanyFormModal
    //     onSubmit={console.log}
    //     show={show}
    //     onClose={() => setShow(false)}
    //   />
    // </>
  );
}
