'use client';

import { useEffect, useRef } from 'react';

export default function Chatbot() {
  const scriptLoaded = useRef(false);
  const scriptInitialized = useRef(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === 'undefined' || scriptLoaded.current) return;

    const initializeChatbot = () => {
      if (scriptInitialized.current || !window.voiceflow?.chat) return;
      
      try {
        // Store the cleanup function
        cleanupRef.current = window.voiceflow.chat.load({
          verify: { projectID: '68896646edcd90bd6c1903c4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
        scriptInitialized.current = true;
      } catch (error) {
        console.error('Error initializing Voiceflow chat:', error);
      }
    };

    const loadScript = () => {
      if (scriptLoaded.current) return;
      
      // Check if script is already loaded
      if (window.voiceflow?.chat) {
        initializeChatbot();
        return;
      }

      // If not, create and load the script
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
      script.type = 'text/javascript';
      script.async = true;
      script.id = 'voiceflow-chatbot-script';
      
      script.onload = () => {
        if (!scriptInitialized.current) {
          initializeChatbot();
        }
      };
      
      script.onerror = (error) => {
        console.error('Error loading Voiceflow script:', error);
      };
      
      document.body.appendChild(script);
      scriptLoaded.current = true;
    };

    const timer = setTimeout(loadScript, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      
      // Cleanup any existing script if the component unmounts
      const existingScript = document.getElementById('voiceflow-chatbot-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      // Run the cleanup function if it exists
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      
      scriptLoaded.current = false;
      scriptInitialized.current = false;
    };
  }, []);

  return null; // This component doesn't render anything visible
}
