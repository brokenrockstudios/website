import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from '@docusaurus/Link';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="brokenrock-cookie-consent"
        style={{ background: '#1a1a2e', borderTop: '1px solid #333' }}
        buttonStyle={{
          background: '#e74c3c',
          color: '#fff',
          borderRadius: '4px',
          fontSize: '14px',
          padding: '8px 20px',
        }}
        declineButtonStyle={{
          background: 'transparent',
          color: '#aaa',
          border: '1px solid #555',
          borderRadius: '4px',
          fontSize: '14px',
          padding: '8px 20px',
        }}
        expires={365}
      >
        We use cookies to analyze site traffic via Google Analytics. See our{' '}
        <Link to="/privacy" style={{ color: '#e74c3c' }}>Privacy Policy</Link>{' '}
        for details.
      </CookieConsent>
    </>
  );
}
