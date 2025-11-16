// This script is loaded separately to avoid React hydration issues
(function(d, t) {
  // Only initialize once
  if (window.voiceflowWidgetInitialized) return;
  window.voiceflowWidgetInitialized = true;
  
  // Store original console.error
  const originalError = console.error;
  
  // Override console.error to filter out specific warnings
  console.error = function() {
    const args = Array.from(arguments);
    const isKeyWarning = args.some(
      arg => typeof arg === 'string' && 
      (arg.includes('Each child in a list should have a unique "key" prop') ||
       arg.includes('You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot()'))
    );
    
    if (!isKeyWarning) {
      originalError.apply(console, args);
    }
  };

  // Check if the script is already loaded
  if (document.querySelector('script[src*="voiceflow.com/widget"]')) {
    return;
  }

  // Create and load the Voiceflow script
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  
  // Only initialize once
  let initialized = false;
  
  v.onload = function() {
    if (window.voiceflow && !initialized) {
      initialized = true;
      try {
        window.voiceflow.chat.load({
          verify: { projectID: '68896646edcd90bd6c1903c4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: { url: "https://runtime-api.voiceflow.com" }
        });
      } catch (e) {
        // Ignore initialization errors
        console.warn('Voiceflow widget initialization error:', e);
      }
    }
  };
  
  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  v.type = "text/javascript";
  v.async = true;
  v.id = 'voiceflow-widget-script';
  
  // Add to document
  if (s && s.parentNode) {
    s.parentNode.insertBefore(v, s);
  } else {
    document.head.appendChild(v);
  }
})(document, 'script');
