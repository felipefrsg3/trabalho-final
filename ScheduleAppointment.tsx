
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Menu } from 'lucide-react';

interface ScheduleAppointmentProps {
  onBack: () => void;
}

const ScheduleAppointment = ({ onBack }: ScheduleAppointmentProps) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const dates = [
    { day: 7, available: true },
    { day: 1, available: false },
    { day: 2, available: true },
    { day: 3, available: true },
    { day: 4, available: true },
    { day: 5, available: true },
    { day: 6, available: false },
    { day: 7, available: true },
    { day: 8, available: true },
    { day: 9, available: true },
    { day: 10, available: true },
    { day: 11, available: true },
    { day: 12, available: false },
    { day: 13, available: true },
    { day: 14, available: true },
    { day: 15, available: true },
    { day: 16, available: true },
    { day: 17, available: true },
    { day: 18, available: true },
    { day: 19, available: true },
    { day: 20, available: false },
    { day: 21, available: true },
    { day: 22, available: true },
    { day: 23, available: true },
    { day: 24, available: true },
    { day: 25, available: true },
    { day: 26, available: true }
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
        <Card className="max-w-2xl mx-auto bg-white">
          <CardHeader>
            <CardTitle className="text-hospital-blue-dark text-center text-2xl">
              Agendar Consulta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-7 gap-2 mb-6">
              {dates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => date.available && setSelectedDate(date.day)}
                  disabled={!date.available}
                  className={`
                    h-12 w-12 rounded-lg border-2 font-semibold text-lg transition-all
                    ${date.available 
                      ? selectedDate === date.day
                        ? 'bg-hospital-blue-light text-white border-hospital-blue-light'
                        : 'bg-white text-hospital-blue-dark border-gray-200 hover:border-hospital-blue-light hover:bg-hospital-blue-lighter hover:bg-opacity-20'
                      : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    }
                  `}
                >
                  {date.day}
                </button>
              ))}
            </div>

            <Button 
              className="w-full bg-hospital-green hover:bg-hospital-green-light text-white font-semibold py-3 text-lg"
              disabled={!selectedDate}
            >
              Agendar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
