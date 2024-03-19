import React from 'react';
import { Container, Theme } from '@radix-ui/themes';
import Navbar from './Navbar';


export default function RootLayout({ children }) {
  return (
    

          <Theme accentColor="violet" appearance="light">
            <Navbar />
            <main className="px-5">
              <Container>{children}</Container>
            </main>
          </Theme>

      
  );
}