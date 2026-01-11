import { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Clock, Trophy, ChevronRight } from 'lucide-react';

const TICKET_SOURCES = [
  { 
    name: 'SeatGeek', 
    note: 'Best seat maps',
    url: 'https://seatgeek.com/cfp-national-championship-tickets/ncaa-football/2026-01-19-7-30-pm/17357524'
  },
  { 
    name: 'StubHub', 
    note: 'Largest inventory',
    url: 'https://www.stubhub.com/college-football-playoff-national-championship-miami-gardens-tickets-1-19-2026/event/154425172/'
  },
  { 
    name: 'Vivid Seats', 
    note: 'Reward credits',
    url: 'https://www.vividseats.com/college-football-championship-tickets-hard-rock-stadium-1-20-2026--sports-ncaa-football/production/5518626'
  },
  { 
    name: 'Ticketmaster', 
    note: 'Official partner',
    url: 'https://www.ticketmaster.com/cfp-national-championship-game-miami-gardens-florida-01-19-2026/event/0D006175D1A4576E'
  },
  { 
    name: 'Gametime', 
    note: 'Lowest fees',
    url: 'https://gametime.co/college-football-playoff-national-championship-tickets/events/cfpchampionship-jan-19-2026-id-5u2xkqkcd6ue6'
  },
];

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(180, 140, 80, 0.15) 0%, transparent 60%),
                           radial-gradient(ellipse at 80% 100%, rgba(180, 140, 80, 0.08) 0%, transparent 40%)`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 py-12 md:py-20">
        
        {/* Trophy Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-amber-500/20 rounded-full scale-150" />
            <Trophy className="w-12 h-12 text-amber-400/80 relative" strokeWidth={1} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <p 
            className="text-amber-500/80 text-xs tracking-[0.4em] uppercase mb-4"
          >
            College Football Playoff
          </p>
          
          <h1 
            className="text-4xl md:text-5xl font-light tracking-tight mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            National Championship
          </h1>
          
          <div 
            className="flex items-center justify-center gap-4 my-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span className="text-xl md:text-2xl font-light tracking-wide">Indiana</span>
            <span className="text-amber-500/60 text-sm font-sans">vs</span>
            <span className="text-xl md:text-2xl font-light tracking-wide">Miami</span>
          </div>

          <div 
            className="inline-flex items-center gap-6 text-neutral-500 text-sm mt-4"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
              Jan 19
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              7:30 PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              Miami
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <span className="text-neutral-600 text-xs tracking-[0.3em] uppercase">Tickets</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        {/* Links */}
        <div className="space-y-3">
          {TICKET_SOURCES.map((source, index) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block relative"
              style={{
                animation: `fadeSlideIn 0.5s ease-out ${index * 0.08}s both`,
              }}
            >
              <div 
                className={`
                  relative flex items-center justify-between p-5
                  border border-neutral-900 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index 
                    ? 'bg-neutral-900/80 border-neutral-700' 
                    : 'bg-neutral-950/50 hover:bg-neutral-900/50'
                  }
                `}
              >
                {/* Hover glow */}
                <div 
                  className={`
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  `}
                  style={{
                    background: 'radial-gradient(ellipse at 0% 50%, rgba(180, 140, 80, 0.03) 0%, transparent 70%)',
                  }}
                />
                
                <div className="relative flex items-center gap-4">
                  <span 
                    className="text-lg font-light tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {source.name}
                  </span>
                  <span className="text-neutral-600 text-xs tracking-wide">
                    {source.note}
                  </span>
                </div>
                
                <ChevronRight 
                  className={`
                    w-4 h-4 text-neutral-600 
                    transition-all duration-300
                    ${hoveredIndex === index ? 'translate-x-1 text-amber-500/60' : ''}
                  `}
                  strokeWidth={1.5}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-12 pt-8 border-t border-neutral-900">
          <p className="text-neutral-600 text-xs tracking-wide leading-relaxed text-center">
            Prices fluctuate significantly between platforms. 
            <span className="text-neutral-500"> Gametime</span> typically has the lowest fees.
            <span className="text-neutral-500"> Prices often drop 24-48 hours before kickoff.</span>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p 
            className="text-neutral-800 text-xs tracking-[0.2em]"
          >
            HARD ROCK STADIUM · MIAMI GARDENS
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
