import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const TICKET_SOURCES = [
  { 
    name: 'SeatGeek', 
    note: 'Best seat maps',
    url: 'https://seatgeek.com/cfp-national-championship-tickets/ncaa-football/2026-01-19-7-30-pm/17357524'
  },
  { 
    name: 'StubHub', 
    note: 'Largest inventory',
    url: 'https://www.stubhub.com/college-football-playoff-national-championship-miami-tickets-1-19-2026/event/156990774/'
  },
  { 
    name: 'Vivid Seats', 
    note: 'Reward credits',
    url: 'https://www.vividseats.com/college-football-championship-tickets-hard-rock-stadium-1-20-2026--sports-ncaa-football/production/5518626'
  },
  { 
    name: 'Ticketmaster', 
    note: 'Official partner',
    url: 'https://www.ticketmaster.com/collegefootballplayoff'
  },
  { 
    name: 'Gametime', 
    note: 'Lowest fees',
    url: 'https://gametime.co/college-football-bowl/2026-college-football-playoff-national-championship-indiana-vs-miami-tickets/1-19-2026-miami-gardens-fl-hard-rock-stadium/events/67925254e75abf845a96b632'
  },
];

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      
      {/* Hero with crew photo */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="/crew.jpg" 
          alt="The Crew - Peach Bowl 2026" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-stone-50" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </div>

      <div className="max-w-lg mx-auto px-6 -mt-8 relative z-10">
        
        {/* Never Daunted Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-stone-50 rounded-2xl p-4 shadow-sm">
            <img 
              src="/never-daunted.png" 
              alt="Never Daunted" 
              className="w-48 md:w-56"
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-red-700 mb-2 font-medium">
            Ticket Tracker
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-800 mb-3">
            National Championship
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-lg text-stone-600 mb-5">
            <span className="font-medium">Indiana</span>
            <span className="text-stone-400">vs</span>
            <span className="font-medium">Miami</span>
          </div>

          <div className="inline-flex items-center gap-5 text-stone-500 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              Jan 19
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              7:30 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              Miami
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 mb-6" />

        {/* Links */}
        <div className="space-y-1">
          {TICKET_SOURCES.map((source, index) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group block"
            >
              <div 
                className={`
                  flex items-center justify-between py-3.5 px-4 rounded-xl
                  transition-all duration-200 ease-out
                  ${hoveredIndex === index 
                    ? 'bg-stone-100' 
                    : 'hover:bg-stone-100/60'
                  }
                `}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-base font-medium text-stone-800">
                    {source.name}
                  </span>
                  <span className="text-xs text-stone-400">
                    {source.note}
                  </span>
                </div>
                
                <ArrowUpRight 
                  className={`
                    w-4 h-4 text-stone-400
                    transition-all duration-200
                    ${hoveredIndex === index ? 'translate-x-0.5 -translate-y-0.5 text-red-700' : ''}
                  `}
                  strokeWidth={2}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <p className="text-stone-400 text-xs leading-relaxed text-center">
            Gametime typically has the lowest fees. Prices often drop 24-48 hours before kickoff.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 mb-8 text-center">
          <p className="text-stone-300 text-xs tracking-wide uppercase">
            Hard Rock Stadium · Miami Gardens
          </p>
        </div>
      </div>
    </div>
  );
}
