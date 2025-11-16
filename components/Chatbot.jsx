'use client';

import { useEffect, useRef } from 'react';

export default function Chatbot() {
  const initialized = useRef(false);
  const observerRef = useRef(null);
  const retryCount = useRef(0);
  const maxRetries = 3;

  const loadVoiceflow = () => {
    if (initialized.current || typeof window === 'undefined') return;

    // Jika script voiceflow sudah ada di DOM
    if (document.querySelector('script[src*="voiceflow"]')) {
      setTimeout(() => loadVoiceflow(), 1000);
      return;
    }

    initialized.current = true;

    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.voiceflow?.chat) {
        initializeChat();
      } else {
        console.warn('Voiceflow library not loaded properly');
      }
    };

    script.onerror = () => {
      console.error('Failed to load Voiceflow script');
      if (retryCount.current < maxRetries) {
        retryCount.current++;
        console.log(`Retrying Voiceflow script load (${retryCount.current}/${maxRetries})...`);
        setTimeout(loadVoiceflow, 2000 * retryCount.current);
      }
    };

    document.head.appendChild(script);
  };

  const initializeChat = () => {
    try {
      if (!window.voiceflow?.chat) {
        console.error('Voiceflow chat not available');
        return;
      }

      window.voiceflow.chat.load({
        verify: { projectID: '690b5475e12e35f54606e179' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });

      setupStyleObserver();
      applyGlobalStyles();
    } catch (error) {
      console.error('Error initializing Voiceflow chat:', error);
    }
  };

  const setupStyleObserver = () => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new MutationObserver(() => {
      const vfContainer = document.querySelector('.vf-chat');
      const vfIframe = document.querySelector('iframe[src*="voiceflow"]');

      if (vfContainer || vfIframe) {
        fixChatStyles(vfContainer, vfIframe);
        observerRef.current?.disconnect();
      }
    });

    observerRef.current.observe(document.body, { childList: true, subtree: true });
  };

  const fixChatStyles = (vfContainer, vfIframe) => {
    const styles = {
      position: 'fixed',
      bottom: '90px',
      right: '20px',
      zIndex: '99999',
      transform: 'none',
      pointerEvents: 'auto',
      transition: 'none',
      maxWidth: '100vw',
    };

    if (vfContainer) Object.assign(vfContainer.style, styles);
    if (vfIframe) Object.assign(vfIframe.style, styles);
  };

  const applyGlobalStyles = () => {
    if (!document.getElementById('vf-fixed-style')) {
      const style = document.createElement('style');
      style.id = 'vf-fixed-style';
      style.textContent = `
        .vf-chat, iframe[src*="voiceflow"] {
          position: fixed !important;
          transform: none !important;
          z-index: 99999 !important;
          bottom: 90px !important;
          right: 20px !important;
          transition: all 0.3s ease-in-out !important;
          max-width: 100vw !important;
        }

        @media (max-width: 768px) {
          .vf-chat, iframe[src*="voiceflow"] {
            bottom: 20px !important;
            right: 10px !important;
            width: auto !important;
            height: auto !important;
            max-height: 80vh !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  useEffect(() => {
    loadVoiceflow();

    return () => {
      observerRef.current?.disconnect();
      initialized.current = false;
    };
  }, []);

  return null;
}
