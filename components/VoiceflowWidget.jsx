"use client";

import { useEffect } from 'react';

// Track if the widget has been initialized
let voiceflowInitialized = false;

const VoiceflowWidget = () => {
  useEffect(() => {
    // Skip if already initialized
    if (voiceflowInitialized) return;

    // Check if the script is already in the DOM
    if (document.querySelector('script[src*="voiceflow"]')) {
      voiceflowInitialized = true;
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      // Only initialize if not already done
      if (window.voiceflow && !voiceflowInitialized) {
        window.voiceflow.chat.load({
          verify: { projectID: '68896646edcd90bd6c1903c4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: 'https://runtime-api.voiceflow.com',
          },
        });
        voiceflowInitialized = true;
      }
    };

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Voiceflow widget');
    };

    // Add to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      // We don't remove the script from the DOM to prevent re-initialization issues
      // The Voiceflow widget manages its own cleanup
    };
  }, []);

  return null;
};

export default VoiceflowWidget;
