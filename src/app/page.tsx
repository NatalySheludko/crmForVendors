import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component-copy';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
