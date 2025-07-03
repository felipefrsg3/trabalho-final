
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Menu } from 'lucide-react';

interface CalendarViewProps {
  onBack: () => void;
}

const CalendarView = ({ onBack }: CalendarViewProps) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = [
    null, null, null, null, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30
  ];

  return (
    <div className="min-h-screen bg-hospital-gray-light">
      <header className="bg-hospital-blue-dark text-white p-4 shadow-lg">
        <div className="flex items-center space-x-4">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-hospital-blue-light"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Menu className="h-6 w-6" />
          <h1 className="text-xl font-bold">Agendar Consulta</h1>
        </div>
      </header>

      <div className="p-6">
        <Card className="max-w-md mx-auto bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-hospital-blue-dark text-xl">
                Abril 2025
              </CardTitle>
              <ChevronRight className="h-5 w-5 text-hospital-blue-dark" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="text-center font-semibold text-hospital-blue-dark p-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    h-10 flex items-center justify-center text-sm rounded
                    ${day 
                      ? 'text-hospital-blue-dark hover:bg-hospital-blue-lighter hover:bg-opacity-30 cursor-pointer transition-colors'
                      : ''
                    }
                  `}
                >
                  {day}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarView;
