import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [11.2558, 43.7696], // Florence coordinates
      zoom: 14,
    });

    // Add marker for the studio location
    new mapboxgl.Marker({
      color: '#C8860D'
    })
    .setLngLat([11.2558, 43.7696])
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project 
            and explore the possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-3xl p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Studio Address</h4>
                    <p className="text-muted-foreground">
                      Via dei Servi, 15<br />
                      50122 Firenze, Italia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:info@portogallo.design" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@portogallo.design
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <a 
                      href="tel:+393451234567" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +39 345 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Lunedì - Venerdì: 9:00 - 18:00<br />
                      Sabato: Su appuntamento
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="mailto:info@portogallo.design"
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:shadow-float transition-all duration-300 tracking-wide text-center"
                >
                  Start a Conversation
                </a>
                <a
                  href="tel:+393451234567"
                  className="flex-1 px-6 py-3 border border-border text-foreground rounded-2xl hover:bg-secondary transition-all duration-300 tracking-wide text-center"
                >
                  Call Direct
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-secondary/30 rounded-3xl p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">Find Our Studio</h3>
              
              {!mapboxToken && (
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Per visualizzare la mappa, inserisci il tuo token Mapbox pubblico.
                    Puoi ottenerlo gratuitamente su <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                  </p>
                  
                  {!showTokenInput ? (
                    <button
                      onClick={() => setShowTokenInput(true)}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:shadow-float transition-all duration-300 tracking-wide"
                    >
                      Add Mapbox Token
                    </button>
                  ) : (
                    <form onSubmit={handleTokenSubmit} className="space-y-4">
                      <input
                        type="text"
                        value={mapboxToken}
                        onChange={(e) => setMapboxToken(e.target.value)}
                        placeholder="Inserisci il tuo Mapbox public token"
                        className="w-full px-4 py-3 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:shadow-float transition-all duration-300"
                        >
                          Load Map
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowTokenInput(false)}
                          className="px-6 py-2 border border-border text-foreground rounded-xl hover:bg-secondary transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
              
              {mapboxToken && (
                <div className="relative">
                  <div ref={mapContainer} className="w-full h-64 rounded-2xl overflow-hidden" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-2xl" />
                </div>
              )}
            </div>

            {/* Fallback Map Info */}
            <div className="bg-secondary/30 rounded-3xl p-8">
              <h4 className="text-lg font-light text-foreground mb-4">Come Raggiungerci</h4>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>🚗 <strong>In auto:</strong> Parcheggio disponibile in Piazza Sant'Annunziata</p>
                <p>🚌 <strong>Mezzi pubblici:</strong> Autobus linee 6, 31, 32 - Fermata "Annunziata"</p>
                <p>🚶 <strong>A piedi:</strong> 10 minuti da Piazza del Duomo</p>
                <p>🚂 <strong>Dalla stazione:</strong> 15 minuti in autobus o 20 minuti a piedi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;